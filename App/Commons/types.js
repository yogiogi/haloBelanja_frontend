// @flow

export class ReactNavigation<T> {
  goBack: Function;
  navigate: Function;
  state: { params: T };
}

export type AddressType = {
  line1: string,
  line2: string,
  line3: string,
  village: string,
  district: string,
  postcode: string,
  city: string,
  stateOrProvince: string,
  country: string,
};

export type StoreStatus = 'active' | 'inactive';

export type WithinZeroAndOne = {};
export type RealPercent = number & WithinZeroAndOne;

export type Merchant = {
  merchantId: number,
  merchantName: string,
  image: string,
  status: StoreStatus,
  address: AddressType,
};

export type Store = {
  storeId: number,
  storeName: string,
  image: string,
  status: StoreStatus,
  dailyTarget: string,
  currencyCode: string,
  discountAllowed: boolean,
  taxPercentage: RealPercent,
  address: AddressType,
};

export type PaginationResponse = {
  startIndex: number,
  requestedNumberOfRecords: number,
  returnedNumberOfRecords: number,
  sortedBy: string,
  filterBy: string,
  search: string,
}

export type tokoOnline = {
  onlineShopId: string,
  namaOnlineShop: string,
  olshopLink : string,
}

export type StoreProduct = {
  merchantId: number,
  merchantName: string,
  tokoOnline: Array<tokoOnline>,
  grade: number,
  quantity: string,
  salePrice: string,
  percentageDiscount: string,
  valueDiscount: string,
  taxationType: string,
  status: string,
  minStockLevel: number,
}

// export type StoreProduct = {
//   storeProductInventoryId: number,
//   storeProductInventoryName: string,
//   productInventory: {
//     productInventoryId: number,
//     imageUrl: string,
//   },
//   quantity: string,
//   salePrice: string,
//   percentageDiscount: string,
//   valueDiscount: string,
//   taxationType: string,
//   status: string,
//   minStockLevel: number,
// }

export type StoreProductResponse = {
  paginationResponse: PaginationResponse,
  listResponse: StoreProduct[],
}

export type SaleDetail = {
  merchantId: number,
  merchantName: string,
  quantity: number,
  eachPrice: string,
  price: string, // price before discount. Price = quantity * eachPrice
};

// export type SaleDetail = {
//   storeProductInventoryId: number,
//   productName: string,
//   quantity: number,
//   eachPrice: string,
//   price: string, // price before discount. Price = quantity * eachPrice
//   tax: string,
//   discount: string, // discount value
//   discountInfo: string, // Info percentage discount
// };

export type PaymentDetail = {
  paymentDate: number,
  paymentMethod: string,
  paymentType: string,
  amount: string,
  cashTendered: string,
  roundingUp?: string,
  cashChange: string,
  issuer?: string,
  acquirer?: string,
  accountHolder?: string,
  accountNumber?: string,
  transactionIdentifier?: string,
  approvalCode?: string,
  traceNumber?: string,
  referenceNumber?: string,
  transactionTimestamp?: number,
  returnAmount?: string,
  returnIdentifier?: string,
  processingFee?: string,
};

export type ProductSale = {
  saleId?: number,
  saleIdentificationNumber: string,
  orderedActorId: number,
  orderedActorType: string,
  customerId: number,
  customerName: string,
  customerTaxNumber: string,
  transactionDate: number,
  total: string, // subTotal - total discount - saleAddDiscount
  subTotal: string, // total price shopping cart
  grandTotal: string, // total + tax + serviceCharge
  saleAddDiscountId: number,
  saleAddDiscount: string, // additional discount from bargaining
  saleAddDiscountInfo: string,
  tax: string,
  taxInfo: string,
  totalAfterReturn: string,
  saleStatus:
    'SETTLED' |
    'UNSETTLED' |
    'PARTIALLY_RETURNED' |
    'PARTIALLY_SETTLED' |
    'FULLY_RETURNED' |
    'CANCELLED',
  store: {
    storeId: number,
  },
  saleDetails: Array<SaleDetail>,
  paymentDetails: Array<PaymentDetail>,
};

export type TransactionListSale = {
  saleId: number,
  customerId: number,
  customerName: string,
  total: string,
  subTotal: string,
  transactionDate: string,
  nominalPaid: string,
  saleStatus: string,
}

export type ShoppingCart = {
  saleDetail: SaleDetail,
  currentStock: string,
  minStockLevel: number,
};

export type PaymentMethod = {
  method: string,
  type: string,
  extra: string,
};

export type EcommerceListType = {
  medsosCode: string,
  medsosDesc: string,
  medsosUrl: string,
  status: string,
  medsosType: string,
  medsosUrlImage: string,
};

export type ExpenseSummaryListType = {
  expCategoryId: number,
  name: string,
  amount: string,
  paymentStatus: boolean,
  status: boolean,
  totalRow: number,
};

export type ExpenseSummaryType = {
  responseCode: (number | string),
  message: string,
  expenseReport: Array<ExpenseSummaryListType>,
};

export type ExpenseSummaryDetailListType = {
  expCategoryId: number,
  title: string,
  amount: string,
  expenseDate: number,
  paymentStatus: boolean,
  status: boolean,
};

export type ExpenseSummaryDetailType = {
  responseCode: (number | string),
  message: string,
  expense: Array<ExpenseSummaryDetailListType>
};

export type ExpenseType = {
  expenseId: number,
  title: string,
  description: string,
  amount: string,
  expenseDate: number,
  paymentStatus: boolean,
  createdBy?: string,
  createdDate?: number,
  updatedBy: string,
  updatedDate: number,
  status: boolean,
  expenseCategory: {
    expCategoryId: number,
    name: string,
    status: boolean,
  },
  storeId: number,
};

export type ExpenseDetailType = {
  message: string,
  expense: ExpenseType,
  responseCode: (number | string),
};

export type ErrorType = {
  responseCode: (number | string),
  message: string,
};

export type ResponseValidation = {
  responseCode: string,
  message: string,
};

export type StoreList = {
  storeId: number,
  storeName: string,
  status: string,
  district: string,
};

export type RegistrationData = {
  userName: string,
  phoneNumber: string,
};

export type MENU_PROPS = {
  accessibilityLabel: string,
  title: string,
  routeName: string,
  sectionIdx: number,
  icon?: any,
};

export type ComingSoonDialogData = {
  title: string,
  description: string,
  image: number | null,
  buttonLabel: string,
};

export function makeCheckedRealPercent(x: number): ? RealPercent {
  if (x >= 0 && x <= 1) {
    return ((x: any): RealPercent);
  }
  return null;
}
