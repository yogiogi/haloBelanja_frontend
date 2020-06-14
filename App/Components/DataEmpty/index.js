// @flow

import React from 'react';
import { View, Text } from 'native-base';
import PropTypes from 'prop-types';

import styles from './styles';

type Props = {
  title: string,
};

export default function DataEmpty(props: Props) {
  const { title } = props;

  return (
    <View style={styles.container}>
      <Text accessible accessibilityLabel="data_empty_text" style={styles.text}>
        {title}
      </Text>
    </View>
  );
}

DataEmpty.propTypes = {
  title: PropTypes.string.isRequired,
};
