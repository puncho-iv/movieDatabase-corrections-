import React, { useEffect, useState } from "react";
import MovieCard from "../movie-card/movieCard";
import "./movieList.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  getInTheatres,
  getMovies,
  getMoviesForRent,
  getStreamingMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getTrendingToday,
} from "../../api/movieService";
import { Link } from "react-router-dom";

const MovieList = () => {
  const image_path = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  const [latest, setLatest] = useState([]);
  const [movieType, setMovieType] = useState("Streaming");
  const [freeToWatch, setFreeToWatch] = useState("Movies");
  const [videoType, setVideoType] = useState("Today");
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [videos, setVideos] = useState([]);

  const category = ["Streaming", "On TV", "For Rent", "In Theatres"];
  const category01 = ["Movies", "TV"];
  const category02 = ["Today", "Trending"];

  const renderMovies = (movies) =>
    movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} selectMovie={selectMovie} />
    ));

  //category changes//
  useEffect(() => {
    const getData = async () => {
      if (movieType === "In Theatres") {
        const { data } = await getTopRatedMovies();
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
        setSelectedMovies(data.results[3]);
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

  const movieVideos = (videos) =>
    videos.map((movie) => (
      <MovieCard key={movie.id} movie={movie} selectMovie={selectMovie} />
    ));

  useEffect(() => {
    const getVideoData = async () => {
      if (videoType === "Today") {
        const { data } = await getMovies();
        setVideos(data.results);
      } else if (videoType === "Trending") {
        const { data } = await getTrendingToday();
        setVideos(data.results);
      }
    };

    getVideoData();
  }, [videoType]);

  const selectMovie = async (movie) => {
    const data = trendingMovies(movie.id);
    console.log("movie data", data);
    setSelectedMovies(movie);
  };

  useEffect(() => {
    trendingMovies();
  }, []);

  const trendingMovies = (movie) =>
    movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);

  const selectVideo = async (video) => {
    const data = trendingMovies(video.id);
    console.log("movie data", data);
    setSelectedVideos(video);
  };

  useEffect(() => {
    trendingMovies();
  }, []);

  return (
    <div>
      <div className="">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={30}
          infiniteLoop={true}
          showStatus={false}
        >
          {movies.map(
            (
              movie // Corrected "latestMovies" to "latest"
            ) => (
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
            )
          )}
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

      <div className="header">
        <header className="headerListing">
          <li className="headerList">
            Trending Today
            <ul id="tabs">
              {category02.map((value) => {
                return (
                  <li>
                    <button onClick={() => setVideoType(value)}>{value}</button>
                  </li>
                );
              })}
            </ul>
          </li>
        </header>
      </div>
      <div className="container">{movieVideos(videos)}</div>

      <div
        className="trailerVideos"
        style={{
          backgroundImage: `url('${image_path}${selectedVideos.backdrop_path}')`,
        }}
      >
        <header className="trendingListing"></header>
      </div>
    </div>
  );
};

export default MovieList;
