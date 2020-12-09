import React from 'react';
import axios from 'axios';

// var apiKey = '7df74c97721c438485ec13af5100c9ad';
var apiKey = 'df611f75b97141be917063ad735d8e66';
// const recipeID = 1563437;

class Test extends React.Component {
  state = { count: this.props.testState, id: this.props.testTest };

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
      ingredients: [],
      id: props.testTest,
    };

    // const multiServings = tempTest * probs.testHallo.servings;

    // const testMap = () => {
    //   return probs.testHallo.extendedIngredients.map(
    //     (x) => x.measures.metric.amount * tempTest + x.measures.metric.unitShort
    //   );
    // };
  }

  componentDidMount() {
    console.log(this.state.id + ' a asdasd');
    axios
      .get(
        'https://api.spoonacular.com/recipes/' +
          this.state.id +
          '/ingredientWidget.json?apiKey=' +
          apiKey
      )
      // .get('http://localhost:3000/data/ingredientsData.json')
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
        {this.state.ingredients.map((ingredient, index) => (
          <div key={index}>
            <div className="zutaten">
              <div>{ingredient.name}</div>
              <div>
                {ingredient.amount.metric.value * this.state.count + ' '}
                {ingredient.amount.metric.unit}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Test;
