// import apiConfig from "./apiConfig";
import axiosClient from "./axiosClient";

export const category = {
  movie: 'movie',
  tv: 'tv'
}

export const movieType = {
  upcoming: 'upcoming',
  popular: 'popular',
  top_rated: 'top_rated',
  now_playing: 'now_playing'
}

export const tvType = {
  popular: 'popular',
  top_rated: 'top_rated',
  airing_today: 'airing_today',
  on_the_air: 'on_the_air'
}

const tmdbApi = {
  getMovieList: (type, params) => {
    const url = 'movie/' + movieType[type];
    return axiosClient.get(url, { params });
  },

  getTvList: (type, params) => {
    const url = 'tv/' + tvType[type];
    return axiosClient.get(url, { params });
  },

  getVideos: (cate, id) => {
    const url = `${category[cate]}/${id}/videos`;
    return axiosClient.get(url);
  },

  search: (cate, query, params) => {
    const url = `search/${category[cate]}`;
    return axiosClient.get(url, { params: {query, ...params} });
  },

  detail: (cate, id, params) => {
    const url = `${category[cate]}/${id}`;
    return axiosClient.get(url, { params });
  },

  credits: (cate, id) => {
    const url = `${category[cate]}/${id}/credits`;
    return axiosClient.get(url);
  },

  similar: (cate, id) => {
    const url = `${category[cate]}/${id}/similar`;
    return axiosClient.get(url);
  }
}

// Functions for specific types of movies and TV shows
export function getTopRatedMovies() {
  return tmdbApi.getMovieList('top_rated');
}

export function getStreamingMovies() {
  return tmdbApi.getMovieList('now_playing');
}

export function getMoviesForRent() {
  return tmdbApi.getMovieList('popular');
}

export function getInTheatres() {
  return tmdbApi.getMovieList('upcoming');
}

export function getMovies() {
  return tmdbApi.getMovieList('top_rated');
}

export function getTV() {
  return tmdbApi.getTvList('airing_today');
}

export function getTrendingMovies() {
  return axiosClient.get("/trending/all/day");
}

export function getTrendingToday(tvId, seasonNumber) {
  return axiosClient.get(`/tv/${tvId}/season/${seasonNumber}/videos`);
}

export function getVideos() {
  // Implement this if needed
}

export function getMovieDetail(id) {
  return axiosClient.get(`/movie/${id}`);
}

export function getOnTheAir() {
  return tmdbApi.getTvList('on_the_air');
}

export function getPopularTV() {
  return tmdbApi.getTvList('popular');
}

export default tmdbApi;
