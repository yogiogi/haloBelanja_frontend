// @flow
import React from 'react';
import { View, Image, Text } from 'react-native';
import Modal from 'react-native-modal';

import SpinnerButton from '../SpinnerButton/Index';
import Images from '../../Property';
import AText from '../../Components/AText';
import AButton from '../../Components/AButton';
import styles from './styles';

type ADialogStaticProps = {
  accessibilityLabel: string,
  isDialogVisible: boolean,
  backButtonFn?: Function,
  backdropFn?: Function,
  modalStyle?: any,
  children: any,
  animationIn?: string,
  animationOut?: string,
  customContentStyle: Object,
  backdropColor?: string,
};

type InformationStaticDialogProps = {
  isDialogVisible?: boolean,
  imageSource?: number | null,
  infoTitle?: string,
  infoDescription?: string,
  buttonLabel?: string,
  backButtonFn?: () => void | null,
  backdropFn?: () => void | null,
  positiveButtonFn?: () => void,
  customStyles: Object
};

type PopUpTimeoutStaticDialogProps = {
  isDialogVisible?: boolean,
  imageSource?: number | null,
  infoTitle?: string,
  infoDescription?: string,
  buttonLabel?: string,
  backButtonFn?: () => void | null,
  backdropFn?: () => void | null,
  positiveButtonFn?: () => void,
  customStyles: Object,
  children: any
};

type ErrorDialogProps = {
  accessibilityLabel: string,
  isDialogVisible?: boolean,
  responseMessage?: string,
  backdropFn?: Function,
  backdropColor?: string,
  modalStyle?: Object,
  contentStyle?: Object,
  animationIn?: Object,
  animationOut?: Object,
};

type SuccessDialogProps = {
  accessibilityLabel: string,
  isDialogVisible?: boolean,
  responseMessage?: string,
  backdropFn?: Function,
  backdropColor?: string,
  modalStyle?: Object,
  contentStyle?: Object,
  animationIn?: Object,
  animationOut?: Object,
  icon?: any,
};

type PropsResponseDialog = {
  accessibilityLabel: string,
  isDialogVisible?: boolean,
  imageSource?: string,
  responseTitle: string,
  responseMessage?: string,
  backButtonFn?: Function,
  backdropFn?: Function,
  isLoading?: boolean,
  isSuccess?: boolean,
  buttonLabel?: string,
  onPositiveButtonPress: any,
  onPositiveMessageStyle?: boolean,
  modalStyle: any,
};

type PropsPopUpDialog = {
  isDialogVisible?: boolean,
  message?: string,
  backButtonFn?: Function,
  backdropFn?: Function,
  buttonLabel?: string,
  onButtonPress?: Function,
  modalStyle: any,
  additionComponent?: any,
};

type EDCDisconnectedDialogProps = {
  accessibilityLabel?: string,
  customContentStyle?: any,
  isDialogVisible?: boolean,
  imageSource?: number | null,
  edcTitle?: string,
  edcDescription?: string,
  buttonLabel?: string,
  backButtonFn?: () => void | null,
  backdropFn?: () => void | null,
  positiveButtonFn?: () => void,
};

const defaultEmptyFunction = () => { };
const defaultAnimationIn = {
  slideInUp: 'slideInUp',
  slideInDown: 'slideInDown',
};
const defaultAnimationOut = {
  slideOutDown: 'slideOutDown',
  slideOutUp: 'slideOutUp',
};
const defaultBackDropColor = 'black';

const ADialogStatic = ({
  accessibilityLabel,
  isDialogVisible,
  backButtonFn,
  backdropFn,
  children,
  modalStyle,
  customContentStyle,
  animationIn,
  animationOut,
  backdropColor,
}: ADialogStaticProps) => {
  return (
    <Modal
      accessibilityLabel={accessibilityLabel}
      style={modalStyle}
      isVisible={isDialogVisible}
      onBackButtonPress={backButtonFn}
      onBackdropPress={backdropFn}
      animationIn={animationIn}
      animationOut={animationOut}
      backdropColor={backdropColor}
    >
      <View
        accessibilityLabel="aDialogStatic_wrapper_baseContainer"
        style={[styles.contentWrapper, customContentStyle]}
      >
        {children}
      </View>
    </Modal>
  );
};

