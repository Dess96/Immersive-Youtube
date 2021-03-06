import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Filter from './Components/filter/filter';
import Header from './Components/header/header';
import VideoList from './Components/videoList/videoList';
import IdVideo from './Components/idVideo/idVideo';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <React.StrictMode>
    <Header />
      <Switch>
        <Route exact path="/">
          <VideoList />
        </Route>
        <Route path='/search/:search'>
          <Filter />
        </Route>
        <Route path='/id/:id'>
          <IdVideo />
        </Route>
      </Switch>
    </React.StrictMode>
  </Router>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
