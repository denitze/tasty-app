const OneRecipeImage = (probs) => {
  // console.log(probs.rezept);
  // console.log(probs.rezept.image);
  const recipeID = probs.rezept.id;
  const imgType = probs.rezept.imageType;
  const imgSize = '636x393';
  const headerImg =
    'https://spoonacular.com/recipeImages/' +
    recipeID +
    '-' +
    imgSize +
    '.' +
    imgType;
  // console.log(headerImg);
  return (
    <div className="one-recipe-image">
      <img src={headerImg} alt="header" />
    </div>
  );
};

export default OneRecipeImage;

// ImageSize
// 90x90
// 240x150
// 312x150
// 312x231
// 480x360
// 556x370
// 636x393
