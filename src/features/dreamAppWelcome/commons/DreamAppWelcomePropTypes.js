import PropTypes from 'prop-types';

const propTypes = {
  history: PropTypes.object,
  dreamAppWelcomeIpData: PropTypes.shape({
    ipAddress: PropTypes.string,
    continentCode: PropTypes.string,
    continentName: PropTypes.string,
    countryCode: PropTypes.string,
    countryName: PropTypes.string,
    stateProv: PropTypes.string,
    city: PropTypes.string,
  }),
  dreamAppWelcomeLoading: PropTypes.bool,
  dreamAppWelcomeError: PropTypes.string,
  requestIP: PropTypes.func,
};

const defaultProps = {
  history: {},
  dreamAppWelcomeIpData: null,
  dreamAppWelcomeLoading: false,
  dreamAppWelcomeError: null,
  requestIP: null,
};

const DreamAppWelcomePropTypes = {
  propTypes,
  defaultProps,
};

export default DreamAppWelcomePropTypes;
