const DreamAppWelcomeFragment = (state) => ({
  dreamAppWelcomeIpData: state?.dreamAppWelcome?.ipSum,
  dreamAppWelcomeLoading: state?.dreamAppWelcome?.loading,
  dreamAppWelcomeError: state?.dreamAppWelcome?.error,
});

const DreamAppWelcomeProvider = {
  DreamAppWelcomeFragment,
};

export default DreamAppWelcomeProvider;
