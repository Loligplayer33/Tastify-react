import React, { useState, useEffect } from 'react';
import getRecipe from '../Search/apiRecipe';
import InstructionCard from './InstructionCard';

import s from './recipe.module.scss';

function Recipe({ id }) {
  const [recipe, setRecipe] = useState(undefined);
  const [servings, setServings] = useState(
    recipe === undefined ? 6 : recipe.servings
  );

  useEffect(() => {
    async function getApiResults() {
      const recipeData = await getRecipe(id);
      setRecipe(recipeData.data);
      setServings(recipeData.data.servings);
    }
    getApiResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  function makeKey(string) {
    return string.replace(' ', '').toLowerCase();
  }

  // getting amount per person per ingr. and return
  function formatIngredient(name, amount, unit) {
    const ingredientAmoutPerPerson = amount / recipe.servings;

    return `${Math.round(ingredientAmoutPerPerson * servings)} ${unit} ${name}`;
  }

  // passing the ingredients needed into InstructionCard.js
  function returnInstructionPerIngredient(ingredients) {
    if (ingredients.length !== 0) {
      return ingredients.map(function returnIngredientName(ingredient) {
        return [...ingredient.name];
      });
    } else {
      return 'no ingredients needed for this step';
    }
  }

  console.log(recipe);

  // make sure that render doesn't start before api returned
  if (recipe === undefined) {
    return <h1>Loading...</h1>;
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
              {recipe.cuisines.map(function renderCuisines(cuisine, index) {
                if (index < 2) {
                  return ` ${cuisine} / `;
                } else if (index === 2) {
                  return ` ${cuisine}`;
                } else if (recipe.cuisines.length === 0) {
                  return ' no recipes defined';
                }
                return '';
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
            <p className={s.infoContent}>
              {!recipe.preparationMinutes ? '0' : recipe.preparationMinutes}
            </p>
          </div>

          <div className={s.contentHolder}>
            <h3 className={s.infoHeading}>Cook</h3>
            <p className={s.infoContent}>
              {!recipe.readyInMinutes ? '0' : recipe.readyInMinutes}
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
        <div className={s.recInfoContainer}>
          <aside className={s.ingredientsContainer}>
            <h3 className={s.recipeHeading}>Ingredients</h3>
            <div className={s.ingredientsList}>
              <ul className={s.ingredientsUl}>
                {/* render ingredient amount based on servings */}
                {recipe.extendedIngredients.map((ingredient) => {
                  Math.round(ingredient.measures.metric.amount);

                  return (
                    <li
                      className={s.individualIngredient}
                      key={makeKey(ingredient.name)}
                    >
                      {formatIngredient(
                        ingredient.name,
                        ingredient.measures.metric.amount,
                        ingredient.measures.metric.unitShort
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
          <section className={s.instructionsContainer}>
            <h3 className={s.recipeHeading}>Instructions</h3>
            <div className={s.instructionInnerContainer}>
              {recipe.analyzedInstructions[0].steps.map(
                function renderIntructionCard(instruction) {
                  return (
                    <InstructionCard
                      number={instruction.number}
                      instruction={instruction.step}
                      ingredients={returnInstructionPerIngredient([
                        ...instruction.ingredients,
                      ])}
                      key={instruction.number}
                    />
                  );
                }
              )}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Recipe;
