import axios from 'axios';
import DreamAppWelcomeServicesConstant from './DreamAppWelcomeServicesConstant';

const {
  GET_DREAM_APP_WELCOME_IP_SERVICE_PATH,
} = DreamAppWelcomeServicesConstant;

const dreamAppWelcomeIpQuery = () => axios({
  method: 'get',
  url: GET_DREAM_APP_WELCOME_IP_SERVICE_PATH,
});

const DreamAppWelcomeApi = {
  dreamAppWelcomeIpQuery,
};

export default DreamAppWelcomeApi;
