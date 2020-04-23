import React from 'react';
import { Link } from '@reach/router';

import s from './recipeCard.module.scss';

function RecipeCard(props) {
  return (
    <div className={s.card}>
      {/* img link to the seperate pages */}
      <Link to={props.link}>
        {/* TODO link doesn' work, img doesn't show */}
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
