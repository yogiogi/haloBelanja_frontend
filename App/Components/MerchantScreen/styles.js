import { StyleSheet, NativeModules } from 'react-native';
import { Header } from 'react-navigation';

import { Colors, Fonts, Metrics } from '../../Property';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.snow,
  },
  listContainer: {
    flex: 1,
  },
  keranjangButtonContainer: {
    position: Metrics.position.type.relative,
    backgroundColor: Colors.snow,
    borderTopWidth: Metrics.borderWidth.borderWidth2,
    borderTopColor: Colors.success,
    height: 78,
  },
  keranjangButtonContent: {
    flexDirection: 'row',
    backgroundColor: Colors.snow,
    width: Metrics.metrics.deviceWidth,
    justifyContent: Metrics.metrics.flexStart,
    alignItems: Metrics.metrics.flexStart,
  },
  dragMenu: {
    justifyContent: Metrics.metrics.center,
    alignItems: Metrics.metrics.center,
    width: Metrics.metrics.deviceWidth,
    height: Metrics.height.height24,
  },
  dragMenuIcon: {
    width: Metrics.width.width24,
    height: Metrics.height.height24,
  },
  dragCart: {
    borderRightWidth: Metrics.borderWidth.default,
    borderRightColor: Colors.shadowBG,
    marginTop: Metrics.marginTop.marginTop5,
  },
  dragCartIcon: {
    width: Metrics.width.width32,
    height: Metrics.height.height32,
    marginLeft: Metrics.marginLeft.marginLeft29,
    marginRight: Metrics.marginRight.marginRight31,
  },
  dragCartEdge: {
    position: Metrics.position.type.absolute,
    top: 22,
    left: 50,
    minWidth: Metrics.width.width19,
    height: Metrics.height.height19,
    backgroundColor: Colors.success,
    borderRadius: Metrics.borderRadius.borderRadius10,
    justifyContent: Metrics.metrics.center,
    alignItems: Metrics.metrics.center,
    zIndex: 2,
  },
  dragCartEdgeText: {
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.fontLabel,
    color: Colors.snow,
    fontWeight: Fonts.weight.bold,
  },
  totalAndButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: Metrics.metrics.spaceBetween,
    alignItems: Metrics.metrics.center,
    marginLeft: Metrics.marginLeft.marginLeft20,
  },
  totalBelanjaText: {
    color: Colors.dark,
    fontSize: Fonts.size.fontLabel,
    fontFamily: Fonts.type.base,
    justifyContent: Metrics.metrics.spaceBetween,
    alignItems: Metrics.metrics.center,
  },
  totalPriceText: {
    color: Colors.primary,
    fontSize: Fonts.size.totalPrice,
    fontFamily: Fonts.type.base,
    fontWeight: Fonts.weight.bold500,
    lineHeight: Metrics.lineHeight.lineHeight24,
  },
  keranjangTextContainer: {
    marginRight: Metrics.marginRight.marginRight8,
    width: Metrics.width.width24,
    height: Metrics.height.height24,
  },
  keranjangButton: {
    width: Metrics.width.width24,
    height: Metrics.height.height24,
    backgroundColor: 'transparent',
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 0,
  },
  keranjangButtonIcon: {
    width: Metrics.width.width24,
    height: Metrics.height.height24,
    color: Colors.disabled,
  },
  coachMarkStyle: {
    position: Metrics.position.type.absolute,
    right: 0,
    top: Metrics.height.height24,
  },
  coachMarkChildrenStyle: {
    width: Metrics.metrics.deviceWidth - 93,
    height: Metrics.height.height54,
    backgroundColor: Colors.snow,
  },
  coachMarkTooltipContainer: {
    left: -93,
  },
  pickerWrapper: {
    ...Metrics.metrics.initMargin,
    flexDirection: Metrics.metrics.row,
    padding: 0,
    justifyContent: Metrics.metrics.center,
    alignItems: Metrics.metrics.center,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  pickerButton: {
    flex: Metrics.flex.defaultFlex,
    flexDirection: Metrics.metrics.row,
    alignItems: Metrics.metrics.center,
    justifyContent: Metrics.metrics.center,
    paddingHorizontal: Metrics.metrics.padding8,
    paddingVertical: Metrics.metrics.padding6,
    backgroundColor: '#2a5ef1',
  },
  chosenText: {
    flex: 0,
    marginLeft: Metrics.metrics.padding8,
    fontSize: Fonts.size.default,
    fontFamily: Fonts.type.base,
    color: Colors.light,
  },
  pickerIcon: {
    fontSize: Fonts.size.big,
    color: Colors.light,
    marginLeft: 20,
  },
  successMsg: {
    alignItems: 'center',
    marginLeft: 0,
    marginRight: 0,
    paddingTop: Metrics.metrics.initPadding.paddingTop,
    justifyContent: Metrics.metrics.flexStart,
  },
});

export default styles;
