import React from 'react';
import axios from 'axios';
import RandomAll from './RandomAll';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

var apiKey2 = 'dc19a07e2b204a24857d8eff71c69d5b';
// var apiKey2 = 'df611f75b97141be917063ad735d8e66';

class SectionRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: '',
      recipe: [],
      isLoading: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      searchWord: e.target.value,
    });
  };

  handleEnter = (e) => {
    if (e.keyCode === 13) this.handleSearch(this.state.searchWord);
  };

  handleSearch = (searchWord) => {
    if (searchWord) {
      axios
        .get(
          'https://api.spoonacular.com/recipes/search?query=' +
            searchWord +
            '&number=3&apiKey=' +
            apiKey2
        )
        .then((res) => {
          this.setState({
            recipe: res.data.results,
            isLoading: true,
          });
        })
        .catch((err) => console.log(err));
    } else this.setState({ recipe: [] });
  };

  render() {
    return (
      <section id="SectionRecipe">
        <div className="inputRecipe">
          <h1>Find a recipe, an idea, an inspiration...</h1>
          <input
            type="text"
            name=""
            id="ingredient"
            placeholder="enter an ingredient"
            onChange={this.handleChange}
            onKeyUp={this.handleEnter}
          />
          <button onClick={() => this.handleSearch(this.state.searchWord)}>
            Search for recipes!
          </button>
        </div>

        <div id="RecipeCard">
          {this.state.isLoading ? (
            this.state.recipe.map((recipe) => (
              <div id="food-result">
                <div className="recipe" key={recipe.id}>
                  <img
                    src={
                      ' https://spoonacular.com/recipeImages/' +
                      recipe.id +
                      '-480x360'
                    }
                    alt=""
                  />
                  <h2>
                    {recipe.title.length < 20
                      ? `${recipe.title}`
                      : `${recipe.title.substring(0, 25)}...`}
                  </h2>
                  <p>
                    Are you craving for{' '}
                    {recipe.title.length < 20
                      ? `${recipe.title}`
                      : `${recipe.title.substring(0, 25)}...`}
                    ? Then check out the full recipe instructions!
                  </p>
                  <button>
                    <Link
                      to={{
                        pathname: `/recipe/${recipe.id}`,
                        state: { recipe: recipe.title },
                      }}
                    >
                      See Recipe
                    </Link>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <RandomAll />
          )}
        </div>
      </section>
    );
  }
}

export default SectionRecipe;
