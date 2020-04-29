import React from 'react';
import s from './recipeCard.module.scss';

import boilerImg from '../../assets/home-a__recipe-of-the-day.jpg';

function RecipeCard({ title }) {
  return (
    <div className={s.recipeCard}>
      <div className={s.imageContainer}>
        <img className={s.image} src={boilerImg} alt="recipe" />
      </div>
      <div className={s.text}>
        <div className={s.textWrap}>
          <h2 className={s.title}>{title}</h2>
          <p className={s.category}>Test</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
