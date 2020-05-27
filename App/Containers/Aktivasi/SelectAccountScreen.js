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
import styles from '../Register/styles';

const TITLES: Object = {
  Hai: 'Halo Belanja',
  PlaceholderTelepon: 'Nomer Telepon',
  Nama: 'Nama Lengkap',
  Password: 'Kata Sandi',
};

export class SelectAccountScreen extends Component <React, Props> {
  constructor(props){
    this.state = {
      loginTeleponValue: '',
      loginTeleponMaxLength: 14,
    }
  };

  _setForm = paramsName => (value) => {
    this.setState({
      [paramsName]: value,
    }, this.checkFormToEnableSubmitButton);
  };

  render() {
    return (
      <Container>
          <Image />
          <InputText
              labelName={TITLES.PlaceholderTelepon}
              onChangeText={this._setForm('telepon')}
              value={loginTeleponValue}
              borderStyle={styles.inputTextBorder}
              textStyle={styles.inputText}
              labelStyle={styles.labelText}
              maxLength={this.state.loginTeleponMaxLength}
            />
            <InputText
              labelName={TITLES.Nama}
              onChangeText={this._setForm('namaLengkap')}
              value={loginTeleponValue}
              borderStyle={styles.inputTextBorder}
              textStyle={styles.inputText}
              labelStyle={styles.labelText}
              maxLength={this.state.loginTeleponMaxLength}
            />
            <InputText
              labelName={TITLES.Password}
              onChangeText={this._setForm('password')}
              value={loginTeleponValue}
              borderStyle={styles.inputTextBorder}
              textStyle={styles.inputText}
              labelStyle={styles.labelText}
              maxLength={this.state.loginTeleponMaxLength}
            />
            <View style={styles.ButtonContainer}>
              <TouchableOpacity
                  style={styles.SubmitButtonStyle}
                  activeOpacity = { 0.5 }
                  // onPress={  }
              >
                  <Text style={styles.TextStyle}> Daftar </Text>
              </TouchableOpacity>
            </View>
      </Container>
    )
  }
}

export default SelectAccountScreen;
