// @flow
import { StyleSheet } from 'react-native';

import { Colors, Fonts, Metrics } from '../../Property';

export default StyleSheet.create({
  defaultText: {
    color: Colors.black,
    fontSize: Fonts.size.default,
    fontFamily: Fonts.type.base,
  },
  labelText: {
    color: Colors.black,
    fontSize: Fonts.size.label,
    fontFamily: Fonts.type.base,
    fontWeight: Fonts.weight.bold,
  },
  buttonText: {
    color: Colors.black,
    fontSize: Fonts.size.button,
    fontFamily: Fonts.type.base,
    fontWeight: Fonts.weight.normal,
    paddingLeft: 0,
    paddingRight: 0,
  },
  buttonRedText: {
    color: Colors.danger,
    fontSize: Fonts.size.button,
    fontFamily: Fonts.type.base,
    fontWeight: Fonts.weight.normal,
    paddingLeft: 0,
    paddingRight: 0,
  },
  iconText: {
    color: Colors.background,
    fontSize: Fonts.size.textIconbutton,
    fontFamily: Fonts.type.base,
    fontWeight: Fonts.weight.bold400,
  },
  defaultLightText: {
    color: Colors.background,
  },
  labelLightText: {
    color: Colors.background,
  },
  buttonLightTextEnabled: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.regular,
    color: Colors.light,
  },
  buttonLightTextDisabled: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.regular,
    color: Colors.light,
  },
  buttonDarkText: {
    color: Colors.black_61,
  },
  buttonRedsText: {
    color: Colors.danger,
  },
  buttonAzureText: {
    color: Colors.primary,
  },
  buttonDownloadEnableText: {
    color: Colors.greenAccent,
  },
  buttonDownloadDisableText: {
    color: Colors.grey_bd,
  },
  labelDarkText: {
    color: Colors.dark,
    fontSize: Fonts.size.labelForm,
    fontWeight: Fonts.weight.bold500,
  },
  iconDarkText: {
    color: Colors.dark,
  },
  labelDarkSmallText: {
    color: Colors.dark,
    fontSize: Fonts.size.fontLabel,
    fontWeight: Fonts.weight.normal,
  },
  discountText: {
    color: Colors.primary,
    fontSize: Fonts.size.fontLabel,
    alignSelf: 'center',
  },
  discountLeftText: {
    color: Colors.primary,
    fontSize: Fonts.size.fontLabel,
    paddingHorizontal: 2,
    alignSelf: 'center',
  },
  paymentText: {
    color: Colors.disabled,
    fontSize: Fonts.size.inputValue,
    fontWeight: Fonts.weight.bold500,
    height: Metrics.text.big.height,
  },
  paymentSelectedText: {
    color: Colors.primary,
    fontSize: Fonts.size.inputValue,
    fontWeight: Fonts.weight.bold500,
  },
  buttonGreyText: {
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.inputLabel,
    letterSpacing: 0.4,
    fontWeight: Fonts.weight.bold500,
    color: Colors.lightGray,
    textAlign: 'center',
    lineHeight: 15,
  },
  labelAzureText: {
    fontSize: Fonts.size.big,
    fontWeight: Fonts.weight.bold300,
    color: Colors.primary,
  },
  labelAzureBigText: {
    fontSize: Fonts.size.textMoney,
    fontWeight: Fonts.weight.bold300,
    color: Colors.primary,
  },
  labelAzureLightText: {
    fontFamily: Fonts.type.light,
    fontSize: Fonts.size.maxBig,
    fontWeight: Fonts.weight.normal,
    color: Colors.primary,
  },
  labelDarkBigText: {
    color: Colors.dark,
    fontSize: Fonts.size.default,
    fontWeight: Fonts.weight.normal,
  },
  labelDarkLargeText: {
    color: Colors.black_61,
    fontSize: Fonts.size.default,
    fontWeight: Fonts.weight.normal,
  },
  labelGreyishText: {
    color: Colors.disabled,
    fontSize: Fonts.size.small,
    fontWeight: Fonts.weight.bold500,
  },
  labelErrorText: {
    fontSize: Fonts.size.small,
    color: Colors.danger,
    textAlignVertical: 'center',
    marginTop: 5,
  },
  labelLightOliveGreenText: {
    color: Colors.success,
    fontSize: Fonts.size.small,
    fontWeight: Fonts.weight.bold500,
  },
  BigheadingCenterText: {
    fontSize: Fonts.size.biggest,
    textAlign: 'center',
    color: Colors.grey_42,
    paddingTop: 30,
  },
  headingCenterText: {
    fontSize: Fonts.size.label,
    textAlign: 'center',
    color: Colors.grey_42,
  },
  subheadingCenterText: {
    marginTop: Metrics.marginTop.marginTop10,
    marginHorizontal: 35,
    fontSize: Fonts.size.bigger,
    fontFamily: Fonts.type.base,
    textAlign: 'center',
    lineHeight: Metrics.lineHeight.lineHeight20,
    color: Colors.dark,
  },
  infoDialogTitle: {
    marginTop: 24,
    textAlign: 'center',
    color: Colors.primary,
    fontSize: Fonts.size.maxBig,
    fontWeight: Fonts.weight.bold300,
  },
  light: {
    fontFamily: Fonts.type.light,
  },
  infoDialogDescription: {
    marginTop: 8,
    textAlign: 'center',
    color: Colors.disabled,
    fontSize: Fonts.size.regular,
  },
  dialogResponseMessage: {
    textAlign: 'center',
    color: Colors.disabled,
    fontSize: Fonts.size.regular,
  },
  dialogPopUpMessage: {
    textAlign: 'center',
    color: Colors.black_61,
    fontSize: Fonts.size.regular,
  },
  errorDialogMessage: {
    fontSize: Fonts.size.bigger,
    lineHeight: 18,
    color: Colors.danger,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  boxAddText: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.fontLabel,
    color: Colors.success,
  },
});
