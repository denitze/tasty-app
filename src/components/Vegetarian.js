// import RecipeCard from "./RecipeCard"
import React from 'react';
import axios from 'axios';
// import recipeData from "../data/recipeDataDenise.json"
 

var apiKey = "dc19a07e2b204a24857d8eff71c69d5b";

class Vegetarian extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        searchWord:'',
        recipe: []
      }
    }
    
    handleChange = e =>{
      this.setState({
      searchWord : e.target.value
    })
    }
  
    handleEnter = e =>{
      if(e.keyCode === 13) this.handleSearch(this.state.searchWord)
    }
  
    handleSearch = (searchWord) => {
      if(searchWord){
      axios.get('https://api.spoonacular.com/recipes/search?query='+searchWord+'&diet=vegetarian&number=6&apiKey='+apiKey)
        .then(res => {
          this.setState({
            recipe: res.data.results
          });
        })
        .catch( err => console.log(err))
      }
      else this.setState({ recipe:[]})
    }
  
    render() {
  
      return (
        <section id="SectionRecipe">
            <div className="inputRecipe">
                <h1>Find a vegetarian recipe, an idea, an inspiration...</h1>
                <input type="text" name="" id="ingredient" placeholder="enter an ingredient" onChange={this.handleChange} onKeyUp={this.handleEnter}  />
                <button onClick={()=>this.handleSearch(this.state.searchWord)}>Search for recipes!</button>
            </div>
            <div id="RecipeCard">  
          {
            
            this.state.recipe ?
            this.state.recipe.map(
              (recipe)=> 
                        <div id="food-result">
                            <div className="recipe" key={recipe.id}>
                                <img src={' https://spoonacular.com/recipeImages/' + recipe.id + '-480x360'}alt="" />
                                <h2>{recipe.title}</h2>
                                <button>Action</button>
                            </div>
                        </div>
            ) : ''
          } </div> 
              </section> 
      );
    }
  
  }
  
  export default Vegetarian;
