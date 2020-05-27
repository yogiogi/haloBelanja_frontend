import React, {Component} from 'react';
import OtpVerification from '../../Components/otp/OtpVerification';

const TITLES: Object = {
  headText: 'Masukkan kode verifikasi',
  descriptionEmailText: 'Kode aktivasi telah dikirimkan melalui Email ke',
  descriptionSMSText: 'Kode aktivasi telah dikirimkan melalui SMS ke',
  textBox: 'Aktivasi',
  textInfo: 'Mohon tunggu dalam 60 detik untuk kirim ulang',
};

type Props = {
  destinationRequest: Object,
  sentToEmail: boolean,
};

export class AktivasiKodeScreen extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      loginValue: '',
      requestToEmail: false,
      destinationRequest: '',
      otp: '',
    };
  }

  _NavigateSelectAccount = () => {
    const {navigate} = this.props.navigation;
    navigate('AktivasiKodeScreen');
  };

  render() {
    return <OtpVerification />;
  }
}

export default AktivasiKodeScreen;
