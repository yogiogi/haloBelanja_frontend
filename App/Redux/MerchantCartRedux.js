import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { exp } from 'react-native-reanimated';

const { Types, Creators } = createActions({
    confirmMerchantCart: ['data'],
    confirmationSuccess: ['response'],
    confirmationFailed: ['response'],
    resetConfirmationData: null,
    merchantCartCreateRequest: ['payload'],
    merchantCartCreateSuccess: ['response'],
    merchantCartCreateFailure: ['error'],
    initialSuccess: null,
    clearError: null
});

const MerchantCartTypes = Types;

const INITIAL_STATE = Immutable({
    requestingConfirmation: false,
    confirmationSuccessDetail: null,
    confirmationFailedDetail: null,
    payload: '',
    submiting: false,
    response: null,
    success: false,
    error: '',
  });


const request = state =>
  state.merge({
    submiting: true,
    success: false,
    error: '',
  });

  const success = (state, action) => {
    const { response } = action;
    return state.merge({
      submiting: false,
      error: null,
      success: true,
      response: response,
    });
  };

  const failure = (state, action) => {
    const { error } = action;
    return state.merge({
      submiting: false,
      error: error,
      response: null,
    });
  };

  const confirmSuccess = (state, action) => {
    return Immutable.merge(state, {
      requestingConfirmation: false,
      confirmationSuccessDetail: action.response,
      confirmationFailedDetail: null,
    });
  };
  
  const confirmFailed = (state, action) => {
    return Immutable.merge(state, {
      requestingConfirmation: false,
      confirmationSuccessDetail: null,
      confirmationFailedDetail: action.response,
    });
  };
  
  const resetConfirmation = (state) => {
    return Immutable.merge(state, {
      confirmationSuccessDetail: null,
      confirmationFailedDetail: null,
    });
  };

const reducer  = createReducer(INITIAL_STATE, {
  [Types.CONFIRM_SHOPPING_CART]: requestingConfirmation,
  [Types.CONFIRMATION_SUCCESS]: confirmSuccess,
  [Types.CONFIRMATION_FAILED]: confirmFailed,
  [Types.RESET_CONFIRMATION_DATA]: resetConfirmation,
  [Types.SHOPPING_CART_CREATE_REQUEST]: request,
  [Types.SHOPPING_CART_CREATE_SUCCESS]: success,
  [Types.SHOPPING_CART_CREATE_FAILURE]: failure,
  [Types.CLEAR_ERROR]: (state) => {
    return Immutable.set(state, 'error', '');
  },
  [Types.INITIAL_SUCCESS]: (state) => {
    return Immutable.set(state, 'success', false);
  },
})

export {
  Creators as default,
  ShoppingCartTypes,
  requestingConfirmation,
  confirmSuccess,
  confirmFailed,
  resetConfirmation,
  request,
  success,
  failure,
  reducer
}