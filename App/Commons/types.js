export class ReactNavigation<T> {
  goBack: Function;
  navigate: Function;
  state: { params: T };
}

export type MerchantStatus = 'aktif' | 'profit' | 'listing';

export type MerchantProduct = {
  merchantId: number,
  merchantName: string,
  status: MerchantStatus,
  price: String,
  grade: number,
  olshop: Array<OlshopDetail>,
  portfolio: portfolioItem
}

export type OlshopDetail = {
  nameOlshop: string,
  link: String,
  joinDate: number,
}

export type portfolioItem = {
    proforma_return: number,
    volume: number,
    status_pl: boolean,
}

export type PaginationResponse = {
    startIndex: number,
    requestedNumberOfRecords: number,
    returnedNumberOfRecords: number,
    sortedBy: string,
    filterBy: string,
    search: string,
  }