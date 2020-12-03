import {  Get } from 'react-axios'
import Card from './Card';

const Today = () => {
    return ( 
        <div id="today">
            <Get url="https://api.spoonacular.com/recipes/random?&number=1&apiKey=dc19a07e2b204a24857d8eff71c69d5b" >
            {(error, response, isLoading, makeRequest, axios) => {
                if(error) {
                return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
                }
                else if(isLoading) {
                return (<div>Loading...</div>)
                }
                else if(response !== null) {
                return (
                    <section>
                    <h1>Recipe of the Day: </h1>
                    <div id="RecipeCard">
                        
                        {response.data.recipes.map(recipes => <Card
                            key={recipes.id}
                            recipe={recipes}
                        />
                        )}
                    </div>
                    </section>)
                }
                return (<div>Default message before request is made.</div>)
            }}
            </Get>
      </div>
     );
}
 
export default Today;