import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {Container, Footer, Button} from 'native-base';
import {NavigationActions, StackActions} from 'react-navigation';

import styles from './styles';
import InputText from '../../Components/FormComponent/InputText';
import InputPassword from '../../Components/FormComponent/InputPassword';
import {Images} from '../../Property';

type Props = {
  navigation: Object,
  resetCreateSuccess: Function,
  trackEvent: Function,
};

const TITLES: Object = {
  Hai: 'Halo Belanja',
  PlaceholderTelepon: 'No. Handphone atau email',
  Daftar: 'Daftar',
  Atau: 'atau daftar dengan',
  Login: 'Sudah punya akun?',
};

export class RegisterPhoneScreen extends Component<React, Props> {
  constructor(props) {
    super(props);
    this.state = {
      loginTeleponEmailValue: '',
      loginMasukDisable: true,
      errors: {},
      isForbidToSubmitForm: true,
    };
  }

  _setForm = (paramsName) => (value) => {
    this.setState(
      {
        [paramsName]: value,
      },
      this.checkFormToEnableSubmitButton,
    );
  };

  checkFormToEnableSubmitButton = () => {
    const {loginTeleponEmailValue} = this.state;
    if (loginTeleponEmailValue) {
      return this.setState({
        isForbidToSubmitForm: false,
      });
    }
    return this.setState({
      isForbidToSubmitForm: true,
    });
  };

  _NavigateAktivasiScreen = () => {
    const {state, navigate, goBack} = this.props.navigation;
    navigate('AktivasiScreen');
  };

  _NavigateDaftar = () => {
    const {state, navigate, goBack} = this.props.navigation;
    navigate('LoginTeleponScreen');
  };

  render() {
    const {
      loginTeleponEmailValue,
      password,
      errors,
      isForbidToSubmitForm,
      loginTeleponMaxLength,
    } = this.state;
    return (
      <View style={styles.containerWrapper}>
        <Text style={styles.titleWrapper}>{TITLES.Hai.toUpperCase()}</Text>
        <View style={styles.wrapper}>
          <InputText
            labelName={TITLES.PlaceholderTelepon}
            onChangeText={this._setForm('telepon')}
            value={loginTeleponEmailValue}
            borderStyle={styles.inputTextBorder}
            textStyle={styles.inputText}
            labelStyle={styles.labelText}
          />
        </View>
        <View style={styles.ButtonContainer}>
          <TouchableOpacity
            style={styles.SubmitButtonStyle}
            activeOpacity={0.5}
            onPress={() => this._NavigateAktivasiScreen()}>
            <Text style={styles.TextStyle}> Daftar </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.informationWrapper}>{TITLES.Atau}</Text>
        <View style={styles.ButtonLoginHelp}>
          <TouchableOpacity style={styles.LoginButtonStyle} activeOpacity={0.5}>
            <Image
              style={styles.itemIcon}
              resizeMode="contain"
              source={Images.google}
            />
            <Text style={styles.TextStyle}> GOOGLE </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.LoginButtonStyle}
            activeOpacity={0.5}
            // onPress={  }
          >
            <Image
              style={styles.itemIcon}
              resizeMode="contain"
              source={Images.facebook}
            />
            <Text style={styles.TextStyle}> FACEBOOK </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerButtonView}>
          <Text style={styles.sectionTitle}>Sudah punya akun? </Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => this._NavigateMasuk()}>
            <Text style={styles.TextDaftarStyle}> Masuk </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default RegisterPhoneScreen;
