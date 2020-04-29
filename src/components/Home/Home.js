/* eslint-disable jsx-a11y/no-static-element-interactions */
import styles from './home.module.scss';

import { navigate } from '@reach/router';
import React from 'react';

import HomeInput from './HomeInput';
import RecipeCard from './RecipeCard';
import cardContent from '../StaticData/DataHome';

import imgRecipe from '../../assets/home-a__recipe.jpg';
import imgRecipeOTD from '../../assets/home-a__recipe-of-the-day.jpg';
import imgInspiration from '../../assets/home-a__inspiration.jpg';

function Home() {
  async function onSearch(term) {
    if (term !== '' || undefined) {
      navigate(`searchResults?term=${term}`);
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
          img={imgRecipe}
          link={cardContent.linkToRecipes}
          content={cardContent.recipesTxt}
          heading={cardContent.recipesHeading}
          btnContent="Browse recipes"
          cardNumber="1"
        />
        <RecipeCard
          img={imgRecipeOTD}
          link={cardContent.linkToRecipeOTD}
          content={cardContent.pickOfTheDayTxt}
          heading={cardContent.recipeOTDHeading}
          btnContent="Take a look"
          cardNumber="2"
        />
        <RecipeCard
          img={imgInspiration}
          link={cardContent.linkToInspiration}
          content={cardContent.inspirationTxt}
          heading={cardContent.inspirationHeading}
          btnContent="Get inspiration"
          cardNumber="3"
        />
      </div>
    </div>
  );
}

export default Home;
