import React, { Component } from 'react';
import IngredientImages from './IngredientImages';

// import data from '../data/test_data.json';
import Ingredients from './Ingredients';
import styled from 'styled-components';
// const sayHelloHandler = (e) => {
//   console.log('hallo');
// };

class Counter extends Component {
  state = { count: 4 };

  handleChange = (e) =>
    console.log(this.setState({ [e.target.name]: e.target.value }));

  handleIncrement = () => {
    this.setState(
      { count: this.state.count + 1 }
      // , () =>
      // console.log(this.state.count + ' Hallo Test ')
    );

    // console.log(this.state.count);
  };
  handleReset = () => {
    this.setState({ count: 0 });
  };
  handleDecrement = () => {
    this.setState(
      { count: this.state.count - 1 }
      // , () =>
      // console.log(this.state.count + ' Hallo Test ')
    );
  };
  render() {
    console.log(this.props.idTest + 'Hallo Übergabe');
    console.log(this.props.servings);
    console.log(this.state.count);
    return (
      <CounterKasten>
        <IngredientImages testTest={this.props.idTest} />
        <div className="plusminus">
          {/* <button onClick={() => sayHelloHandler}>Hallo</button> */}
          <div className="minus">
            <button onClick={this.handleDecrement}>-</button>
          </div>
          <div className="result" onChange={() => this.handleChange}>
            <p>{this.state.count}</p>
          </div>
          <div className="plus">
            <button onClick={() => this.handleIncrement()}>+</button>
          </div>
          {/* <div className="reset">
          <button onClick={() => this.handleReset()}>+</button>
        </div> */}
        </div>
        <div className="test">
          <Ingredients
            testState={this.state.count}
            testTest={this.props.idTest}
          />
        </div>
      </CounterKasten>
    );
  }
}

const CounterKasten = styled.div`
  /* background-color: #85e854; */
  width: 22vw;
  margin: 15rem auto;
  @media only screen and (max-width: 1440px) {
    /* background-color: red; */
    padding: 5rem;
    width: 80vw;
  }
`;

export default Counter;