ADialogStatic.Information = ({
  isDialogVisible,
  imageSource,
  infoTitle,
  infoDescription,
  buttonLabel,
  backButtonFn,
  backdropFn,
  positiveButtonFn,
  customStyles = styles,
}: InformationStaticDialogProps) => (
  <ADialogStatic
    isDialogVisible={isDialogVisible}
    backButtonFn={backButtonFn}
    backdropFn={backdropFn}
  >
    <Image
      accessibilityLabel="aDialogStatic_infoImage_informationDialog"
      resizeMode="contain"
      resizeMethod="resize"
      style={customStyles.infoDialogImage}
      source={imageSource}
    />
    <AText.Information.Title.Dialog
      text={infoTitle}
      accessibilityLabel="aDialogStatic_textTitle_informationDialog"
    />
    <AText.Information.Description.Dialog
      text={infoDescription}
      accessibilityLabel="aDialogStatic_textDescription_informationDialog"
    />
    <AButton.Light
      accessibilityLabel="aDialogStatic_buttonLabel_informationDialog"
      title={buttonLabel}
      onPress={positiveButtonFn}
      tracking={false}
      transparent
      buttonStyle={customStyles.infoDialogButton}
      containerStyle={{}}
      customTextStyle={customStyles.infoDialogButtonLabel}
    />
  </ADialogStatic>
);

ADialogStatic.PopUpTimeout = ({
  isDialogVisible,
  imageSource,
  infoTitle,
  infoDescription,
  buttonLabel,
  backButtonFn,
  backdropFn,
  positiveButtonFn,
  children,
  customStyles = styles,
}: PopUpTimeoutStaticDialogProps) => {
  return (
    <ADialogStatic
      isDialogVisible={isDialogVisible}
      backButtonFn={backButtonFn}
      backdropFn={backdropFn}
    >
      <Image
        accessibilityLabel="aDialogStatic_infoImage_popUpTimeoutDialog"
        resizeMode="contain"
        resizeMethod="resize"
        style={customStyles.infoDialogImage}
        source={imageSource}
      />
      <AText.Information.Title.Dialog
        text={infoTitle}
        accessibilityLabel="aDialogStatic_textTitle_popUpTimeoutDialog"
      />
      <AText.Information.Description.Dialog
        text={infoDescription}
        accessibilityLabel="aDialogStatic_textDescription_popUpTimeoutDialog"
      />
      <View>
        {children}
      </View>
      <AButton.Light
        accessibilityLabel="aDialogStatic_buttonLabel_popUpTimeoutDialog"
        title={buttonLabel}
        onPress={positiveButtonFn}
        tracking={false}
        transparent
        buttonStyle={customStyles.infoDialogButton}
        containerStyle={{}}
        customTextStyle={customStyles.infoDialogButtonLabel}
      />
    </ADialogStatic>
  );
};

ADialogStatic.Response = ({
  accessibilityLabel,
  isDialogVisible,
  imageSource,
  responseTitle,
  responseMessage,
  isLoading,
  isSuccess,
  backButtonFn,
  backdropFn,
  buttonLabel,
  onPositiveButtonPress,
  onPositiveMessageStyle,
  modalStyle,
}: PropsResponseDialog) => {
  let image = imageSource;
  if (isSuccess) {
    image = Images.payment.success;
  }
  return (
    <ADialogStatic
      accessibilityLabel={accessibilityLabel}
      isDialogVisible={isDialogVisible}
      backButtonFn={backButtonFn}
      backdropFn={backdropFn}
      modalStyle={modalStyle}
    >
      {isLoading ?
        (<SpinnerButton
          accessible
          accessibilityLabel="aDialog_spinnerButton_loading"
          style={styles.responseDialogSpiner}
        />) :
        (image && <Image
          accessibilityLabel="aDialog_image_icon"
          resizeMode="contain"
          style={styles.responseDialogImage}
          source={image}
        />)
      }
      {
        responseTitle ? <AText.Information.Title.Dialog
          text={responseTitle}
          accessibilityLabel="ADialogStatic_responseTitle"
        /> : null
      }
      {(onPositiveMessageStyle) ?
        (<AText.Information.Title.Dialog
          text={responseMessage}
          accessibilityLabel="ADialogStatic_text_titleMessage"
        />) :
        (<AText.Information.Message
          text={responseMessage}
          accessibilityLabel="aDialog_text_message"
        />)
      }
      {(onPositiveButtonPress && buttonLabel) ?
        <AButton.Light
          accessibilityLabel="aDialog_aButton_positiveButton"
          title={buttonLabel}
          onPress={onPositiveButtonPress}
          tracking={false}
          transparent
          buttonStyle={styles.baseDialogButton}
          containerStyle={styles.containerStyle}
        />
        : null}
    </ADialogStatic>
  );
};

