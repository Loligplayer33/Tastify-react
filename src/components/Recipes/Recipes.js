import React, { useState, useEffect } from 'react';

import s from './recipes.module.scss';

import RecipeCard from './RecipeCard';
import getRandomRecipe from '../Search/apiGetRandomRecipes';

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getRandomRecipes() {
      // want to retrieve 16 recipes
      const recipeData = await getRandomRecipe(16);
      setRecipes(recipeData.data.recipes);
    }

    getRandomRecipes();
  }, []);

  if (recipes.length === 0) {
    return (
      <div className={s.loaderContainer}>
        <h1 className={s.loader}>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className={s.container}>
        <header className={s.header}>
          <h1 className={s.heading}>Recipes for Everyone</h1>
          {/* styling border */}
          <div className={s.borderBottom}></div>
          <p className={s.content}>
            We are certain you will find something you like here
          </p>
        </header>
        <div className={s.recipesContainer}>
          {recipes.map(function displayCurrentRecipe(recipe) {
            return (
              <RecipeCard
                title={
                  recipe.title.length > 13
                    ? recipe.title.slice(0, 13) + '...'
                    : recipe.title
                }
                imgUrl={recipe.image}
                id={recipe.id}
                key={recipe.title.replace(' ', '').toLowerCase()}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Recipes;
