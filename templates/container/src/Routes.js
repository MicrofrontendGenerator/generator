import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';

const Dashboard = () => (
  <>
    <Navbar />
  </>
);

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
  </Switch>
);

export default Routes;
