import React from 'react';

import { Link } from '@reach/router';
import s from './recipeCard.module.scss';

function RecipeCard({ title, imgUrl, id }) {
  return (
    <Link to={`/recipe/${id}`} id={id}>
      <div className={s.recipeCard}>
        <div className={s.imageContainer}>
          <img className={s.image} src={imgUrl} alt="recipe" />
        </div>
        <div className={s.text}>
          <div className={s.textWrap}>
            <h2 className={s.title}>{title}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;
