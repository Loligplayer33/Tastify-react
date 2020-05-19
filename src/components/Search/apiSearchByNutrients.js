import axios from 'axios';

const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch';
const apiKey = '5e5c37bdaec64ebb8bb2f7feb9b6ff27';
const recipeAmount = '16';

async function getResults(cuisine, diet, type) {
  try {
    const data = await axios.get(
      `${BASE_URL}?cuisine=${cuisine}&diet=${diet}&type=${type.replace(
        ' ',
        ''
      )}&number=${recipeAmount}&apiKey=${apiKey}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
}

export default getResults;

// `${BASE_URL}?cuisine=European&diet=Vegetarian&type=mainCourse&number=${recipeAmount}&apiKey=${apiKey}`;
