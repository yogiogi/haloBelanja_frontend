import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '../../Property';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
  },
  emptyContainer: {
    backgroundColor: Colors.background,
  },
  clickableContainer: {
    flex: 1,
    width: Metrics.metrics.deviceWidth,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  thumbnailContainer: {
    width: 40,
    height: 40,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grey_da,
    borderRadius: 20,
  },
  thumbnailImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  imageItemContent: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  middleContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rightContainer: {
    paddingLeft: Metrics.metrics.padding5,
    height: Metrics.height.height35,
    justifyContent: Metrics.metrics.center,
  },
  productNameText: {
    fontSize: Fonts.size.regular,
    lineHeight: 20,
    color: Colors.dark,
    fontFamily: Fonts.type.base,
  },
  originalPriceText: {
    marginRight: 5,
    fontSize: Fonts.size.labelForm,
    fontFamily: Fonts.type.base,
    color: Colors.disabledLight,
    lineHeight: 20,
  },
  originalPriceView: {
    marginLeft: 5,
  },
  productPriceText: {
    fontSize: Fonts.size.labelForm,
    lineHeight: 20,
    color: Colors.disabled,
    fontFamily: Fonts.type.base,
  },
  stockLeftText: {
    fontSize: Metrics.scaleSize(Fonts.size.labelForm),
    color: Colors.dark,
    fontFamily: Fonts.type.base,
    textAlign: Metrics.metrics.right,
  },
  lowStockText: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.base,
    color: Colors.lowStock,
    textAlign: Metrics.metrics.right,
  },
  emptyStockText: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.base,
    color: Colors.tomato,
    textAlign: Metrics.metrics.right,
  },
  quantityController: {
    flex: 1,
    position: 'absolute',
    width: Metrics.input.picker.width * 2 + Metrics.input.picker.input.width,
    height: Metrics.input.picker.height,
    top: 22,
    right: 12,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: 2,
    borderRadius: 3,
    backgroundColor: Colors.snow,
    borderWidth: 1,
    borderColor: Colors.priceBorder,
  },
  pickTextColor: {
    color: Colors.snow,
  },
  pickBackgroundColor: {
    backgroundColor: Colors.primary,
  },
  specialMarginRight: {
    marginRight: 120,
  },
  lineThrough: {
    position: Metrics.position.type.absolute,
    top: Metrics.position.top.top50p,
    width: Metrics.width.width100,
    height: Metrics.height.height1,
    borderBottomWidth: Metrics.borderWidth.default,
    borderBottomColor: Colors.tomato,
  },
});

export default styles;
