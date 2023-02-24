import axios from 'axios';

//fetch pokemon by name
export async function fetchPokemonDetails(name) {
  try {
    const response = await axios.get(`/pokemon/${name}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
