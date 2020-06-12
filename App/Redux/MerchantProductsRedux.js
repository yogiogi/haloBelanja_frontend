import { createReducer, createActions }  from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { EMPTY_PRODUCT_RESPONSE_CODE } from '../Services/responseCodes';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
    fetchProductList: ['payload'],
    fetchSuccess: ['response'],
    fetchFailed: ['error'],
    doUpdateProductFilter: ['category', 'sortBy'],
    setMessage: ['message'],
    clearMessage: null,
    setDisableItemClickable: null,
    toggleDoRefresh: null,
})

export const MerchantProductsActionTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    fetching: false,
    pagination: {},
    productList: [],
    merchantProductError: '',
    filterData: {
      category: [],
      sortBy: '',
    },
    message: '',
    disableItemClickable: false,
    doRefreshFlag: false,
  });

/* ------------- Reducers ------------- */

// request the data from API
export const request = state => state.merge({ fetching: true, merchantProductError: '' });

// successful api lookup
export const success = (state, action) => {
    const { response } = action;
    return state.merge({
      fetching: false,
      pagination: response.paginationResponse || {},
      productList: response.merchantProductInventories || [],
      merchantProductError: '',
    });
  };

// Something went wrong somewhere.
export const failure = (state, action) => {
    const { error } = action;
    if (error.responseCode && error.responseCode === EMPTY_PRODUCT_RESPONSE_CODE) {
      return state.merge({
        fetching: false,
        pagination: {},
        productList: [],
        merchantProductError: '',
      });
    }
    return state.merge({ fetching: false, merchantProductError: error });
  };
  
  export const updateFilter = (state, action) => {
    const { category, sortBy } = action;
  
    return Immutable.merge(state, {
      filterData: {
        category,
        sortBy,
      },
    });
  };
  
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.FETCH_PRODUCT_LIST]: request,
    [Types.FETCH_SUCCESS]: success,
    [Types.FETCH_FAILED]: failure,
    [Types.DO_UPDATE_PRODUCT_FILTER]: updateFilter,
    [Types.SET_MESSAGE]: (state, action) => {
      return Immutable.set(state, 'message', action.message);
    },
    [Types.SET_DISABLE_ITEM_CLICKABLE]: (state) => {
      return Immutable.set(state, 'disableItemClickable', !state.disableItemClickable);
    },
    [Types.CLEAR_MESSAGE]: (state) => {
      return Immutable.set(state, 'message', '');
    },
    [Types.TOGGLE_DO_REFRESH]: (state) => {
      return Immutable.set(state, 'doRefreshFlag', !state.doRefreshFlag);
    },
  });