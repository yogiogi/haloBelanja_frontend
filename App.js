import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  InteractionManager,
  Keyboard,
} from 'react-native';
import {Button, Icon} from 'native-base';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {RegisterPhoneScreen, RegisterScreen} from './App/Containers/Register';
import {
  AktivasiKodeScreen,
  AktivasiScreen,
  SelectAccountScreen,
} from './App/Containers/Aktivasi';
import LoginTeleponScreen from './App/Containers/Login';
import listMerchantScreen from './App/Containers/listMerchantScreen';

import {Colors, Fonts} from './App/Property';
import HeaderStyle from './App/Navigation/headerStyle';

type Props = {
  navigation: Object,
};

const defaultNavigationOptions = {
  headerForceInset: { top: 'never' },
};

const backButton = (navigation) => {
  return (
    <Button
      style={HeaderStyle.center}
      transparent
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon
        name="arrow-back"
        type="MaterialIcons"
        style={{color: Colors.background}}
      />
    </Button>
  );
};

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0,
  },
});

const merchantStack = createStackNavigator(
  {
    listMerchantScreen: ({
      screen: listMerchantScreen,
      navigationOptions: () => ({
        header: null,
      }),
      transitionConfig: noTransitionConfig,
    })
  },
);

const loginStack = createStackNavigator(
  {
    LoginTeleponScreen: {
      screen: LoginTeleponScreen,
      navigationOptions: () => ({
        header: null,
      }),
      transitionConfig: noTransitionConfig,
    },
    RegisterPhoneScreen: {
      screen: RegisterPhoneScreen,
      navigationOptions: () => ({
        header: null,
      }),
      transitionConfig: noTransitionConfig,
    },
    AktivasiScreen: {
      screen: AktivasiScreen,
      navigationOptions: ({navigation}) => ({
        headerTitle: 'Aktivasi Akun',
        headerStyle: {backgroundColor: Colors.header, elevation: 0},
        headerTintColor: Colors.header,
        gesturesEnabled: false,
        headerLeft: backButton(navigation),
        headerTitleStyle: {fontSize: Fonts.size.large},
      }),
      transitionConfig: noTransitionConfig,
    },
    AktivasiCodeScreen: {
      screen: AktivasiKodeScreen,
      navigationOptions: ({navigation}) => ({
        headerTitle: 'Aktivasi Akun',
        headerStyle: {backgroundColor: Colors.header, elevation: 0},
        headerTintColor: Colors.header,
        gesturesEnabled: false,
        headerLeft: backButton(navigation),
        headerTitleStyle: {fontSize: Fonts.size.large},
      }),
      transitionConfig: noTransitionConfig,
    },

    RegisterScreen: {
      screen: RegisterScreen,
      navigationOptions: ({navigation}) => ({
        headerTitle: 'Daftar Dengan Nomer Ponsel',
        headerStyle: {backgroundColor: Colors.header, elevation: 0},
        headerTintColor: Colors.header,
        gesturesEnabled: false,
        headerLeft: backButton(navigation),
        headerTitleStyle: {fontSize: Fonts.size.large},
      }),
      transitionConfig: noTransitionConfig,
    },
    SelectAccountScreen: {
      screen: SelectAccountScreen,
      navigationOptions: ({navigation}) => ({
        headerTitle: 'Pilih Jenis Akun',
        headerStyle: {backgroundColor: Colors.header, elevation: 0},
        headerTintColor: Colors.header,
        gesturesEnabled: false,
        headerLeft: backButton(navigation),
        headerTitleStyle: {fontSize: Fonts.size.large},
      }),
      transitionConfig: noTransitionConfig,
    },
  },
  {
    headerMode: 'screen',
    defaultNavigationOptions,
  },
);

const PrimaryNav = createStackNavigator({
  loginStack: {
    screen: loginStack,
    navigationOptions: () =>({
      gestureEnabled: false,
    }),
  },
  merchantStack: {
    screen: merchantStack,
    navigationOptions: () =>({
      gestureEnabled: false,
    }),
  },
})
export default createAppContainer(merchantStack);
