import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import { formatToCurrency } from "../../Commons/utils";
import styles from "./styles";
import ANumberPicker from "../../Components/ANumberPicker";
import { ShoppingCart } from "../../Commons/types";

type Props = {
  data: ShoppingCart,
  dataIndex: number,
  onQuantityChanged: Function,
  addCartProduct: Object,
};

type State = {
  currentStock: string,
  bookQuantity: number,
  bookQuantityStr: string,
  inputTimerId: number,
};

const INPUT_MAX_LENGTH = 4;
export const INPUT_INTERVAL_TIME = 200;

class ProductSaleItem extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    const { data } = this.props;
    console.log("data sale", this.props.data);

    this.state = {
      currentStock:
        data.quantity > 0
          ? String(Number(data.currentStock) - data.quantity)
          : data.currentStock,
      bookQuantity: data.quantity,
      bookQuantityStr: String(data.quantity),
      inputTimerId: 0,
    };
  }
  componentWillReceiveProps(nextProps: Props) {
    if (this.props.data !== nextProps.data) {
      const { quantity } = nextProps.data;
      this.setState({
        currentStock:
          quantity > 0 ? String(Number(currentStock) - quantity) : currentStock,
        bookQuantity: quantity,
        bookQuantityStr: String(quantity),
      });
    }
  }
  componentDidUpdate() {
    const { data, addCartProduct } = this.props;
    if (addCartProduct && data.merchantId === addCartProduct.id) {
      if (addCartProduct.type && addCartProduct.type) {
        this.doPlusQuantity();
      } else if (
        addCartProduct.quantity &&
        addCartProduct.quantity > this.state.bookQuantity &&
        this.state.currentStock > 0
      ) {
        this.updateBookQuantityForCart(addCartProduct.quantity);
      } else {
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

    if (bookQuantity > Number(this.props.data.currentStock)) {
      bookQuantity = Number(this.props.data.currentStock);
    }
    this.updateBookQuantity(bookQuantity);
  }

  updateBookQuantity(bookQuantity: number) {
    const bookQuantityStr = String(bookQuantity);
    const currentStock = String(
      Number(this.props.data.currentStock) - bookQuantity
    );
    setTimeout(() => {
      this.setState({ bookQuantity, bookQuantityStr, currentStock });
    }, INPUT_INTERVAL_TIME);
    let remove = false;
    if (bookQuantity === 0) {
      remove = true;
    }
    this.props.onQuantityChanged(bookQuantity, remove);
  }

  updateBookQuantityForCart(bookQuantity: number) {
    const bookQuantityStr = String(bookQuantity);
    const currentStock = String(
      Number(this.props.data.currentStock) - bookQuantity
    );
    setTimeout(() => {
      this.setState({ bookQuantity, bookQuantityStr, currentStock });
    }, INPUT_INTERVAL_TIME);
    this.props.onQuantityChanged(bookQuantity);
  }

  doPlusQuantity() {
    const { data } = this.props;
    const bookQuantity = this.state.bookQuantity + 1;
    if (bookQuantity <= Number(data.currentStock)) {
      this.updateBookQuantity(bookQuantity);
    }
  }

  doMinusQuantity() {
    const bookQuantity = this.state.bookQuantity - 1;
    if (bookQuantity > 0) {
      this.updateBookQuantity(bookQuantity);
    } else if (bookQuantity === 0) {
      const currentStock = String(Number(this.props.data.currentStock));
      this.setState({
        bookQuantity,
        bookQuantityStr: String(bookQuantity),
        currentStock,
      });
      this.props.onQuantityChanged(bookQuantity, true);
    }
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

  _handleOnBlur(value) {
    if (Number(value) === 0) {
      this.props.onQuantityChanged(Number(value), true);
    }
  }

  render() {
    const { data, dataIndex } = this.props;
    // const originalPrice = data.saleDetail.eachPrice;
    const picked = Number(this.state.bookQuantityStr) > 0;
    const isHaveStock = !data.isNoStock;
    const finalPrice = Number(data.salePrice);

    return (
      <View
        style={[styles.container, picked ? styles.pickBackgroundColor : null]}
      >
        <TouchableWithoutFeedback onPress={() => this.doPlusQuantity()}>
          <View style={styles.clickableContainer}>
            <View
              style={[
                styles.middleContainer,
                picked ? styles.specialMarginRight : null,
              ]}
            >
              <Text
                style={[
                  styles.productNameText,
                  picked ? styles.pickTextColor : null,
                ]}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {data.merchantName}
              </Text>
              <View style={styles.priceContainer}>
                <View>
                  <Text
                    style={[
                      styles.productPriceText,
                      picked ? styles.pickTextColor : null,
                    ]}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >
                    {formatToCurrency(finalPrice, "Rp", ".", ",")}
                  </Text>
                </View>
              </View>
            </View>
            {!picked && isHaveStock ? (
              <View style={styles.rightContainer}>
                <Text
                  style={styles.stockLeftText}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {"stok"} {this.state.currentStock}
                </Text>
                {Number(this.state.currentStock) <= data.minStockLevel &&
                  Number(this.state.currentStock) > 0 && (
                    <Text
                      style={styles.lowStockText}
                      numberOfLines={2}
                      ellipsizeMode="tail"
                    >
                      {"stok sedikit"}
                    </Text>
                  )}
                {Number(this.state.currentStock) === 0 && (
                  <Text
                    style={styles.emptyStockText}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >
                    {"stok habis"}
                  </Text>
                )}
              </View>
            ) : null}
          </View>
        </TouchableWithoutFeedback>
        {picked ? (
          <View style={[styles.quantityController]}>
            <ANumberPicker
              value={parseInt(this.state.bookQuantityStr, 10)}
              maxLength={INPUT_MAX_LENGTH}
              limitValue={Number(data.currentStock)}
              onChangeText={(value) => this.doChangeTextInput(value)}
              onBlur={(value) => this._handleOnBlur(value)}
              onLeftPress={() => this.doMinusQuantity()}
              onRightPress={() => this.doPlusQuantity()}
            />
          </View>
        ) : null}
      </View>
    );
  }
}

ProductSaleItem.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  dataIndex: PropTypes.number.isRequired,
  onQuantityChanged: PropTypes.func.isRequired,
};

export default ProductSaleItem;
