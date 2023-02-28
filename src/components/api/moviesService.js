import tmdb from "./apiConfig";

export const category = {
  movie: 'movie',
  tv: 'tv'
}

export const movieType = {
  upcoming: 'upcoming',
  popular: 'popular',
  top_rated: 'top_rated'
}

export const tvType = {
  popular: 'popular',
  top_rated: 'top_rated',
  on_the_air: 'on_the_air'
}

const tmdbApi = {
  getTopRatedMovies: (type, params) => {
    const url = 'tv/' + tvType[type]
    return tmdb.get(url,params)
  }
}
export function getTopRatedMovies() {
  return tmdb.get("/tv/top_rated?");
}

export function getStreamingMovies() {
  return tmdb.get("/movie/now_playing?");
}

export function getMoviesForRent() {
  return tmdb.get("/movie/popular?");
}

export function getInTheatres() {
  return tmdb.get("/movie/upcoming?");
}

export function getMovies() {
  return tmdb.get("/movie/top_rated?");
}

export function getTV() {
  return tmdb.get("/tv/airing_today?");
}

export function getTrendingMovies() {
  return tmdb.get("/trending/all/day?");
}

export function getTrendingToday() {
  return tmdb.get("/tv/{tv_id}/season/{season_number}/videos?");
}

// export function getFetchMovies() {
//   return tmdb.get ("/movie/{movie_id}/videos?")
// }
