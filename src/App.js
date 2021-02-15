import React from "react";
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
import PostDetails from "./components/PostDetails/PostDetails";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/allPost/:postId">
            <PostDetails />
          </Route>
        </Switch>
    </Router> 
      
    
  );
}

export default App;
