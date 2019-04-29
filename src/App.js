import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faQrcode } from '@fortawesome/free-solid-svg-icons'

import logo from './logo.svg';
import './App.scss';
import { Provider } from "react-redux";

import PrivateRoute from "./routes/PrivateRoute";

import store from './store/index';

import home from "./pages/home/index";
import scan from "./pages/scan/index";
import result from "./pages/result/index";
// import about from "./pages/about";
// import posts from "./pages/posts";
// import login from "./pages/login";


library.add(faQrcode);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={home} />
            <Route exact path='/scan' component={scan} />
            <Route exact path='/result' component={result} />
            {/* <Route exact path='/about' component={about} />
              <Route exact path='/login' component={login} />
              <PrivateRoute exact path='/posts' component={posts} /> */}
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
