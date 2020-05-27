import {StyleSheet} from 'react-native';

import {Colors, Fonts} from '../Property';

export default StyleSheet.create({
  defaultHeader: {
    backgroundColor: Colors.primary,
    borderBottomWidth: 0,
    elevation: 0,
  },
  transparentHeader: {
    height: 56,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    elevation: 0,
  },
  center: {
    alignSelf: 'center',
  },
  headerRightStyle: {
    width: 24,
  },
  rightButtonText: {
    marginRight: 12,
    color: Colors.light,
    fontFamily: Fonts.type.medium,
    fontWeight: Fonts.weight.bold500,
    fontSize: Fonts.size.medium,
  },
  inactiveRightButtonText: {
    marginRight: 12,
    color: Colors.lostText,
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.medium,
  },
});
