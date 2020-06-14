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
import R from 'ramda';
import SInfo from 'react-native-sensitive-info';
// import Share from 'react-native-share';
// import moment from 'moment/min/moment-with-locales';

// import isAllEquals from './isAllEquals';
// import { ReduxPersistSensitiveStorageConfig } from '../Config/ReduxPersist';
// import { Log, DEBUG } from '../../log';
// import DeviceInfo from './deviceInfo';
// import { DEFAULT_ENGLISH_LANG_CODE } from './Utils/LocalizationUtils';
// import { translate } from '../Localization';
import { unixTimestampExportType } from './enums';
// import { AppConstant } from '../common/Constants';


const INDONESIA_CODE = '62';

// function _handleSinglePermission(permissionResult) {
//   const systemMajorVersion = Number(DeviceInfo.getSystemVersion().split('.')[0]);
//   const ANDROID_VERSION_MARSHMALLOW = 6;
//   if (systemMajorVersion >= ANDROID_VERSION_MARSHMALLOW) {
//     return permissionResult === PermissionsAndroid.RESULTS.GRANTED;
//   }
//   return permissionResult;
// }

async function requestRuntimePermission(
  permissionType,
  onPermissionGranted,
  onPermissionDenied,
  rationale = undefined,
) {
  try {
    let granted;
    let flag = false;
    if (Array.isArray(permissionType)) {
      granted = await PermissionsAndroid.requestMultiple(permissionType, rationale);
      const grantedResult = R.filter((grantedItem) => {
        return grantedItem === PermissionsAndroid.RESULTS.GRANTED;
      }, granted);
      if (grantedResult.length === granted.length) {
        flag = true;
      }
    } else {
      granted = await PermissionsAndroid.request(permissionType, rationale);
      flag = _handleSinglePermission(granted);
    }

    if (flag) {
      onPermissionGranted();
    } else {
      onPermissionDenied();
    }
  } catch (err) {
    onPermissionDenied();
  }
}

// const getAllPersistItem = async () => {
//   const values = await SInfo.getAllItems(ReduxPersistSensitiveStorageConfig);
//   Log(DEBUG, values);
// };

// const saveDataInSInfo = async (key: string, value: any) => {
//   SInfo.setItem(key, JSON.stringify(value), ReduxPersistSensitiveStorageConfig);
// };

// const getDataFromSInfo = async (key: string) => {
//   const value = await SInfo.getItem(key, ReduxPersistSensitiveStorageConfig);
//   if (typeof value === 'undefined') {
//     return '';
//   }
//   return JSON.parse(value);
// };

const clearDataFromSInfo = async (key: string) => {
  SInfo.deleteItem(key, ReduxPersistSensitiveStorageConfig);
};

export type ImageCompressionResponse = {
  path: string,
  uri: string,
  name: string,
  size: number,
};

function doCompressImage(
  sourceImagePath: string,
  reqWidth?: number = 0,
  reqHeight?: number = 0,
  outputPath?: string | null = null,
  maxSize?: number = 512000,
): Promise<ImageCompressionResponse> {
  return new Promise((resolve, reject) => {
    NativeModules.ImageCompression.compressImage(
      sourceImagePath,
      reqWidth,
      reqHeight,
      maxSize,
      outputPath,
      resolve,
      reject,
    );
  });
}

// function shareAFileWithIntent(
//   shareTitle: string,
//   shareSubject: string,
//   shareMessage: string,
//   sourceUrl: string,
// ) {
//   const shareFile = {
//     title: shareTitle,
//     message: shareMessage,
//     url: sourceUrl,
//     subject: shareSubject, //  for email
//   };
//   Share.open(shareFile);
// }

const addBackAndroidListener = (action) => {
  // if (!AppConstant.isIOS) {
    BackHandler.addEventListener('hardwareBackPress', action);
  // }
};

const removeBackAndroidListener = (action) => {
  // if (!AppConstant.isIOS) {
    BackHandler.removeEventListener('hardwareBackPress', action);
  // }
};

const disabledDeviceBackAction = () => {
  return true;
};

