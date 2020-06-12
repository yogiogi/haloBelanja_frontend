// @flow
import { StyleSheet } from 'react-native';

import { Metrics, Colors, Fonts } from '../../Property';

export default StyleSheet.create({
  defaultText: {
    width: Metrics.input.default.width,
    height: Metrics.input.default.height,
    color: Colors.PickerNumber,
    fontSize: Fonts.size.default,
    fontFamily: Fonts.type.base,
    fontWeight: Fonts.weight.bold500,
  },
  defaultLightText: {
    color: Colors.PickerNumber,
  },
  defaultDarkText: {
    color: Colors.PickerNumber,
  },
  containerDarkLarge: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.PickerNumber,
    borderWidth: 1,
    borderRadius: Metrics.button.default.cornerRadius,
  },
  containerDarkLargeActive: {
    borderColor: Colors.PickerNumber,
  },
  defaultDarkLargeText: {
    fontSize: Fonts.size.inputAmount,
  },
  activeDarkLargeText: {
    color: Colors.PickerNumber,
  },
  pickerContainer: {
    borderColor: Colors.PickerNumber,
    color: Colors.PickerNumber,
    borderTopWidth: Metrics.input.picker.borderWidth,
    borderBottomWidth: Metrics.input.picker.borderWidth,
  },
  pickerText: {
    width: Metrics.input.picker.input.width,
    height: Metrics.input.picker.input.height - (Metrics.input.picker.borderWidth * 2),
    color: Colors.PickerNumber,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.base,
    paddingTop: 0,
    paddingBottom: 0,
  },
  pickerAzureText: {
    color: Colors.PickerNumber,
  },
});
