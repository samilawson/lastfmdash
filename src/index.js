import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import Genres from "./components/genres";
import Decades from "./components/decades";
import RecentTracks from './components/recentTracks.js'
import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/genres" component={Genres} />
      <Route path="/decades" component={Decades} />
      <Route path="/recentTracks" component={RecentTracks} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
