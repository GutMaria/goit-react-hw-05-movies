import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '81d6e128f8a4d2c60463e2d702c665ef',
  },
});

export const getTrendingMovies = () => {
  return instance.get('/trending/movie/day');
};

export const getMovieDetails = id => {
  return instance.get(`/movie/${id}`);
};

export const getActors = id => {
  return instance.get(`/movie/${id}/credits`);
};

export const getReviews = id => {
  return instance.get(`/movie/${id}/reviews`);
};

export const searchMovie = search => {
  return instance.get(`/search/movie?query=${search}`);
};
