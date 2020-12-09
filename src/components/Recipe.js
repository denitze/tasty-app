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

var apiKey = '7df74c97721c438485ec13af5100c9ad';
// var apiKey = 'bc21dba5538d4477ba88fa9e21a53749';
// var apiKey = 'df611f75b97141be917063ad735d8e66';

class OneRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rezept: [],
      // id: 635350,
      id: this.props.match.params.id,
    };
    console.log(this.props.match.params.id);
  }
  componentDidMount() {
    axios
      .get(
        'https://api.spoonacular.com/recipes/' +
          this.state.id +
          '/information?apiKey=' +
          apiKey
      )
      // .get('http://localhost:3000/data/recipeData.json')
      .then((res) => {
        this.setState({
          rezept: res.data,
        });
      })

      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state.id);
    return (
      <>
        <Recipe>
          <CounterBox>
            <TestCounter
              idTest={this.state.id}
              servings={this.state.rezept.servings}
            />
            {/* <Equipment /> */}
          </CounterBox>
          <RecipeBox>
            <OneRecipeHeader rezept={this.state.rezept} />
            <OneRecipeBadges rezept={this.state.rezept} />
            <OneRecipeImage rezept={this.state.rezept} />
            {/* <OneRecipeSummary rezept={this.state.rezept} /> */}
            <Instructions idTest={this.state.id} />
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
    0.02,
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
  @media only screen and (max-width: 1440px) {
    /* background-color: red; */
    flex-direction: column;
    padding: 5rem;
  }
`;

const CounterBox = styled.div`
  margin-top: 5rem;
  background-color: #fff;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  flex: 2 1 40%;
  @media only screen and (max-width: 1440px) {
    order: 3;
  }
`;

const RecipeBox = styled.div`
  background-color: #fff;
  margin-top: 5rem;
  flex: 2 1 60%;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  min-height: 90vh;
  padding: 5rem 10rem;
  @media only screen and (max-width: 1440px) {
    order: 1;
    padding: 5rem;
  }
  @media only screen and (max-width: 680px) {
    margin-top: 5rem;
    /* background-color: #585ae3; */
    padding: 0rem;
    flex: 2 1 100%;
  }
`;

export default OneRecipe;
