import React, { useEffect, useState } from "react";
import MovieCard from "./movieCard";
import VideoCard from "../videos/videoCard";
import "./movieList.css";
import { GoPlay } from "react-icons/go";
import YouTube from "react-youtube";
import { RiSearch2Line } from "react-icons/ri";
import {
  getInTheatres,
  getMovies,
  getMoviesForRent,
  getStreamingMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getTrendingToday,
  getTV,
} from "../api/moviesService";

const MovieList = () => {
  const image_path = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  const [latest, setLatest] = useState([]);
  const [searchKey, setSearch] = useState([]);
  const [movieType, setMovieType] = useState("Streaming");
  const [freeToWatch, setFreeToWatch] = useState("Movies");
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [trending, setTrendingMovies] = useState([]);
  const [videos, setVideos] = useState("Today");
  const category = ["Streaming", "On TV", "For Rent", "In Theatres"];
  const category01 = ["Movies", "TV"];
  const category02 = ["Today", "Trending"];

  const renderMovies = (movie) =>
    movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} selectMovie={selectMovie} />
    ));

  //category changes//
  useEffect(() => {
    const getData = async () => {
      if (movieType === "In Theatres") {
        const { data } = await getInTheatres();
        setMovies(data.results);
        setSelectedMovies(data.results[1]);
      } else if (movieType === "For Rent") {
        const { data } = await getMoviesForRent();
        setMovies(data.results);
        setSelectedMovies(data.results[6]);
      } else if (movieType === "Streaming") {
        const { data } = await getStreamingMovies();
        setMovies(data.results);
        setSelectedMovies(data.results[6]);
      } else if (movieType === "On TV") {
        const { data } = await getTopRatedMovies();
        setMovies(data.results);
        setSelectedMovies(data.results[3]);
      }
    };

    getData();
  }, [movieType]);

  const latestMovies = (movie) =>
    latest.map((movie) => (
      <MovieCard key={movie.id} movie={movie} selectMovie={selectMovie} />
    ));

  useEffect(() => {
    const getSecondData = async () => {
      if (freeToWatch === "Movies") {
        const { data } = await getMovies();
        setLatest(data.results);
      } else if (freeToWatch === "TV") {
        const { data } = await getTV();
        setLatest(data.results);
      }
    };

    getSecondData();
  }, [freeToWatch]);

  const selectMovie = async (movie) => {
    const data =  trendingMovies(movie.id);
    console.log('movie data', data);
    setSelectedMovies(movie);
  };

  useEffect(() => {
    trendingMovies()
  }, [])

  const trendingMovies = (movie) =>
    trending.map((movie) => <VideoCard key={movie.id} movie={movie} />);

  useEffect(() => {
    const getTrendingData = async (id) => {
      if (videos === "Today") {
        const { data } = await getTrendingMovies();
        setTrendingMovies(data.results);
      } else if (videos === "Trending") {
        const { data } = await getTrendingToday();
        setTrendingMovies(data.results);
      }
    };

    getTrendingData();
  }, [videos]);

  const searchMovie = (lookup) => {
    if (lookup.key === "Enter") {
      console.log("hello");
    }
  };

  return (
    <div className="api">
      <div className="search">
        <form id="searchFrm" onSubmit={searchMovie}>
          <RiSearch2Line id="right-search" type="submit" />
          <input
            type="text"
            placeholder="Lookup Movie..."
            onChange={(e) => setSearch(e.target.value)}
            value={searchKey}
            onClick={searchMovie}
          />
        </form>
        {searchKey}

        <div
          className="hero"
          style={{
            backgroundImage: `url('${image_path}${selectedMovies.backdrop_path}')`,
          }}
        >
          
          <div className="heroContent">
            <h3>{selectedMovies.title}</h3>
            <p>{selectedMovies.overview}</p>
          </div>
          <div className="buttons">
            <button className={"moviePlay"}>Play Trailer</button>
            <GoPlay id="play" />
          </div>

          <button id="later">Watch Later</button>
        </div>
      </div>

      <div className="header">
        <header className="headerListing" id="header-menu">
          <li className="headerList">
            What's Popular
            <ul id="tabs">
              {category.map((value) => {
                return (
                  <li>
                    <button onClick={() => setMovieType(value)}>{value}</button>
                  </li>
                );
              })}
            </ul>
          </li>

          <li className="headerList">
            Free To Watch
            <ul id="tabs">
              {category01.map((value) => {
                return (
                  <li>
                    <button onClick={() => setFreeToWatch(value)}>
                      {value}
                    </button>
                  </li>
                );
              })}
            </ul>
          </li>
        </header>
      </div>

      <div className="container">{renderMovies(movies)}</div>
      <div className="container">{latestMovies(latest)}</div>

      <div className="trailerVideos">
        <header className="trendingListing">
          <li className="trendingList">
            Trending Today
            <ul id="trendsTab">
              {category02.map((value) => {
                return (
                  <li>
                    <button onClick={() => setVideos(value)}>{value}</button>
                  </li>
                );
              })}
            </ul>
          </li>
        </header>
      </div>
      <div
        className="trendsContainer"
        style={{
          backgroundImage: `url('${image_path}${selectedMovies.backdrop_path}')`,
        }}
      >
        <div className="imageOverlay">
          <div className="trends">{trendingMovies(trending)}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
