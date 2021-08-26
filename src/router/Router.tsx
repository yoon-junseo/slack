import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router';

const Home = loadable(() => import('@pages/Home/Home'));
const LogIn = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Channel = loadable(() => import('@pages/Channel'));

const Router = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/" component={Home} exact />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/workspace/channel" component={Channel} />
    </Switch>
  );
};

export default Router;
