import React, { useState, useEffect } from 'react';

import getRecipe from '../Search/apiRecipe';
import Ingredients from './RecipeComponents/Ingredients';
import Instructions from './RecipeComponents/Instructions';

import s from './recipe.module.scss';

function Recipe({ id }) {
  const [recipe, setRecipe] = useState(undefined);
  const [servings, setServings] = useState(
    recipe === undefined ? 6 : recipe.servings
  );

  // get recipe information from spoonacular api
  useEffect(() => {
    async function getApiResults() {
      const recipeData = await getRecipe(id);
      setRecipe(recipeData.data);
      setServings(recipeData.data.servings);
    }
    getApiResults();
  }, [id]);

  function renderCategories() {
    return recipe.cuisines.length === 0
      ? 'no  categories provided 😶'
      : recipe.cuisines.map(function renderCuisines(cuisine, index, arr) {
          return arr.length !== index + 1 ? ` ${cuisine},` : ` ${cuisine}`;
        });
  }
  // make sure that render doesn't start before api returned
  if (recipe === undefined) {
    return (
      <div className={s.loaderContainer}>
        <h1 className={s.loader}>Loading...</h1>
      </div>
    );
  } else if (recipe !== undefined) {
    return (
      <div className={s.container}>
        <header className={s.header}>
          <div className={s.headerLead}>
            <h1 className={s.heading}>
              {recipe.title.length > 50
                ? recipe.title.slice(0, 50) + '...'
                : recipe.title}
            </h1>
            <p className={s.categories}>
              <span className={s.categoryColor}>categories: </span>
              {renderCategories()}
            </p>
            <div className={s.imgContainer}>
              <img className={s.img} src={recipe.image} alt="recipe" />
            </div>
          </div>
        </header>
        <aside className={s.recipeInfo}>
          <div className={s.contentHolder}>
            <h3 className={s.infoHeading}>Preparation</h3>
            <p className={s.infoContent}>
              {!recipe.preparationMinutes ? '--' : recipe.preparationMinutes}
            </p>
          </div>

          <div className={s.contentHolder}>
            <h3 className={s.infoHeading}>Cook</h3>
            <p className={s.infoContent}>
              {!recipe.readyInMinutes ? '--' : recipe.readyInMinutes}
            </p>
          </div>

          <div className={s.contentHolder}>
            <h3 className={s.infoHeading}>Servings</h3>
            <input
              className={`${s.servingsInput} ${s.infoContent}`}
              type="text"
              name="servings"
              id="servings"
              value={servings}
              onChange={function setServingCount(e) {
                setServings(e.target.value);
              }}
            />
          </div>
        </aside>
        <div className={s.recipeInfoContainer}>
          {/* Ingredients list component */}
          <Ingredients recipe={recipe} servings={servings} />
          {/* Instructions list component */}
          <Instructions recipe={recipe} />
        </div>
      </div>
    );
  }
}

export default Recipe;
