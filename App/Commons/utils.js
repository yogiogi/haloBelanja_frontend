import {
    PermissionsAndroid,
    NativeModules,
    BackHandler,
    Linking,
    NetInfo,
    UIManager,
    findNodeHandle,
    ActionSheetIOS,
  } from 'react-native';
  
const addBackAndroidListener = (action) => {
    BackHandler.addEventListener('hardwareBackPress', action);
  };
  
  const removeBackAndroidListener = (action) => {
    BackHandler.removeEventListener('hardwareBackPress', action);
  };