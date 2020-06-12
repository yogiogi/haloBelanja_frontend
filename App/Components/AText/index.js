// @flow

import React from 'react';
import { Text } from 'native-base';
import PropTypes from 'prop-types';

import styles from './styles';
import { Metrics } from '../../Property';

type Props = {
  text: string | Object,
  accessibilityLabel?: string,
  textStyle?: any,
  numberOfLines?: number,
  ellipsizeMode?: string,
};

const AText = (props: Props) => {
  const { text, accessibilityLabel, textStyle, numberOfLines, ellipsizeMode } = props;

  return (
    <Text
      accessibilityLabel={accessibilityLabel}
      style={textStyle}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      allowFontScaling={false}
    >
      {text}
    </Text>
  );
};

AText.Label = ({ text, accessibilityLabel, textStyle }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={[styles.labelText, textStyle]}
  />
);

AText.Button = ({ text, accessibilityLabel, textStyle }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={[styles.buttonText, textStyle]}
  />
);

AText.Icon = ({ text, accessibilityLabel }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={styles.iconText}
  />
);

AText.Light = ({ text, accessibilityLabel, textStyle }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={[styles.defaultText, styles.defaultLightText, textStyle]}
  />
);

AText.Label.Light = ({ text, accessibilityLabel }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={[styles.labelText, styles.labelLightText]}
  />
);

AText.Label.Dark = ({ text, accessibilityLabel, textStyle }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={[styles.labelText, styles.labelDarkText, textStyle]}
  />
);

AText.Label.Azure = ({ text, accessibilityLabel }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={[styles.labelText, styles.labelAzureText]}
  />
);

AText.Label.Azure.Big = ({ text, accessibilityLabel }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={[styles.labelText, styles.labelAzureBigText]}
  />
);

AText.Label.Azure.Light = ({ text, accessibilityLabel }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={[styles.labelText, styles.labelAzureLightText]}
  />
);

AText.Label.Dark.Small = ({ text, accessibilityLabel }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={[styles.labelText, styles.labelDarkSmallText]}
  />
);

AText.Label.Dark.Big = ({ text, accessibilityLabel }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={[styles.labelText, styles.labelDarkBigText]}
  />
);

AText.Label.Dark.Large = ({ text, accessibilityLabel }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={[styles.labelText, styles.labelDarkLargeText]}
  />
);

AText.Label.Greyish = ({ text, accessibilityLabel }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={styles.labelGreyishText}
  />
);

AText.Label.LightOliveGreen = ({ text, accessibilityLabel }) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={[styles.labelText, styles.labelLightOliveGreenText]}
  />
);

AText.Button.Light = ({ text, accessibilityLabel, customTextStyle, disabled }) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={customTextStyle ? customTextStyle : [styles.buttonText, !disabled ? styles.buttonLightTextEnabled : styles.buttonLightTextDisabled ]}
  />
);

AText.Button.Dark = ({ text, accessibilityLabel }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={[styles.buttonText, styles.buttonDarkText]}
  />
);

AText.Button.WarmRed = ({ text, accessibilityLabel }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={[styles.buttonRedText, styles.buttonRedsText]}
  />
);

AText.Button.Azure = ({ text, accessibilityLabel }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={[styles.buttonText, styles.buttonAzureText]}
  />
);

AText.Button.DownloadEnable = ({ text, accessibilityLabel }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={[styles.buttonText, styles.buttonAzureText]}
  />
);

AText.Button.DownloadDisable = ({ text, accessibilityLabel }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={[styles.buttonText, styles.buttonDownloadDisableText]}
  />
);

AText.Button.BoxAddText = ({ text, accessibilityLabel }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={styles.boxAddText}
  />
);

AText.Icon.Dark = ({ text, accessibilityLabel }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={[styles.iconText, styles.iconDarkText]}
  />
);

AText.Discount = ({ text, accessibilityLabel, textStyle }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={[styles.defaultText, styles.discountText, textStyle]}
  />
);

AText.Discount.Left = ({ text, accessibilityLabel }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={[styles.defaultText, styles.discountLeftText]}
  />
);

AText.Payment = ({ text, accessibilityLabel }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={[styles.labelText, styles.paymentText]}
  />
);

AText.Payment.Active = ({ text, accessibilityLabel }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={[styles.labelText, styles.paymentSelectedText]}
  />
);

AText.Grey = ({ text, accessibilityLabel }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={styles.buttonGreyText}
  />
);

AText.Error = ({ text, accessibilityLabel }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={styles.labelErrorText}
  />
);

AText.Information = ({ text, accessibilityLabel }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
  />
);

AText.Information.Big = ({ text, accessibilityLabel }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={styles.BigheadingCenterText}
  />
);

AText.Information.Title = ({ text, accessibilityLabel }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={styles.headingCenterText}
  />
);

AText.Information.Description = ({ text, accessibilityLabel }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={styles.subheadingCenterText}
  />
);

AText.Information.Title.Dialog = ({ text, accessibilityLabel, light }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={[
      styles.infoDialogTitle,
      light && styles.light,
    ]}
  />
);

AText.Information.Description.Dialog = ({ text, accessibilityLabel }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={styles.infoDialogDescription}
  />
);

AText.Information.Message = ({ text, accessibilityLabel }) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={styles.dialogResponseMessage}
  />
);

AText.Information.PopUp = ({ text, accessibilityLabel }: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={styles.dialogPopUpMessage}
  />
);

AText.Error.Message = ({
  text,
  accessibilityLabel,
  textStyle,
}: Props) => (
  <AText
    text={text}
    accessibilityLabel={accessibilityLabel}
    textStyle={[styles.errorDialogMessage, textStyle]}
  />
);

AText.defaultProps = {
  accessibilityLabel: 'text_atext',
  textStyle: styles.defaultText,
  numberOfLines: Metrics.maxLength.maxLength0,
};

AText.propTypes = {
  accessibilityLabel: PropTypes.string,
  textStyle: PropTypes.any,
  numberOfLines: PropTypes.number,
  ellipsizeMode: PropTypes.string,
};

export {
  AText as default,
};
