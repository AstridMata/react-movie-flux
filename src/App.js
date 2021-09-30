import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home"
import Movies from "./views/Movies";
import Tv from "./views/Tv";
import People from "./views/People";
import MoviesDetails from "./views/MoviesDetails";
import TvDetails from "./views/TvDetails";
import PeopleDetails from "./views/PeopleDetails";


function App() {

  return (
    <Router>
      <Navbar/>

      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/movies">
            <Movies/>
          </Route>
          <Route exact path="/movies/:id">
            <MoviesDetails/>
          </Route>
          <Route exact path="/tv">
            <Tv/>
          </Route>
          <Route exact path="/tv/:id">
            <TvDetails/>
          </Route>
          <Route exact path="/people">
            <People/>
            </Route>
            <Route exact path="/people/:id">
            <PeopleDetails/>
          </Route>
          <Route path="*">
          <center><h2>Not found - 404</h2>
            <h4>Pagína no encontrada</h4>
        <img src="https://cdn5.vectorstock.com/i/thumb-large/27/19/black-cat-popcorn-box-cute-cartoon-funny-vector-34092719.jpg" style={{width:`10rem`},{height:`10rem`}}></img></center>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
