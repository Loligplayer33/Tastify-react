/* eslint-disable jsx-a11y/no-static-element-interactions */
import styles from './home.module.scss';

import React from 'react';

// import ProcessSearch from '../Search/ProcessSearch';
import HomeInput from './HomeInput';
import RecipeCard from './RecipeCard';
import Search from '../Search/apiSearch';
import cardContent from '../StaticData/DataHome';

function Home() {
  async function onSearch(term) {
    if (term !== '' || undefined) {
      await new Search(term).getResults();
    }
  }

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.header}>We got everything you need</h1>

        <HomeInput onSearch={onSearch} />
      </div>
      <h1 className={styles.cardHeading}>There is magic in the making</h1>
      <div className={styles.cardSection}>
        <RecipeCard
          img={cardContent.imgRecipe}
          link={cardContent.linkToRecipes}
          content={cardContent.recipesTxt}
          heading={cardContent.recipesHeading}
          btnContent="Browse recipes"
        />
        <RecipeCard
          img={cardContent.imgRecipeOTD}
          link={cardContent.linkToRecipeOTD}
          content={cardContent.pickOfTheDayTxt}
          heading={cardContent.recipeOTDHeading}
          btnContent="Take a look"
        />
        <RecipeCard
          img={cardContent.imgInspiration}
          link={cardContent.linkToInspiration}
          content={cardContent.inspirationTxt}
          heading={cardContent.inspirationHeading}
          btnContent="Get inspiration"
        />
      </div>
    </div>
  );
}

export default Home;