ADialogStatic.PopUpMessage = ({
  isDialogVisible,
  message,
  backButtonFn,
  backdropFn,
  buttonLabel,
  onButtonPress,
  modalStyle,
  additionComponent,
}: PropsPopUpDialog) => {
  return (
    <ADialogStatic
      isDialogVisible={isDialogVisible}
      backButtonFn={backButtonFn}
      backdropFn={backdropFn}
      modalStyle={modalStyle}
    >
      <AText.Information.PopUp
        text={message}
        accessibilityLabel="aDialog_text_informationMessage"
      />
      <AButton.Light
        accessibilityLabel="aDialog_aButton_Button"
        title={buttonLabel}
        onPress={onButtonPress}
        tracking={false}
        transparent
        buttonStyle={styles.baseDialogButton}
        containerStyle={{}}
      />
      { additionComponent }
    </ADialogStatic>
  );
};

ADialogStatic.Error = ({
  accessibilityLabel,
  isDialogVisible,
  responseMessage,
  backdropFn,
  backdropColor,
  modalStyle,
  contentStyle,
  animationIn,
  animationOut,
}: ErrorDialogProps) => {
  return (
    <ADialogStatic
      accessibilityLabel={accessibilityLabel}
      isDialogVisible={isDialogVisible}
      backdropFn={backdropFn}
      modalStyle={modalStyle}
      customContentStyle={contentStyle}
      animationIn={animationIn}
      animationOut={animationOut}
      backdropColor={backdropColor}
    >
      <AText.Error.Message
        accessibilityLabel="aDialog_text_errorMessage"
        text={responseMessage}
      />
    </ADialogStatic>
  );
};

ADialogStatic.Success = ({
  accessibilityLabel,
  isDialogVisible,
  responseMessage,
  backdropFn,
  backdropColor,
  modalStyle,
  contentStyle,
  animationIn,
  animationOut,
  icon,
}: SuccessDialogProps) => {
  return (
    <ADialogStatic
      accessibilityLabel={accessibilityLabel}
      isDialogVisible={isDialogVisible}
      backdropFn={backdropFn}
      modalStyle={modalStyle}
      customContentStyle={contentStyle}
      animationIn={animationIn}
      animationOut={animationOut}
      backdropColor={backdropColor}
    >
      {
        icon && <Image
          accessibilityLabel="aDialog_image_successIcon"
          style={styles.successMsgIcon}
          source={icon}
        />
      }
      <AText
        accessibilityLabel="aDialog_text_successMessage"
        textStyle={styles.successMsgText}
        text={responseMessage}
      />
    </ADialogStatic>
  );
};

