import React from 'react';
import s from './searchResultsCard.module.scss';

import { Link } from '@reach/router';

function SearchResultsCard({ title, baseUri, imgUrl, id, readyInMinutes }) {
  return (
    <Link to={`/recipe/${id}`} id={id}>
      <div className={s.cardContainer}>
        <div className={s.imgContainer}>
          <img
            className={s.img}
            src={`${baseUri}${imgUrl}`}
            alt="recipe card"
          />
        </div>
        <p className={s.categories}>{`Ready in ${readyInMinutes} minutes`}</p>
        <h2 className={s.recipeName}>{title}</h2>
      </div>
    </Link>
  );
}

export default SearchResultsCard;
