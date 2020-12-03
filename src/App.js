import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Navigation from './components/Navigation';
// import Footer from './components/Footer';
import SectionRecipe2 from './components/SectionRecipe2';
import Navigation from './components/Navigation';
// import OneRecipe from './components/OneRecipe';
import Footer from './components/Footer';
import Vegetarian from './components/Vegetarian';
import BetterEat from './components/BetterEat';
import Random from './components/Random';
import Today from './components/Today';
import Recipe from './components/Recipe';


function App() {
  return (
<Router>

<Navigation />

<Switch>

<Route path="/" exact component={SectionRecipe2} />

<Route path="/recipe/:id" component={Recipe} />
  
  <Route path="/today" component={Today} />

  <Route path="/vegetarian" component={Vegetarian} />
  
  <Route path="/bettereat" component={BetterEat} />

  <Route path="/randomrecipe" component={Random} />

</Switch>

<Footer />


</Router>

  );
}

export default App;

  