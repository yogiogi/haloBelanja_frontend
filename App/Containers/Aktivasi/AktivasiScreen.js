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
import styles from './/styles';
import {Images} from '../../Property';

const TITLES: Object = {
  headText: 'Pilih Metode Verifikasi',
  descriptionText:
    'Pilih salah satu metode dibawah ini untuk mendapatkan kode verifikasi',
  textBox: 'Melalui SMS ke',
};

type Props = {
  navigation: Object,
  resetCreateSuccess: Function,
  trackEvent: Function,
  loginItems: string,
};

export class AktivasiScreen extends Component<React, Props> {
  constructor(props) {
    super(props);
    this.state = {
      loginTeleponValue: '',
      loginTeleponMaxLength: 14,
    };
  }

  _NavigateActivationCode = () => {
    const {state, navigate, goBack} = this.props.navigation;
    navigate('AktivasiCodeScreen');
  };

  render() {
    return (
      <Container style={styles.aktivasiWrapper}>
        <View>
          <Text style={styles.headText}>{TITLES.headText}</Text>
          <Text style={styles.informationText}>{TITLES.descriptionText}</Text>
        </View>
        <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity={0.5}
          onPress={() => this._NavigateActivationCode()}>
          <Image
            source={Images.mailActivation}
            resizeMode="stretch"
            style={styles.headerRightIcon}
          />
          <View style={styles.textOnBox}>
            <Text style={styles.TextStyle}>{TITLES.headText}</Text>
            <Text style={styles.TextStyle}>{this.props.loginItems}</Text>
          </View>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default AktivasiScreen;
