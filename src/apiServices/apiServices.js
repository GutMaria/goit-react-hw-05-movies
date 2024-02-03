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
