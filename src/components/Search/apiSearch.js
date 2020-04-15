// This file handles to Edamam API to return the search Results
import axios from 'axios';

// TODO changes prob necessary
const BASE_URL = 'https://api.edamam.com/search?';
const app_id = '16803a76';
const app_key = '3d257a8c2e5ceca228c8a15d1dba31bd';
const recipeAmount = 'to=30';
// these tags have to be set manually by user / GUI
// const diet = '';
// const cuisineType = '';
// const mealType = '';
// const calories = '';
// const time = '';

class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      const data = await axios.get(
        `${BASE_URL}q=${this.query}&app_id=${app_id}&app_key=${app_key}&${recipeAmount}`
      );
      console.log(data.data.hits);
    } catch (err) {
      console.log(err);
    }
  }
}

export default Search;
