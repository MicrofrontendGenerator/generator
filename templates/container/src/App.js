import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Routes />
    </React.Fragment>
  </BrowserRouter>
);

export default App;
