import React, { useEffect, useState } from "react";
import MovieCard from "../movie-card/movieCard";
import "./movieList.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  getAllMovies,
  getInTheatres,
  getMoviesForRent,
  getStreamingMovies,
  getTopRatedMovies,
  getTrendingMovies,
} from "../../api/movieService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [latest, setLatest] = useState([]);
  const [movieType, setMovieType] = useState("Streaming");
  const [freeToWatch, setFreeToWatch] = useState("Movies");
  const [, setSelectedMovies] = useState([]);

  const category = ["Streaming", "On TV", "For Rent", "In Theatres"];
  const category01 = ["Movies", "TV"];
  const navigate = useNavigate();

  const renderMovies = (movies) =>
    movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} selectMovie={selectMovie} />
    ));

  useEffect(() => {
    const getData = async () => {
      if (movieType === "In Theatres") {
        const { data } = await getAllMovies();
        setMovies(data.results);
        setSelectedMovies(data.results[0]);
      } else if (movieType === "For Rent") {
        const { data } = await getMoviesForRent();
        setMovies(data.results);
        setSelectedMovies(data.results[6]);
      } else if (movieType === "Streaming") {
        const { data } = await getStreamingMovies();
        setMovies(data.results);
        setSelectedMovies(data.results[6]);
      } else if (movieType === "On TV") {
        const { data } = await getInTheatres();
        setMovies(data.results);
        setSelectedMovies(data.results[0]);
      }
    };

    getData();
  }, [movieType]);

  const latestMovies = (latest) =>
    latest.map((movie) => (
      <MovieCard key={movie.id} movie={movie} selectMovie={selectMovie} />
    ));

  useEffect(() => {
    const getSecondData = async () => {
      if (freeToWatch === "Movies") {
        const { data } = await getTopRatedMovies();
        setLatest(data.results);
      } else if (freeToWatch === "TV") {
        const { data } = await getTrendingMovies();
        setLatest(data.results);
      }
    };

    getSecondData();
  }, [freeToWatch]);

  const selectMovie = async (movie) => {
    const data = trendingMovies(movie);
    console.log("movie data", data);
    navigate(`/movie/${movie.id}`);
    setSelectedMovies(movie);
  };

  useEffect(() => {
    trendingMovies();
  }, []);

  const trendingMovies = (movie) =>
    movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);

  useEffect(() => {
    trendingMovies();
  }, []);

  return (
    <div className="poster">
      <div className="">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={10}
          infiniteLoop={true}
          showStatus={false}
        >
          {movies.map((movie) => (
            <Link
              to={`/movie/${movie.id}`}
              key={movie.id}
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              {/* Added "to" prop with appropriate route */}
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt=""
                />{" "}
                {/* Corrected "selectedMovies" to "movie" */}
              </div>
              <div className="posterImage_overlay">
                <div className="posterImage_title">
                  {movie ? movie.title : ""}
                </div>
                <div className="posterImage_rating">
                  {movie ? movie.release_date : ""}{" "}
                </div>
                <div className="posterImage_description">
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>

      <div className="header">
        <header className="headerListing">
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
        </header>
      </div>
      <div className="container">{renderMovies(movies)}</div>

      <div className="header">
        <header className="headerListing">
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
      <div className="container">{latestMovies(latest)}</div>
    </div>
  );
};

export default MovieList;
