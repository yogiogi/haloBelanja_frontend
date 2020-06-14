import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { Spinner } from "native-base";
import * as _ from "lodash";
import Snackbar from "react-native-snackbar";
// import { connect } from "react-redux";
import Immmutable from "seamless-immutable";

// import StoreProducts from "../Redux/StoreProductsRedux";
// import ProductCategories from "../Redux/ProductCategorySelectorRedux";
// import ShoppingCartActions from "../Redux/ShoppingCartRedux";
// import PublicActions from "../Redux/PublicRedux";
// import DrawerActions from "../Redux/DrawerRedux";
// import ModalListPicker from "../ModalListPicker";
import ProductListView from "../ProductListView";
import AButton from "../AButton";
import type {
  PaginationResponse,
  StoreProduct,
  ShoppingCart,
} from "../../Commons/types";
import {
  formatToCurrency,
  addBackAndroidListener,
  removeBackAndroidListener,
  saveDataInSInfo,
  getDataFromSInfo,
} from "../../Commons/utils";
// import keySecureConstant from "../common/Constants/KeySecureConstant";
// import FeatureConstant from "../common/Constants/FeatureConstant";
// import { isAuthorizedFor } from "../common/PrivilegeUtils";
import { Colors, Images } from "../../Property";
import images from '../../Property/Images';

// import SaveProfileUtils from "../common/Utils/SaveProfileUtils";
import {
  RoleTypeEnum,
  ProductListEnum,
  ProductCategoryStatusEnum,
  ProductCategorySortedEnum,
} from "../../Commons/enums";
import ItemConstant from "./ItemConstant";
import styles from "./styles";
import headerStyles from "./headerStyles";
import BottomSheet from "../BottomSheet";

const MAX_STOCK_WITH_NO_STOCK = "9999";
const DASHBOARD_ROUTE_NAME = "DashboardStack";
const INITIAL_DISPLAY_HEIGHT = 78;
const INITIAL_FULL_DISPLAY_HEIGHT = 272;
const DEFAULT_CART_LIST_HEIGHT =
  INITIAL_FULL_DISPLAY_HEIGHT - INITIAL_DISPLAY_HEIGHT;
const CART_LIST_HEIGHT_KEYBOARD_APPEARS = 175;
const PRODUCT_LIST_TYPE = {
  list: "list",
  cart: "cart",
};
const PICKER_ICON = "md-arrow-dropdown";
const CLOSE_POPUP_TIMEROUT = 3000;
const CLOSE_SAVED_ORDER_LOAD_TIMEOUT = 2000;

type Props = {
  productList: Array<StoreProduct>,
  categoryList: Array<Object>,
  productPagination: PaginationResponse,
  fetchProductList: Function,
  fetchProductCategories: Function,
  clearGoBackFunc: Function,
  navigation: { navigate: Function },
  doRefreshFlag: boolean,
  isCanGoBack: boolean,
  toggleDoRefresh: Function,
  submitShoppingCart: Function,
  storeProductError: any,
  submitingShoppingCart: boolean,
  errorShoppingCart: any,
  successShoppingCart: boolean,
  fetching: boolean,
  responseShoppingCart: Object,
  merchantId: string,
  storeId: string,
  scanning: boolean,
  addCartProduct: Object | null,
  changeDrawer: Function,
  drawerUser: Object,
  drawerRolePrivilege: Object,
  categoryPagination: PaginationResponse,
  fetchingCategory: boolean,
};

type State = {
  productList: Array<ShoppingCart>,
  categoryList: Array<Object>,
  shoppingCartMap: Map<number, ShoppingCart>,
  role: string,
  requestedNumberOfRecords: number,
  returnedProductRecords: number,
  productStartIndex: number,
  categoryStartIndex: number,
  filterBy: string | number,
  isLoading: boolean,
  isLoadingMore: boolean,
  isRefreshing: boolean,
  totalPrice: number,
  sale: Object,
  saleDetails: Object,
  store: Object,
  merchantId: string,
  storeId: string,
  scanning: boolean,
  addCartProduct: Object | null,
  categoryReturnedNumberOfRecords: number,
  barcodeID: string,
  sheetOpen: boolean,
  sheetFinished: boolean,
};

