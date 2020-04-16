/* eslint-disable jsx-a11y/no-static-element-interactions */
import styles from './home.module.scss';

import React from 'react';

// import ProcessSearch from '../Search/ProcessSearch';
import HomeInput from './HomeInput';
import RecipeCard from './RecipeCard';

function Home() {
  var cardContent = {
    recipesTxt:
      'Lets create something special together. This is the right place if you look for the best recipes out here.',
    pickOfTheDayTxt:
      'This is our best pick for today. We are certain that you will enjoy it, both your body and your sense of taste will thank you!',
    inspirationTxt:
      "Bring dynamic flavors and better-for-you ingredients to the table with carefully sorted recipes that won't let you stop eating.",
    recipesHeading: 'Recipes',
    recipeOTDHeading: 'Recipe of the day',
    inspirationHeading: 'Inspiration',
    linkToRecipes: 'recipes',
    linkToRecipeOTD: 'recipeOfTheDay',
    linkToInspiration: 'inspiration',
    imgRecipe: '../../assets/home-a__recipe.jpg',
    imgRecipeOTD: '../../assets/home-a__recipe-of-the-day.jpg',
    imgInspiration: '../../assets/home-a__inspiration.jpg',
  };

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.header}>We got everything you need</h1>

        <HomeInput />
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
