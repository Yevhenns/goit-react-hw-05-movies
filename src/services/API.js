import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f03787ea9d18175277e6339ec6fd6212';

export const getTrendMovies = async () => {
  try {
    const responce = await axios(`/trending/movie/day?api_key=${API_KEY}`);
    return responce.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

export const getMovieById = async (movieId, credits, reviews) => {
  try {
    const response = await axios(
      `/movie/${movieId}${credits ? '/credits' : ''}${
        reviews ? '/reviews' : ''
      }?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
