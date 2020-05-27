import {Dimensions} from 'react-native';
import {exp} from 'react-native-reanimated';
const {heght, width} = Dimensions.get('window');

const type = {
  base: 'Roboto',
  regular: 'Roboto-Regular',
  medium: 'Roboto-Medium',
  light: 'Roboto-Light',
  bold: 'Roboto-Bold',
};

const size = {
  medium: 14,
  small: 10,
  extraSmall: 8,
  large: 18,
  extraLarge: 20,
};

const weight = {
  bold: 'bold',
  bold100: '100',
  bold300: '300',
  bold400: '400',
  bold500: '500',
  normal: 'normal',
};

export default {
  type,
  size,
  weight,
};
