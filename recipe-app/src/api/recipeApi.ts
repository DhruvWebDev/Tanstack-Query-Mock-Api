import axios from 'axios';

const fetchRecipe = async (id: number) => {
  try {
    const res = await axios.get(`http://localhost:8080/recipe?id=${id}`); // Corrected to use 'id'
    console.log(res.data); // This will log the JSON object returned from the server
    return res.data; // Return the data so that React Query can use it
  } catch (error) {
    console.error('Error fetching recipe:', error);
    return []; // Return an empty array as a fallback if the request fails
  }
}

export { fetchRecipe };
