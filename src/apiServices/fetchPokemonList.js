import axios from 'axios';
const BASE_URL_API = 'https://pokeapi.co/api/v2';
axios.defaults.baseURL = BASE_URL_API;

//get all pokemon
export async function fetchPokemonList(page, limit) {
  try {
    const response = await axios.get(`/pokemon?offset=${(page - 1) * limit}&limit=${limit}`);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}
