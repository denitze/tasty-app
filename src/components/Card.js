import {Link} from "react-router-dom";

const Card = (props) => {
    console.log(props.recipe);
    return ( 
            <div id="food-result">
                <div className="recipe">
                    <img src={' https://spoonacular.com/recipeImages/' + props.recipe.id + '-480x360'} alt="" />
                    <h2>
                        {props.recipe.title.length < 20 ? `${props.recipe.title}` : `${props.recipe.title.substring(0,25)}...`}
                    </h2>
                    <p>Are you craving for {props.recipe.title.length < 20 ? `${props.recipe.title}` : `${props.recipe.title.substring(0,25)}...`}? Then check out the full recipe instructions!</p>
                    <button>
                    <Link to={{ pathname: `/recipe/${props.recipe.id}`, state: { recipe: props.recipe.title}
                }}>See Recipe</Link>
                    </button>
                </div>
            </div>
      
     );
}
 
export default Card;