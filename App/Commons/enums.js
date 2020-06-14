import images from "../Property/Images";

export const ellipsizeModeEnum = {
  HEAD: "head",
  MIDDLE: "middle",
  TAIL: "tail",
};

export const dataSource = [
  {
    id: 1,
    namaMerchant: "Toko Abadi Jaya",
    statusImage: images.merchant_list.activeMerchant,
    status: "active",
    grade: images.grade,
    tokoOnline: [
      {
        id: 1,
        link: "https://www.bukalapak.com/",
        images: images.onlineShop.bukalapak,
      },
      {
        id: 2,
        link: "https://www.tokopedoa.com/",
        images: images.onlineShop.tokopedia,
      },
      {
        id: 3,
        link: "https://www.shopee.com/",
        images: images.onlineShop.shopee,
      },
    ],
    price: "Rp 2.223",
    income: "profit",
    category: "aktif",
  },
  {
    id: 2,
    namaMerchant: "Toko Sinar Jaya",
    statusImage: images.merchant_list.profitMerchant,
    status: "profit",
    grade: images.grade,
    tokoOnline: [
      {
        id: 1,
        link: "https://www.bukalapak.com/",
        images: images.onlineShop.bukalapak,
      },
      {
        id: 2,
        link: "https://www.tokopedoa.com/",
        images: images.onlineShop.tokopedia,
      },
    ],
    price: "Rp 1.234",
    income: "loss",
    category: "profit",
  },
  {
    id: 3,
    namaMerchant: "Mangbros",
    statusImage: images.merchant_list.listMerchant,
    status: "loss",
    grade: images.grade,
    tokoOnline: [
      {
        id: 1,
        link: "https://www.bukalapak.com/",
        images: images.onlineShop.bukalapak,
      },
    ],
    price: "Rp 1.123",
    income: "profit",
    category: "listing",
  },
];

/*
 * @flow
 */
import { CashlezPayment } from '@jenius2/bisniskit-cashlez-wrapper-library';
import { Images } from '../Themes/';

import { translate } from '../Localization';

export const PaymentMethodEnum = {
  CASH: { method: 'LOCAL', type: 'CASH', extra: '' },
  JENIUS_CAHSTAG: { method: 'LOCAL', type: 'JENIUS', extra: 'CASHTAG' },
  DEBIT_CARD_PIN: {
    method: 'CASHLEZ',
    type: 'DEBIT_CARD',
    extra: 'PIN',
    cashlezMode: CashlezPayment.PAYMENT_VERIFICATION_MODE_PIN,
    cashlezType: CashlezPayment.PAYMENT_TRANSACTION_TYPE_DEBIT,
  },
  DEBIT_CARD_TTD: {
    method: 'CASHLEZ',
    type: 'DEBIT_CARD',
    extra: 'TTD',
    cashlezMode: CashlezPayment.PAYMENT_VERIFICATION_MODE_SIGNATURE,
    cashlezType: CashlezPayment.PAYMENT_TRANSACTION_TYPE_DEBIT,
  },
  CREDIT_CARD_PIN: {
    method: 'CASHLEZ',
    type: 'CREDIT_CARD',
    extra: 'PIN',
    cashlezMode: CashlezPayment.PAYMENT_VERIFICATION_MODE_PIN,
    cashlezType: CashlezPayment.PAYMENT_TRANSACTION_TYPE_CREDIT,
  },
  CREDIT_CARD_TTD: {
    method: 'CASHLEZ',
    type: 'CREDIT_CARD',
    extra: 'TTD',
    cashlezMode: CashlezPayment.PAYMENT_VERIFICATION_MODE_SIGNATURE,
    cashlezType: CashlezPayment.PAYMENT_TRANSACTION_TYPE_CREDIT,
  },
  VOUCHER: { method: 'LOCAL', type: 'VOUCHER', extra: '' }, // not applicable yet
  GIFT_CARD: { method: 'LOCAL', type: 'GIFT_CARD', extra: '' }, // not applicable yet
  PAY_BY_QR: { method: 'LOCAL', type: 'PAY_BY_QR', extra: '' }, // need confirmation
  JENIUS_QR: { method: 'LOCAL', type: 'JENIUS_QR', extra: '' }, // need confirmation
  M_VISA: { method: 'CASHLEZ', type: 'M_VISA', extra: '' }, // not applicable yet
  MASTERPASS: { method: 'CASHLEZ', type: 'MASTERPASS', extra: '' }, // not applicable yet
  E_MONEY: { method: 'CASHLEZ', type: 'E_MONEY', extra: '' }, // not applicable yet
  VIRTUAL_ACCOUNT: { method: 'LOCAL', type: 'VA', extra: '' }, // not applicable yet
  TRANSFER: {
    method: 'LOCAL',
    type: 'TRANSFER',
    extra: '',
  },
};

