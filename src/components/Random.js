import { Get} from 'react-axios'
import Card from './Card';


// var apiKey = "dc19a07e2b204a24857d8eff71c69d5b";
// var apiKey2 = "df611f75b97141be917063ad735d8e66";


const Random = () => {
    return ( 
        <div>
            <Get url="https://api.spoonacular.com/recipes/random?&number=6&apiKey=df611f75b97141be917063ad735d8e66" >
            {(error, response, isLoading, makeRequest, axios) => {
                if(error) {
                return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
                }
                else if(isLoading) {
                return (<div>Loading...</div>)
                }
                else if(response !== null) {
                return (
                    <div id="RecipeCard">
                    {response.data.recipes.map(recipes => <Card
                    key={recipes.id} 
                    recipe={recipes}
                    />
                    )}
                     <button onClick={() => makeRequest({ params: { refresh: true } })}>Refresh</button></div>)
                }
                return (<div>Default message before request is made.</div>)
            }}
            </Get>
      </div>
     );
}
 
export default Random;