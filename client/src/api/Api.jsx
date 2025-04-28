import axios from "axios";

const apiUrl = import.meta.env.VITE_POKEMON_API;

// Fetch all Pokémon (with limit 150)
export const fetchAll = async () => {
  try {
    const res = await axios.get(`${apiUrl}/pokemon?limit=150`);
    return { data: res.data };
  } catch (error) {
    console.error(error);
    return { data: [] };
  }
};

// Fetch details by Pokémon name
export const fetchDetails = async (name) => {
  try {
    const res = await axios.get(`${apiUrl}/pokemon/${name}`);
    return { data: res.data };
  } catch (error) {
    console.error(error);
    return { data: [] };
  }
};

// Fetch by URL directly
export const fetchDataUrl = async (url) => {
  try {
    const res = await axios.get(url);
    return { data: res.data };
  } catch (error) {
    console.error(error);
    return { data: [] };
  }
};
