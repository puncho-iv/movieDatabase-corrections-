import React, { useEffect, useState } from "react";
import MovieCard from "./movieCard";
import "./movieList.css";
import { GoPlay } from "react-icons/go";
import { Link } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import {
  getInTheatres,
  getMovies,
  getMoviesForRent,
  getStreamingMovies,
  getTopRatedMovies,
  getTV,
} from "../api/moviesService";

const MovieList = () => {
  const image_path = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  const [latest, setLatest] = useState([]);
  const [searchKey, setSearch] = useState([]);
  const [movieType, setMovieType] = useState("Streaming");
  const [selectedMovies, setSelectedMovies] = useState([]);
  const category = ["Streaming", "On TV", "For Rent", "In Theatres"];
  const category01 = ["Movies", "TV"];
  const category02 = ["Today", "Trending"];

  const renderMovies = (movie) =>
    movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);

  //category changes//
  useEffect(() => {
    const getData = async () => {
      if (movieType === "In Theatres") {
        const { data } = await getInTheatres();
        setMovies(data.results);
        setSelectedMovies(data.results[5]);
      } else if (movieType === "For Rent") {
        const { data } = await getMoviesForRent();
        setMovies(data.results);
        setSelectedMovies(data.results[6]);
      } else if (movieType === "Streaming") {
        const { data } = await getStreamingMovies();
        setMovies(data.results);
        setSelectedMovies(data.results[8]);
      } else if (movieType === "On TV") {
        const { data } = await getTopRatedMovies();
        setMovies(data.results);
        setSelectedMovies(data.results[3]);
      }
    };

    getData();
  }, [movieType]);

  useEffect(() => {
    const getSecondData = async () => {
      if (movieType === "Movies") {
        const { data } = await getMovies();
        setLatest(data.results);
      } else if (movieType === "TV") {
        const { data } = await getTV();
        setLatest(data.results);
      }
    };

    getSecondData();
  }, [movieType]);

  const latestMovies = (movie) =>
    latest.map((movie) => <MovieCard key={movie.id} movie={movie} />);

  const searchMovie = (lookup) => {
    if (lookup.key === "Enter") {
      console.log("hello");
    }
  };

  return (
    <div className="api">
      <div className="search">
        <form id="searchFrm">
          <RiSearch2Line id="right-search" type="submit" />
          <input
            type="text"
            placeholder="Lookup Movie..."
            onChange={(e) => setSearch(e.target.value)}
            value={searchKey}
            onClick={searchMovie}
          />
        </form>

        <div
        className="hero"
        style={{
          backgroundImage: `url('${image_path}${selectedMovies.backdrop_path}')`,
        }}
      >
        <div className="heroContent">
          <h1>{selectedMovies.title}</h1>
          <p>{selectedMovies.overview}</p>
          <div className="buttons">
            <button className={"moviePlay"}>Play Trailer</button>
            <GoPlay id="play" />
          </div>
        </div>
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
                    <button onClick={() => setMovieType(value)}>{value}</button>
                  </li>
                );
              })}
            </ul>
          </li>
        </header>
      </div>


      <div className="container">{renderMovies(movies)}</div>
      <div className="container">{latestMovies(latest)}</div>

      <div className="trailerVideos"></div>
    </div>
  );
};

export default MovieList;
