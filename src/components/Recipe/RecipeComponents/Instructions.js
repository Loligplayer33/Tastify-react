import React from 'react';

import InstructionCard from './InstructionCard';
import s from './instructions.module.scss';

function Instructions({ recipe }) {
  // passing the ingredients needed into InstructionCard.js
  function returnInstructionPerIngredient(ingredients) {
    if (ingredients.length !== 0) {
      return ingredients.map(function returnIngredientName(ingredient) {
        return [...ingredient.name];
      });
    }
    // only show needed ingredients
    return 'no ingredient needed for this step 🌶️';
  }

  return (
    <section className={s.instructionsContainer}>
      <h3 className={s.heading}>Instructions</h3>
      <div className={s.instructionInnerContainer}>
        {recipe.analyzedInstructions[0].steps.map(function renderIntructionCard(
          instruction
        ) {
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
        })}
      </div>
    </section>
  );
}

export default Instructions;
