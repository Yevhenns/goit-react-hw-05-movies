import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f03787ea9d18175277e6339ec6fd6212';
const params = {
  api_key: API_KEY,
  page: 1,
};

export const fetchTrending = async () => {
  try {
    const responce = await axios('/trending/movie/day', { params });
    return responce.data.results;
  } catch (error) {
    console.log(error.message);
  }
};


