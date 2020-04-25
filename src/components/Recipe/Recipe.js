import React, { useState, useEffect } from 'react';
import getRecipe from '../Search/apiRecipe';

function Recipe({ id }) {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    async function getApiResults() {
      const recipeData = await getRecipe(id);
      setRecipe(recipeData);
    }
    getApiResults();
  }, [id]);

  console.log(recipe);

  return (
    <div>
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
    </div>
  );
}

export default Recipe;
