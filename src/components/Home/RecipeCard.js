import React from 'react';
import { Link } from '@reach/router';

import s from './recipeCard.module.scss';

function RecipeCard(props) {
  // make the middle card bigger and link to RecipeOTD component
  if (props.cardNumber === '2') {
    return (
      <div className={`${s.card} ${s.cardBig}`}>
        <Link to={`/recipe/${props.id}`} id={props.id}>
          <img className={s.img} src={props.img} alt="recipe" />
        </Link>
        <div className={s.contentContainer}>
          <h2 className={s.heading}>{props.heading}</h2>
          <p className={s.content}>{props.content}</p>
          <Link className={s.btn} to={`/recipe/${props.id}`} id={props.id}>
            {props.btnContent}
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className={s.card}>
      <Link to={props.link}>
        <img className={s.img} src={props.img} alt="recipe" />
      </Link>
      <div className={s.contentContainer}>
        <h2 className={s.heading}>{props.heading}</h2>
        <p className={s.content}>{props.content}</p>
        <Link className={s.btn} to={props.link}>
          {props.btnContent}
        </Link>
      </div>
    </div>
  );
}

export default RecipeCard;
