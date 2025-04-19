import { call, put, } from 'redux-saga/effects';
import {
  DreamAppWelcomeActionTypes,
} from '../redux';
import DreamAppWelcomeApi from './DreamAppWelcomeApi';

const {
  DREAM_APP_WELCOME_REQUEST_SUCCESS,
  DREAM_APP_WELCOME_REQUEST_FAIL,
} = DreamAppWelcomeActionTypes;

const {
  dreamAppWelcomeIpQuery,
} = DreamAppWelcomeApi;

const sumIp = (ip) => {
  const octets = ip.split('.').map(Number); // Séparer l'IP en octets
  return octets.reduce((acc, num) => acc + num, 0); // Somme des octets
};

// worker saga: makes the api call
// when watcher saga sees the action
export default function* getDreamAppWelcomeIp() {
  try {
    const response = yield call(dreamAppWelcomeIpQuery);
    // parse the response
    const ipData = response.data;
    // check if we have success or fail
    if (ipData) {
      const {
        ipAddress,
      } = ipData;
      if (!ipAddress) {
        throw new Error('Impossible de récupérer l\'IP');
      } else {
        const ipSum = sumIp(ipAddress);
        // dispatch a success action to the store
        yield put({
          type: DREAM_APP_WELCOME_REQUEST_SUCCESS,
          ipSum,
        });
      }
    } else {
      yield put({
        type: DREAM_APP_WELCOME_REQUEST_FAIL,
        error: 'Echec de récupération l\'adresse IP, veuillez réessayez plus tard.',
      });
    }
  } catch (error) {
    yield put({
      type: DREAM_APP_WELCOME_REQUEST_FAIL,
      error: 'Une erreur technique c\'est produite, veuillez réessayez plus tard.',
    });
  }
}
