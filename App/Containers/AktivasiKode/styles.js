import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../Property';

export default StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  imageHeader: {
    marginTop: 40,
  },
  otpText: {
    fontWeight: 'bold',
    color: Colors.header,
    fontSize: 18,
    width: '100%',
  },
  otpResendButton: {
    alignItems: 'center',
    width: '100%',
    marginTop: 16,
  },
  otpResendButtonText: {
    color: Colors.header,
    textTransform: 'none',
    textDecorationLine: 'underline',
  },
  SubmitButtonStyle: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: Colors.header,
    borderRadius: 10,
    height: 90,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  ActivateButtonStyle: {
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: Colors.header,
    borderRadius: 10,
    height: 40,
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextStyle: {
    fontSize: Fonts.size.medium,
    color: Colors.background,
    textAlign: 'left',
  },
  headText: {
    fontSize: Fonts.size.extraLarge,
    textAlign: 'center',
    marginBottom: 10,
  },
  headerTextWrapper: {
    marginTop: 15,
  },
  headerIcon: {
    width: 68,
    height: 68,
    alignItems: 'center',
  },
  headerRightIcon: {
    width: 68,
    height: 68,
    marginLeft: 18,
  },
  textOnBox: {
    marginLeft: 10,
  },
  informationText: {
    fontSize: Fonts.size.large,
    color: Colors.listingButton,
    fontFamily: Fonts.type.regular,
    paddingHorizontal: 40,
    textAlign: 'center',
    marginBottom: 35,
  },
  tungguWrapper: {
    fontSize: Fonts.size.medium,
    color: Colors.listingButton,
    fontFamily: Fonts.type.regular,
    paddingHorizontal: 40,
    textAlign: 'center',
    marginTop: 20,
  },
  ButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  ButtonLoginHelp: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputText: {
    color: Colors.labelText,
  },
  labelText: {
    color: Colors.labelText,
  },
  inputPasswordBorder: {
    borderColor: Colors.background,
    marginTop: 32,
  },
  inputTextBorder: {
    borderColor: Colors.background,
    marginTop: 23,
  },
});
