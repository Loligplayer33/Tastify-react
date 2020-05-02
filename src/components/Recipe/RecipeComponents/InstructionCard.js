import React from 'react';
import s from './instructionsCard.module.scss';

function InstructionCard({ number, instruction, ingredients }) {
  function renderIngredient() {
    return typeof ingredients === 'string'
      ? ingredients
      : `ingredients needed: ${ingredients.map(function joinIngredients(
          ingredient,
          index
        ) {
          var lastElement = ingredients.length;
          // TODO comma doesn't work
          // add trailing comma, if the ingredient is not the only or the last one
          if (index !== lastElement - 1) {
            return `${ingredient.join('')} `;
          } else {
            return ingredient.join('');
          }
        })}`;
  }
  if (instruction.length > 20) {
    return (
      <div className={s.container}>
        <div className={s.cardContainer}>
          <h1 className={s.number}>{number}</h1>
          <h3 className={s.instruction}>{instruction}</h3>
        </div>
        <h3 className={s.ingredients}>{renderIngredient()}</h3>
      </div>
    );
  }
  return '';
}

export default InstructionCard;
