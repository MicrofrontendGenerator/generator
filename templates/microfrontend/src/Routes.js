import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MicrofrontendAsRoute from './Components/MicrofrontendAsRoute';
import MicrofrontendAsComponent from './Components/MicrofrontendAsComponent';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={MicrofrontendAsComponent} />
    <Route exact path="/microfrontend" component={MicrofrontendAsRoute} />
  </Switch>
);

export default Routes;