const formatToCurrency = (
  moneyVal: string | number,
  currencySymbol: string,
  thousandSeparator: string,
  decimalSeparator?: string,
  haveSpace?: boolean,
) => {
  if (typeof moneyVal === 'string' && !moneyVal) {
    return '';
  }

  let inputTmp = moneyVal;
  if (typeof inputTmp === 'string') {
    if (inputTmp.length === 0) {
      return '';
    }

    if (thousandSeparator === '.') {
      inputTmp = inputTmp.replace(/\./g, '');
    }

    if (decimalSeparator && decimalSeparator !== '.') {
      const decimalRegex = RegExp('\\' + decimalSeparator, 'g');
      inputTmp = inputTmp.replace(decimalRegex, '.');
    }

    // Strip out anything that is not a digit, or decimal separator
    inputTmp = inputTmp.replace(/[^0-9.]/g, '');
    // now we can parse.
    inputTmp = Number.parseFloat(inputTmp);
    if (Number.isNaN(inputTmp)) {
      return '';
    }
  }

  inputTmp = inputTmp ? inputTmp.toString() : '0';
  // detect whether the input is in decimal
  const decimalPos = inputTmp.indexOf('.');
  if (decimalPos > 0) {
    // decimal detected
    if (decimalSeparator) {
      inputTmp = inputTmp.replace(/\./g, decimalSeparator);
    } else {
      inputTmp = inputTmp.substr(0, decimalPos); // get rid the decimal value
    }
  }
  const tmpArray: Array<string> = inputTmp.split('');
  const separator = thousandSeparator;
  let scanIdx = (decimalPos > 0 ? decimalPos : tmpArray.length) - 3;
  for (; scanIdx > 0; scanIdx -= 3) {
    tmpArray.splice(scanIdx, 0, separator);
  }

  // insert currencySymbol
  if (typeof haveSpace === 'undefined' || haveSpace) {
    tmpArray.splice(0, 0, currencySymbol + ' ');
  } else {
    tmpArray.splice(0, 0, currencySymbol + '');
  }

  return tmpArray.join('');
};

const zeroSize = (value) => {
  const length = 2;
  const newValue = String(value);
  const result = newValue.length < length ? '0' + newValue : newValue;
  return result;
};

const checkNetworkStatus = (onNetActive, onNetInactive) => {
  NetInfo.getConnectionInfo().then((connectionInfo) => {
    if (connectionInfo.type === 'cellular' || connectionInfo.type === 'wifi') {
      onNetActive();
    } else {
      onNetInactive();
    }
  });
};

const _openUrl = (url: string) => {
  Linking.canOpenURL(url).then((supported) => {
    if (supported) {
      Linking.openURL(url);
    }
  });
};

const romanize = (inputNum: number) => {
  let num = inputNum;
  let result = '';
  const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  for (let i = 0; i <= decimal.length; i += 1) {
    // looping over every element of our arrays
    while (num % decimal[i] < num) {
      // keep trying the same number until it won't fit anymore
      result += roman[i];
      // add the matching roman number to our result string
      num -= decimal[i];
      // remove the decimal value of the roman number from our number
    }
  }
  return result;
};

const getDayName = (dayNumber: number) => {
  const DAY_OF_WEEK = [
    'Minggu',
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    'Jumat',
    'Sabtu',
  ];
  return DAY_OF_WEEK[dayNumber % DAY_OF_WEEK.length];
};

const formatDateByTime = (time) => {
  if (time) {
    const now = new Date();
    now.setTime(time);
    const year = now.getFullYear();
    const month = zeroSize(now.getMonth() + 1);
    const date = zeroSize(now.getDate());
    const hour = zeroSize(now.getHours());
    const minute = zeroSize(now.getMinutes());
    const second = zeroSize(now.getSeconds());
    return `${date}/${month}/${year} ${hour}:${minute}:${second}`;
  }
  return '';
};

// const getLocaleByDevice = (initialLocale) => {
//   const defaultLocal = initialLocale || DEFAULT_ENGLISH_LANG_CODE;
//   const locale = DeviceInfo.getDeviceLocale() ? DeviceInfo.getDeviceLocale() : defaultLocal;
//   const localesArr = moment.locales();
//   if (localesArr.indexOf(locale.toLowerCase()) > -1) {
//     if (locale.toLowerCase().indexOf('en') > -1) {
//       return DEFAULT_ENGLISH_LANG_CODE;
//     }
//     return locale;
//   }

//   return DEFAULT_ENGLISH_LANG_CODE;
// };

// const formatUnixTimeToDateString = (unixDate, intendedFormat) => {
//   moment.locale(translate('common.localeSymbol'));
//   if (String(unixDate).length === 13) {
//     return moment(unixDate).format(intendedFormat);
//   }
//   return moment.unix(unixDate).format(intendedFormat);
// };

