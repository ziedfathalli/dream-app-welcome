import React, { Component, } from 'react';
import {
  ReduxMe,
} from '../../../core';
import {
  DreamAppWelcomeProvider,
  DreamAppWelcomeDispatcher,
} from '../redux';
import DreamAppWelcomePropTypes from '../commons/DreamAppWelcomePropTypes';
import '../components/DreamAppWelcome.scss';
import DreamAppWelcomeForm from '../components/DreamAppWelcomeForm';
import ShynleiSteps from '../components/ShynleiSteps';

const {
  DreamAppWelcomeFragment,
} = DreamAppWelcomeProvider;

@ReduxMe((state) => ({
  ...DreamAppWelcomeFragment(state),
}), {
  ...DreamAppWelcomeDispatcher,
})
class DreamAppWelcomePage extends Component {
  componentDidMount() {
    this.initPage();
  }

  componentDidUpdate(prevProps) {
    const {
      dreamAppWelcomeLoading,
      dreamAppWelcomeIpData,
      dreamAppWelcomeError,
    } = this.props;
    if (prevProps.dreamAppWelcomeLoading !== dreamAppWelcomeLoading && !dreamAppWelcomeError && dreamAppWelcomeIpData) {
      if (dreamAppWelcomeIpData > 100) {
        // eslint-disable-next-line no-alert
        alert('OK');
      } else {
        // eslint-disable-next-line no-alert
        alert('KO');
      }
    }
  }

    initPage = () => {

    }

  handleCheckIp = () => {
    const {
      requestIP,
    } = this.props;
    requestIP();
  }

  render() {
    return (
      <div className="welcome-page">
        <div className="left-panel">
          <img
            src="/logos/Image-logo.png"
            alt="Logo"
            className="logo"
          />
          <DreamAppWelcomeForm
            handleCheckIp={this.handleCheckIp}
          />
        </div>
        <div className="right-panel">
          <ShynleiSteps />
        </div>
      </div>
    );
  }
}

DreamAppWelcomePage.propTypes = {
  ...DreamAppWelcomePropTypes.propTypes,
};

DreamAppWelcomePage.defaultProps = {
  ...DreamAppWelcomePropTypes.defaultProps,
};

export default DreamAppWelcomePage;
