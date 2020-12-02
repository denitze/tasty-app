import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './components/Navigation';
import OneRecipe from './components/OneRecipe';
import Footer from './components/Footer';
import SectionRecipes from './components/SectionRecipes';


function App() {
  return (
<Router>

<Navigation />


<Switch>

  <Route path="/today" component={SectionRecipes} />
  
  <Route path="/allrecipe" component={OneRecipe} />

  <Route path="/vegetarian" component={OneRecipe} />
  
  <Route path="/bettereat" component={OneRecipe} />

  <Route path="/rondomrecipe" component={OneRecipe} />

</Switch>

<Footer />


</Router>

  );
}

export default App;
