import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MerchantProduct } from '../../Commons/types' ;
import styles from './styles';
import images from '../../Property';
import ANumberPicker from '../ANumberPicker';

type Props = {
//   data: MerchantProduct,
  data: [
            {
                id: 1,
                namaMerchant: 'Toko Abadi Jaya',
                statusImage: images.merchant_list.activeMerchant,
                status: 'active',
                grade: images.grade,
                tokoOnline: [
                {
                id: 1,
                link: 'https://www.bukalapak.com/',
                images: images.onlineShop.bukalapak,
                },{
                id: 2,
                link: 'https://www.tokopedoa.com/',
                images: images.onlineShop.tokopedia,
                },{
                id: 3,
                link: 'https://www.shopee.com/',
                images: images.onlineShop.shopee,
                }
            ],
                price: 'Rp 2.223',
                income: 'profit'
            },
            {
                id: 2,
                namaMerchant: 'Toko Sinar Jaya',
                statusImage: images.merchant_list.profitMerchant,
                status: 'profit',
                grade: images.grade,
                tokoOnline: [
                {
                id: 1,
                link: 'https://www.bukalapak.com/',
                images: images.onlineShop.bukalapak,
                },{
                id: 2,
                link: 'https://www.tokopedoa.com/',
                images: images.onlineShop.tokopedia,
                }
            ],
            price: 'Rp 1.234',
            income: 'loss'
            },
            {
            id: 3,
            namaMerchant: 'Mangbros',
            statusImage: images.merchant_list.listMerchant,
            status: 'loss',
            grade: images.grade,
            tokoOnline: [
                {
                id: 1,
                link: 'https://www.bukalapak.com/',
                images: images.onlineShop.bukalapak,
                }
            ],
            price: 'Rp 1.123',
            income: 'profit'
            },
        ]
  
  dataIndex: Number,
  onQuantityChanged: Function,
  addCartProduct: Object,
}

type State =  {
  bookQuantity: number,
  bookQuantityStr: string,
  inputTimerId: number,
}

const INPUT_MAX_LENGTH = 4;
export const INPUT_INTERVAL_TIME = 200;

export class ProductListItem extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    const { price } = this.props.data;
    this.state = {
      bookQuantity: saleDetail.quantity,
      bookQuantityStr: String(saleDetail.quantity),
      inputTimerId: 0,
    }; 
  }
  componentWillReceiveProps(nextProps: Props) {
    if (this.props.data !== nextProps.data) {
      const { MerchantProduct } = nextProps.data;
      
      if(MerchantProduct.portfoluo){
        this.setState({
            bookQuantity: MerchantProduct.volume,
            bookQuantityStr: String(MerchantProduct.volume),
        });
      }
    }
  }
  componentDidUpdate() {
    const { data } = this.props;
    if (addCartProduct && data.MerchantProduct.merchantName === addCartProduct.id) {
      if (addCartProduct.type && addCartProduct.type ) { //=== SEARCH_BY.scan
        this.doPlusQuantity();
      } else if (addCartProduct.quantity ) {
        this.updateBookQuantityForCart(addCartProduct.quantity);
      }
    }
  }

  onChangeQuantityText(value: string) {
    const fixedVal = Number(value);
    let bookQuantity = Number.isNaN(fixedVal) ? 0 : fixedVal;
    if (bookQuantity < 0) {
      bookQuantity = 0;
    }

    this.updateBookQuantity(bookQuantity);
  }

  updateBookQuantity(bookQuantity: number) {
    const bookQuantityStr = String(bookQuantity);
    let remove = false;
    if (bookQuantity === 0) {
      remove = true;
    }
    this.props.onQuantityChanged(bookQuantity, remove);
  }

  updateBookQuantityForCart(bookQuantity: number) {
    const bookQuantityStr = String(bookQuantity);
    this.props.onQuantityChanged(bookQuantity);
  }

  doPlusQuantity() {
    const { data } = this.props;
    const bookQuantity = this.state.bookQuantity + 1;
    this.updateBookQuantity(bookQuantity);
  }

  doMinusQuantity() {
    const bookQuantity = this.state.bookQuantity - 1;
    if (bookQuantity > 0) {
      this.updateBookQuantity(bookQuantity);
    } else if (bookQuantity === 0) {
      this.props.onQuantityChanged(bookQuantity, true);
    }
  }

  doChangeTextInput(value: string) {
    if (this.state.inputTimerId) {
      clearInterval(this.state.inputTimerId);
    }

    const invalidCharPos = String(value).search(/[^0-9]/g);
    const validVal = invalidCharPos >= 0 ?
      value.substr(0, invalidCharPos) : value;
    const inputTimerId = setInterval(() => {
      clearInterval(this.state.inputTimerId);
      this.setState({ inputTimerId: 0 });
      this.onChangeQuantityText(validVal);
    }, INPUT_INTERVAL_TIME);
    this.setState({ inputTimerId, bookQuantityStr: validVal });
  }

  _handleOnBlur(value) {
    if (Number(value) === 0) {
      this.props.onQuantityChanged(Number(value), true);
    }
  }

  render() {
    const { data, dataIndex } = this.props;
    const originalPrice = data.MerchantProduct.price;
    const picked = Number(this.state.bookQuantityStr) > 0;
    const defaultImg = images.emptyImagePlaceholder;
    const isHaveStock = !data.isNoStock;

    return (
      <View 
        style={[styles.container, picked ? styles.pickBackgroundColor : null]}
      >
        <TouchableWithoutFeedback
          onPress={() => this.doPlusQuantity()}
        >
          <View style={styles.imageContainer}>
            <Image
              source={data.item.statusImage}
            st yle={styles.thumbnailImage}
          />
          </View>
          <View style={styles.gradeContainer}>
            <Image
                source={data.item.grade}
                style={styles.gradeImage}
            />
            <Text style={styles.lightText}>  {data.item.namaMerchant.charAt(0).toUpperCase() + data.item.namaMerchant.slice(1)}  </Text>
            <View style={styles.flatImageContainer}>
                <FlatList
                horizontal={true}
                data={data.item.tokoOnline}
                renderItem={data => this.renderImage(data)}
                keyExtractor={data => data.id}
                extraData={this.state}
                />
            </View>
          </View> 
        </TouchableWithoutFeedback>
        
        <View style={styles.rightContainer}>
          <Text style={styles.lightText}>  {data.item.price.charAt(0).toUpperCase() + data.item.price.slice(1)}  </Text>
          <ANumberPicker
            value= {parseInt(this.state.qtyProforma, 10)}
            maxLength={INPUT_MAX_LENGTH}
            onChangeText={(value) => this.doChangeTextInput(value)}
            onBlur={(value) => this._handleOnBlur(value)}
            onLeftPress={() => this.doMinusQuantity()}
            onRightPress={() => this.doPlusQuantity()}
          />
        </View>
      </View>
    );
  }
}

export default ProductListItem;