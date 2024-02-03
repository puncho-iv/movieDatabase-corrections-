
import apiConfig from "./apiConfig";
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
    const url = 'movie/' + tvType[type];
    return axiosClient.get(url,params);
  },


  getTvList: (type, params) => {
    const url = 'tv/' + tvType[type];
    return axiosClient.get(url,params);
  },

  getVideos: (cate, id) => {
    const url =category[cate] + '/' + id + '/videos';
    return axiosClient.get(url, {params: {}});
  },

  search: (cate, params) => {
    const url ='search/' + category[cate];
    return axiosClient.get(url, params);
  },

  detail: (cate, id, params) => {
    const url = category[cate] + '/' + id 
    return axiosClient.get(url, params);
  },

  credits: (cate, id) => {
    const url = category[cate] + '/' + id + '/credits';
    return axiosClient.get(url, {params: {}});
  },

  similar: (cate, id) => {
    const url = category[cate] + '/' + id + '/similar';
    return axiosClient.get(url, {params: {}});
  },


}
export function getTopRatedMovies() {
  return apiConfig.get("/tv/top_rated?");
}

export function getStreamingMovies() {
  return apiConfig.get("/movie/now_playing?");
}

export function getMoviesForRent() {
  return apiConfig.get("/movie/popular?");
}

export function getInTheatres() {
  return apiConfig.get("/movie/upcoming?");
}

export function getMovies() {
  return apiConfig.get("/movie/top_rated?");
}

export function getTV() {
  return apiConfig.get("/tv/airing_today?");
}

export function getTrendingMovies() {
  return apiConfig.get("/trending/all/day?");
}

export function getTrendingToday() {
  return apiConfig.get("/tv/{tv_id}/season/{season_number}/videos?");
}

export function getVideos() {
  return apiConfig.get("/")
}

export function getMovieVideos() {
  return apiConfig.get("/movie/{movie_id}/videos");
}

export function getOnTheAir() {
  return apiConfig.get("/tv/on_the_air?");
}

export default tmdbApi;
