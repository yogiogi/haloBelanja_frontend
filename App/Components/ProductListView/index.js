/**
 * @flow
 */
import React from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, Dimensions } from "react-native";
import { KeyboardAwareFlatList } from "react-native-keyboard-aware-scroll-view";
import { StoreProduct } from "../../Commons/types";
// import ProductListItem from "./ProductListItem";
import ProductSaleItem from "../../Components/ProductSaleItem";
// import ProductCartItem from "./ProductCartItem";
import colors from "../../Property/Colors";
import ListSeparator from "../../Components/ListSeparator";
import DataEmpty from "../../Components/DataEmpty";

const { height } = Dimensions.get("window");

// iPhone 5S size
const base = {
  height: 568,
};

export const scaleHeight = (h) => (h / base.height) * height;

type Props = {
  productData: Array<StoreProduct>,
  onLoadMore?: Function,
  onItemClicked?: Function,
  onQuantityChanged?: Function,
  onRefreshing?: Function,
  isLoadingMore?: boolean,
  isRefreshing?: boolean,
  salesMode?: boolean,
  disableItemClickable?: boolean,
};

type State = {
  data: Array<StoreProduct>,
  isLoadingMore: boolean,
  isRefreshing: boolean,
};

class ProductListView extends React.PureComponent<Props, State> {
  static defaultProps;

  constructor(props: Props) {
    super(props);
    this.state = {
      data: this.props.productData,
      isLoadingMore: false,
      isRefreshing: !!this.props.isRefreshing,
    };
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.productData !== nextProps.productData) {
      this.setState({ data: nextProps.productData });
    }

    if (this.props.isRefreshing !== nextProps.isRefreshing) {
      this.setState({ isRefreshing: nextProps.isRefreshing });
    }

    if (this.props.isLoadingMore !== nextProps.isLoadingMore) {
      this.setState({ isLoadingMore: nextProps.isLoadingMore });
    }
  }

  fetchNextPage() {
    const { onLoadMore } = this.props;
    if (onLoadMore) {
      onLoadMore();
    }
  }

  renderFooter() {
    if (this.state.isLoadingMore) {
      return (
        <ActivityIndicator animating color={colors.primary} size="large" />
      );
    }
    return null;
  }

  render() {
    const { listStyle, onRefreshing, onQuantityChanged } = this.props;

    console.log("this.state.data", this.state.data);
    const renderItem = ({ item, index }) => (
      <ProductSaleItem
        data={item}
        dataIndex={index}
        onQuantityChanged={(quantity, remove) =>
          onQuantityChanged && onQuantityChanged(item, quantity, remove)
        }
      />
    );

    // const keyExtractor = (item) =>
    //   this.props.salesMode
    //     ? String(item.saleDetail.merchantId)
    //     : String(item.merchantId);
    // const separator = <ListSeparator />;
    // const emptyComponent = (
    //   <DataEmpty
    //     accessible
    //     title={'empty'}
    //   />
    // );

    return (
      <KeyboardAwareFlatList
        automaticallyAdjustContentInsets={false}
        style={listStyle ? listStyle : null}
        data={this.state.data}
        renderItem={renderItem}
        // keyExtractor={keyExtractor}
        refreshing={this.state.isRefreshing}
        ItemSeparatorComponent={() => separator}
        ListEmptyComponent={() => emptyComponent}
        ListFooterComponent={() => this.renderFooter()}
        onRefresh={onRefreshing}
        onEndReached={() => this.fetchNextPage()}
        onEndReachedThreshold={0.5}
        enableAutomaticScroll
        extraHeight={100}
        extraScrollHeight={scaleHeight(-100)}
      />
    );
  }
}

ProductListView.propTypes = {
  productData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onLoadMore: PropTypes.func,
  onItemClicked: PropTypes.func,
  onQuantityChanged: PropTypes.func,
  onRefreshing: PropTypes.func,
  isRefreshing: PropTypes.bool,
  isLoadingMore: PropTypes.bool,
  salesMode: PropTypes.bool,
  disableItemClickable: PropTypes.bool,
};

ProductListView.defaultProps = {
  onLoadMore: undefined,
  onItemClicked: undefined,
  onQuantityChanged: undefined,
  onRefreshing: undefined,
  isRefreshing: false,
  isLoadingMore: false,
  salesMode: false,
  disableItemClickable: false,
};

export default ProductListView;
