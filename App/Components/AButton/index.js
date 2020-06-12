// @flow

import { Button, View, Icon } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialDesignIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Metrics } from '../../Property';
import AText from '../AText';
import styles from './styles';

type Props = {
  title?: string,
  onPress: Function,
  accessibilityLabel?: string,
  icon?: string,
  iconSize?: number,
  containerStyle?: any,
  buttonStyle?: any,
  iconStyle?: any,
  tracking?: boolean,
  full?: boolean,
  rounded?: boolean,
  transparent?: boolean,
  disabled?: boolean,
  children?: any,
  textStyle?: any,
  light?: boolean,
  primary?: boolean,
  success?: boolean,
  info?: boolean,
  warning?: boolean,
  danger?: boolean,
  dark?: boolean,
  customTextStyle?: Object,
  iconName?: string
};

type PropsPickerLeftRight = {
  title?: string,
  onPress: Function,
  accessibilityLabel?: string,
  tracking?: boolean,
  customButtonStyle?: any,
  customTextStyle?: any,
  disabled?: boolean,
};


const onButtonPress = (
  tracking: boolean,
  onPress: Function,
) => {
  if (tracking) {
    // Change with Third-Party Tracking Solution
  }

  onPress();
};

const renderIcon = (icon: string, iconStyle, iconSize) => {
  return (
    icon ? (
      <MaterialIcon
        name={icon}
        style={iconStyle}
        size={iconSize || Metrics.button.default.icon.size}
      />) : null
  );
};

const AButton = (props: Props) => {
  const {
    title, onPress, accessibilityLabel, icon, iconSize,
    containerStyle, buttonStyle, iconStyle, tracking,
    full, rounded, transparent, disabled, textStyle,
    light = false,
    primary = false,
    success = false,
    info = false,
    warning = false,
    danger = false,
    dark = false,
  } = props;
  const theme = {
    light,
    primary,
    success,
    info,
    warning,
    danger,
    dark,
  };
  return (
    <View style={containerStyle}>
      <Button
        full={full}
        rounded={rounded}
        transparent={transparent}
        accessibilityLabel={accessibilityLabel}
        style={buttonStyle}
        onPress={() => onButtonPress(tracking, accessibilityLabel, onPress)}
        disabled={disabled}
        {...theme}
      >
        {props.children || <AText.Button text={title} textStyle={textStyle} />}
        {renderIcon(icon, iconStyle, iconSize)}
      </Button>
    </View>
  );
};

AButton.Picker = ({ title, onPress, accessibilityLabel, tracking, buttonStyle }: PropsPicker) => (
  <AButton
    full
    rounded={false}
    onPress={onPress}
    accessibilityLabel={accessibilityLabel}
    containerStyle={styles.pickerContainer}
    buttonStyle={[styles.pickerButton, buttonStyle]}
    tracking={tracking}
  >
    <AText.Button.Light text={title} />
  </AButton>
);

AButton.Picker.Left = ({ title, onPress, accessibilityLabel, tracking }: PropsPickerLeftRight) => (
  <AButton.Picker
    title={title}
    onPress={onPress}
    accessibilityLabel={accessibilityLabel}
    buttonStyle={styles.pickerButtonLeft}
    tracking={tracking}
    transparent
  />
);

AButton.Picker.Right = ({ title, onPress, accessibilityLabel, tracking }: PropsPickerLeftRight) => (
  <AButton.Picker
    title={title}
    onPress={onPress}
    accessibilityLabel={accessibilityLabel}
    buttonStyle={styles.pickerButtonRight}
    tracking={tracking}
    transparent
  />
);

AButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.string,
  imageSrc: PropTypes.string,
  accessibilityLabel: PropTypes.string,
  containerStyle: PropTypes.any,
  buttonStyle: PropTypes.any,
  iconStyle: PropTypes.any,
  tracking: PropTypes.bool,
  full: PropTypes.bool,
  rounded: PropTypes.bool,
  transparent: PropTypes.bool,
  disabled: PropTypes.bool,
};

const defaultProps = {
  title: '',
  accessibilityLabel: 'action_abutton',
  icon: '',
  containerStyle: styles.defaultContainer,
  buttonStyle: styles.defaultButton,
  iconStyle: styles.defaultIcon,
  tracking: false,
  full: true,
  rounded: false,
  transparent: false,
  disabled: false,
  onPress: () => { },
  children: '',
  label: '',
};

AButton.defaultProps = defaultProps;
AButton.Picker.defaultProps = defaultProps;
AButton.Picker.Left.defaultProps = defaultProps;
AButton.Picker.Right.defaultProps = defaultProps;

export {
  AButton as default,
  onButtonPress,
};
