import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import Header from './components/Header';
import Progress from './components/Progress';
const LazyAuthApp = lazy(() => import('./components/AuthApp'));
const LazyMarketingApp = lazy(() => import('./components/MarketingApp'));
const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {

  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <LazyAuthApp onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/" component={LazyMarketingApp} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
