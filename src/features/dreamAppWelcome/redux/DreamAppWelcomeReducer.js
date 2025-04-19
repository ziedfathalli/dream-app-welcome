import {
  Matcher,
} from '../../../core';
import DreamAppWelcomeActionTypes from './DreamAppWelcomeActionTypes';

const {
  DREAM_APP_WELCOME_REQUEST,
  DREAM_APP_WELCOME_REQUEST_SUCCESS,
  DREAM_APP_WELCOME_REQUEST_FAIL,
} = DreamAppWelcomeActionTypes;

const initialState = {
  loading: false,
  ipSum: null,
  error: null,
};

const DreamAppWelcomeReducer = (state = initialState, action) => Matcher()
  .on(() => action.type === DREAM_APP_WELCOME_REQUEST, () => ({
    ...state,
    loading: true,
    ipSum: null,
    error: null,
  }))
  .on(() => action.type === DREAM_APP_WELCOME_REQUEST_SUCCESS, () => ({
    ...state,
    loading: false,
    ipSum: action.ipSum,
    error: null,
  }))
  .on(() => action.type === DREAM_APP_WELCOME_REQUEST_FAIL, () => ({
    ...state,
    loading: false,
    ipSum: null,
    error: action.error,
  }))
  .otherwise(() => state);

export default DreamAppWelcomeReducer;
