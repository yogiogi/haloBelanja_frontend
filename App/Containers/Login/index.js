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
import InputPassword from '../../Components/FormComponent/InputPassword';
import InputText from '../../Components/FormComponent/InputText';
import {Images} from '../../Property';
import styles from './styles';

type PropsType = {
  fetching: boolean,
  success: boolean,
  error: Object,
  navigation: Object,
  clearError: Function,
  initialSuccess: Function,
  createProduct: Function,
  updateProduct: Function,
  trackEvent: Function,
  detail: Object,
  makeGoBackFunc: Function,
  coachMarkProps: Object,
};

const TITLES: Object = {
  Hai: 'Halo Belanja',
  PlaceholderTelepon: 'Nomer Telepon',
  PlaceholderPaswword: 'Kata Sandi',
  Masuk: 'Masuk',
  Atau: 'atau masuk dengan',
  Register: 'Belum daftar',
};

export class LoginTeleponScreen extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      loginTeleponEmailValue: '',
      loginMasukDisable: true,
      password: '',
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
    const {loginTeleponValue, password} = this.state;
    if (loginTeleponValue && password) {
      return this.setState({
        isForbidToSubmitForm: false,
      });
    }
    return this.setState({
      isForbidToSubmitForm: true,
    });
  };

  _navigateLogin = () => {
    const {navigation, trackEvent} = this.props;
    navigation.navigate('RegisterPhoneScreen');
  };

  render() {
    const {
      loginTeleponEmailValue,
      password,
      errors,
      isForbidToSubmitForm,
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
          <InputPassword
            labelName={TITLES.PlaceholderPaswword}
            onChangeText={this._setForm('password')}
            value={password}
            borderStyle={styles.inputTextBorder}
            textStyle={styles.inputText}
            labelStyle={styles.labelText}
          />
        </View>
        <View style={styles.ButtonContainer}>
          <TouchableOpacity
            style={styles.SubmitButtonStyle}
            activeOpacity={0.5}
            // onPress={  }
          >
            <Text style={styles.TextStyle}> Masuk </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.informationWrapper}>{TITLES.Atau}</Text>
        <View style={styles.ButtonLoginHelp}>
          <TouchableOpacity
            style={styles.LoginButtonStyle}
            activeOpacity={0.5}
            onPress={this._navigateLogin()}>
            <Image
              style={styles.itemIcon}
              resizeMode="contain"
              source={Images.google}
            />
            <Text style={styles.TextStyle}> Facebook </Text>
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
            <Text style={styles.TextStyle}> Google </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerButtonView}>
          <Text style={styles.sectionTitle}>Belum punya akun? </Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => this._navigateLogin()}>
            <Text style={styles.TextDaftarStyle}> Daftar </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LoginTeleponScreen;
