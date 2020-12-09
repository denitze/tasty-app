import styled from 'styled-components';
// import { Basic } from '../styles';

import React from 'react';
import axios from 'axios';
// import Tweet from './Tweet';

// var apiKey = '7df74c97721c438485ec13af5100c9ad';
var apiKey = 'bc21dba5538d4477ba88fa9e21a53749';
// var apiKey = 'df611f75b97141be917063ad735d8e66';

class Instructions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructions: [],
      // id: 635350,
      testtest: [],
      id: this.props.idTest,
    };
  }
  componentDidMount() {
    axios
      .get(
        'https://api.spoonacular.com/recipes/' +
          this.state.id +
          '/analyzedInstructions?apiKey=' +
          apiKey
      )
      // .get('http://localhost:3000/data/instructionData.json')
      .then((res) => {
        this.setState({
          instructions: res.data[0].steps,
        });
        console.log(this.state.equipment);
        console.log(this.state.instructions);
        // const test1 = this.state.instructions.map((x) => x.step);
        // console.log(test1);
        // const test2 = this.state.instructions.map((x) => x.number);
        // console.log(test2);
        // const test3 = this.state.instructions.map((x) =>
        //   x.equipment.map((x) => x.name)
        // );
        // console.log(test3);
        // const test4 = this.state.instructions.map((x) =>
        //   x.ingredients.map((x) => x.name)
        // );
        // console.log(test4);

        console.log(this.state.instructions.map((x) => x.equipment));
      })

      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <TitleInstruction>
          <h2>Instructions</h2>
        </TitleInstruction>

        <StepList>
          {this.state.instructions.map((steps, index) => (
            <Step key={index}>
              <h2>Step {steps.number}</h2>
              <p>{steps.step}</p>
            </Step>
          ))}
        </StepList>
      </>
    );
  }
}

const StepList = styled.div`
  /* background-color: red; */
  margin-top: 2rem;
`;

const Step = styled.div`
  margin-bottom: 2rem;
  /* background-color: #45c4ad; */

  h2 {
    font-size: 2rem;
    font-weight: 500;
  }
`;

const TitleInstruction = styled.div`
  margin-top: 3rem;
`;

export default Instructions;
