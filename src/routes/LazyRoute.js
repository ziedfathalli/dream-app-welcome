import loadable from '@loadable/component';

// full dynamic import page
const DreamAppWelcomePage = loadable((props) => import(`../features/dreamAppWelcome/pages/${props.page}`));

const LazyRoute = {
  DreamAppWelcomePage,
};

export default LazyRoute;
