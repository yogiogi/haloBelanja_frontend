// @flow
import { StyleSheet } from 'react-native';

import { Metrics, Colors } from '../../Property';

const circleIconSize = 25;
const circleInputWidth = 50;
const width = (Metrics.input.picker.width * 2) + Metrics.input.picker.input.width;
const widthCircle = (circleIconSize * 2) + circleInputWidth;

export default StyleSheet.create({
  container: {
    width,
    height: Metrics.input.picker.height,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containerCircle: {
    width: widthCircle,
    height: Metrics.input.picker.height,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  inactiveIconStyle: {
    fontSize: circleIconSize,
    color: Colors.grey_d8,
  },
  circleIconStyle: {
    fontSize: circleIconSize,
    color: Colors.primary,
  },
  circleInputStyle: {
    width: circleInputWidth,
    color: Colors.success,
  },
});
