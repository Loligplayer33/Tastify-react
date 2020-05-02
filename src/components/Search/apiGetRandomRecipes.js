import axios from 'axios';

const BASE_URL = 'https://api.spoonacular.com/recipes/random';
const apiKey = '5e5c37bdaec64ebb8bb2f7feb9b6ff27';
const limitLicense = 'true';

async function getRandomRecipe(number) {
  try {
    const data = await axios.get(
      `${BASE_URL}?number=${number}&limitLicense=${limitLicense}&apiKey=${apiKey}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
}

export default getRandomRecipe;
