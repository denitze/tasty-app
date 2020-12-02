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


function App() {
  return (
<Router>
      {/* <Navigation /> */}
      <Switch>
        <Route path="/" exact component={SectionRecipe2} />
      </Switch>
      {/* <Footer /> */}
    </Router>

  );
}

export default App;