export const SaleStatusEnum = {
  SETTLED: 'SETTLED',
  UNSETTLED: 'UNSETTLED',
  PARTIALLY_RETURNED: 'PARTIALLY_RETURNED',
  PARTIALLY_SETTLED: 'PARTIALLY_SETTLED',
  FULLY_RETURNED: 'FULLY_RETURNED',
  CANCELED: 'CANCELED',
  PENDING: 'PENDING',
};

export const ProductCategoryStatusEnum = {
  DEFAULT: 'DEFAULT',
  INACTIVE: 'INACTIVE',
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  EXPIRED: 'EXPIRED',
  DELETED: 'DELETED',
};

export const ProductCategorySortedEnum = {
  DEFAULT: 'DEFAULT',
};

export const SavedOrderFilterByEnum = {
  DEFAULT: 'DEFAULT',
};

export const ProductCategoryActioinEnum = {
  ADD: 'ADD',
  EDIT: 'EDIT',
  DELETE: 'DELETE',
};

export const HttpVerbEnum = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export const DeviceTypeEnum = {
  TABLET: 'tablet',
  MOBILE: 'mobile',
};

export const SplashScreenEnum = {
  CONNECTION_ERROR: 'CONNECTION_ERROR',
  NEW_VERSION: 'NEW_VERSION',
  SHOULD_UPDATE: 'SHOULD_UPDATE',
  SHOULD_NOT_UPDATE: 'SHOULD_NOT_UPDATE',
  UPDATE_ERROR: 'UPDATE_ERROR',
  CLOSE_DIALOG: 'CLOSE_DIALOG',
  TIMEOUT: 1000,
};

export const ShoppingCartEnum = {
  MINIMUM_COST_AMOUNT: 0,
  MAXIMUM_EXTRA_COST_LENGTH: 30,
};

export const ProductListEnum = {
  ACTIVE_THUMBNAIL_IMAGE: 'TRUE',
  INACTIVE_THUMBNAIL_IMAGE: 'FALSE',
};

export const ProductAddMethodEnum = {
  manual: {
    text: translate('productListScreen.addMethods.manual'),
    icon: Images.product.addButtons.manual,
  },
  instagram: {
    text: translate('productListScreen.addMethods.instagram'),
    icon: Images.product.addButtons.instagram,
  },
  excel: {
    text: translate('productListScreen.addMethods.excel'),
    icon: Images.product.addButtons.excel,
  },
};

export const ExpenseListEnum = {
  TODAY_ROUTE: 'TodayExpense',
  FUTURE_ROUTE: 'FutureExpense',
  HISTORY_ROUTE: 'HistoryExpense',
  TODAY_EXPENSE_LIST: 'TODAY',
  FUTURE_EXPENSE_LIST: 'FUTURE',
  PAST_EXPENSE_LIST: 'PAST',
  LATE_SECTION: 'LATE',
  TODAY_SECTION: 'TODAY',
  FUTURE_SECTION: 'FUTURE',
  PAST_SECTION: 'PAST',
};

export const ExpenseListMenu = {
  EXPENSE_CATEGORY_SETTING: 0,
};

export const ExpenseCategoryActionEnum = {
  ADD: 'ADD',
  EDIT: 'EDIT',
  DELETE: 'DELETE',
};

export const RoleTypeEnum = {
  OWNER: 'pemilikUsaha',
  ADMIN: 'administrator',
  CASHIER: 'kasir',
};

export const DateTypeEnum = {
  DDMMYYYY: 'DD/MM/YYYY',
};

export const ellipsizeModeEnum = {
  HEAD: 'head',
  MIDDLE: 'middle',
  TAIL: 'tail',
};

export const unixTimestampExportType = {
  UNIX_MILLISECONDS: 'UNIX_MILLISECONDS',
  UNIX_SECONDS: 'UNIX_SECONDS',
};

export const CategorySettingListEnum = {
  PREDEFINE: 'predefined',
  USERDEFINE: 'userDefine',
};

export const ProductFilterSortby = [
  {
    TITLE: translate('productFilterScreen.filter.sortBy.stockByDesc'),
    TYPE: 'HIGHQTY',
  },
  {
    TITLE: translate('productFilterScreen.filter.sortBy.stockByAsc'),
    TYPE: 'LOWQTY',
  },
  {
    TITLE: translate('productFilterScreen.filter.sortBy.priceByDesc'),
    TYPE: 'HIGHSP',
  },
  {
    TITLE: translate('productFilterScreen.filter.sortBy.priceByAsc'),
    TYPE: 'LOWSP',
  },
];

