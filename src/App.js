import './App.css';


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from './components/Footer';


function App() {
  return (
<Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
