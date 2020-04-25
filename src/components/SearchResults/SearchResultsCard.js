import React from 'react';
import s from './searchResultsCard.module.scss';

import { Link } from '@reach/router';

function SearchResultsCard({ title, imgUrl, id }) {
  return (
    <Link to={`/recipe/${id}`} id={id}>
      <div className={s.cardContainer}>
        <div className={s.imgContainer}>
          <img className={s.img} src={imgUrl} alt="recipe card" />
        </div>
        <p className={s.categories}>
          {/* TODO set correct category */}
          Breakfast / Seasonal
        </p>
        <h2 className={s.recipeName}>{title}</h2>
      </div>
    </Link>
  );
}

export default SearchResultsCard;