export const FilterSortby = [
  {
    TITLE: translate('expenseFilterScreen.filter.sortBy.sortByDesc'),
    TYPE: 'AMTDESC',
  },
  {
    TITLE: translate('expenseFilterScreen.filter.sortBy.sortByAsc'),
    TYPE: 'AMTASC',
  },
];

export const frequencyEndType = {
  PAYMENT: 'PAYMENT',
  DATE: 'DATE',
  CANCEL: 'CANCEL',
};

export const frequencyCategoryType = {
  WEEKLY: '1W',
  TWOWEEK: '2W',
  MONTHLY: '1M',
};

export const LanguageListEnum = [
  {
    TITLE: translate('profileScreen.tabs.settings.language.english'),
    TYPE: 'en',
  },
  {
    TITLE: translate('profileScreen.tabs.settings.language.indonesia'),
    TYPE: 'id',
  },
];

export const AccountAndSecurityEnum = [
  {
    TITLE: translate('profileScreen.tabs.settings.accountAndSecurity.changePin'),
    TYPE: 'CHANGE_PIN',
  },
  {
    TITLE: translate('profileScreen.tabs.settings.accountAndSecurity.disableAccount'),
    TYPE: 'DISABLE_ACCOUNT',
  },
];

export const NotificationEnum = [
  {
    TITLE: translate('profileScreen.tabs.settings.notification.autoNotification'),
    TYPE: 'AUTO_NOTIFICATION',
    IS_ENABLE: false,
  },
];

export const SocialMediaEnum = [
  {
    IMAGE: Images.socialMedia.facebook,
    TITLE: translate('profileScreen.tabs.settings.socialMedia.facebook'),
    TYPE: 'FACEBOOK',
    CODE: 'FB',
    IS_ENABLE: false,
  },
  {
    IMAGE: Images.socialMedia.instagram,
    TITLE: translate('profileScreen.tabs.settings.socialMedia.instagram'),
    CODE: 'IG',
    TYPE: 'INSTAGRAM',
    IS_ENABLE: false,
  },
];

export const SocialMediaOrderEnum = {
  FB: 0,
  IG: 1,
};

export const SocialMediaCodeEnum = {
  IG: 'IG',
  FB: 'FB',
};

export const HelpEnum = {
  CONTACT_US_ROUTE: 'ContactUsScreen',
  FAQ_ROUTE: 'FAQScreen',
  TC_ROUTE: 'TCScreen',
  CONTACT_US_EMAIL: 'aplikasibisnis@btpn.com',
  CASHIER_EMAIL: 'support@cashlez.com',
  CASHIER_WHATSAPP: '62811189055',
  CONTACT_US_WHATSAPP: '6285156139345',
  CASHIER_PHONE_NUMBER: '+622129860750',
  WHATSAPP_PLAY_STORE_LINK: 'https://play.google.com/store/apps/details?id=com.whatsapp',
  WHATSAPP_APP_STORE_LINK: 'https://itunes.apple.com/us/app/whatsapp-messenger/id310633997',
};

export const ProfilePictureEnum = {
  UPLOADING: false,
  UPLOAD_SUCCESS: false,
  UPLOAD_FAILED: false,
  IMAGE: Images.profile.placeholder,
};

export const GenderEnum = {
  MAN: { id: 'm', title: translate('gender.man') },
  WOMAN: { id: 'f', title: translate('gender.woman') },
  OTHERS: { id: 'o', title: translate('gender.others') },
};

export const EmployeeScreenEnum = {
  REGULAR_ROUTE: 'RegularEmployee',
  CANDIDATE_ROUTE: 'CandidateEmployee',
};

export const EmployeeDetailScreenEnum = {
  screenTypes: {
    addEmployee: 'addEmployee',
    editEmployee: 'editEmployee',
  },
  titles: {
    addEmployee: translate('employeeDetailScreen.toolbar.title.view'),
    editEmployee: translate('employeeDetailScreen.toolbar.title.detail'),
  },
  deleteIndex: 0,
};

