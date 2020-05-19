import React, { useState } from 'react';
import s from './inspiration.module.scss';

import apiSearchByNutrients from '../Search/apiSearchByNutrients';
import apiSearchRandomRecipe from '../Search/apiGetRandomRecipes';
import RecipeRender from './InspirationRecipeRender';
import Options from '../StaticData/DataInspiration';
import useDropdown from './useDropdown';

function Inspiration() {
  const [data, setData] = useState([]);
  var [cuisine, CuisineDropdown] = useDropdown('Cuisine', '', Options.cuisines);
  var [diet, DietDropdown] = useDropdown('Diet', '', Options.diets);
  var [type, TypeDropdown] = useDropdown('Type', '', Options.types);

  async function getCorrectApiSearch() {
    if ([...cuisine, ...diet, ...type].length === 0) {
      console.log('i run');
      const recipes = await apiSearchRandomRecipe(16);
      setData(recipes.data.results);
      console.log(recipes, data);
    } else {
      const recipes = await apiSearchByNutrients(cuisine, diet, type);
      setData(recipes.data.results);
      console.log(recipes);
    }
    // resetHooks();
  }

  // function resetHooks() {}

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
      {data.length === 0 || undefined ? (
        <div className={s.recipePlaceholder}>
          <h1 className={s.recipePlaceholderHeading}>
            Select some options above to find recipes
          </h1>
        </div>
      ) : (
        <RecipeRender data={data} />
      )}
    </div>
  );
}

export default Inspiration;
