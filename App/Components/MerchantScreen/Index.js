import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { Spinner } from 'native-base';
import * as _ from 'lodash';
import Snackbar from 'react-native-snackbar';
import { connect } from 'react-redux';
import Immmutable from 'seamless-immutable';

import MerchantProducts from '../Redux/MerchantProductsRedux';
import ProductListMerchant from '../ProductListMerchant';
import MerchantCartActions from '../Redux/MerchantCartRedux';

import AButton from '../AButton';
import LoadingScreen from '../LoadingScreen';
import { PaginationResponse, MerchantProduct } from '../../Commons/types';
import {
    addBackAndroidListener,
    removeBackAndroidListener,
  } from '../../Commons/utils';
import { Colors, Images } from '../../Property';
import styles from './styles';
import { ADialogStatic } from '../Components/ADialog';
import { BottomSheet } from '../BottomSheet';
import { headerStyles } from '../../Containers/Styles/headerStyles';

const DEFAULT_TIMEOUT = 500;
const MAX_STOCK_WITH_NO_STOCK = '9999';
const DASHBOARD_ROUTE_NAME = 'DashboardStack';
const INITIAL_DISPLAY_HEIGHT = 78;
const INITIAL_FULL_DISPLAY_HEIGHT = 272;
const DEFAULT_CART_LIST_HEIGHT = INITIAL_FULL_DISPLAY_HEIGHT - INITIAL_DISPLAY_HEIGHT;
const CART_LIST_HEIGHT_KEYBOARD_APPEARS = 175;
const DEFAULT_ARROW_ICON_SIZE = 24;
const PRODUCT_LIST_TYPE = {
  list: 'list',
  cart: 'cart',
};

type Props = {
  merchantList: Array<MerchantProduct>,
  merchantPagination: PaginationResponse,
  fetchProductList: Function,
  fetchProductCategories: Function,
  clearGoBackFunc: Function,
  navigation: { navigate: Function },
  doRefreshFlag: boolean,
  isCanGoBack: boolean,
  toggleDoRefresh: Function,
  submitShoppingCart: Function,
  storeProductError: any,
  submitingMerchantCart: boolean,
  errorMerchantCart: any,
  successMerchantCart: boolean,
  fetching: boolean,
  responseMerchantCart: Object,
  merchantId: string,
  storeId: string,
  searchBy: string,
  scanning: boolean,
  addCartProduct: Object | null,
  changeDrawer: Function,
  drawerUser: Object,
  drawerRolePrivilege: Object,
  categoryPagination: PaginationResponse,
  fetchingCategory: boolean,
}

type State = {
  merchantList: Array<ShoppingCart>,
  categoryList: Array<Object>,
  MerchantCartMap: Map<number, MerchantCart>,
  role: string,
  requestedNumberOfRecords: number,
  returnedProductRecords: number,
  productStartIndex: number,
  categoryStartIndex: number,
  searchKey: string,
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
  searchBy: string,
  scanning: boolean,
  addCartProduct: Object | null,
  categoryReturnedNumberOfRecords: number,
  sheetOpen: boolean,
  sheetFinished: boolean,
  selectedProdctForCoachMark: boolean,
}

const MINIMUM_SEARCH_TEXT = 3;
const DEFAULT_PRODUCT_FILTER_BY = 'ACTIVE';
const DEFAULT_PRODUCT_SORTED_BY = 'DEFAULT';
const DEFAULT_REQUESTED_NUMBER_OF_RECORDS = 50;

