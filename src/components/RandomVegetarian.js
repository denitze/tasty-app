import { Get } from 'react-axios';
import Card from './Card';

const RandomVegetarian = () => {
  return (
    <Get url="https://api.spoonacular.com/recipes/random?&number=9&tags=vegetarian&apiKey=dc19a07e2b204a24857d8eff71c69d5b">
      {(error, response, isLoading, makeRequest, axios) => {
        if (error) {
          return (
            <div>
              Something bad happened: {error.message}{' '}
              <button onClick={() => makeRequest({ params: { reload: true } })}>
                Retry
              </button>
            </div>
          );
        } else if (isLoading) {
          return <div>Loading...</div>;
        } else if (response !== null) {
          return response.data.recipes.map((recipes) => (
            <Card key={recipes.id} recipe={recipes} />
          ));
        }
        return <div>Default message before request is made.</div>;
      }}
    </Get>
  );
};

export default RandomVegetarian;
