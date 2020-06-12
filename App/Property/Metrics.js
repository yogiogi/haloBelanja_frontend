import { Dimensions, Platform, NativeModules } from 'react-native';

// iPhoneX
const X_WIDTH = 375;
const X_HEIGHT = 812;

// iPhoneXR
const XR_WIDTH = 414;
const XR_HEIGHT = 896;
const { StatusBarManager } = NativeModules;
const isIphoneX = () => {
  return (
    Platform.OS === 'ios' &&
    ((Dimensions.get('window').height === X_HEIGHT && Dimensions.get('window').width === X_WIDTH) ||
      (Dimensions.get('window').height === X_WIDTH && Dimensions.get('window').width === X_HEIGHT) ||
      (Dimensions.get('window').height === XR_HEIGHT && Dimensions.get('window').width === XR_WIDTH) ||
      (Dimensions.get('window').height === XR_WIDTH && Dimensions.get('window').width === XR_HEIGHT))
  );
};

const metrics = {
  initPadding: {
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
  },
  initMargin: {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
  },
  normalPadding: 12,
  padding0: 0,
  padding4: 4,
  padding5: 5,
  padding6: 6,
  padding7: 7,
  padding8: 8,
  padding9: 9,
  padding10: 10,
  padding11: 11,
  padding12: 12,
  padding14: 14,
  padding15: 15,
  padding16: 16,
  padding18: 18,
  padding20: 20,
  padding24: 24,
  padding25: 25,
  padding28: 28,
  padding30: 30,
  padding35: 35,
  padding50: 50,
  padding160: 160,
  padding215: 215,
  margin20: 20,
  margin0: 0,
  margin2: 2,
  margin3: 3,
  margin5: 5,
  margin6: 6,
  margin7: 7,
  margin8: 8,
  margin9: 9,
  width21: 21,
  margin10: 10,
  margin12: 12,
  margin13: 13,
  margin15: 15,
  margin16: 16,
  margin17: 17,
  margin24: 24,
  margin30: 30,
  margin46: 46,
  margin48: 48,
  margin52: 52,
  margin60: 60,
  margin104: 104,
  margin200: 200,
  deviceWidth: Dimensions.get('window').width,
  deviceHeight: Dimensions.get('window').height,
  statusBarHeight: Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT,
  safeAreHeight: Platform.OS === 'ios' && isIphoneX() ? 24 : 0,
  isIphoneXOrMore: isIphoneX(),
  percentMultiplier10: 0.1,
  percentMultiplier30: 0.3,
  percentMultiplier85: 0.85,
  left: 'left',
  right: 'right',
  center: 'center',
  column: 'column',
  columnReverse: 'column-reverse',
  row: 'row',
  rowReverse: 'row-reverse',
  spaceBetween: 'space-between',
  spaceAround: 'space-around',
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  wrap: 'wrap',
  lineThrough: 'line-through',
};

const height = {
  height1: 1,
  height2: 2,
  height9: 9,
  height16: 16,
  height19: 19,
  height20: 20,
  height21: 21,
  height24: 24,
  height26: 26,
  height28: 28,
  height30: 30,
  height32: 32,
  heightbuttonSmallGreen: 33,
  height35: 35,
  height36: 36,
  height34: 34,
  height40: 40,
  height45: 45,
  height48: 48,
  height49: 49,
  height50: 50,
  height52: 52,
  height54: 54,
  height56: 56,
  height59: 59,
  height60: 60,
  height62: 62,
  height63: 63,
  height68: 68,
  height70: 70,
  height72: 72,
  height79: 79,
  height80: 80,
  height88: 88,
  height96: 96,
  height100: 100,
  height107: 107,
  height112: 112,
  height114: 114,
  height135: 135,
  height140: 140,
  height142: 142,
  height170: 170,
  height200: 200,
  height216: 216,
  height260: 260,
  height280: 280,
  height284: 284,
  height300: 300,
  height410: 410,
  height420: 420,
  height440: 440,
  heightFullScreen: '100%',
};

const width = {
  width100: '100%',
  width95: '95%',
  width80: '80%',
  width71: '71%',
  width70: '70%',
  width53: '53%',
  width50: '50%',
  width39: '39%',
  width31: '31%',
  width21: '21%',
  width19: 19,
  width32: 32,
  width62: 62,
  width60: 60,
  width72: 72,
  width88: 88,
  width94: 94,
  width120: 120,
  width24: 24,
  width8: 8,
  width9: 9,
  width16: 16,
  width_18: 18,
  width_19: 19,
  width_24: 24,
  width_26: 26,
  width_28: 28,
  width_30: 30,
  width_48: 48,
  width_50: 50,
  width_54: 54,
  width_56: 56,
  width_70: 70,
  width_73: 73,
  width_140: 140,
  width_166: 166,
  width_200: 200,
  width_230: 230,
  width_240: 240,
  width_264: 264,
  width_280: 280,
  width_320: 320,
  width10Percent: '10%',
};

