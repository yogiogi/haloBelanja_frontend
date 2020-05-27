import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../../Property';

export default StyleSheet.create({
  sectionContainer: {
    paddingLeft: 15,
    borderColor: Colors.listingButton,
  },
  labelStyle: {
    color: Colors.inputText,
    fontSize: Fonts.size.medium,
    fontWeight: Fonts.weight.normal,
    fontFamily: Fonts.type.regular,
  },
  inputFloatingText: {
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.medium,
    color: Colors.inputText,
    textAlign: 'left',
    lineHeight: 24,
    minHeight: 58,
    marginLeft: 5,
  },
  inputError: {
    borderColor: Colors.lostText,
  },
  inputSection: {
    fontFamily: Fonts.type.base,
    fontWeight: Fonts.weight.bold500,
    fontSize: Fonts.size.extraSmall,
  },
  errorText: {
    fontSize: Fonts.size.small,
    color: Colors.lostText,
    textAlignVertical: 'center',
  },
});
