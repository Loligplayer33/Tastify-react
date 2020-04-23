import React from 'react';
import { Redirect } from '@reach/router';

// import Home from '../Home/Home';

// This file handles to Edamam API to return the search Results
import axios from 'axios';

// TODO changes prob necessary
const BASE_URL = 'https://api.spoonacular.com/recipes/search';
const apiKey = '5e5c37bdaec64ebb8bb2f7feb9b6ff27';
const instructionRequired = 'true';
const recipeAmount = '20';
// these tags have to be set manually by user / GUI
// const diet = '';
// const cuisineType = '';
// const mealType = '';
// const calories = '';
// const time = '';

class Search extends React.Component {
  constructor(query) {
    super(query);
    this.query = query;
  }

  async getResults() {
    try {
      const data = await axios.get(
        `${BASE_URL}?query=${this.query}&apiKey=${apiKey}&instructionsRequired=${instructionRequired}&number=${recipeAmount}`
      );
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
      // TODO add a default redirect to home (<Home default />)
    }
  }

  render() {
    // TODO doesn't work properly
    return <Redirect to="search" />;
  }
}

export default Search;
