import { StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from '../../Property';

const loaderSize = 17;
const loaderColor = Colors.primary;
const styles = StyleSheet.create({
  mainWrapper: {
    ...Metrics.metrics.initMargin,
    flexDirection: Metrics.metrics.row,
    padding: Metrics.metrics.padding8,
    justifyContent: Metrics.metrics.center,
    alignItems: Metrics.metrics.center,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Colors.black_12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.black_12,
  },
  chosenText: {
    flex: Metrics.flex.defaultFlex,
    marginLeft: Metrics.metrics.padding8,
    fontSize: Fonts.size.default,
    fontFamily: Fonts.type.base,
    color: Colors.charcoalGrey,
  },
  pickerButton: {
    flex: Metrics.flex.defaultFlex,
    flexDirection: Metrics.metrics.row,
    paddingHorizontal: Metrics.metrics.padding8,
    paddingVertical: Metrics.metrics.padding6,
  },
  pickerIcon: {
    fontSize: Fonts.size.big,
    color: Colors.primary,
  },
  modalContentWrapper: {
    flex: Metrics.flex.defaultFlex,
    alignItems: Metrics.metrics.center,
    backgroundColor: Colors.transparent,
  },
  modalListWrapper: {
    width: Metrics.width.width95,
    maxHeight: Metrics.height.height300,
    marginTop: Metrics.metrics.margin60,
    backgroundColor: Colors.snow,
    borderWidth: Metrics.borderWidth.default,
    borderColor: Colors.black_12,
  },
  blankSpaceArea: {
    flex: Metrics.flex.defaultFlex,
    width: Metrics.width.width100,
    backgroundColor: Colors.transparent,
  },
  listWrapper: {
    paddingHorizontal: Metrics.metrics.padding15,
  },
  listItemWrapper: {
    flexDirection: Metrics.metrics.row,
    alignItems: Metrics.metrics.center,
    marginVertical: Metrics.metrics.margin3,
  },
  listItemText: {
    fontSize: Fonts.size.regular,
    fontWeight: Fonts.weight.bold400,
    color: Colors.dark,
  },
  separatorLine: {
    width: Metrics.width.width100,
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.black_12,
  },
  footerLoader: {
    marginTop: Metrics.marginTop.marginTop10,
  },
  pickerView: {
    ...Metrics.metrics.initMargin,
    flexDirection: Metrics.metrics.row,
    justifyContent: Metrics.metrics.center,
    alignItems: Metrics.metrics.center,
  },
  frequencyMainWrapper: {
    ...Metrics.metrics.initMargin,
    flexDirection: Metrics.metrics.row,
    justifyContent: Metrics.metrics.center,
    alignItems: Metrics.metrics.center,
  },
  frequencyButton: {
    height: Metrics.button.footerModalIcon.height,
    marginLeft: Metrics.metrics.margin12,
    marginRight: Metrics.metrics.margin13,
    flex: Metrics.flex.defaultFlex,
    flexDirection: Metrics.metrics.row,
    justifyContent: Metrics.metrics.spaceBetween,
    alignItems: Metrics.metrics.center,
  },
  frequencyTextView: {
    flex: Metrics.flex.defaultFlex,
    flexDirection: Metrics.metrics.row,
    justifyContent: Metrics.metrics.spaceBetween,
    alignItems: Metrics.metrics.center,
  },
  labelText: {
    width: Metrics.width.width_56,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.small,
    color: Colors.disabled,
  },
  frequencyText: {
    marginLeft: Metrics.metrics.margin8,
    fontSize: Fonts.size.inputPicker,
    fontFamily: Fonts.type.base,
    fontWeight: Fonts.weight.bold,
    color: Colors.dark,
    marginRight: Metrics.metrics.margin13,
    textAlign: Metrics.metrics.right,
  },
  frequencyIcon: {
    fontSize: Fonts.size.big,
    color: Colors.disabled,
  },
});

export {
  styles as default,
  loaderColor,
  loaderSize,
};
