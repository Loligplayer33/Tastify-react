import React, { useState, useEffect } from 'react';
import s from './inspiration.module.scss';

import apiSearchByNutrients from '../Search/apiSearchByNutrients';
import apiSearchRandomRecipe from '../Search/apiGetRandomRecipes';
import Options from '../StaticData/DataInspiration';
import useDropdown from './useDropdown';
import RecipeCard from '../Recipes/RecipeCard';

function Inspiration() {
  var [data, setData] = useState([]);
  var [click, setClick] = useState(0);
  var [cuisine, CuisineDropdown] = useDropdown('Cuisine', '', Options.cuisines);
  var [diet, DietDropdown] = useDropdown('Diet', '', Options.diets);
  var [type, TypeDropdown] = useDropdown('Type', '', Options.types);

  useEffect(() => {
    async function getCorrectApiSearch() {
      if ([...cuisine, ...diet, ...type].length === 0) {
        const recipes = await apiSearchRandomRecipe(16);
        setData(recipes.data.recipes);
        console.log(data);
        // TODO make this search request not all or nothing
      } else if (
        cuisine.length === 0 ||
        diet.length === 0 ||
        type.length === 0
      ) {
        alert('You have to set all properties');
      } else {
        const recipes = await apiSearchByNutrients(cuisine, diet, type);
        setData(recipes.data.recipes);
        console.log(data);
      }
    }
    getCorrectApiSearch();
    // only call api if search button got clicked. Not every time the user changes one of the dropdown options
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [click]);

  if (data.length === 0) {
    return <h1 className={s.loader}>Loading</h1>;
  } else {
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
              setClick(click + 1);
            }}
          >
            Search
          </button>
        </section>
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
                key={recipe.title.replace(' ', '').toLowerCase()}
              />
            );
          })}
        </section>
      </div>
    );
  }
}

export default Inspiration;
