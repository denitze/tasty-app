import React from 'react';
import axios from 'axios';

var apiKey = '7df74c97721c438485ec13af5100c9ad';
// var apiKey = 'bc21dba5538d4477ba88fa9e21a53749';
const recipeID = 716429;

class Equipment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equipments: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        'https://api.spoonacular.com/recipes/' +
          recipeID +
          '/ingredientWidget.json?apiKey=' +
          apiKey
      )
      // .get('http://localhost:3000/data/equiqmentData.json')
      .then((res) => {
        this.setState({
          equipments: res.data.equipment,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <div>Ingredients</div>

        <ul>
          {this.state.equipments.map((equipment) => (
            <div key={equipment.name}>
              <div>{equipment.name}</div>
              <div>
                <img
                  src={
                    ' https://spoonacular.com/cdn/equipment_100x100/' +
                    equipment.image
                  }
                  alt=""
                />
              </div>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default Equipment;
