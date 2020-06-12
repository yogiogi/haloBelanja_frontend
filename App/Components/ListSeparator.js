// @flow
import React from 'react';
import { View } from 'react-native';

import { Colors } from '../Property';

type Props = {
  width?: string,
  height?: number,
  color?: string,
};

export default function ListSeparator(props: Props) {
  const { width, height, color: backgroundColor } = props;

  return (
    <View
      style={{ width, height, backgroundColor }}
    />
  );
}

ListSeparator.defaultProps = {
  width: '100%',
  height: 1,
  color: Colors.background,
};
