import React from 'react';

import RecipeCard from '../Recipes/RecipeCard';
import s from './inspiration.module.scss';

function InspirationRecipeRender({ data }) {
  return (
    <section className={s.recipesContainer}>
      {data.map(function displayCurrentRecipe(recipe) {
        return (
          <RecipeCard
            title={
              recipe.title.length > 13
                ? recipe.title.slice(0, 13) + '...'
                : recipe.title
            }
            imgUrl={recipe.image}
            id={recipe.id}
            key={recipe.title.replace(' ', '').toLowerCase() + Math.random()}
          />
        );
      })}
    </section>
  );
}

export default InspirationRecipeRender;
