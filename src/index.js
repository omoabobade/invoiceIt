import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import configureStore from './store/configureStore.jsx';
import Layout from './layout/layout.jsx';
import './assets/dashboard.css';


const hist = createBrowserHistory();
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
        <Layout />
    </Router>
  </Provider>,
  document.getElementById("root")
);