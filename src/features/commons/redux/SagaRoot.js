import { all, } from 'redux-saga/effects';
import DreamAppWelcomeRoot from '../../dreamAppWelcome/services/DreamAppWelcomeRoot';

export default function* rootSaga() {
  yield all([
    ...DreamAppWelcomeRoot,
  ]);
}
