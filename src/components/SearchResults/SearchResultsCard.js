import React from 'react';
import s from './searchResultsCard.module.scss';

function SearchResultsCard({ title, imgUrl }) {
  return (
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
  );
}

export default SearchResultsCard;
