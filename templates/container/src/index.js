import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import { unregister } from './Config/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
unregister();
