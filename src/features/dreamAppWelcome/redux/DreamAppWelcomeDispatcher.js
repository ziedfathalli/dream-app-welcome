import DreamAppWelcomeActionTypes from './DreamAppWelcomeActionTypes';

const {
  DREAM_APP_WELCOME_REQUEST,
} = DreamAppWelcomeActionTypes;

const DreamAppWelcomeDispatcher = {
  requestIP: () => ({
    type: DREAM_APP_WELCOME_REQUEST,
  }),
};

export default DreamAppWelcomeDispatcher;
