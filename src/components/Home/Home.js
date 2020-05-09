/* eslint-disable jsx-a11y/no-static-element-interactions */
import styles from './home.module.scss';

import { navigate } from '@reach/router';
import React, { useState, useEffect } from 'react';

import HomeInput from './HomeInput';
import RecipeCard from './RecipeCard';
import cardContent from '../StaticData/DataHome';
import apiGetRandomRecipe from '../Search/apiGetRandomRecipes';

import imgRecipe from '../../assets/home-a__recipe.jpg';
import imgInspiration from '../../assets/home-a__inspiration.jpg';

function Home() {
  var [recipeOTD, setRecipeOTD] = useState({});

  // get recipe of the day on start
  useEffect(() => {
    async function getRecipeOTD() {
      const recipeOTD = await apiGetRandomRecipe(1);
      // remove unimportant data
      setRecipeOTD(recipeOTD.data.recipes[0]);
    }

    getRecipeOTD();
  }, []);

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
          img={recipeOTD.image}
          content={cardContent.pickOfTheDayTxt}
          heading={cardContent.recipeOTDHeading}
          id={recipeOTD.id}
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
