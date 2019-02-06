import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import Genres from "./components/genres";
import Decades from "./components/decades";
import RecentTracks from "./components/recentTracks";
import User from './components/user'
import * as serviceWorker from "./serviceWorker";

//will add menu bar component later
const routing = (

 <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/genres" component={Genres} />
      <Route path="/decades" component={Decades} />
      <Route path="/recentTracks" component={RecentTracks} />
      <Route path="/user" component={User} />
    </div>
  </Router>

);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
