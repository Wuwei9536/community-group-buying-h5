import React, { Suspense } from 'react';
import styles from './App.less';
import { Router, Route, Switch } from 'react-router-dom';
import history from './common/history';
import routes from './routes';

const SuspenseWrap = (LazyComponent: React.LazyExoticComponent<() => JSX.Element>, props: any) => {
  console.log('LazyComponent: ', LazyComponent);
  return (
    <Suspense fallback={<div />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

function App() {
  return (
    <Router history={history}>
      <Switch>
        {routes.map(({ path, Component }) => (
          // @ts-ignore
          <Route exact path={path} key={path} render={(props) => SuspenseWrap(Component, props)} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
