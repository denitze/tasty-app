import OneRecipeHeader from '../components/OneRecipeHeader';
import OneRecipeImage from '../components/OneRecipeImage';
import OneRecipeBadges from '../components/OneRecipeBadges';
import Instructions from '../components/Instructions';
import TestCounter from '../components/TestCounter';
// import Equipment from '../components/Equipment';
import styled from 'styled-components';
// import { Basic } from '../styles';

import React from 'react';
import axios from 'axios';
// import OneRecipeSummary from '../components/OneRecipeSummary';

class OneRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rezept: [],
      id: 635350,
      // id: this.props.match.params.id,
    };
  }
  componentDidMount() {
    axios
      //   .get(
      //     'https://api.spoonacular.com/recipes/' +
      //       this.state.id +
      //       '/information?apiKey=' +
      //       apiKey
      //   )
      .get('http://localhost:3000/data/recipeData.json')
      .then((res) => {
        this.setState({
          rezept: res.data,
        });
      })

      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <Recipe>
          <CounterBox>
            <TestCounter rezept={this.state.rezept} />
            {/* <Equipment /> */}
          </CounterBox>
          <RecipeBox>
            <OneRecipeHeader rezept={this.state.rezept} />
            <OneRecipeBadges rezept={this.state.rezept} />
            <OneRecipeImage rezept={this.state.rezept} />
            {/* <OneRecipeSummary rezept={this.state.rezept} /> */}
            <Instructions />
          </RecipeBox>
        </Recipe>
      </>
    );
  }
}

// Zufallszahl von 0 bis 255
const generateRandom = () => Math.floor(Math.random() * 255);
// drei zufallsZahlen von 255 in Array [R,G,B]
const randomZahl = function () {
  const containerRGB = [
    generateRandom(),
    generateRandom(),
    generateRandom(),
    0.3,
  ];
  return containerRGB.join();
};
const randdom3 = randomZahl();

const randomRgba = 'rgba(' + randdom3 + ')';

const Recipe = styled.div`
  background-color: ${randomRgba};
  padding: 5rem 10rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const CounterBox = styled.div`
  background-color: #bccfed;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%auto;
    padding: 2rem 0rem 4rem 0rem;
  }
  flex: 2 1 40%;
`;

const RecipeBox = styled.div`
  background-color: #feeb16;
  flex: 2 1 60%;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  min-height: 90vh;
  padding: 5rem 10rem;
`;

export default OneRecipe;