const lineHeight = {
  lineHeightLabel: 1.6,
  lineHeight18: 18,
  lineHeight20: 20,
  lineHeight21: 21,
  lineHeight24: 24,
  lineHeight26: 26,
  lineHeight28: 28,
  lineHeight30: 30,
};

const borderRadius = {
  borderRadius8: 8,
  borderRadius4: 4,
  borderRadius5: 5,
  borderRadius3: 3,
  borderRadius10: 10,
  borderRadius31: 31,
  borderRadius35: 35,
  borderRadius36: 36,
  borderRadius44: 44,
  borderRadius50: 50,
};

const borderWidth = {
  default: 1,
  borderWidth0: 0,
  borderWidth1: 1,
  widthHalf: 0.5,
  borderWidth2: 2,
  borderWidth4: 4,
};

const paddingTop = {
  paddingTopItemContainer: 8,
  paddingTopInputText: 12,
  paddingTop14: 14,
  paddingTop24: 24,
  paddingTop30: 30,
};

const paddingLeft = {
  paddingLeft15: 15,
  paddingLeft16: 16,
  paddingLeft20: 20,
};

const paddingRight = {
  paddingRight8: 8,
  paddingRight16: 16,
  paddingRight18: 18,
  paddingRight20: 20,
};

const paddingHorizontal = {
  paddingHorizontal60: 60,
};

const paddingBottom = {
  paddingBottom8: 8,
};

const marginTop = {
  marginTop22: 22,
  marginTop24: 24,
  marginTop19: 19,
  marginTop14: 14,
  marginTop10: 10,
  marginTop12: 12,
  marginTop4: 4,
  marginTop5: 5,
  marginTop6: 6,
  marginTop86: 86,
  marginTop16: 16,
  marginTop80: 80,
};

const marginBottom = {
  marginBottom2: 2,
  marginBottom8: 8,
  marginBottom15: 15,
  marginBottom16: 16,
  marginBottom26: 26,
  marginBottom27: 27,
  marginBottom10: 10,
  marginBottomViewSection: 21,
  marginBottom24: 24,
};

const marginLeft = {
  marginLeft4: 4,
  marginLeft5: 5,
  marginLeft10: 10,
  marginLeft12: 12,
  marginLeft15: 15,
  marginLeft16: 16,
  marginLeft20: 20,
  marginLeft29: 29,
  marginLeft50: 50,
};

const marginRight = {
  marginRight0: 0,
  marginRight5: 5,
  marginRight8: 8,
  marginRight10: 10,
  marginRight15: 15,
  marginRight31: 31,
  marginRight38: 38,
  marginRight40: 40,
  marginRight50: 50,
};

const marginHorizontal = {
  popupImage: 116,
  popupText: 28,
  buttonSmallGreen: 40,
};

