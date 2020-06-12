// @flow

import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

type Props = {
  value?: string,
  placeholder?: string,
  maxLength?: number,
  onChangeText: Function,
  onBlur: Function,
  accessibilityLabel?: string,
  keyboardType?: string,
  containerStyle?: any,
  textStyle?: any,
  textAlign?: string,
  regexValidation?: any,
  autoFocus?: boolean,
}

type State = {
  value: string,
}

class ATextInput extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      value: this.props.value || '',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value,
    });
  }

  _onChangeText = (value: string, onChangeText: Function, regexValidation: any) => {
    const val = value.replace(regexValidation, '');
    this.setState({
      value: val,
    });

    onChangeText(val);
  }

  _onBlur(onBlur) {
    const { value } = this.state;
    if (onBlur) {
      onBlur(value);
    }
  }

  render() {
    const { accessibilityLabel, placeholder, maxLength, onChangeText, keyboardType, containerStyle,
      textStyle, textAlign, regexValidation, autoFocus, onBlur } = this.props;
    const { value } = this.state;

    return (
      <View style={containerStyle}>
        <TextInput
          value= '0'
          accessibilityLabel={accessibilityLabel}
          placeholder={placeholder}
          maxLength={maxLength}
          onChangeText={(text) => { this._onChangeText(text, onChangeText, regexValidation); }}
          onBlur={() => this._onBlur(onBlur)}
          keyboardType={keyboardType}
          style={textStyle}
          textAlign={textAlign}
          autoFocus={autoFocus}
        />
      </View>
    );
  }
}

ATextInput.Dark = ({ accessibilityLabel, placeholder, maxLength,
  onChangeText, value, keyboardType, regexValidation }: Props) =>
  (
    <ATextInput
      accessibilityLabel={accessibilityLabel}
      value={`${value}`}
      placeholder={placeholder}
      maxLength={maxLength}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      regexValidation={regexValidation}
      textStyle={[styles.defaultText, styles.defaultDarkText]}
    />
  );

ATextInput.CirclePicker = ({
  accessibilityLabel,
  placeholder,
  maxLength,
  onChangeText,
  value,
  textStyle,
  onBlur,
}: Props) => (
  <ATextInput
    accessibilityLabel={accessibilityLabel}
    value={`${value}`}
    placeholder={placeholder}
    maxLength={maxLength}
    onChangeText={onChangeText}
    onBlur={onBlur}
    keyboardType="numeric"
    textStyle={[styles.pickerText, textStyle]}
    textAlign="center"
    regexValidation={/[^0-9]/g}
  />
);

ATextInput.Picker = ({ accessibilityLabel, placeholder, maxLength,
  onChangeText, value, textStyle, onBlur }: Props) =>
  (
    <ATextInput
      accessibilityLabel={accessibilityLabel}
      value={`${value}`}
      placeholder={placeholder}
      maxLength={maxLength}
      onChangeText={onChangeText}
      onBlur={onBlur}
      keyboardType="numeric"
      containerStyle={styles.pickerContainer}
      textStyle={[styles.pickerText, textStyle]}
      textAlign="center"
      regexValidation={/[^0-9]/g}
    />
  );

ATextInput.Picker.Azure = ({ accessibilityLabel, placeholder,
  maxLength, onChangeText, value, onBlur }: Props) =>
  (
    <ATextInput.Picker
      accessibilityLabel={accessibilityLabel}
      value={value}
      placeholder={placeholder}
      maxLength={maxLength}
      onChangeText={onChangeText}
      onBlur={onBlur}
      textStyle={styles.pickerAzureText}
    />
  );

ATextInput.defaultProps = {
  value: '',
  placeholder: '',
  maxLength: 0,
  accessibilityLabel: 'text_input_abutton',
  keyboardType: 'default',
  containerStyle: {},
  textStyle: styles.defaultText,
  textAlign: 'left',
  regexValidation: undefined,
  autoFocus: false,
};

ATextInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  onChangeText: PropTypes.any.isRequired,
  onBlur: PropTypes.any,
  accessibilityLabel: PropTypes.string,
  keyboardType: PropTypes.string,
  containerStyle: PropTypes.any,
  textStyle: PropTypes.any,
  textAlign: PropTypes.string,
  regexValidation: PropTypes.any,
  autoFocus: PropTypes.bool,
};

export {
  ATextInput as default,
};
