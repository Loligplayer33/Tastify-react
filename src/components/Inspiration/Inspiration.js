import React, { useState, useEffect } from 'react';
import s from './inspiration.module.scss';

import apiSearchByNutrients from '../Search/apiSearchByNutrients';
import apiSearchRandomRecipe from '../Search/apiGetRandomRecipes';
import Options from '../StaticData/DataInspiration';
import useDropdown from './useDropdown';

function Inspiration() {
  var [data, setData] = useState({});
  var [click, setClick] = useState(0);
  var [cuisine, CuisineDropdown] = useDropdown('Cuisine', '', Options.cuisines);
  var [diet, DietDropdown] = useDropdown('Diet', '', Options.diets);
  var [type, TypeDropdown] = useDropdown('Type', '', Options.types);

  useEffect(() => {
    getCorrectApiSearch();
    console.log("I'm running");
    // only call api if search button got clicked. Not every time the user changes one of the dropdown options
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [click]);

  async function getCorrectApiSearch() {
    if ([...cuisine, ...diet, ...type].length === 0) {
      setData(await apiSearchRandomRecipe(16));
      console.log(data);
      // TODO make this search request not all or nothing
    } else if (cuisine.length === 0 || diet.length === 0 || type.length === 0) {
      alert('You have to set all properties');
    } else {
      apiSearchByNutrients(cuisine, diet, type);
    }
  }

  return (
    <div className={s.container}>
      <h1 className={s.heading}>Don't know what to cook?</h1>
      {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
      <h3 className={s.headingSmall}>You came to the right place 🥘</h3>
      <section className={s.selectionContainer}>
        <CuisineDropdown />
        <DietDropdown />
        <TypeDropdown />
        <button
          type="submit"
          onClick={function updateSearch() {
            setClick(click + 1);
            console.log(click);
          }}
        >
          search
        </button>
      </section>
    </div>
  );
}

export default Inspiration;
