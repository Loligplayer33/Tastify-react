import axios from 'axios';

const BASE_URL = 'https://api.spoonacular.com/recipes';
const apiKey = '5e5c37bdaec64ebb8bb2f7feb9b6ff27';

async function getRecipe(id) {
  try {
    const data = await axios.get(
      `${BASE_URL}/${id}/information?apiKey=${apiKey}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
}

export default getRecipe;
