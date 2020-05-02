import React from 'react';

// very similar style to ingredient ul - same file (DRY)
import s from './ingredients.module.scss';

function Nutrients({ recipe }) {
  const NutrientInformation = [
    checkIfInfoGiven('diet:', recipe.diets, 'individualIngredient'),
    checkIfInfoGiven('vegatarian', recipe.vegetarian),
    checkIfInfoGiven('vegan', recipe.vegan),
    checkIfInfoGiven('very healthy', recipe.veryHealthy),
    checkIfInfoGiven('very popular', recipe.veryPopular),
    checkIfInfoGiven('cuisines:', recipe.cuisines),
    checkIfInfoGiven(
      'Price per Serving: €',
      Math.round(recipe.pricePerServing / 100)
    ),
  ];

  function checkIfInfoGiven(label, info) {
    function renderMultipleElements(name, index, array) {
      // only render the first to elements
      if (index < 2) {
        // only place a comma if element is the first one
        if (index === 0) {
          return `${label} ${name}, `;
          // only place comma if another element will come after current one
        } else if (index === 1 && (array[index + 1] === undefined || '')) {
          return `${name}, `;
        } else {
          return `${name}`;
        }
      }
    }

    // check of what type the info is and render based on it
    if (typeof info === 'object') {
      if (info.length !== 0) {
        return info.length === 1
          ? `${label} ${info}`
          : info.map((name, index, array) =>
              renderMultipleElements(name, index, array)
            );
      }
      return `${label} no information given 🤯`;
    } else if (typeof info === 'string' || typeof info === 'number') {
      return info !== '' && info !== 0
        ? `${label} ${info}`
        : `${label} sorry, we would love to know too 🧐`;
    } else if (typeof info === 'boolean') {
      return info === true
        ? `this recipe is ${label} 🥦`
        : `this recipe is not ${label} 🧁`;
    }
  }

  return (
    <div className={s.nutrientsList}>
      <h3 className={s.heading}>Some more information:</h3>
      <ul className={s.ingredientsUl}>
        {NutrientInformation.map(function renderNutrientInfo(
          information,
          index
        ) {
          return (
            <li className={s.individualIngredient} key={index}>
              {information}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Nutrients;