const container = {
  dialog: {
    wrapperWidth: 320,
    roundedCorner: 8,
  },
  fullDialog: {
    wrapperWidth: '100%',
    wrapperHeight: metrics.deviceHeight - 150,
    wrapperLeft: 0,
    wrapperTop: 150 / 4,
  },
  default: {
    padding: 16,
    margin: 16,
  },
  alignCenter: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const button = {
  dialog: {
    roundedCorner: 4,
  },
  default: {
    width: '100%',
    height: 56,
    icon: {
      size: 18,
    },
    cornerRadius: 4,
    borderWidth: 1,
  },
  rounded: {
    width: 176,
    height: 36,
    borderWidth: 1,
    cornerRadius: 3,
    minWidth: 100,
  },
  picker: {
    width: 36,
    height: 36,
    cornerRadius: 3,
    borderWidth: 1,
  },
  plusMinus: {
    width: 36,
    height: 36,
  },
  discount: {
    height: 28,
  },
  footerModalIcon: {
    width: 40,
    height: 40,
  },
  filter: {
    width: 22,
    height: 22,
    marginRight: 21,
  },
  edit: {
    width: '100%',
    height: 32,
  },
};

const input = {
  default: {
    width: '100%',
    height: 56,
    padding: 16,
    borderWidth: 1,
  },
  picker: {
    width: 36,
    height: 36,
    borderWidth: 1,
    input: {
      width: 42,
      height: 36,
    },
  },
};

const divider = {
  default: {
    width: '100%',
    height: 1,
  },
  small: {
    height: 0.5,
  },
};

const text = {
  big: {
    height: 20,
  },
  textAlignCenter: 'center',
};

const thumbnail = {
  width: 56,
  height: 56,
  borderRadius: 3,
};

const thumbnailCart = {
  width: 36,
  height: 36,
  borderRadius: 3,
};

const icon = {
  width: 24,
  height: 24,
};

const buttonIcon = {
  width: 14,
  height: 14,
  marginRight: 5,
};

const elevation = {
  footer: 10,
  elevation0: 0,
  elevation1: 1,
  elevation10: 10,
};

const logo = {
  width: 88,
  height: 88,
};

const headerIcon = {
  width: 18,
  height: 21,
  marginHorizontal: 7,
  marginRight: 17,
};

const itemIcon = {
  width: 17,
  alignItems: 'flex-end',
};

const flex = {
  defaultFlex: 1,
  flex02: 0.2,
  flex04: 0.4,
  flex05: 0.5,
  flex08: 0.8,
  flex2: 2,
  flex1: 1,
  flex4: 4,
};

const itemWrapper = {
  default: {
    flexGrow: 2,
    height: 24,
  },
};

const modalMenu = {
  popupHeight: '100%',
};

const popupWrapper = {
  oval: {
    width: 88,
    height: 88,
    borderWidth: 4,
    borderColor: '#00a4de',
    borderRadius: 44,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  newOval: {
    width: 88,
    height: 88,
    borderWidth: 4,
    borderColor: '#2a5ef1',
    borderRadius: 44,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
};

const clearIcon = {
  position: 'absolute',
  top: 60,
  right: 0,
  opacity: 0.3,
};

const position = {
  type: {
    relative: 'relative',
    absolute: 'absolute',
  },
  top: {
    top_50: -50,
    top_10: -10,
    top0: 0,
    top12: 12,
    top18: 18,
    top50p: '50%',
  },
  bottom: {
    bottom0: 0,
    bottom10: 10,
    bottom30: 30,
  },
  left: {
    left0: 0,
    left10: 10,
    left_9: -9,
  },
  right: {
    right_18: -18,
    right0: 0,
    right8: 8,
    right10: 10,
    right12: 12,
    right15: 15,
    right16: 16,
    right17: 17,
  },
};

const loadMore = {
  default: {
    marginTop: 10,
  },
};

const chooseType = {
  contentView: {
    width: '60%',
  },
  imgView: {
    width: '40%',
  },
  typeButton: {
    width: '75%',
    height: 33,
  },
  itemView: {
    width: '100%',
  },
};

const comingSoon = {
  popupContainer: {
    width: 290,
    height: 200,
  },
  popupClose: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 22,
    height: 22,
    zIndex: 99,
  },
};

const minLength = {
  minLength3: 3,
  minLength10: 10,
  minLength58: 58,
};

const maxLength = {
  maxLength0: 0,
  maxLength1: 1,
  maxLength2: 2,
  maxLength3: 3,
  maxLength15: 15,
  maxLength50: 50,
  maxLength100: 100,
  maxLength200: 200,
  maxLength255: 255,
};

const pictureBox = {
  width: metrics.deviceWidth,
  height: 216,
};

const image = {
  small: {
    width: 28,
    height: 28,
  },
};

const format = {
  thousand: 1000,
};

const opacity = {
  opacity04: 0.4,
  opacity05: 0.5,
};

const qrCode = {
  size200: 200,
};

let screenWidth = Dimensions.get('window').width < Dimensions.get('window').height ? Dimensions.get('window').width : Dimensions.get('window').height;
let screenHeight = Dimensions.get('window').width < Dimensions.get('window').height ? Dimensions.get('window').height : Dimensions.get('window').width;

const breakpoints = {
  extraSmall: 360,
  small: 414,
  medium: 630,
  large: 960,
  extraLarge: 1024,
  iphone5: 320
};

const heightBreakPoints = {
  small: 640,
  medium: 720,
  extraLarge: 1920,
};

const isExtraSmallDevice = screenWidth < breakpoints.extraSmall;
const isSmallDevice = screenWidth < breakpoints.small;
const isMediumDevice = screenWidth < breakpoints.medium;

const isExtraLargeHeight = screenHeight >= heightBreakPoints.extraLarge;
const isLargeDevice = screenWidth < breakpoints.large;
const isIphone5 = screenWidth < breakpoints.iphone5;

const base = {
  width: 375,
  height: 667,
  pixelRatio: 2,
  fontScale: 2
};

const screenSize = {
  base: Math.sqrt((base.height * base.height) + (base.width * base.width)),
  current: Math.sqrt((Dimensions.get('window').height * Dimensions.get('window').height) + (Dimensions.get('window').width * Dimensions.get('window').width))
};

const scaleWidth = w => ((w / 375) * Dimensions.get('window').width);
const scaleHeight = h => ((h / 667) * Dimensions.get('window').height);
const scaleSize = size => (size / screenSize.base) * screenSize.current;

export default {
  metrics,
  button,
  input,
  divider,
  container,
  thumbnail,
  thumbnailCart,
  text,
  height,
  width,
  lineHeight,
  borderRadius,
  borderWidth,
  paddingTop,
  paddingLeft,
  paddingRight,
  paddingHorizontal,
  paddingBottom,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginHorizontal,
  elevation,
  icon,
  logo,
  buttonIcon,
  headerIcon,
  itemIcon,
  flex,
  itemWrapper,
  loadMore,
  modalMenu,
  popupWrapper,
  clearIcon,
  position,
  chooseType,
  comingSoon,
  minLength,
  maxLength,
  pictureBox,
  image,
  format,
  opacity,
  qrCode,
  isExtraSmallDevice,
  isSmallDevice,
  isMediumDevice,
  isExtraLargeHeight,
  isLargeDevice,
  isIphone5,
  scaleSize,
  scaleWidth,
  scaleHeight,
};