ADialogStatic.EDCDisconnected = ({
  accessibilityLabel,
  customContentStyle,
  isDialogVisible,
  imageSource,
  edcTitle,
  edcDescription,
  buttonLabel,
  backButtonFn,
  backdropFn,
  positiveButtonFn,
}: EDCDisconnectedDialogProps) => (
  <ADialogStatic
    accessibilityLabel={accessibilityLabel}
    isDialogVisible={isDialogVisible}
    backButtonFn={backButtonFn}
    backdropFn={backdropFn}
    customContentStyle={customContentStyle}
  >
    <Image
      accessibilityLabel="aDialogStatic_infoImage_edcDisconnected"
      resizeMode="contain"
      style={styles.edcDialogImage}
      source={imageSource}
    />
    <AText.Information.Title.Dialog
      text={edcTitle}
      accessibilityLabel="aDialogStatic_textTitle_edcDisconnected"
      light
    />
    <AText.Information.Message
      text={edcDescription}
      accessibilityLabel="aDialog_text_message"
    />
    <AButton
      accessibilityLabel="aDialogStatic_buttonLabel_edcDisconnected"
      title={buttonLabel}
      onPress={positiveButtonFn}
      tracking={false}
      transparent
      buttonStyle={styles.edcDialogButton}
      textStyle={styles.edcDialogButtonLabel}
    />
  </ADialogStatic>
);

const informationStaticDialogDefault = {
  isDialogVisible: false,
  imageSource: null,
  infoTitle: '',
  infoDescription: '',
  buttonLabel: '',
  backButtonFn: defaultEmptyFunction,
  backdropFn: defaultEmptyFunction,
  positiveButtonFn: defaultEmptyFunction,
};

const popUpTimeoutStaticDialogDefault = {
  isDialogVisible: false,
  imageSource: null,
  infoTitle: '',
  infoDescription: '',
  buttonLabel: '',
  backButtonFn: defaultEmptyFunction,
  backdropFn: defaultEmptyFunction,
  positiveButtonFn: defaultEmptyFunction,
};

const errorDefaults = {
  isDialogVisible: false,
  responseMessage: '',
  backdropFn: defaultEmptyFunction,
  animationIn: defaultAnimationIn.slideInDown,
  animationOut: defaultAnimationOut.slideou,
  backdropColor: 'transparent',
  modalStyle: styles.errorDialogWrapper,
  contentStyle: styles.errorContentWrapper,
};

const successDefaults = {
  isDialogVisible: false,
  responseMessage: '',
  backdropFn: defaultEmptyFunction,
  animationIn: defaultAnimationIn.slideInDown,
  animationOut: defaultAnimationOut.slideou,
  backdropColor: 'transparent',
  modalStyle: styles.successDialogWrapper,
  contentStyle: styles.successContentWrapper,
  icon: false,
};

const responseDefaults = {
  isDialogVisible: false,
  imageSource: Images.unsuccessIllustration,
  responseMessage: '',
  backButtonFn: defaultEmptyFunction,
  backdropFn: defaultEmptyFunction,
  isLoading: false,
  isSuccess: false,
  onPositiveMessageStyle: false,
};

const popUpMessageDefault = {
  isDialogVisible: false,
  message: '',
  backButtonFn: defaultEmptyFunction,
  backdropFn: defaultEmptyFunction,
  buttonLabel: '',
  onButtonPress: null,
  additionComponent: null,
};

const dialogStaticDefaults = {
  backButtonFn: defaultEmptyFunction,
  backdropFn: defaultEmptyFunction,
  modalStyle: styles.baseDialogWrapper,
  animationIn: defaultAnimationIn.slideInUp,
  animationOut: defaultAnimationOut.slideOutUp,
  backdropColor: defaultBackDropColor,
};

const edcDisconnectedDialogDefault = {
  isDialogVisible: false,
  imageSource: null,
  edcTitle: '',
  edcDescription: '',
  buttonLabel: '',
  backButtonFn: defaultEmptyFunction,
  backdropFn: defaultEmptyFunction,
  positiveButtonFn: defaultEmptyFunction,
  customContentStyle: styles.edcContentWrapper,
};

ADialogStatic.defaultProps = dialogStaticDefaults;
ADialogStatic.Information.defaultProps = informationStaticDialogDefault;
ADialogStatic.PopUpTimeout.defaultProps = popUpTimeoutStaticDialogDefault;
ADialogStatic.Response.defaultProps = responseDefaults;
ADialogStatic.PopUpMessage.defaultProps = popUpMessageDefault;
ADialogStatic.Error.defaultProps = errorDefaults;
ADialogStatic.Success.defaultProps = successDefaults;
ADialogStatic.EDCDisconnected.defaultProps = edcDisconnectedDialogDefault;

export {
  ADialogStatic,
};
