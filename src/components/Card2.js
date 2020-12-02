const Card2 = (props) => {
    return ( 
        <section id="RecipeCard">
         <div id="food-result">
        <div class="recipe">
            <img src={props.recipeImg} alt=""/>
            <h2>{props.recipeTitle}</h2>
            <p>{props.recipeDescription}</p>
            <button>Action</button>
        </div>  
       
    </div>

        </section>
     );
}
 
export default Card2;