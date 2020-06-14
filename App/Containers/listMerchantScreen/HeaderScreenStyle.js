import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../Property';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: Colors.primary,
    paddingLeft: 16,
    paddingRight: 16,
    paddingVertical: 4,
    elevation: 0,
  },
  center: {
    alignSelf: 'center',
  },
  headerLeft: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftIcon: {
    color: Colors.snow,
    width: 24,
    height: 24,
    marginLeft: 0,
    marginRight: 0,
  },
  headerMiddle: {
    width: 248,
  },
  headerMiddleLogo: {
    width: 106,
    height: 18,
  },
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rightButton: {
    width: 21,
    height: 24,
  },
  filterButton: {
    ...Metrics.button.filter,
  },
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: Metrics.metrics.padding30,
  },
  headerTitleText: {
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.label,
    fontWeight: Fonts.weight.bold500,
    color: Colors.snow,
  },
});
