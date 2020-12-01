import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Navigation from './components/Navigation';
// import Footer from './components/Footer';
import SectionRecipes from './components/SectionRecipes';


function App() {
  return (
<Router>
      {/* <Navigation /> */}
      <Switch>
        <Route path="/" exact component={SectionRecipes} />
      </Switch>
      {/* <Footer /> */}
    </Router>

  );
}

export default App;
