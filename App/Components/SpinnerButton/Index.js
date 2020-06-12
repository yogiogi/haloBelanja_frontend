import React from 'react';
import { View } from 'react-native';
import { Spinner } from 'native-base';
import styles from './styles.js/SpinnerButtonStyle';
import { Colors } from '../Themes';
// @flow
type Props = {
  style: Object,
  color: string,
}
const SpinnerButton = (props: Props) => {
  const { style, color } = props;
  return (
    <View style={[styles.spinner, style]}>
      <Spinner color={color || Colors.primary} />
    </View>
  );
};

export default SpinnerButton;
