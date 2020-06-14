// @flow

import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Property';

export default StyleSheet.create({
  container: {
    position: Metrics.position.type.absolute,
    alignItems: Metrics.metrics.center,
    justifyContent: Metrics.metrics.flexEnd,
    width: Metrics.metrics.deviceWidth,
    backgroundColor: 'transparent',
    elevation: Metrics.elevation.elevation1,
  },
  content: {
    backgroundColor: Colors.snow,
    width: Metrics.metrics.deviceWidth,
    height: Metrics.metrics.deviceHeight,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    alignItems: Metrics.metrics.center,
    justifyContent: Metrics.metrics.flexStart,
    backgroundColor: Colors.black,
  },
});
