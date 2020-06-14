// @flow

import { StyleSheet } from 'react-native';

import { Colors, Fonts, Metrics } from '../../Property';

export default StyleSheet.create({
  container: {
    flex: Metrics.DataEmptyConstant.primary.container.flex,
    justifyContent: Metrics.DataEmptyConstant.primary.container.justifyContent,
    alignItems: 'center',
  },
  text: {
    justifyContent: Metrics.DataEmptyConstant.primary.title.justifyContent,
    alignSelf: Metrics.DataEmptyConstant.primary.title.alignSelf,
    padding: Metrics.DataEmptyConstant.primary.title.padding,
    fontSize: Metrics.DataEmptyConstant.primary.title.fontSize,
    color: Metrics.DataEmptyConstant.primary.title.color,
  },
  button: {
    justifyContent: Metrics.DataEmptyConstant.primary.button.justifyContent,
    alignSelf: Metrics.DataEmptyConstant.primary.button.alignSelf,
    backgroundColor: Metrics.DataEmptyConstant.primary.button.backgroundColor,
  },
});
