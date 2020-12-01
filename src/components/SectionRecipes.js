import RecipeCard from "./RecipeCard"
import recipeData from "../data/recipeDataDenise.json"

const SectionRecipes = () => {
    return ( 
        <section>
            <div className="inputRecipe">
                <h1>Find a recipe, an idea, an inspiration...</h1>
                <input type="text" name="" id="ingredient" placeholder="enter an ingredient" />
                <button onclick="findRecipe()">Search for recipes!</button>
            </div>
            <div className="CardsSection">
            {recipeData.map(singleData =>  <RecipeCard 
            recipeTitle = {singleData.title}
            recipeDescription = {singleData.description}
            recipeImg = {singleData.image}
            key = {singleData.id}
            
        />)}
            </div>
        </section>
     );
}
 
export default SectionRecipes;