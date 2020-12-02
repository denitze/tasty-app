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
import OneRecipe from './components/OneRecipe';
import Footer from './components/Footer';
import SectionRecipes from './components/SectionRecipes';
import Vegetarian from './components/Vegetarian';
import BetterEat from './components/BetterEat';


function App() {
  return (
<Router>

<Navigation />

<Switch>

<Route path="/allrecipe" exact component={SectionRecipe2} />
  
  <Route path="/today" component={OneRecipe} />

  <Route path="/vegetarian" component={Vegetarian} />
  
  <Route path="/bettereat" component={BetterEat} />

  <Route path="/randomrecipe" component={OneRecipe} />

</Switch>

<Footer />


</Router>

  );
}

export default App;
