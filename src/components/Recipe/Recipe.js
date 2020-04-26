import React, { useState, useEffect } from 'react';
import getRecipe from '../Search/apiRecipe';

import s from './recipe.module.scss';

function Recipe({ id }) {
  const [recipe, setRecipe] = useState(undefined);
  const [servings, setServings] = useState(
    recipe === undefined ? 6 : recipe.servings
  );

  useEffect(() => {
    async function getApiResults() {
      const recipeData = await getRecipe(id);
      // just set the recipe data - no config info needed
      setRecipe(recipeData.data);
    }
    getApiResults();
    console.log(recipe);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // TODO make sure that works tomorrow (to many requests for today)
  if (recipe === undefined) {
    return <h1>Loading...</h1>;
  } else if (recipe !== undefined) {
    return (
      <div className={s.container}>
        <header className={s.header}>
          <div className={s.headerLead}>
            <h1 className={s.heading}>
              {/* hier z.b ist recipe.title noch undefined */}
              {recipe.title.length > 50
                ? recipe.title.slice(0, 50) + '...'
                : recipe.title}
            </h1>
            <p className={s.categories}>
              <span className={s.categoryColor}>categories: </span>
              {recipe.cuisines.map(function renderCuisines(cuisine, index) {
                if (index < 2) {
                  return ` ${cuisine} / `;
                } else if (index === 2) {
                  return ` ${cuisine}`;
                }
              })}
            </p>
            <div className={s.imgContainer}>
              <img className={s.img} src={recipe.image} alt="recipe" />
            </div>
          </div>
        </header>
        <aside className={s.recipeInfo}>
          <div className={s.contentHolder}>
            <h3 className={s.infoHeading}>Preparation</h3>
            <p className={s.infoContent}>{recipe.preparationMinutes}</p>
          </div>

          <div className={s.contentHolder}>
            <h3 className={s.infoHeading}>Cook</h3>
            <p className={s.infoContent}>{recipe.readyInMinutes}</p>
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
        {/* <div className={s.recInfoContainer}>
          <section className={s.ingredients}></section>
        </div> */}
      </div>
    );
  }
}

export default Recipe;
