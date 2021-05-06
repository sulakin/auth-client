import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useTypedSelector } from './hooks/useTypedSelector';
import { Login } from './containers/auth/Login';
import { Register } from './containers/auth/Register';
import { Forgot } from './containers/auth/Forgot';
import { Reset } from './containers/auth/Reset';
import { Confirm } from './containers/auth/Confirm';
import { Connect } from './containers/auth/Connect';
import { Main } from './containers/Main';
import { Profile } from './containers/Profile';
import { PageNotFound } from './containers/PageNotFound';

export const Routes: React.FC = () => {
  const { token } = useTypedSelector((state) => state.user);
  const isAuth = !!token;

  return (
    <Switch>
      <Route path="/" component={isAuth ? Main : Login} exact />
      <Route exact path="/register" component={Register} />
      <Route exact path="/forgot" component={Forgot} />
      <Route exact path="/reset" component={Reset} />
      <Route exact path="/confirm" component={Confirm} />
      <Route exact path="/connect" component={Connect} />
      {isAuth && <Route exact path="/profile" component={Profile} />}
      <Route component={PageNotFound} />
    </Switch>
  );
};