const STATICS = {
  productCategory: {
    defaultValue: {
      productCategoryId: "DEFAULT",
      name: "category",
    },
  },
};

const DEFAULT_PRODUCT_FILTER_BY = "ACTIVE";
const DEFAULT_PRODUCT_SORTED_BY = "DEFAULT";
const DEFAULT_REQUESTED_NUMBER_OF_RECORDS = 50;

export class merchantScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const { navigation } = props;
    const savedOrders = navigation.getParam("savedOrders", new Map());
    const totalPrice = navigation.getParam("totalPrice", 0);
    const saleId = navigation.getParam("saleId", null);
    this.state = {
      savedOrders,
      productList: [
          {
            merchantId: 1,
            merchantName: 'Toko Abadi Jaya',
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
            salePrice: 'Rp 2.223',
            income: 'profit',
            category: 'aktif',
            quantity: 0,
            currentStock: 0,
          },
          {
            merchantId: 2,
            merchantName: 'Toko Sinar Jaya',
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
            salePrice: 'Rp 1.234',
            income: 'loss',
            category: 'profit',
            quantity: 0,
            currentStock: 0,
          },
          {
            merchantId: 3,
            merchantName: 'Mangbros',
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
            salePrice: 'Rp 1.123',
            income: 'profit',
            category: 'listing',
            quantity: 0,
            currentStock: 0,
          },
        ],
      categoryList: [STATICS.productCategory.defaultValue],
      shoppingCartMap: new Map(),
      requestedNumberOfRecords: 10,
      returnedProductRecords: 0,
      productStartIndex: 0,
      categoryStartIndex: 0,
      filterBy: DEFAULT_PRODUCT_FILTER_BY,
      isLoading: false,
      isLoadingMore: false,
      isRefreshing: false,
      totalPrice,
      sale: {
        saleId,
      },
      saleDetails: {},
      store: {},
      merchantId: "",
      storeId: "",
      addCartProduct: null,
      scanning: false,
      barcodeID: "",
      categoryReturnedNumberOfRecords: 0,
      sheetOpen: false,
      sheetFinished: false,
      productCategoryIds: [],
      listHeight: DEFAULT_CART_LIST_HEIGHT,
    };
    this.mapProductList = this.mapProductList.bind(this);
    this._onProductCategoryChanges = this._onProductCategoryChanges.bind(this);
    this.fetchProductList = this.fetchProductList.bind(this);
  }

  componentDidMount() {
    addBackAndroidListener(this.onBackAndroidAction);
    this.validataionSavedOrderSuccess();
    // this.continueOrder();
    this._fetchData();
  }

  // componentWillReceiveProps(nextProps: Props) {
  //   if (this.state.isLoading) {
  //     if (nextProps.storeProductError) {
  //       this.setState({
  //         isLoading: false,
  //         isRefreshing: false,
  //         isLoadingMore: false,
  //       });
  //     } else if (this.props.productList !== nextProps.productList) {
  //       const newProductData = (nextProps.productList || []).map((item) =>
  //         this.mapProductList(item)
  //       );
  //       const productList = this.state.isLoadingMore
  //         ? [...this.state.productList, ...newProductData]
  //         : newProductData;
  //       const { returnedNumberOfRecords } = nextProps.productPagination || {
  //         returnedNumberOfRecords: newProductData.length,
  //       };

  //       this.setState({
  //         returnedProductRecords: returnedNumberOfRecords || 0,
  //         productList,
  //         isLoading: false,
  //         isRefreshing: false,
  //         isLoadingMore: false,
  //       });

  //       if (this.props.doRefreshFlag) {
  //         this.props.toggleDoRefresh();
  //       }
  //     }
  //   }

  //   if (this.props.categoryList !== nextProps.categoryList) {
  //     const { returnedNumberOfRecords } = nextProps.categoryPagination;
  //     const { categoryList, categoryStartIndex } = this.state;

  //     const newCategoryList =
  //       nextProps.categoryList.preDefined && nextProps.categoryList.userDefined
  //         ? [
  //             ...nextProps.categoryList.preDefined,
  //             ...nextProps.categoryList.userDefined,
  //           ]
  //         : [];
  //     this.setState({
  //       categoryReturnedNumberOfRecords: returnedNumberOfRecords,
  //       categoryList: [...categoryList, ...newCategoryList],
  //       categoryStartIndex:
  //         categoryStartIndex + DEFAULT_REQUESTED_NUMBER_OF_RECORDS,
  //     });
  //   }

  //   if (
  //     nextProps.successShoppingCart &&
  //     nextProps.successShoppingCart !== this.props.successShoppingCart
  //   ) {
  //     const { sale, saleDetails, store } = nextProps.responseShoppingCart;

  //     this.setState({
  //       sale,
  //       saleDetails,
  //       store,
  //     });

  //     this.gotoShoppingCart(sale, saleDetails, store);
  //   }

  //   if (
  //     nextProps.errorShoppingCart &&
  //     nextProps.errorShoppingCart !== this.props.errorShoppingCart
  //   ) {
  //     this._renderError(nextProps.errorShoppingCart.message);
  //   }

  //   if (
  //     nextProps.storeProductError &&
  //     nextProps.storeProductError !== this.props.storeProductError
  //   ) {
  //     this._renderError(nextProps.storeProductError.message);
  //   }
  // }

  componentWillUnmount() {
    const { clearGoBackFunc } = this.props;
    clearGoBackFunc();
    removeBackAndroidListener(this.onBackAndroidAction);
  }

  onBackAndroidAction = async () => {
    const {
      navigation,
      changeDrawer,
      drawerUser,
      drawerRolePrivilege,
      isCanGoBack,
    } = this.props;
    // const storePrivileges = await getDataFromSInfo(
    //   keySecureConstant.storePrivileges
    // );
    // if (!isAuthorizedFor(storePrivileges, FeatureConstant.DASHBOARD)) {
    //   return false;
    // }

    const previousRole = "";
    const newUser = Immmutable.merge(drawerUser, {
      role: RoleTypeEnum.OWNER,
      previousRole,
      grantedMenus: drawerRolePrivilege[RoleTypeEnum.OWNER],
    });
    // saveDataInSInfo(keySecureConstant.activeRole, RoleTypeEnum.OWNER);
    // saveDataInSInfo(keySecureConstant.previousRole, previousRole);
    const data = {
      user: newUser,
    };
    changeDrawer(data);
    navigation.navigate(DASHBOARD_ROUTE_NAME);
    return true;
  };

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
        shoppingCartMap.delete(item.saleDetail.merchantId);
      }
    } else {
      const finalEachPrice =
        Number(item.saleDetail.eachPrice);
      const price = String(finalEachPrice * quantity);
      const saleDetail = Object.assign({}, item.saleDetail, {
        quantity,
        price,
      });

      const shoppingItem: ShoppingCart = {
        saleDetail,
        currentStock: item.currentStock,
        minStockLevel: item.minStockLevel,
        merchantId: item.saleDetail.merchantId,
        quantity,
      };
      shoppingCartMap.set(
        item.saleDetail.merchantId,
        shoppingItem
      );
    }
    const totalPrice = _.sumBy(
      Array.from(shoppingCartMap.values()),
      (cartItem) => Number(cartItem.saleDetail.price)
    );
    // Let's re/calculate the total shopping price
    if (listType === PRODUCT_LIST_TYPE.cart) {
      this.setState({
        shoppingCartMap,
        totalPrice,
        addCartProduct: {
          id: item.saleDetail.merchantId,
          quantity,
        },
      });
    } else if (!this.state.addCartProduct && !this.state.scanning) {
      this.setState({
        shoppingCartMap,
        totalPrice,
      });
    } else if (this.state.scanning) {
      this.setState({
        shoppingCartMap,
        totalPrice,
        addCartProduct: null,
        scanning: false,
      });
    } else {
      this.setState({
        addCartProduct: null,
      });
    }
  }

  onPullToRefresh() {
    this.setState({ productStartIndex: 0, isRefreshing: true }, () =>
      this.fetchProductList()
    );
  }

  onReturnedFromCartScreen({ shoppingCartMap }: Object) {
    const currentMap = this.state.shoppingCartMap;
    const productListCopy = this.state.productList.slice();
    shoppingCartMap.forEach((item: ShoppingCart) => {
      const {
        saleDetail: { quantity, merchantId },
      } = item;
      const onCurrentCart = currentMap.get(merchantId);
      if (onCurrentCart && onCurrentCart.saleDetail.quantity !== quantity) {
        this.onChartItemChanged(item, quantity, PRODUCT_LIST_TYPE.list);
        // Reconcile productList data
        const itemIdx = _.findIndex(
          productListCopy,
          ({ saleDetail: { merchantId: productId } }) =>
            productId === merchantId
        );
        if (itemIdx >= 0) {
          productListCopy[itemIdx] = item;
        }
      }
    });

    this.setState({ productList: productListCopy });
  }

  doRefresh() {
    const { doRefreshFlag } = this.props;

    if (doRefreshFlag) {
      this.setState(
        {
          shoppingCartMap: new Map(),
          productStartIndex: 0,
          productCategoryIds: [],
        },
        () => {
          this.fetchProductList();
        }
      );
    }
  }

  gotoShoppingCart = (sale, saleDetails, store) => {
    const { navigation } = this.props;
    const savedOrderItem = navigation.getParam("savedOrderItem", null);
    navigation.navigate("ShoppingCartScreen", {
      sale,
      saleDetails,
      store,
      savedOrderItem,
      doRefresh: () => this.doRefresh(),
      cBack: (returnValue) => this.onReturnedFromCartScreen(returnValue),
    });
  };

  mapProductList(item: StoreProduct): ShoppingCart {
    const atShoppingCart = this.state.shoppingCartMap.get(
      item.merchantId
    );
    const savedOrder = this.state.savedOrders.get(item.merchantId);
    const bookedQuantity = atShoppingCart
      ? atShoppingCart.saleDetail.quantity
      : savedOrder
      ? savedOrder.quantity
      : 0;
    const totPrice =
      bookedQuantity *
      (Number(item.salePrice) - (Number(item.valueDiscount) || 0));

    const productImage = this._filterActiveThumbnail(
      item.productInventory.productInventoryImages
    );
    let thumb = null;

    if (productImage) {
      thumb = productImage.imageUrlOriginal;
    }

    return {
      saleDetail: {
        merchantId: item.merchantId,
        merchantName: item.merchantName,
        quantity: bookedQuantity,
        eachPrice: item.salePrice,
        price: String(totPrice),
      },
      currentStock: item.isNoStock ? MAX_STOCK_WITH_NO_STOCK : item.quantity,
      minStockLevel: item.minStockLevel,
      isNoStock: item.isNoStock,
    };
  }

  _createShoppingChart = (sale, shoppingCartMap) => {
    if (shoppingCartMap) {
      const saleDetails = Array.from(shoppingCartMap.values()).map((item) => {
        return {
          merchantId: item.merchantId,
          quantity: item.quantity,
        };
      });

      const {
        saleId,
        saleStatus,
        saleAddDiscount,
        additionalCost,
        additionalCostInfo,
      } = sale;

      const payload = {
        merchantId: this.state.merchantId,
        storeId: this.state.storeId,
        sale: {
          saleId: saleId || null,
          saleAddDiscount: saleAddDiscount || "0",
          saleStatus: saleStatus || null,
          additionalCost: additionalCost || "0",
          additionalCostInfo: additionalCostInfo || null,
        },
        saleDetails,
      };

      this.props.submitShoppingCart(payload);
    }
  };

  fetchProductList = (text) => {
    const {
      searchKey,
      storeId,
      requestedNumberOfRecords,
      productStartIndex,
      filterBy,
      productCategoryIds,
      searchBy,
    } = this.state;
    const { fetchProductList } = this.props;
    const payload = {
      storeId,
      requestedNumberOfRecords,
      filterBy,
      productCategoryIds,
      startIndex: productStartIndex,
      sortedBy: DEFAULT_PRODUCT_SORTED_BY,
    };
    // this.setState({ isLoading: true }, () => fetchProductList(payload));
  };

  fetchMoreProducts() {
    const {
      isLoadingMore,
      requestedNumberOfRecords,
      returnedProductRecords,
      productStartIndex,
    } = this.state;
    // let's check the last returnedNumberOfRecords value first
    if (!isLoadingMore && returnedProductRecords >= requestedNumberOfRecords) {
      // assume that we have more data in server
      this.setState(
        {
          productStartIndex: productStartIndex + returnedProductRecords,
          isLoadingMore: true,
        },
        () => this.fetchProductList()
      );
    }
  }

  _loadMoreCategories = () => {
    const { categoryStartIndex, categoryReturnedNumberOfRecords } = this.state;
    if (
      !this.props.fetchingCategory &&
      categoryReturnedNumberOfRecords >= DEFAULT_REQUESTED_NUMBER_OF_RECORDS
    ) {
      const params = {
        requestedNumberOfRecords: DEFAULT_REQUESTED_NUMBER_OF_RECORDS,
        startIndex: categoryStartIndex,
        sortedBy: ProductCategorySortedEnum.DEFAULT,
        filterBy: ProductCategoryStatusEnum.ACTIVE,
      };
      this.props.fetchProductCategories({
        merchantId: this.state.merchantId,
        params,
      });
    }
  };

  fetchProductCategoryList = () => {
    const params = {
      requestedNumberOfRecords: DEFAULT_REQUESTED_NUMBER_OF_RECORDS,
      startIndex: this.state.categoryStartIndex,
      sortedBy: ProductCategorySortedEnum.DEFAULT,
      filterBy: ProductCategoryStatusEnum.ACTIVE,
    };

    this.props.fetchProductCategories({
      merchantId: this.state.merchantId,
      params,
    });
  };

  validataionSavedOrderSuccess = () => {
    const { navigation, popupDialogProps } = this.props;
    const savedOrderSuccess = navigation.getParam("savedOrderSuccess", false);
    if (savedOrderSuccess) {
      navigation.setParams({
        savedOrderSuccess: false,
      });
      popupDialogProps.show(
        {
          dialogType: DIALOG_TYPE.SUCCESS,
          icon: Images.successMsg,
          message: "Sukses",
          onButtonPress: this.closePopup,
          modalStyle: styles.successMsg,
        },
        100
      );
      this.closeDialogTimer = setTimeout(this.closePopup, CLOSE_POPUP_TIMEROUT);
    }
  };

  closePopup = () => {
    const { popupDialogProps } = this.props;
    clearTimeout(this.closeDialogTimer);
    this.closeDialogTimer = null;
    popupDialogProps.dismiss();
  };

  continueOrder = () => {
    const { popupDialogProps } = this.props;
    const { savedOrders } = this.state;
    if (savedOrders.size === 0) return;
    savedOrders.forEach((item) => {
      this.onChartItemChanged(
        {
          saleDetail: {
            ...item,
          },
          currentStock: item.storeProductInventory.quantity,
          minStockLevel: item.storeProductInventory.minStockLevel,
          merchantId: item.merchantId,
          quantity: item.quantity,
        },
        item.quantity,
        PRODUCT_LIST_TYPE.list,
        false
      );
    });
    popupDialogProps.show({
      dialogType: DIALOG_TYPE.SUCCESS,
      icon: Images.successMsg,
      message: "continue order",
      onButtonPress: this.closePopup,
      modalStyle: styles.successMsg,
    });
    this.closeDialogTimer = setTimeout(
      this.closePopup,
      CLOSE_SAVED_ORDER_LOAD_TIMEOUT
    );
  };

  _onProductCategoryChanges({ productCategoryId }) {
    const newProductCategory =
      productCategoryId === DEFAULT_PRODUCT_SORTED_BY
        ? []
        : [productCategoryId];
    this.setState(
      {
        productCategoryIds: newProductCategory,
        productStartIndex: 0,
      },
      this.fetchProductList
    );
  }

  _renderError = (message = "") => {
    const timeOutOne = setTimeout(() => {
      Snackbar.show({
        title: message,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: Colors.errorBg,
      });
      clearTimeout(timeOutOne);
    }, ItemConstant.snackBarShow.time);
  };

  _filterActiveThumbnail = (imageListData) => {
    return imageListData.find((value) => {
      if (value.defaultImage === ProductListEnum.ACTIVE_THUMBNAIL_IMAGE) {
        return value;
      }
    });
  };

  _fetchData = async () => {
    // const merchantId = await SaveProfileUtils.getMerchantId();
    // const storeId = await SaveProfileUtils.getStoreId();

    // this.setState(
    //   {
    //     merchantId,
    //     storeId,
    //   },
    //   () => {
    //     this.fetchProductList();
    //     this.fetchProductCategoryList();
    //   }
    // );
    this.fetchProductList();
    // this.fetchProductCategoryList();

    return true;
  };

  handleListStyle = (keyboardShow) => {
    let listItemHeight;

    listItemHeight = keyboardShow
      ? CART_LIST_HEIGHT_KEYBOARD_APPEARS
      : DEFAULT_CART_LIST_HEIGHT;

    this.setState({
      listHeight: listItemHeight,
    });
  };

  _closeResponseDialog = () => {
    this.setState({ barcodeID: "" });
  };

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
      sheetOpen,
      sheetFinished,
      listHeight,
    } = this.state;
    const { submitingShoppingCart, navigation } = this.props;
    console.log('productlist', productList);
    return (
      <View style={[styles.container]}>
        {/* <ModalListPicker
          listData={categoryList}
          getMoreData={() => this._loadMoreCategories()}
          displayNameExtractor={(item) => item.name}
          onChoicePressed={this._onProductCategoryChanges}
          defaultValueName={STATICS.productCategory.defaultValue.name}
          mainWrapperStyle={styles.pickerWrapper}
          pickerStyle={styles.pickerButton}
          textStyle={styles.chosenText}
          iconStyle={styles.pickerIcon}
          iconName={PICKER_ICON}
        /> */}
        <View
          style={[
            styles.listContainer,
            shoppingCartMap.size > 0
              ? { paddingBottom: INITIAL_DISPLAY_HEIGHT }
              : null,
          ]}
        >
          {isLoading && !isLoadingMore && !isRefreshing ? (
            <View style={{ flex: 1 }}>
              <Spinner color={Colors.primary} />
            </View>
          ) : (
            <ProductListView
              salesMode
              productData={productList}
              addCartProduct={addCartProduct}
              isRefreshing={isRefreshing}
              isLoadingMore={isLoadingMore}
              onRefreshing={() => this.onPullToRefresh()}
              onLoadMore={() => this.fetchMoreProducts()}
              onQuantityChanged={(item, qty, remove) =>
                this.onChartItemChanged(
                  item,
                  qty,
                  PRODUCT_LIST_TYPE.list,
                  remove
                )
              }
            />
          )}
        </View>
        {shoppingCartMap.size > 0 && (
          <BottomSheet
            isOpen={sheetOpen}
            updateListStyle={this.handleListStyle}
            headerHeight={headerStyles.header.height}
            initialHeight={INITIAL_DISPLAY_HEIGHT}
            initialFullHeight={INITIAL_FULL_DISPLAY_HEIGHT}
          >
            <TouchableWithoutFeedback
              onPress={() => this._createShoppingChart(sale, shoppingCartMap)}
            >
              <View style={styles.keranjangButtonContainer}>
                <View style={styles.dragMenu}>
                  <Image style={styles.dragMenuIcon} source={Images.dragMenu} />
                </View>
                <View style={styles.dragCartEdge}>
                  <Text style={styles.dragCartEdgeText}>
                    {shoppingCartMap.size}
                  </Text>
                </View>
                <View style={styles.keranjangButtonContent}>
                  <View style={styles.dragCart}>
                    <Image
                      style={styles.dragCartIcon}
                      source={Images.dragCart}
                    />
                  </View>
                  <View style={styles.totalAndButton}>
                    <View>
                      <Text style={styles.totalBelanjaText}>
                        {"total pesanan"}
                      </Text>
                      <Text style={styles.totalPriceText}>
                        {formatToCurrency(totalPrice, "Rp", ".", ",")}
                      </Text>
                    </View>
                    <AButton
                      full
                      containerStyle={styles.keranjangTextContainer}
                      buttonStyle={styles.keranjangButton}
                      iconStyle={styles.keranjangButtonIcon}
                      iconSize={DEFAULT_ARROW_ICON_SIZE}
                      icon="chevron-right"
                      tracking
                      onPress={() =>
                        this._createShoppingChart(sale, shoppingCartMap)
                      }
                    />
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <ProductListView
              cartModel
              listStyle={{ height: listHeight }}
              productData={Array.from(shoppingCartMap.values())}
              onQuantityChanged={(item, qty, remove) =>
                this.onChartItemChanged(
                  item,
                  qty,
                  PRODUCT_LIST_TYPE.cart,
                  remove
                )
              }
            />
          </BottomSheet>
        )}
      </View>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     fetching: state.storeProduct.fetching,
//     productList: state.storeProduct.productList,
//     productPagination: state.storeProduct.pagination,
//     doRefreshFlag: state.storeProduct.doRefreshFlag,
//     categoryList: state.ProductCategorySelector.categoryList,
//     storeProductError: state.storeProduct.storeProductError,
//     submitingShoppingCart: state.shoppingCart.submiting,
//     errorShoppingCart: state.shoppingCart.error,
//     successShoppingCart: state.shoppingCart.success,
//     responseShoppingCart: state.shoppingCart.response,
//     isCanGoBack: state.public.canGoBack,
//     drawerUser: state.drawer.user,
//     drawerRolePrivilege: state.drawer.storePrivileges,
//     categoryPagination: state.ProductCategorySelector.pagination,
//     fetchingCategory: state.ProductCategorySelector.fetching,
//   };
// };

const mapDispatchToProps = {
//   toggleDoRefresh: StoreProducts.toggleDoRefresh,
//   fetchProductList: StoreProducts.fetchProductList,
  // fetchProductList: [
  //   {
  //     id: 1,
  //       category: 'aktif'
  //     },
  //     {
  //       id: 2,
  //       category: 'profit'
  //     },
  //     {
  //       id: 3,
  //       category: 'listing'
  //     },
  //   ],
  //   dataSource: [
  //     {
  //       id: 1,
  //       namaMerchant: 'Toko Abadi Jaya',
  //       statusImage: images.merchant_list.activeMerchant,
  //       status: 'active',
  //       grade: images.grade,
  //       tokoOnline: [
  //         {
  //           id: 1,
  //           link: 'https://www.bukalapak.com/',
  //           images: images.onlineShop.bukalapak,
  //         },{
  //           id: 2,
  //           link: 'https://www.tokopedoa.com/',
  //           images: images.onlineShop.tokopedia,
  //         },{
  //           id: 3,
  //           link: 'https://www.shopee.com/',
  //           images: images.onlineShop.shopee,
  //         }
  //       ],
  //       price: 'Rp 2.223',
  //       income: 'profit',
  //       category: 'aktif'
  //     },
  //     {
  //       id: 2,
  //       namaMerchant: 'Toko Sinar Jaya',
  //       statusImage: images.merchant_list.profitMerchant,
  //       status: 'profit',
  //       grade: images.grade,
  //       tokoOnline: [
  //         {
  //           id: 1,
  //           link: 'https://www.bukalapak.com/',
  //           images: images.onlineShop.bukalapak,
  //         },{
  //           id: 2,
  //           link: 'https://www.tokopedoa.com/',
  //           images: images.onlineShop.tokopedia,
  //         }
  //       ],
  //       price: 'Rp 1.234',
  //       income: 'loss',
  //       category: 'profit'
  //     },
  //     {
  //       id: 3,
  //       namaMerchant: 'Mangbros',
  //       statusImage: images.merchant_list.listMerchant,
  //       status: 'loss',
  //       grade: images.grade,
  //       tokoOnline: [
  //         {
  //           id: 1,
  //           link: 'https://www.bukalapak.com/',
  //           images: images.onlineShop.bukalapak,
  //         }
  //       ],
  //       price: 'Rp 1.123',
  //       income: 'profit',
  //       category: 'listing'
  //     },
  //   ],
//   fetchProductCategories: ProductCategories.categorySelectorRequest,
//   submitShoppingCart: ShoppingCartActions.shoppingCartCreateRequest,
//   clearGoBackFunc: PublicActions.clearGoBack,
//   changeDrawer: DrawerActions.changeDrawer,
};

export default merchantScreen;
// export default enhance(
//   connect(mapStateToProps, mapDispatchToProps),
//   popupDialogEnhancer
// )(merchantScreen);
