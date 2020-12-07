import { Get} from 'react-axios'
import Card from './Card';


// var apiKey = "dc19a07e2b204a24857d8eff71c69d5b";
// var apiKey2 = "df611f75b97141be917063ad735d8e66";


const Random = () => {
    return ( 
        
            <Get url="https://api.spoonacular.com/recipes/random?&number=3&apiKey=dc19a07e2b204a24857d8eff71c69d5b" >
            {(error, response, isLoading, makeRequest, axios) => {
                if(error) {
                return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
                }
                else if(isLoading) {
                return (<div>Loading...</div>)
                }
                else if(response !== null) {
                return (
                    <div id="RecipeCard" className="random">
                    
                    {response.data.recipes.map(recipes => <Card
                    key={recipes.id} 
                    recipe={recipes}
                    />
                    )}
                    
                     <button className="button" onClick={() => makeRequest({ params: { refresh: true } })}>Nothing for you? Try it again!</button> 
                     </div>)
                }
                return (<div>Default message before request is made.</div>)
            }}
            </Get>
      
     );
}
 
export default Random;