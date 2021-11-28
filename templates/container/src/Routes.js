import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MicroFrontend from './MicroFrontend';
import StaticFrontend from './StaticFrontend';
import Navbar from './Components/Navbar';
import Config from './Config';

const MicrofrontendComponent = ({ history }) => (
  <MicroFrontend
    history={history}
    host={Config.microfrontendHost}
    name="Microfrontend"
  />
);

const StaticMicrofrontendComponent = () => <StaticFrontend />;

const Dashboard = () => (
  <>
    <Navbar />
    <MicrofrontendComponent />
  </>
);

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/microfrontend" component={MicrofrontendComponent} />
    <Route exact path="/static" component={StaticMicrofrontendComponent} />
  </Switch>
);

export default Routes;
