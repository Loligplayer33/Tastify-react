import React, { useState } from 'react';
import s from './inspiration.module.scss';

import apiSearchByNutrients from '../Search/apiSearchByNutrients';
import apiSearchRandomRecipe from '../Search/apiGetRandomRecipes';
import Options from '../StaticData/DataInspiration';
import useDropdown from './useDropdown';
import RecipeCard from '../Recipes/RecipeCard';

function Inspiration() {
  var [data, setData] = useState([]);
  var [cuisine, CuisineDropdown] = useDropdown('Cuisine', '', Options.cuisines);
  var [diet, DietDropdown] = useDropdown('Diet', '', Options.diets);
  var [type, TypeDropdown] = useDropdown('Type', '', Options.types);

  async function getCorrectApiSearch() {
    if ([...cuisine, ...diet, ...type].length === 0) {
      const recipes = await apiSearchRandomRecipe(16);
      setData(recipes.data.results);
    } else {
      const recipes = await apiSearchByNutrients(cuisine, diet, type);
      setData(recipes.data.results);
      console.log(recipes);
    }
    resetHooks();
  }

  function resetHooks() {}

  console.log(data);

  return (
    <div className={s.container}>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h1 className={s.heading}>Don't know what to cook?</h1>
      <div className={s.bottomLine}></div>
      {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
      <h3 className={s.headingSmall}>You came to the right place 🥘</h3>
      <section className={s.selectionContainer}>
        <CuisineDropdown />
        <DietDropdown />
        <TypeDropdown />
        <button
          className={s.submit}
          type="submit"
          onClick={function updateSearch() {
            getCorrectApiSearch();
          }}
        >
          Search
        </button>
      </section>
      {data.length === 0 ? (
        <div className={s.recipePlaceholder}>
          <h1 className={s.recipePlaceholderHeading}>
            Select some options above to find recipes
          </h1>
        </div>
      ) : (
        <section className={s.recipesContainer}>
          {data.map(function displayCurrentRecipe(recipe) {
            return (
              <RecipeCard
                title={
                  recipe.title.length > 13
                    ? recipe.title.slice(0, 13) + '...'
                    : recipe.title
                }
                imgUrl={recipe.image}
                id={recipe.id}
                key={
                  recipe.title.replace(' ', '').toLowerCase() + Math.random()
                }
              />
            );
          })}
        </section>
      )}
    </div>
  );
}
// }

export default Inspiration;
