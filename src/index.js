import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route } from "react-router-dom";
import App from './App';
import LoadingIndicator from "./Component/loadingIndecator/LoadingIndecator";
import store from './store/index';
import {Provider} from "react-redux";
import "swiper/css/bundle";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Provider store={store}>
            <App />
          </Provider>
        <LoadingIndicator/>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