const strToInt = (strValue, defaultValue = 0, radix = 10) => {
  const checkedValue = Number.parseInt(strValue, radix);
  const checkedDefaultValue = Number.parseInt(defaultValue, radix);

  if (Number.isNaN(checkedValue)) {
    if (Number.isNaN(checkedDefaultValue)) {
      return 0;
    }
    return checkedDefaultValue;
  }

  return checkedValue;
};

// const showToolbarActions = (reference, labels, errorCb, successCb) => {
//   if (AppConstant.isIOS) {
//     const options = labels;
//     options.push(translate('common.actionSheetsCancel'));
//     ActionSheetIOS.showActionSheetWithOptions({
//       options,
//       cancelButtonIndex: options.length - 1,
//     }, (buttonIndex) => {
//       if (buttonIndex !== options.length - 1) {
//         successCb(null, buttonIndex);
//       }
//     });
//   } else {
//     UIManager.showPopupMenu(
//       findNodeHandle(reference),
//       labels,
//       errorCb,
//       successCb,
//     );
//   }
// };

// const generateUnixTimestamp = (type = unixTimestampExportType.UNIX_MILLISECONDS, dateData) => {
//   moment.locale(translate('common.localeSymbol'));

//   if (type === unixTimestampExportType.UNIX_MILLISECONDS) {
//     return moment(dateData || []).valueOf();
//   } else if (type === unixTimestampExportType.UNIX_SECONDS) {
//     return moment(dateData || []).unix();
//   }

//   return 0;
// };

// const generateFormattedDate = (format = '', dateData) => {
//   moment.locale(translate('common.localeSymbol'));

//   return moment(dateData || []).format(format);
// };

const addObjToEditable = (myObj, isEditable) => {
  for (let i = 0; i < myObj.length; i++) {
    myObj[i] = { ...myObj[i], 'isEditable': isEditable };
  }
  return myObj;
};

const formatPhoneToString = (phone) => {
  return phone.replace(/(.{4})/g, '$1-').replace(/-$/gi, '');
};

const shortNameFn = (fullName) => {
  const arr = fullName.split(' ');
  let shortName = '';
  arr.forEach((item) => {
    shortName += item.substr(0, 1);
  });
  return shortName.substr(0, 2).toUpperCase();
};

const getFullAddress = ({ line1, village, district, city, stateOrProvince, country }) => {
  const completeAddress = [];
  line1 && completeAddress.push(line1);
  village && completeAddress.push(village);
  city && completeAddress.push(city);
  district && completeAddress.push(district);
  stateOrProvince && completeAddress.push(stateOrProvince);
  country && completeAddress.push(country);
  return completeAddress.join(', ');
};

const showNumbers = (number, maxNumber) => {
  return maxNumber && number > maxNumber ? `(${maxNumber}+)` : `(${number})`;
};

const checkArraysHaveSameFactors = (a1, a2) => {
  if ((!a1 && a2) || (a1 && !a2)) return false;
  if (a1.length !== a2.length) return false;
  a1 = [].concat(a1);
  a2 = [].concat(a2);
  a1 = a1.sort();
  a2 = a2.sort();
  for (var i = 0, n = a1.length; i < n; i++) {
    if (a1[i] !== a2[i]) return false;
  }
  return true;
};

const replaceIDCountryCode = (number) => {
  if (/^0\d{9,13}$/.test(number)) {
    return number.replace(0, INDONESIA_CODE);
  }

  return number;
};

export {
  requestRuntimePermission,
  doCompressImage,
  clearDataFromSInfo,
  // shareAFileWithIntent,
  // saveDataInSInfo,
  // getDataFromSInfo,
  // isAllEquals,
  addBackAndroidListener,
  removeBackAndroidListener,
  disabledDeviceBackAction,
  formatToCurrency,
  zeroSize,
  checkNetworkStatus,
  _openUrl,
  romanize,
  // getAllPersistItem,
  getDayName,
  formatDateByTime,
  // getLocaleByDevice,
  // formatUnixTimeToDateString,
  strToInt,
  // showToolbarActions,
  // generateUnixTimestamp,
  // generateFormattedDate,
  addObjToEditable,
  formatPhoneToString,
  shortNameFn,
  getFullAddress,
  showNumbers,
  checkArraysHaveSameFactors,
  replaceIDCountryCode
};
