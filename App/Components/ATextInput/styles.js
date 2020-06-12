// @flow
import { StyleSheet } from 'react-native';

import { Metrics, Colors, Fonts } from '../../Property';

export default StyleSheet.create({
  defaultText: {
    width: Metrics.input.default.width,
    height: Metrics.input.default.height,
    color: Colors.black,
    fontSize: Fonts.size.default,
    fontFamily: Fonts.type.base,
    fontWeight: Fonts.weight.bold500,
  },
  defaultLightText: {
    color: Colors.background,
  },
  defaultDarkText: {
    color: Colors.dark,
  },
  containerDarkLarge: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.disabledButton,
    borderWidth: 1,
    borderRadius: Metrics.button.default.cornerRadius,
  },
  containerDarkLargeActive: {
    borderColor: Colors.additionalDiscountBorder,
  },
  defaultDarkLargeText: {
    fontSize: Fonts.size.inputAmount,
  },
  activeDarkLargeText: {
    color: Colors.additionalDiscountBorder,
  },
  pickerContainer: {
    borderColor: Colors.pickerBorder,
    borderTopWidth: Metrics.input.picker.borderWidth,
    borderBottomWidth: Metrics.input.picker.borderWidth,
  },
  pickerText: {
    width: Metrics.input.picker.input.width,
    height: Metrics.input.picker.input.height - (Metrics.input.picker.borderWidth * 2),
    color: Colors.black,
    fontSize: Fonts.size.inputPicker,
    fontFamily: Fonts.type.base,
    paddingTop: 0,
    paddingBottom: 0,
  },
  pickerAzureText: {
    color: Colors.primary,
  },
});