export class MerchantScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    
    this.state = {
      merchantList: [],
      merchantCartMap: new Map(),
      requestedNumberOfRecords: 10,
      returnedProductRecords: 0,
      productStartIndex: 0,
      categoryStartIndex: 0,
      searchKey: '',
      filterBy: DEFAULT_PRODUCT_FILTER_BY,
      isLoading: false,
      isLoadingMore: false,
      isRefreshing: false,
      totalPrice,
      saleDetails: {},
      merchant: {},
      merchantId: '',
      addCartProduct: null,
      searchBy: null,
      categoryReturnedNumberOfRecords: 0,
      productCategoryIds: [],
      listHeight: DEFAULT_CART_LIST_HEIGHT,
    };
    this.mapProductList = this.mapProductList.bind(this);
    this._onProductCategoryChanges = this._onProductCategoryChanges.bind(this);
    this.fetchProductList = this.fetchProductList.bind(this);
  }

  componentDidMount(){
    this._fetchData();
  }

  _fetchData = async () => {
    const merchantId = await SaveProfileUtils.getMerchantId();
    const storeId = await SaveProfileUtils.getStoreId();

    this.setState({
      merchantId,
      storeId,
    }, () => {
      this.fetchProductList();
    });

    return true;
  };

  _onProductCategoryChanges({ merchantCategoryId }) {
    const newProductCategory = merchantCategoryId === DEFAULT_PRODUCT_SORTED_BY ?
      [] : [merchantCategoryId];
    this.setState({
      merchantCategoryId: newProductCategory,
      merchantStartIndex: 0,
    }, this.fetchProductList);
  }

  onChartItemChanged(item: MerchantCart, quantity: number, listType: string, remove: boolean) {
    const { merchantCartMap } = this.state;
    if (quantity <= 0) {
      // quantity become 0 means the user wants to remove it from cart
      if (remove) {
        merchantCartMap.delete(item.saleDetail.storeProductInventoryId);
      }
    } else {
      const finalEachPrice = Number(item.saleDetail.eachPrice) -
        (Number(item.saleDetail.discount) || 0);
      const price = String(finalEachPrice * quantity);
      const saleDetail = Object.assign({}, item.saleDetail, { quantity, price });

      const merchantItem: MerchantCart = {
        saleDetail,
        currentStock: item.currentStock,
        storeProductInventoryId: item.saleDetail.storeProductInventoryId,
        quantity,
      };
      merchantCartMap.set(item.saleDetail.storeProductInventoryId, merchantItem);

      if (this.props.coachMarkProps.isOnCoachMark) {
        this.coachMarkTimer = setTimeout(() => {
          this._onSelectProdctForCoachMark();
          this.setState({
            selectedProdctForCoachMark: true,
          });
          clearTimeout(this.coachMarkTimer);
        }, DEFAULT_TIMEOUT);
      }
    }
    const totalPrice = _.sumBy(
      Array.from(shoppingCartMap.values()),
      cartItem => Number(cartItem.saleDetail.price),
    );
    // Let's re/calculate the total shopping price
    if (listType === PRODUCT_LIST_TYPE.cart) {
      this.setState({
        merchantCartMap,
        totalPrice,
        addCartProduct: {
          id: item.saleDetail.merchantProductInventoryId,
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
        merchantCartMap,
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
    if (searchBy && searchBy === SEARCH_BY.scan) {
      fetchProductList({
        storeId,
        requestedNumberOfRecords,
        filterBy,
        startIndex: 0,
        sortedBy: DEFAULT_PRODUCT_SORTED_BY,
        productCategoryIds,
        search: text,
      });
    } else {
      const payload = {
        storeId,
        requestedNumberOfRecords,
        filterBy,
        productCategoryIds,
        startIndex: productStartIndex,
        sortedBy: DEFAULT_PRODUCT_SORTED_BY,
      };
      if (searchKey) {
        payload.search = searchKey;
      }
      this.setState(
        { isLoading: true },
        () => fetchProductList(payload),
      );
    }
  };

  onPullToRefresh() {
    this.setState(
      { productStartIndex: 0, isRefreshing: true },
      () => this.fetchProductList(),
    );
  }

  handleListStyle = (keyboardShow) => {
    let listItemHeight;
    if (AppConstant.isIOS) {
      listItemHeight = DEFAULT_CART_LIST_HEIGHT;
    } else {
      listItemHeight = keyboardShow ? CART_LIST_HEIGHT_KEYBOARD_APPEARS : DEFAULT_CART_LIST_HEIGHT;
    }

    this.setState({
      listHeight: listItemHeight,
    });
  };
  
  handleListStyle = (keyboardShow) => {
    let listItemHeight = keyboardShow ? CART_LIST_HEIGHT_KEYBOARD_APPEARS : DEFAULT_CART_LIST_HEIGHT;

    this.setState({
      listHeight: listItemHeight,
    });
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
      this.setState({
        productStartIndex: productStartIndex + returnedProductRecords,
        isLoadingMore: true,
      }, () => this.fetchProductList());
    }
  }

  mapProductList(item: MerchantProduct): ShoppingCart {
    const atShoppingCart = this.state.shoppingCartMap.get(item.storeProductInventoryId);
    const savedOrder = this.state.savedOrders.get(item.storeProductInventoryId);
    const bookedQuantity = atShoppingCart ?
      atShoppingCart.saleDetail.quantity : savedOrder ? savedOrder.quantity : 0;
    const totPrice = bookedQuantity *
      (Number(item.salePrice) - (Number(item.valueDiscount) || 0));

    const productImage = this._filterActiveThumbnail(item.productInventory.productInventoryImages);
    let thumb = null;

    if (productImage) {
      thumb = productImage.imageUrlOriginal;
    }

    return {
      saleDetail: {
        storeProductInventoryId: item.storeProductInventoryId,
        productName: item.storeProductInventoryName,
        quantity: bookedQuantity,
        eachPrice: item.salePrice,
        price: String(totPrice),
        discountedPrice: String(item.discountedPrice),
        tax: item.taxValue,
        discount: item.valueDiscount,
        discountInfo: item.percentageDiscount,
        thumb,
      },
      currentStock: item.isNoStock ? MAX_STOCK_WITH_NO_STOCK : item.quantity,
      minStockLevel: item.minStockLevel,
      isNoStock: item.isNoStock,
    };
  }
  
  onFilterButton() {
    return (
      <View>
        <AButton.Rounded.Dark
          title='Aktif'
          containerStyle={styles.containerActionButton}
          onPress={undefined}
        />
        <AButton.Rounded.Dark
          title='Profit'
          containerStyle={styles.containerActionButton}
          onPress={undefined}
        />
        <AButton.Rounded.Dark
          title='Listing'
          containerStyle={styles.containerActionButton}
          onPress={undefined}
        />
      </View>
    )
  }

  _processCart(){

  }

  render() {
    const {
      isLoading,
      isLoadingMore,
      isRefreshing,
      merchantList,
      merchantCartMap,
      totalPrice,
      sale,
      addCartProduct,
      searchBy,
      sheetOpen,
      sheetFinished,
      listHeight,
    } = this.state;
    const { submitingMerchantCart, navigation } = this.props;

    return (
      <View style={[styles.container]}>
          { this.onFilterButton() }
        <View
          style={[styles.listContainer, merchantCartMap.size > 0
            ? { paddingBottom: INITIAL_DISPLAY_HEIGHT } : null]}
        >
          {
            (isLoading && !isLoadingMore && !isRefreshing) ?
              <View style={{ flex: 1 }}>
                <Spinner color={Colors.primary} />
              </View> :
              <ProductListMerchant
                salesMode
                productData= {merchantList}
                addCartProduct={addCartProduct}
                isRefreshing={isRefreshing}
                isLoadingMore={isLoadingMore}
                onRefreshing={() => this.onPullToRefresh()}
                onLoadMore={() => this.fetchMoreProducts()}
                onQuantityChanged={
                  (item, qty, remove) =>
                    this.onChartItemChanged(item, qty, PRODUCT_LIST_TYPE.list, remove)
                }
                coachMarkProps={coachMarkProps}
              />
          }
        </View>
        {
          merchantCartMap.size > 0 &&
          <BottomSheet
            isOpen={sheetOpen}
            updateListStyle={this.handleListStyle}
            headerHeight={headerStyles.header.height}
            initialHeight={INITIAL_DISPLAY_HEIGHT}
            initialFullHeight={INITIAL_FULL_DISPLAY_HEIGHT}
          >
              <TouchableWithoutFeedback
                onPress={() => this._processCart()}
              >
                <View style={styles.keranjangButtonContainer}>
                  <View style={styles.dragMenu}>
                    <Image
                      accessibilityLabel="kasirScreen_image_dragMenu"
                      style={styles.dragMenuIcon}
                      source={Images.dragMenu}
                    />
                  </View>
                  <View style={styles.dragCartEdge}>
                    <Text style={styles.dragCartEdgeText}>{merchantCartMap.size}</Text>
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
                          Total Belanja
                        </Text>
                        <Text style={styles.totalPriceText}>
                          Rp. 
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
                        onPress={() => this._processCart()}
                      />
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
          </BottomSheet>
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.MerchantProduct.fetching,
    merchantList: state.MerchantProduct.merchantList,
    merchantPagination: state.MerchantProduct.pagination,
    doRefreshFlag: state.MerchantProduct.doRefreshFlag,
    MerchantProductError: state.MerchantProduct.MerchantProductError,
    submitingMerchantCart: state.MerchantCart.submitting,
    errorMerchantCart: state.MerchantCart.error,
    successMerchantCart: state.MerchantCart.success,
    responseMerchantCart: state.MerchantCart.response,
  }
}

const mapDispatchToProps = {
  toggleDoRefresh: MerchantProducts.toggleDoRefresh,
  fetchMerchantList: MerchantProducts.fetchProductList,
  submitingMerchantCart: MerchantCartActions.merchantCartCreateRequest,

}

export default enhance(
  connect(mapStateToProps, mapDispatchToProps),
)(MerchantScreen);