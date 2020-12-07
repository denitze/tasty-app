import React from 'react';
import axios from 'axios';
import OneRecipeHeader from './OneRecipeHeader';
import OneRecipeImage from './OneRecipeImage';
import OneRecipeBadges from './OneRecipeBadges';
// import Test from './Test';
// import Equipment from './Equipment';
import Instructions from './Instructions';
import TestCounter from './TestCounter';

// var apiKey = '7df74c97721c438485ec13af5100c9ad';
var apiKey = 'bc21dba5538d4477ba88fa9e21a53749';
const recipeID = 1563437;

class OneRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rezept: [],
      activeRecipe: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        'https://api.spoonacular.com/recipes/' +
          recipeID +
          '/information?apiKey=' +
          apiKey
      )
      // .get('http://localhost:3000/data/recipeDate.json')
      .then((res) => {
        this.setState({
          rezept: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.props.match.params.id);
    return (
      <div>
        <div>
          <OneRecipeHeader rezept={this.state.rezept} />
          <OneRecipeImage rezept={this.state.rezept} />
          <OneRecipeBadges rezept={this.state.rezept} />
          {/* <Test /> */}

          <Instructions />

          <TestCounter />
          {/* <Equipment /> */}
        </div>
      </div>
    );
  }
}

export default OneRecipe;