export const CustomerFilterItem = [
  {
    TITLE: translate('customerFilterScreen.filter.sortBy.transactionsByDesc'),
    TYPE: 'HIGHEST_TRANSACTION',
  },
  {
    TITLE: translate('customerFilterScreen.filter.sortBy.transactionsByAsc'),
    TYPE: 'LOWEST_TRANSACTION',
  },
  {
    TITLE: translate('customerFilterScreen.filter.sortBy.spendingByDesc'),
    TYPE: 'HIGHEST_SPENDING',
  },
  {
    TITLE: translate('customerFilterScreen.filter.sortBy.spendingByAsc'),
    TYPE: 'LOWEST_SPENDING',
  },
  {
    TITLE: translate('customerFilterScreen.filter.sortBy.customersByLatest'),
    TYPE: 'LATEST_CUSTOMER',
  },
  {
    TITLE: translate('customerFilterScreen.filter.sortBy.customersByOldest'),
    TYPE: 'LONGEST_CUSTOMER',
  },
];

export const TransactionSaleStatusEnum = {
  SETTLED: translate('transactionListScreen.saleStatus.settled'),
  FULLY_RETURNED: translate('transactionListScreen.saleStatus.fullyReturned'),
  PENDING: translate('transactionListScreen.saleStatus.pending'),
  CANCELED: translate('transactionListScreen.saleStatus.canceled'),
};

export const TransactionSaleStatusIconEnum = {
  SETTLED: Images.transactionHistory.green,
  FULLY_RETURNED: Images.transactionHistory.yellow,
  PENDING: Images.transactionHistory.red,
  CANCELED: Images.transactionHistory.red,
};

export const TransactionPaymentTypeEnum = {
  TRANSFER: 'TRANSFER',
  CASH: 'CASH',
  DEBIT_CARD: 'DEBIT_CARD',
  CREDIT_CARD: 'CREDIT_CARD',
};

export const TransactionFilterSortBy = [
  {
    TITLE: translate('transactionFilterScreen.filter.sortBy.grandTotalByDesc'),
    TYPE: 'HIGHEST_TRANSACTION',
  },
  {
    TITLE: translate('transactionFilterScreen.filter.sortBy.grandTotalByAsc'),
    TYPE: 'LOWEST_TRANSACTION',
  },
];

export const TransactionFilterFilterBy = [
  {
    TITLE: translate('transactionFilterScreen.filter.filterBy.settled'),
    TYPE: 'SETTLED',
  },
  {
    TITLE: translate('transactionFilterScreen.filter.filterBy.pending'),
    TYPE: 'PENDING',
  },
  {
    TITLE: translate('transactionFilterScreen.filter.filterBy.fullyReturned'),
    TYPE: 'FULLY_RETURNED',
  },
  {
    TITLE: translate('transactionFilterScreen.filter.filterBy.canceled'),
    TYPE: 'CANCELED',
  },
];

export const NotificationTypes = {
  EMPLOYEE_REJECTION: {
    TITLE: 'Pendaftaran Ditolak',
    MESSAGE: 'Maaf, toko {storeName} tidak dapat menjadikan Kamu sebagai karyawan',
  },
  EMPLOYEE_ACCEPTANCE: {
    TITLE: 'Pendaftaran Diterima',
    MESSAGE: 'Selamat, Kamu diterima bekerja di Toko {storeName}',
  },
  EMPLOYEE_REGISTRATION: {
    TITLE: 'Permintaan Gabung ke Toko',
    MESSAGE: 'Terdapat permintaan untuk gabung ke tokomu',
  },
};

export const EdcStatusEnum = {
  EDC_DISCONNECTED: 'EdcDisConnected',
};

export const PlatformEnum = {
  IOS: 'ios',
  ANDROID: 'android',
};

export const Theme = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
};


export const popupLinkingContent = [
  {
    id: 1,
    content: {
      ...linking,
    },
  },
  {
    id: 2,
    content: {
      ...CreateJeniusAccount,
    },
  },
];

const linking = {
  imageLink: Images.linkingModal.linkingTutorialImage,
  title: translate('popupTutorial.firstScreen.title'),
  description: translate('popupTutorial.firstScreen.information'),
};

export const CreateJeniusAccount = () => {
  return [
    {
      NUMBER: '1',
      TITLE: translate('popupTutorial.secondScreen.step1.step'),
      DESCRIPTION: translate('popupTutorial.secondScreen.step1.information'),
    },
    {
      NUMBER: '2',
      TITLE: translate('popupTutorial.secondScreen.step2.step'),
      DESCRIPTION: translate('popupTutorial.secondScreen.step2.information'),
    },
    {
      NUMBER: '3',
      TITLE: translate('popupTutorial.secondScreen.step3.step'),
      DESCRIPTION: translate('popupTutorial.secondScreen.step3.information'),
    },
    {
      NUMBER: '4',
      TITLE: translate('popupTutorial.secondScreen.step4.step'),
      DESCRIPTION: translate('popupTutorial.secondScreen.step4.information'),
    },
  ];
};
