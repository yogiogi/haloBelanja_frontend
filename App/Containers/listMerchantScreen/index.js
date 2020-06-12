import React from "react";
import PropTypes from 'prop-types';

import {View,ActivityIndicator,FlatList,Text,TouchableOpacity,Image} from "react-native";
import { Icon } from "react-native-elements";
import styles from './styles';
import images from '../../Property/Images';
import ANumberPicker from '../../Components/ANumberPicker';

type Props = {
  onQuantityChanged: Function,
}

type State = {
  currentStock: string,
  qtyProforma: number,
  qtyProformaStr: string,
  inputTimerId: number,
  totalProforma: number
}

const INPUT_MAX_LENGTH = 4;
export const INPUT_INTERVAL_TIME = 200;

export class listMerchantScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
      this.state = {
        loading: false,
        qtyProforma: 0,
        qtyProformaStr: 0,
        TotalProforma: 0,
        categorySource: [
          {
            id: 1,
            category: 'aktif'
          },
          {
            id: 2,
            category: 'profit'
          },
          {
            id: 3,
            category: 'listing'
          },
        ],
        dataSource: [
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
            income: 'profit',
            category: 'aktif'
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
            income: 'loss',
            category: 'profit'
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
            income: 'profit',
            category: 'listing'
          },
        ],
      };
    }
  
  // componentDidMount() {this.fetchData();}
  
  // fetchData = () => {
  //   this.setState({loading: true});
  //   fetch("https://jsonplaceholder.typicode.com/photos")
  //       .then(response => response.json())
  //       .then(responseJson => {
  //       responseJson = responseJson.map(item => {
  //           item.isSelect = false;
  //           item.selectedClass = styles.list;
            
  //           return item;
  //       });
  //       console.log('response', responseJson);
  //       this.setState({
  //           loading: false,
  //           dataSource: responseJson,
  //       });
  //       }).catch(error => {this.setState({loading: false});
  //   });
  // };

  componentWillReceiveProps(){

  }

  FlatListItemSeparator = () => <View style={styles.line} />;

  _setCategory(){
    return(
      <View >
        <FlatList
            horizontal={true}
            data={this.state.categorySource}
            renderItem={data => this.renderCategory(data)}
            keyExtractor={data => data.id}
            extraData={this.state}
          />
      </View>
    );
  };

  renderCategory = data => 
    <TouchableOpacity
      style={styles.LoginButtonStyle}
      activeOpacity={0.5}
      // onPress={  }
    >
      <Text style={styles.TextStyle}> {data.category} </Text>
    </TouchableOpacity>

  selectItem = data => {
    data.item.isSelect = !data.item.isSelect;
    data.item.selectedClass = data.item.isSelect ? styles.selected : styles.list;

    const index = this.state.dataSource.findIndex(
        item => data.item.id === item.id
    );

    this.state.dataSource[index] = data.item;

    this.setState({
        dataSource: this.state.dataSource,
    });
  };

goToStore = () =>this.props.navigation.navigate("Expenses", {selected: this.state.selected,});

renderImage = data => 
  <View style={styles.FlatListContainer}>
    <Image
      source={data.item.images}
      style={styles.thumbnailImageOlshop}
    />
  </View>

onChangeQuantityTextOfCart(value: string) {
  const fixedVal = Number(value);
  let bookQuantity = Number.isNaN(fixedVal) ? 0 : fixedVal;
  if (bookQuantity < 0) {
    bookQuantity = 0;
  }

  this.updateQuantityProforma(bookQuantity);
}

updateQuantityProforma(qtyProforma: number){
  const qtyProformaStr = String(qtyProforma);
  this.setState({ qtyProforma, qtyProformaStr });
}

doPlusQuantityOfCart() {
  const qtyProforma = this.state.qtyProforma + 1;
  this.updateQuantityProforma(qtyProforma);
}

doMinusQuantityOfCart() {
  const qtyProforma = this.state.qtyProforma - 1;
  this.updateQuantityProforma(qtyProforma);
}

doChangeTextInputOfCart(value: string) {
  if (this.state.inputTimerId) {
    clearInterval(this.state.inputTimerId);
  }
  const invalidCharPos = String(value).search(/[^0-9]/g);
  const validVal = invalidCharPos >= 0 ?
    value.substr(0, invalidCharPos) : value;
  const inputTimerId = setInterval(() => {
    clearInterval(this.state.inputTimerId);
    this.setState({ inputTimerId: 0 });
    this.onChangeQuantityTextOfCart(validVal);
  }, INPUT_INTERVAL_TIME);
  this.setState({ inputTimerId: inputTimerId, qtyProformaStr: validVal });
}

_onSwipeForCoachMark = () => {
  this.props.coachMarkProps.handleNextTips();
  this.setState({
    sheetOpen: true,
  });
  setTimeout(() => {
    this.setState({
      sheetFinished: true,
    });
  }, SWIPE_TIME_OUT);
};

renderItem = data =>
  <TouchableOpacity
    elevation={5}
    style={[styles.list, data.item.selectedClass]}      
    onPress={() => this.selectItem(data)}
  >
    <View style={styles.containerStyle} >
      <View style={styles.imageContainer}>
        <Image
          source={data.item.statusImage}
          style={styles.thumbnailImage}
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
      <View style={styles.rightContainer}>
        <Text style={styles.lightText}>  {data.item.price.charAt(0).toUpperCase() + data.item.price.slice(1)}  </Text>
          <ANumberPicker
            value= {parseInt(this.state.qtyProforma, 10)}
            maxLength={INPUT_MAX_LENGTH}
            onChangeText={(value) => this.doChangeTextInputOfCart(value)}
            onBlur={(value) => this._handleOnBlur(value)}
            onLeftPress={() => this.doMinusQuantityOfCart()}
            onRightPress={() => this.doPlusQuantityOfCart()}
          />
      </View>
    </View>
</TouchableOpacity>

_buttonProforma() {
  return(
    <View style={styles.container}>
    </View>
  );
}

render() {
  const itemNumber = this.state.dataSource.filter(item => item.isSelect).length;
  if (this.state.loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="purple" />
      </View>
    );
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Available</Text>
      { this._setCategory() }
      <FlatList
          data={this.state.dataSource}
          renderItem={item => this.renderItem(item)}
          keyExtractor={item => item.id.toString()}
          extraData={this.state}
      />

      <View style={styles.numberBox}>
          <Text style={styles.number}>{itemNumber}</Text>
      </View>
      
      <TouchableOpacity style={styles.icon}>
        <View>
          <Icon
            raised
              name="shopping-cart"
              type="font-awesome"
              color="#e3e3e3" 
              size={30} 
              onPress={() => this.goToStore()}
              containerStyle={{ backgroundColor: "#FA7B5F" }}
          />
          </View>
      </TouchableOpacity>
    </View>
  );}
}

listMerchantScreen.propTypes = {
  dataIndex: PropTypes.number.isRequired,
};

export default listMerchantScreen;