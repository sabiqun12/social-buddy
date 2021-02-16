import React from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom"
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Header/Home/Home';
import NoMatch from "./components/NoMatch/NoMatch";
import PostDetails from "./components/PostDetails/PostDetails";


function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/allPost/:PostId">
            <PostDetails />
          </Route>
          <Route path="/comments/:CommentId">
            <PostDetails />
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
