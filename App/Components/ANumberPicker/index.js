// @flow
import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';

import AButton from '../AButton';
import ATextInput from '../ATextInput';
import styles from './styles';

type Props = {
  value?: any,
  maxLength?: number,
  onChangeText?: Function,
  onBlur?: Function,
  limitValue?: number,
  onLeftPress?: Function,
  onRightPress?: Function,
  isCircle?: boolean,
  containerStyle?: any,
}

type State = {
  value: number,
}

const INCREMENT_DEFAULT = 1;
const MIN_VALUE = 1;
const MAX_VALUE = 9999;

export default class ANumberPicker extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      value: props.value || 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  _onPressMinus = (value: any, onChangeText: Function) => {
    const newValue = String(value).replace(/[^0-9]/g, '');
    const val = newValue > MIN_VALUE ? parseInt(newValue, 10) - INCREMENT_DEFAULT : 0;

    this.setState({
      value: val,
    });

    onChangeText(val);
  }

  _onPressPlus = (value: any, onChangeText: Function) => {
    const newValue = String(value).replace(/[^0-9]/g, '');
    const val = newValue >= MAX_VALUE ?
      parseInt(MAX_VALUE, 10) : newValue ?
        parseInt(newValue, 10) + INCREMENT_DEFAULT : INCREMENT_DEFAULT;

    this.setState({
      value: val,
    });

    onChangeText(val);
  }

  _onChangeText = (value: number, onChangeText: Function) => {
    const { limitValue } = this.props;
    const newValue = String(value).replace(/[^0-9]/g, '');
    let val = newValue ? parseInt(newValue, 10) : 0;

    if (limitValue && val > limitValue) {
      val = limitValue;
    }

    this.setState({
      value: val,
    });

    onChangeText(val);
  }

  _onLeftPress = (onLeftPress, value, onChangeText) => {
    if (onLeftPress) {
      onLeftPress();
    } else {
      this._onPressMinus(value, onChangeText);
    }
  }

  _onRightPress = (onRightPress, value, onChangeText) => {
    if (onRightPress) {
      onRightPress();
    } else {
      this._onPressPlus(value, onChangeText);
    }
  }

  render() {
    const { maxLength, onChangeText, onBlur, onLeftPress, onRightPress } = this.props;
    const { value } = this.state;

    return (
        <View style={styles.container}>
          <AButton.Picker.Left
            title="-"
            onPress={() => { this._onLeftPress(onLeftPress, value, onChangeText); }}
          />
          <ATextInput.Picker.Azure
            value={value}
            maxLength={maxLength}
            onChangeText={(text) => { this._onChangeText(text, onChangeText); }}
            onBlur={onBlur}
          />
          <AButton.Picker.Right
            title="+"
            onPress={() => { this._onRightPress(onRightPress, value, onChangeText); }}
          />
        </View>
    );
  }
}

ANumberPicker.defaultProps = {
  value: 0,
  maxLength: 0,
  onChangeText: undefined,
  onBlur: undefined,
  limitValue: undefined,
  onLeftPress: undefined,
  onRightPress: undefined,
  isCircle: false,
  containerStyle: undefined,
};

ANumberPicker.propTypes = {
  value: PropTypes.any,
  maxLength: PropTypes.number,
  onChangeText: PropTypes.any,
  onBlur: PropTypes.any,
  limitValue: PropTypes.number,
  onLeftPress: PropTypes.any,
  onRightPress: PropTypes.any,
  isCircle: PropTypes.bool,
  containerStyle: PropTypes.any,
};
