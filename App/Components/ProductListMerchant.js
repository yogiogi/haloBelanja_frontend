import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, Dimensions } from 'react-native';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import { MerchantProduct } from '../Commons/types' ;
import ProductListItem from '../Components/ProductListItem';
import ListSeparator from './ListSeparator';
import { ThemeConsumer } from 'react-native-elements';

const { height } = Dimensions.get('window');

const base = {
    height: 568,
}

export const scaleHeight = h => ((h / base.height) * height);

type Props = {
    merchantData: Array<MerchantProduct>,
    onLoadMore: Function,
    onItemClicked?: Function,
    onQuantityChanged?: Function,
    onRefreshing?: Function,
    isLoadingMore?: boolean,
    salesMode?: boolean,
    disableItemCLicked?: boolean,
}

type State = {
    data: Array<MerchantProduct>,
    isLoadingMore: boolean,
    isRefreshing: boolean
}

class ProductListMerchant extends React.PureComponent<Props, State> {
    static defaultProps;

    constructor(props: Props) {
      super(props);
      this.state = {
        data: this.props.merchantData,
        isLoadingMore: false,
        isRefreshing: !this.props.isRefreshing,
      }
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
      return <ActivityIndicator animating color={colors.primary} size="large" />;
    }
    return null;
  }

  render() {
    const { listStyle, onRefreshing, onQuantityChanged, addCartProduct} = this.props;
    const renderItem = ({ item, index }) => (
        this.props.salesMode ?
          <ProductListItem
            data={item}
            dataIndex={index}
            index={index}
            onItemClicked={this.props.onItemClicked}
            disableItemClickable={this.props.disableItemClickable}
          /> : 
          <ProductListItem
            data={item}
            dataIndex={index}
            index={index}
            onItemClicked={this.props.onItemClicked}
            disableItemClickable={this.props.disableItemClickable}
          />
    )
    const separator = <ListSeparator />;

      return (
        <KeyboardAwareFlatList
            automaticallyAdjustContentInsets={false}
            style={listStyle ? listStyle : null}
            accessibilityLabel={accessibilityLabel}
            data={this.state.data}
            renderItem={renderItem}
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


  ProductListMerchant.propTypes = {
    merchantData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    onLoadMore: PropTypes.func,
    onItemClicked: PropTypes.func,
    onQuantityChanged: PropTypes.func,
    onRefreshing: PropTypes.func,
    isRefreshing: PropTypes.bool,
    isLoadingMore: PropTypes.bool,
    salesMode: PropTypes.bool,
    cartModel: PropTypes.bool,
    disableItemClickable: PropTypes.bool,
  };
  
  ProductListMerchant.defaultProps = {
    onLoadMore: undefined,
    onItemClicked: undefined,
    onQuantityChanged: undefined,
    onRefreshing: undefined,
    isRefreshing: false,
    isLoadingMore: false,
    salesMode: false,
    cartModel: false,
  };

export default ProductListMerchant;