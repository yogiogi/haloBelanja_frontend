// @flow

import { Button, View, Icon } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialDesignIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Metrics } from '../../Property';
import AText from '../../Components/AText';
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

type PropsLight = {
  title?: string,
  onPress: Function,
  accessibilityLabel?: string,
  tracking?: boolean,
  transparent?: boolean,
  buttonStyle?: any,
  containerStyle?: any,
  disabled?: boolean,
  customTextStyle?: Object,
  iconName?: string,
};

type PropsDarkGrey = {
  title?: string,
  onPress: Function,
  accessibilityLabel?: string,
  tracking?: boolean,
  transparent?: boolean,
};

type PropsRoundedAzure = {
  title?: string,
  onPress: Function,
  accessibilityLabel?: string,
  tracking?: boolean,
  containerStyle?: any,
  buttonStyle?: any,
};

type PropsRoundedDark = {
  title?: string,
  onPress: Function,
  accessibilityLabel?: string,
  tracking?: boolean,
  icon?: string,
  disableBorder?: Boolean,
};

type PropsReloadJenius = {
  title?: string,
  onPress: Function,
  accessibilityLabel?: string,
  tracking?: boolean,
  icon?: string,
  disableBorder?: Boolean,
};

type PropsPicker = {
  title?: string,
  onPress: Function,
  accessibilityLabel?: string,
  tracking?: boolean,
  buttonStyle?: any,
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

type PropsBoxRounded = {
  title?: string,
  onPressFn: Function,
  accessibilityLabel?: string,
  tracking?: boolean,
  icon?: string,
  disabled?: boolean,
  customButtonStyle?: any,
  customTextStyle?: any,
};

type PropsFullRectangle = {
  label?: string,
  onPressFn: Function,
};

type PropsDownloadDisable = {
  title?: string,
  accessibilityLabel?: string,
  tracking?: boolean,
};

type PropsUploadButton = {
  title?: string,
  icon?: string,
  imageSrc: string,
  status?: string,
  accessibilityLabel?: string,
  onPressFn: Function,
};

const onButtonPress = (
  tracking: boolean,
  accessibilityLabel: string,
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

const renderIcons = (icon: string, iconStyle, iconSize) => {
  return (
    icon ? (
      <MaterialDesignIcon
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

AButton.Light = ({
  title, onPress, accessibilityLabel, tracking, transparent,
  buttonStyle, containerStyle, disabled, customTextStyle, iconName,
}: PropsLight) =>
  (
    <AButton
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      tracking={tracking}
      transparent={transparent}
      buttonStyle={[buttonStyle, disabled ? styles.greyButton : null]}
      containerStyle={containerStyle}
      disabled={disabled}
    >
      {iconName ?
        <Icon
          name={iconName}
          style={styles.iconButton}
          accessibilityLabel={`button_${iconName}`}
        /> :
        <AText.Button.Light
          accessibilityLabel={title}
          disabled={disabled}
          text={title}
          customTextStyle={customTextStyle}
        />
      }
    </AButton>
  );

AButton.Dark = ({ title, onPress, accessibilityLabel, tracking, transparent }: PropsDarkGrey) => (
  <AButton
    onPress={onPress}
    accessibilityLabel={accessibilityLabel}
    tracking={tracking}
    transparent={transparent}
  >
    <AText.Button.Dark text={title} />
  </AButton>
);

AButton.Grey = ({ title, onPress, accessibilityLabel, tracking, transparent }: PropsDarkGrey) => (
  <AButton
    bordered
    buttonStyle={styles.greyButton}
    accessibilityLabel={accessibilityLabel}
    onPress={onPress}
    tracking={tracking}
    transparent={transparent}
  >
    <AText.Grey text={title} />
  </AButton>
);

AButton.Rounded = ({ title, onPress, accessibilityLabel, tracking,
  transparent }: PropsDarkGrey) =>
  (
    <AButton
      full={false}
      rounded
      title={title}
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      containerStyle={styles.roundedContainer}
      buttonStyle={styles.roundedButton}
      tracking={tracking}
      transparent={transparent}
    >
      <AText.Button.Light text={title} />
    </AButton >
  );

AButton.Rounded.Azure = ({ title, onPress, accessibilityLabel, tracking,
  buttonStyle, containerStyle }: PropsRoundedAzure) =>
  (
    <AButton
      full
      rounded
      title={title}
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      containerStyle={containerStyle || styles.boxRoundedInnerWrapper}
      buttonStyle={buttonStyle || styles.roundedButtonAzure}
      tracking={tracking}
      transparent
    >
      <AText.Button.Azure text={title} />
    </AButton>
  );

AButton.Rounded.Dark = ({ title, onPress, accessibilityLabel, tracking,
  icon }: PropsRoundedDark) =>
  (
    <AButton
      full
      rounded
      title={title}
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      containerStyle={styles.boxRoundedInnerWrapper}
      buttonStyle={styles.roundedButtonAzure}
      tracking={tracking}
      transparent
    >
      <View style={styles.roundedDarkWrapper}>
        {renderIcon(icon, styles.IconDark)}
        <AText.Button.Dark text={title} />
      </View>
    </AButton>
  );

AButton.Rounded.WarmRed = ({ title, onPress, accessibilityLabel, tracking,
  icon, disableBorder }: PropsRoundedDark) =>
  (
    <AButton
      full={false}
      rounded
      title={title}
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      containerStyle={styles.boxRoundedInnerWrapper}
      buttonStyle={[
        styles.roundedButtonWarmRed,
        disableBorder && styles.roundedButtonWarmRedDisableBorder,
      ]}
      tracking={tracking}
      transparent
    >
      <View style={styles.roundedDarkWrapper}>
        {renderIcons(icon, styles.IconWarmRed)}
        <AText.Button.WarmRed text={title} />
      </View>
    </AButton>
  );

AButton.Picker = ({ title, onPress, accessibilityLabel, tracking, buttonStyle }: PropsPicker) => (
  <AButton
    full
    rounded={false}
    onPress={onPress}
    accessibilityLabel={accessibilityLabel}
    containerStyle={styles.pickerContainer}
    buttonStyle={[styles.pickerButton, buttonStyle]}
    tracking={tracking}
    transparent
  >
    <AText.Button.Dark text={title} />
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

AButton.BoxRounded = ({ title, onPressFn, accessibilityLabel, tracking,
  icon, disabled, customButtonStyle, customTextStyle }: PropsBoxRounded) =>
  (
    <AButton
      title={title}
      onPress={onPressFn}
      accessibilityLabel={accessibilityLabel}
      containerStyle={styles.boxRoundedInnerWrapper}
      buttonStyle={[!disabled ? styles.boxRoundedButtonEnabled : styles.boxRoundedButtonDisabled,
        customButtonStyle]}
      tracking={tracking}
      icon={icon}
      disabled={disabled}
    >
      <AText.Button.Light text={title} disabled={disabled} customTextStyle={customTextStyle} />
    </AButton>
  );

AButton.ReloadJenius = ({ title, onPressFn, accessibilityLabel, tracking,
  icon, disabled, customButtonStyle, customTextStyle }: PropsReloadJenius) =>
  (
    <AButton
      title={title}
      onPress={onPressFn}
      accessibilityLabel={accessibilityLabel}
      containerStyle={styles.pickerContainer}
      buttonStyle={[styles.boxReloadJenius, customButtonStyle]}
      tracking={tracking}
      icon={icon}
      disabled={disabled}
    >
      <AText.Label.LightOliveGreen text={title} disabled={disabled} customTextStyle={customTextStyle} />
    </AButton>
  );

AButton.Discount = ({ title, customButtonStyle, onPress, accessibilityLabel, tracking }: PropsPickerLeftRight) => (
  <AButton
    onPress={onPress}
    accessibilityLabel={accessibilityLabel}
    buttonStyle={[styles.roundedDiscountButton, customButtonStyle]}
    tracking={tracking}
  >
    <AText.Discount text={title} />
  </AButton>
);

AButton.Discount.Clear = ({ title, onPress, accessibilityLabel,
  tracking, customButtonStyle, customTextStyle }: PropsPickerLeftRight) =>
  (
    <AButton
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      buttonStyle={[styles.roundedDiscountClearButton, customButtonStyle]}
      tracking={tracking}
    >
      <AText.Discount text={title} textStyle={customTextStyle} />
    </AButton>
  );

AButton.Discount.Filled = ({
  title, onPress, accessibilityLabel, customTextStyle, tracking, customButtonStyle,
}: PropsPickerLeftRight) =>
  (
    <AButton
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      buttonStyle={[styles.roundedDiscountFilledButton, customButtonStyle]}
      tracking={tracking}
    >
      <AText.Discount text={title} textStyle={customTextStyle} />
    </AButton>
  );

AButton.FullRectangle = ({ label, onPressFn }: PropsFullRectangle) => (
  <AButton
    full
    tracking
    accessibilityLabel={'button-wrapper-' + label}
    containerStyle={styles.fullRectangularWrapper}
    buttonStyle={styles.fullRectangularButton}
    onPress={onPressFn}
  >
    <AText.Label.Dark
      text={label}
      accessibilityLabel={'button-label-' + label}
    />
  </AButton>
);

AButton.DownloadEnable = ({ title, onPress, accessibilityLabel,
  tracking, disabled }: PropsPickerLeftRight) =>
  (
    <AButton
      full
      rounded={false}
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      containerStyle={styles.pickerContainer}
      buttonStyle={[styles.ButtonDownloadEnable, disabled && styles.ButtonDownloadEnableOpacity]}
      tracking={tracking}
      transparent
      disabled={disabled}
    >
      <AText.Button.DownloadEnable text={title} />
    </AButton>
  );

AButton.DownloadDisable = ({ title, accessibilityLabel, tracking }: PropsDownloadDisable) => (
  <AButton
    full
    rounded={false}
    accessibilityLabel={accessibilityLabel}
    containerStyle={styles.pickerContainer}
    buttonStyle={[styles.ButtonDownloadDisable]}
    tracking={tracking}
    transparent
  >
    <AText.Button.DownloadDisable text={title} />
  </AButton>
);

AButton.Rounded.BoxAdd = ({ title, onPressFn, accessibilityLabel, tracking,
  icon }: PropsBoxRounded) => (
    <AButton
      full={false}
      rounded
      title={title}
      onPress={onPressFn}
      accessibilityLabel={accessibilityLabel}
      buttonStyle={styles.roundedButtonBoxAdd}
      tracking={tracking}
      transparent
    >
      <View style={styles.roundedBoxAddWrapper}>
        {renderIcon(icon, styles.iconBoxAdd)}
        <AText.Button.BoxAddText text={title} />
      </View>
    </AButton>
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
AButton.Light.defaultProps = defaultProps;
AButton.Dark.defaultProps = defaultProps;
AButton.Grey.defaultProps = defaultProps;
AButton.Rounded.defaultProps = defaultProps;
AButton.Rounded.Azure.defaultProps = defaultProps;
AButton.Picker.defaultProps = defaultProps;
AButton.Picker.Left.defaultProps = defaultProps;
AButton.Picker.Right.defaultProps = defaultProps;
AButton.BoxRounded.defaultProps = defaultProps;
AButton.Discount.defaultProps = defaultProps;
AButton.Discount.Clear.defaultProps = defaultProps;
AButton.Discount.Filled.defaultProps = defaultProps;
AButton.FullRectangle.defaultProps = defaultProps;
AButton.DownloadEnable.defaultProps = defaultProps;
AButton.DownloadDisable.defaultProps = defaultProps;
AButton.ReloadJenius.defaultProps = defaultProps;

export {
  AButton as default,
  onButtonPress,
};
