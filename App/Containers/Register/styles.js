import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../Property';

export default StyleSheet.create({
  containerWrapper: {
    backgroundColor: Colors.light,
    marginHorizontal: 40,
    marginTop: 70,
  },
  SubmitButtonStyle: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Colors.header,
    borderRadius: 30,
    width: 120,
  },
  LoginButtonStyle: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Colors.header,
    borderRadius: 10,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    marginTop: 70,
  },
  titleWrapper: {
    fontFamily: Fonts.type.light,
    fontSize: 23,
    lineHeight: 28.8,
    color: Colors.header,
    textAlign: 'center',
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: Fonts.size.medium,
  },
  TextDaftarStyle: {
    color: Colors.daftarText,
    textAlign: 'center',
    fontSize: Fonts.size.medium,
  },
  informationWrapper: {
    marginTop: 50,
    marginBottom: 10,
    fontSize: 15,
    textAlign: 'center',
    color: Colors.listingButton,
    fontFamily: Fonts.type.regular,
    marginLeft: Fonts.size.medium,
  },
  ButtonContainer: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonLoginHelp: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ButtonDaftar: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    color: Colors.inputText,
  },
  labelText: {
    color: Colors.inputText,
  },
  inputPasswordBorder: {
    borderColor: Colors.background,
  },
  inputTextBorder: {
    borderColor: Colors.descriptionText,
    marginTop: 23,
  },
  footerButtonView: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -80,
  },
  sectionTitle: {
    fontSize: 15,
    textAlign: 'center',
    color: Colors.listingButton,
    fontFamily: Fonts.type.regular,
  },
  itemIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});
