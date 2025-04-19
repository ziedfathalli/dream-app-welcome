import React, { Suspense, } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Spin from 'antd/es/spin';
import {
  withReduxBoot,
} from '../core';
import {
  ReducerRooter,
  SagaRoot,
} from '../features/commons';
import LazyRoute from './LazyRoute';
import Path from './Path';

const {
  DREAM_APP_WECOME,
} = Path;

const {
  DreamAppWelcomePage,
} = LazyRoute;

const Router = () => (
  <Suspense fallback={(
    <Spin spinning />
  )}
  >
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={DREAM_APP_WECOME}
          component={(props) => (
            <DreamAppWelcomePage
              {...props}
              page="DreamAppWelcomePage"
            />
          )}
        />
        <Redirect
          from="/"
          to={DREAM_APP_WECOME}
        />
      </Switch>
    </BrowserRouter>
  </Suspense>
);

export default withReduxBoot(
  Router,
  ReducerRooter,
  SagaRoot
);
