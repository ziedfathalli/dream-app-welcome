import { takeLatest, } from 'redux-saga/effects';
import {
  DreamAppWelcomeActionTypes,
} from '../redux';
import DreamAppWelcomeIpService from './DreamAppWelcomeIpService';

const {
  DREAM_APP_WELCOME_REQUEST,
} = DreamAppWelcomeActionTypes;

const MessagesRoot = [
  takeLatest(DREAM_APP_WELCOME_REQUEST, DreamAppWelcomeIpService),
];

export default MessagesRoot;
