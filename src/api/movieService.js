import apiConfig from '../api/apiConfig';

export function getTopRatedMovies() {
  return apiConfig.get("/tv/top_rated?");
}

export function getStreamingMovies() {
  return apiConfig.get("/movie/now_playing?");
};

export function getMoviesForRent() {
  return apiConfig.get("/movie/popular?");
};

export function getInTheatres() {
  return apiConfig.get("/movie/upcoming?");
};

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

export function getFetchMovies() {
  return apiConfig.get ("/movie/{movie_id}/videos?")
}

