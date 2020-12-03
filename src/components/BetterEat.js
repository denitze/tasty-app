import React from 'react';
import axios from 'axios';
import RandomBetter from './RandomBetter';
 

var apiKey = "dc19a07e2b204a24857d8eff71c69d5b";

class BetterEat extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        searchWord:'',
        recipe: [],
        isLoading: false
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
      axios.get('https://api.spoonacular.com/recipes/search?query='+searchWord+'&diet=paleo&number=6&apiKey='+apiKey)
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
                <h1>Find low calories recipes, an idea, an inspiration...</h1>
                <input type="text" name="" id="ingredient" placeholder="enter an ingredient" onChange={this.handleChange} onKeyUp={this.handleEnter}  />
                <button onClick={()=>this.handleSearch(this.state.searchWord)}>Search for recipes!</button>
            </div>
            <div id="RecipeCard">  
          {
            
            this.state.isLoading ?
            this.state.recipe.map(
              (recipe)=> 
                        <div id="food-result">
                            <div className="recipe" key={recipe.id}>
                                <img src={' https://spoonacular.com/recipeImages/' + recipe.id + '-480x360'}alt="" />
                                <h2>{recipe.title}</h2>
                                <button>Action</button>
                            </div>
                        </div>
            ) : <RandomBetter />
          } </div> 
              </section> 
      );
    }
  
  }
  
  export default BetterEat;
