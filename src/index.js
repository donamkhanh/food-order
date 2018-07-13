import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import store from "./store";
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
// registerServiceWorker();
