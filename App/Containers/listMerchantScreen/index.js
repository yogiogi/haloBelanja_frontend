import React from "react";
import PropTypes from "prop-types";

import {
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { Icon } from "react-native-elements";
import styles from "./styles";
import images from "../../Property/Images";
import ANumberPicker from "../../Components/ANumberPicker";
import BottomSheet from "../../Components/BottomSheet";
import headerStyles from "./HeaderScreenStyle";

type Props = {
  onQuantityChanged: Function,
};

type State = {
  currentStock: string,
  qtyProforma: number,
  qtyProformaStr: string,
  inputTimerId: number,
  totalProforma: number,
  shoppingCartMap: Map<number, ShoppingCart>,
  sheetOpen: boolean,
};

const INPUT_MAX_LENGTH = 4;
const INPUT_INTERVAL_TIME = 200;
const INITIAL_DISPLAY_HEIGHT = 78;
const INITIAL_FULL_DISPLAY_HEIGHT = 272;
const DEFAULT_CART_LIST_HEIGHT =
  INITIAL_FULL_DISPLAY_HEIGHT - INITIAL_DISPLAY_HEIGHT;
const CART_LIST_HEIGHT_KEYBOARD_APPEARS = 175;

export class listMerchantScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: false,
      qtyProforma: 0,
      qtyProformaStr: 0,
      TotalProforma: 0,
      listHeight: DEFAULT_CART_LIST_HEIGHT,
      shoppingCartMap: new Map(),
      sheetOpen: false,
      categorySource: [
        {
          id: 1,
          category: "aktif",
        },
        {
          id: 2,
          category: "profit",
        },
        {
          id: 3,
          category: "listing",
        },
      ],
      dataSource: [
        {
          id: 1,
          namaMerchant: "Toko Abadi Jaya",
          statusImage: images.merchant_list.activeMerchant,
          status: "active",
          grade: images.grade,
          tokoOnline: [
            {
              id: 1,
              link: "https://www.bukalapak.com/",
              images: images.onlineShop.bukalapak,
            },
            {
              id: 2,
              link: "https://www.tokopedoa.com/",
              images: images.onlineShop.tokopedia,
            },
            {
              id: 3,
              link: "https://www.shopee.com/",
              images: images.onlineShop.shopee,
            },
          ],
          price: "Rp 2.223",
          income: "profit",
          category: "aktif",
        },
        {
          id: 2,
          namaMerchant: "Toko Sinar Jaya",
          statusImage: images.merchant_list.profitMerchant,
          status: "profit",
          grade: images.grade,
          tokoOnline: [
            {
              id: 1,
              link: "https://www.bukalapak.com/",
              images: images.onlineShop.bukalapak,
            },
            {
              id: 2,
              link: "https://www.tokopedoa.com/",
              images: images.onlineShop.tokopedia,
            },
          ],
          price: "Rp 1.234",
          income: "loss",
          category: "profit",
        },
        {
          id: 3,
          namaMerchant: "Mangbros",
          statusImage: images.merchant_list.listMerchant,
          status: "loss",
          grade: images.grade,
          tokoOnline: [
            {
              id: 1,
              link: "https://www.bukalapak.com/",
              images: images.onlineShop.bukalapak,
            },
          ],
          price: "Rp 1.123",
          income: "profit",
          category: "listing",
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

  componentWillReceiveProps() {}

  FlatListItemSeparator = () => <View style={styles.line} />;

  handleListStyle = (keyboardShow) => {
    let listItemHeight;
    // if (AppConstant.isIOS) {
    //   listItemHeight = DEFAULT_CART_LIST_HEIGHT;
    // } else {
    listItemHeight = keyboardShow
      ? CART_LIST_HEIGHT_KEYBOARD_APPEARS
      : DEFAULT_CART_LIST_HEIGHT;
    // }

    this.setState({
      listHeight: listItemHeight,
    });
  };

  _setCategory() {
    return (
      <View>
        <FlatList
          horizontal={true}
          data={this.state.categorySource}
          renderItem={(data) => this.renderCategory(data)}
          keyExtractor={(data) => data.id}
          extraData={this.state}
        />
      </View>
    );
  }

  renderCategory = (data) => (
    <TouchableOpacity
      style={styles.LoginButtonStyle}
      activeOpacity={0.5}
      // onPress={  }
    >
      <Text style={styles.TextStyle}> {data.category} </Text>
    </TouchableOpacity>
  );

  selectItem = (data) => {
    data.item.isSelect = !data.item.isSelect;
    data.item.selectedClass = data.item.isSelect
      ? styles.selected
      : styles.list;

    const index = this.state.dataSource.findIndex(
      (item) => data.item.id === item.id
    );

    this.state.dataSource[index] = data.item;

    this.setState({
      dataSource: this.state.dataSource,
    });
  };

  goToStore = () =>
    this.props.navigation.navigate("Expenses", {
      selected: this.state.selected,
    });

  renderImage = (data) => (
    <View style={styles.FlatListContainer}>
      <Image source={data.item.images} style={styles.thumbnailImageOlshop} />
    </View>
  );

  onChangeQuantityTextOfCart(value: string) {
    const fixedVal = Number(value);
    let bookQuantity = Number.isNaN(fixedVal) ? 0 : fixedVal;
    if (bookQuantity < 0) {
      bookQuantity = 0;
    }

    this.updateQuantityProforma(bookQuantity);
  }

  updateQuantityProforma(qtyProforma: number) {
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

  doChangeTextInput(value: string) {
    if (this.state.inputTimerId) {
      clearInterval(this.state.inputTimerId);
    }

    const invalidCharPos = String(value).search(/[^0-9]/g);
    const validVal =
      invalidCharPos >= 0 ? value.substr(0, invalidCharPos) : value;
    const inputTimerId = setInterval(() => {
      clearInterval(this.state.inputTimerId);
      this.setState({ inputTimerId: 0 });
      this.onChangeQuantityText(validVal);
    }, INPUT_INTERVAL_TIME);
    this.setState({ inputTimerId, bookQuantityStr: validVal });
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

  renderItem = (data) => (
    <TouchableOpacity
      elevation={5}
      style={[styles.list, data.item.selectedClass]}
      onPress={() => this.selectItem(data)}
    >
      <View style={styles.containerStyle}>
        <View style={styles.imageContainer}>
          <Image source={data.item.statusImage} style={styles.thumbnailImage} />
        </View>
        <View style={styles.gradeContainer}>
          <Image source={data.item.grade} style={styles.gradeImage} />
          <Text style={styles.lightText}>
            {" "}
            {data.item.namaMerchant.charAt(0).toUpperCase() +
              data.item.namaMerchant.slice(1)}{" "}
          </Text>
          <View style={styles.flatImageContainer}>
            <FlatList
              horizontal={true}
              data={data.item.tokoOnline}
              renderItem={(data) => this.renderImage(data)}
              keyExtractor={(data) => data.id}
              extraData={this.state}
            />
          </View>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.lightText}>
            {" "}
            {data.item.price.charAt(0).toUpperCase() +
              data.item.price.slice(1)}{" "}
          </Text>
          <ANumberPicker
            value={parseInt(this.state.qtyProforma, 10)}
            maxLength={INPUT_MAX_LENGTH}
            onChangeText={(value) => this.doChangeTextInput(value)}
            onBlur={(value) => this._handleOnBlur(value)}
            onLeftPress={() => this.doMinusQuantityOfCart()}
            onRightPress={() => this.doPlusQuantityOfCart()}
          />
        </View>
      </View>
    </TouchableOpacity>
  );

  _buttonProforma() {
    return <View style={styles.container}></View>;
  }

  _createShoppingChart = (sale, shoppingCartMap) => {};

  onChartItemChanged(
    item: ShoppingCart,
    quantity: number,
    listType: string,
    remove: boolean
  ) {
    const { shoppingCartMap } = this.state;
    if (quantity <= 0) {
      // quantity become 0 means the user wants to remove it from cart
      if (remove) {
        shoppingCartMap.delete(item.saleDetail.storeProductInventoryId);
      }
    } else {
      const price = item.price;
      const saleDetail = Object.assign({}, item.saleDetail, {
        quantity,
        price,
      });

      shoppingCartMap.set();
    }
  }

  render() {
    const {
      categoryList,
      isLoading,
      isLoadingMore,
      isRefreshing,
      productList,
      shoppingCartMap,
      totalPrice,
      sale,
      addCartProduct,
      scanning,
      barcodeID,
      searchBy,
      sheetOpen,
      sheetFinished,
      listHeight,
    } = this.state;

    const itemNumber = this.state.dataSource.filter((item) => item.isSelect)
      .length;
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
        {this._setCategory()}
        <FlatList
          data={this.state.dataSource}
          renderItem={(item) => this.renderItem(item)}
          keyExtractor={(item) => item.id.toString()}
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
        <BottomSheet
          isOpen={sheetOpen}
          updateListStyle={this.handleListStyle}
          headerHeight={headerStyles.header.height}
          initialHeight={INITIAL_DISPLAY_HEIGHT}
          initialFullHeight={INITIAL_FULL_DISPLAY_HEIGHT}
        >
          <View style={styles.coachMarkStyle}>
            <TouchableWithoutFeedback
              onPress={() => this._createShoppingChart(sale, shoppingCartMap)}
            >
              <View style={styles.keranjangButtonContainer}>
                <View style={styles.dragCartEdge}>
                  <Text style={styles.dragCartEdgeText}>
                    {shoppingCartMap.size}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </BottomSheet>
      </View>
    );
  }
}

listMerchantScreen.propTypes = {
  dataIndex: PropTypes.number.isRequired,
};

export default listMerchantScreen;
