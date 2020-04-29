import React from 'react';
import s from './instructionCard.module.scss';

function InstructionCard({ number, instruction, ingredients }) {
  return (
    <div className={s.cardContainer}>
      <h3>{number}</h3>
      <h3>{instruction}</h3>
      <h3>{ingredients}</h3>
    </div>
  );
}

export default InstructionCard;
