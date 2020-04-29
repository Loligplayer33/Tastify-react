import React from 'react';

import s from './ingredients.module.scss';

function Ingredients({ recipe, servings }) {
  // getting amount per person per ingr. and return
  function formatIngredient(name, amount, unit) {
    const ingredientAmoutPerPerson = amount / recipe.servings;

    return `${Math.round(ingredientAmoutPerPerson * servings)} ${unit} ${name}`;
  }

  function makeKey(string) {
    return string.replace(' ', '').toLowerCase();
  }

  return (
    <aside className={s.ingredientsContainer}>
      <h3 className={s.heading}>Ingredients</h3>
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
  );
}

export default Ingredients;
