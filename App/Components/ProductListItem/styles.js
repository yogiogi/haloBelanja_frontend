import { StyleSheet } from 'react-native';
import colors from '../../Themes/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
  },
  pickBackgroundColor: {
    backgroundColor: colors.primary,
  },
  imageContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
   },
  thumbnailContainer: {
    width: 56,
    height: 56,
    margin: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grey_da,
  },
  thumbnailContainerIcon: {
    color: 'rgba(255, 255, 255, 0.5)',
  },
  middleContainer: {
    flex: 1,
    paddingTop: 8,
    paddingLeft: 4,
  },
  productNameText: {
    fontSize: 14,
    lineHeight: 16,
    color: colors.coolGrey,
    fontFamily: 'sans-serif',
  },
  productPriceText: {
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 16,
    lineHeight: 24,
    color: colors.charcoalGrey,
    fontFamily: 'sans-serif-medium',
  },
  stockLeftText: {
    width: 50,
    fontSize: 12,
    color: '#58585b',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
  lowStockText: {
    marginLeft: 8,
    fontSize: 12,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#ef5350',
  },
});

export default styles;
