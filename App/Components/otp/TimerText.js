import React from 'react';
import {StyleSheet} from 'react-native';
import {
  View,
  Text,
  Image,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from 'react-native';

import {GenericStyles} from '../../styles/GenericStyles';

const TimerText = (props) => {
  const {text, time} = props;

  return (
    <Text
      style={[
        GenericStyles.centerAlignedText,
        styles.resendOtpTimerText,
        GenericStyles.mt24,
      ]}>
      {text}
      <Text style={GenericStyles.bold}>{' ' + time}s</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  resendOtpTimerText: {
    fontSize: 12,
  },
});

export default TimerText;
