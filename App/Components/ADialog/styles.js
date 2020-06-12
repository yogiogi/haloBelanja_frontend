import { StyleSheet } from 'react-native';
import { Header } from 'react-navigation';

import { Colors, Metrics, Fonts } from '../../Themes';
import { AppConstant } from '../../common/Constants';

const dialoyPopupPaddingTop = Header.HEIGHT - (AppConstant.isIOS ?
  (Metrics.metrics.isIphoneXOrMore ? 0 : Metrics.metrics.statusBarHeight) :
  Metrics.metrics.statusBarHeight);

const styles = StyleSheet.create({
  baseDialogWrapper: {
    alignItems: 'center',
    borderRadius: Metrics.container.dialog.roundedCorner,
    marginLeft: 20,
    marginRight: 20,
  },
  baseDialogButton: {
    marginTop: 20,
    backgroundColor: Colors.primary,
    borderRadius: Metrics.button.dialog.roundedCorner,
  },
  containerStyle: {
    alignItems: 'center',
    width: '100%',
  },
  contentWrapper: {
    width: '100%',
    paddingTop: 22.4,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: Colors.snow,
  },
  infoDialogImage: {
    width: '100%',
    height: 200,
  },
  infoDialogButton: {
    marginTop: 20,
    backgroundColor: Colors.light,
  },
  infoDialogButtonLabel: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.default,
    color: Colors.success,
  },
  infoDialogNoButton: {
    display: 'none',
  },
  responseDialog: {
    marginHorizontal: 10,
    paddingHorizontal: 25,
  },
  responseDialogSpiner: {
    marginBottom: Metrics.marginBottom.marginBottom8,
    alignSelf: 'center',
    height: 'auto',
  },
  responseDialogImage: {
    marginBottom: Metrics.marginBottom.marginBottom8,
    alignSelf: 'center',
  },
  errorDialogWrapper: {
    alignItems: 'center',
    marginLeft: 0,
    marginRight: 0,
    paddingTop: dialoyPopupPaddingTop,
    justifyContent: Metrics.metrics.flexStart,
  },
  errorContentWrapper: {
    paddingTop: 11,
    paddingBottom: 13,
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: Colors.danger,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  successDialogWrapper: {
    alignItems: 'center',
    marginLeft: 0,
    marginRight: 0,
    paddingTop: dialoyPopupPaddingTop,
    justifyContent: Metrics.metrics.flexStart,
  },
  successContentWrapper: {
    flexDirection: Metrics.metrics.row,
    justifyContent: Metrics.metrics.flexStart,
    paddingTop: 17,
    paddingBottom: 17,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 2,
    borderBottomColor: Colors.success,
  },
  successMsgText: {
    ...Metrics.metrics.initPadding,
    textAlign: Metrics.metrics.left,
    fontSize: Fonts.size.default,
    fontFamily: Fonts.type.base,
    fontWeight: Fonts.weight.normal,
    color: Colors.success,
    marginLeft: 20,
  },
  successMsgIcon: {
    justifyContent: Metrics.metrics.center,
    alignSelf: Metrics.metrics.center,
  },
  edcContentWrapper: {
    paddingTop: 47,
    paddingBottom: 75,
    paddingHorizontal: 20,
    justifyContent: Metrics.metrics.flexStart,
  },
  edcDialogImage: {
    alignSelf: 'center',
  },
  edcDialogButton: {
    marginTop: 93,
    backgroundColor: Colors.light,
    borderWidth: 0,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  edcDialogButtonLabel: {
    fontSize: Fonts.size.default,
    fontWeight: Fonts.weight.bold,
    color: Colors.dark,
  },
});

export {
  styles as default,
};
