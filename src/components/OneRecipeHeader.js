import styled from 'styled-components';

const OneRecipeHeader = (probs) => {
  // console.log(probs.rezept);
  // console.log(probs.rezept.title);
  // console.log(probs.rezept.spoonacularScore);
  const scoreSpoon = probs.rezept.spoonacularScore;
  const scoreStars = () => {
    if (scoreSpoon <= 20) {
      return '⭐️';
    } else if (scoreSpoon <= 40) {
      return '⭐️⭐️';
    } else if (scoreSpoon <= 60) {
      return '⭐️⭐️⭐️';
    } else if (scoreSpoon <= 80) {
      return '⭐️⭐️⭐️⭐️';
    } else {
      return '⭐️⭐️⭐️⭐️⭐️';
    }
  };
  // console.log(scoreStars());
  return (
    <div>
      <OneRecipeTitle>
        <h3>{probs.rezept.title}</h3>
      </OneRecipeTitle>
      <div className="RatingStars">{scoreStars()}</div>
    </div>
  );
};

const OneRecipeTitle = styled.div`
  margin-bottom: 1.5rem;
`;

export default OneRecipeHeader;
