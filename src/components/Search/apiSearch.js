// This file handles to Edamam API to return the search Results
import axios from 'axios';

// TODO changes prob necessary
const BASE_URL = 'https://api.spoonacular.com/recipes/search';
const apiKey = '5e5c37bdaec64ebb8bb2f7feb9b6ff27';
const instructionRequired = 'true';
const recipeAmount = '20';

async function getResults(term) {
  try {
    const data = await axios.get(
      `${BASE_URL}?query=${term}&apiKey=${apiKey}&instructionsRequired=${instructionRequired}&number=${recipeAmount}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
}

export default getResults;
