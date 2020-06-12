import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  categorySelectorRequest: ['data'],
  categorySelectorSuccess: ['categoryList'],
  categorySelectorFailure: ['error'],
  clearError: null,
});

export const ProductCategorySelectorTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: true,
  categoryList: [],
  error: '',
  pagination: {},
});

/* ------------- Reducers ------------- */

export const request = (state, { data }) => {
  return state.merge({
    fetching: true,
    data,
    categoryList: [],
    error: '',
  });
};

export const success = (state, action) => {
  const pagination = action.categoryList.paginationResponse;
  const categoryList = action.categoryList.merchantCategories ? action.categoryList.merchantCategories : [];
  return state.merge({
    fetching: false,
    error: '',
    categoryList,
    pagination,
  });
};

export const failure = (state, action) => {
  return state.merge({ fetching: false, error: action.error, categoryList: [] });
};

export const clear = (state) => {
  return state.merge({ error: '' });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CATEGORY_SELECTOR_REQUEST]: request,
  [Types.CATEGORY_SELECTOR_SUCCESS]: success,
  [Types.CATEGORY_SELECTOR_FAILURE]: failure,
  [Types.CLEAR_ERROR]: clear,
});
