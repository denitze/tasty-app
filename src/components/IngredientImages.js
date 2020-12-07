import React from 'react';
import axios from 'axios';

// var apiKey = '7df74c97721c438485ec13af5100c9ad';
// var apiKey = 'bc21dba5538d4477ba88fa9e21a53749';
// const recipeID = 1563437;

class IngredientImages extends React.Component {
  state = { count: this.props.testState };

  static getDerivedStateFromProps(props, state) {
    if (props.testState !== state.count) {
      return {
        count: props.testState,
      };
    }
    return null;
  }
  constructor(props) {
    // console.log(props.testHallo);
    // console.log(props.testState + ' state');

    super(props);
    this.state = {
      count: props.testState,
      ingredients: [],
    };

    // const multiServings = tempTest * probs.testHallo.servings;

    // const testMap = () => {
    //   return probs.testHallo.extendedIngredients.map(
    //     (x) => x.measures.metric.amount * tempTest + x.measures.metric.unitShort
    //   );
    // };
  }

  componentDidMount() {
    axios
      // .get(
      //   'https://api.spoonacular.com/recipes/' +
      //     this.props.testTest +
      //     '/ingredientWidget.json?apiKey=' +
      //     apiKey
      // )
      .get('http://localhost:3000/data/ingredientsData.json')
      .then((res) => {
        this.setState({
          ingredients: res.data.ingredients,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    // console.log(this.props.testTest + 'hier tetsttest');
    return (
      <div>
        <h2>Ingredients</h2>
        <div className="zutaten-liste">
          {this.state.ingredients.map((ingredient, index) => (
            <div key={index}>
              <div>
                <img
                  src={
                    ' https://spoonacular.com/cdn/ingredients_100x100/' +
                    ingredient.image
                  }
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default IngredientImages;
