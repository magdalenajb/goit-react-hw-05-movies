import axios from 'axios';

const API_KEY = '109c81fd83da243f6eda059647fc5d69';
const BASE_URL = 'https://api.themoviedb.org/3/';

const getTrendingMovies = async () => {
  const trendingUrl = `${BASE_URL}trending/movie/day?`;
  const { data } = await axios.get(trendingUrl, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return data.results;
};


const getSearchMovies = async search => {
  const searchUrl = `${BASE_URL}search/movie?`;
  const { data } = await axios.get(searchUrl, {
    params: {
      api_key: API_KEY,
      query: search,
      include_adult: false,
      language: 'en-US',
      page: 1,
    },
  });
  return data.results;
};


const getMovieDetails = async movieId => {
  const detailsUrl = `${BASE_URL}movie/${movieId}?`;
  const { data } = await axios.get(detailsUrl, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

  return data;
};


const getMovieCredits = async movieId => {
  const creditsUrl = `${BASE_URL}movie/${movieId}/credits?`;
  const { data } = await axios.get(creditsUrl, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return data.cast;
};


const getMovieReviews = async movieId => {
  const reviewsUrl = `${BASE_URL}movie/${movieId}/reviews?`;
  const { data } = await axios.get(reviewsUrl, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page: 1,
    },
  });

  return data.results;
};

export {
  getTrendingMovies,
  getSearchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
