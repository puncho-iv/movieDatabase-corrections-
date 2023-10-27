import React, { useEffect, useState } from "react";
import MovieCard from "../movie-card/movieCard";
import VideoCard from "../videos/videoCard";
import "./movieList.css";
import { GoPlay } from "react-icons/go";
import YouTube from "react-youtube";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";

import {
  getInTheatres,
  getMovies,
  getMoviesForRent,
  getStreamingMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getTrendingToday,
  getTV,
} from "../../api/movieService";

const MovieList = () => {
  const image_path = "https://image.tmdb.org/t/p/original";
  const video_path = "https://api.themoviedb.org/3/movie/{movie_id}/videos";
  const [movies, setMovies] = useState([]);
  const [latest, setLatest] = useState([]);
  const [searchKey, setSearch] = useState([]);
  const [movieType, setMovieType] = useState("Streaming");
  const [freeToWatch, setFreeToWatch] = useState("Movies");
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [, setTrendingMovies] = useState([]);
  const [videos, setVideos] = useState([]);
  const category = ["Streaming", "On TV", "For Rent", "In Theatres"];
  const category01 = ["Movies", "TV"];
  const category02 = ["Today", "Trending"];

  const renderMovies = (movie) =>
    movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} selectMovie={selectMovie} />
    ));

  const renderVideos = (video) =>
    movies.map((movie) => (
      <VideoCard key={video.id} video={video} selectVideo={selectVideo} />
    ));

  //category changes//
  useEffect(() => {
    const getData = async () => {
      if (movieType === "In Theatres") {
        const { data } = await getTopRatedMovies();
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
        const { data } = await getInTheatres();
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
    const data = trendingMovies(movie.id);
    console.log("movie data", data);
    setSelectedMovies(movie);
  };

  useEffect(() => {
    trendingMovies();
  }, []);

  const selectVideo = async (video) => {
    const data = trendingVideos(video.id);
    console.log("movie data", data);
    setSelectedVideos(video);
  };

  useEffect(() => {
    trendingVideos();
  }, []);

  const trendingMovies = (movie) =>
    movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);

  const trendingVideos = (video) =>
    videos.map((video) => <VideoCard key={video.id} video={video} />);

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
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: `url('${image_path}${selectedMovies.backdrop_path}')`,
        }}
      >
        <div className="heroContent">
          <h1>{selectedMovies.title}</h1>
          <p>{selectedMovies.overview}</p>
          <p>{selectedMovies.ratings}</p>
        </div>
        <div className="buttons">
          <GoPlay id="play" />
          <button className={"moviePlay"}>Play Trailer</button>
        </div>

        <button id="later">Watch Later</button>
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

          <li className="headerList">
            Trending Today
            <ul id="tabs">
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

      <div className="container">{renderMovies(movies)}</div>
      <div className="container">{latestMovies(latest)}</div>

      <div
        className="trailerVideos"
        style={{
          backgroundImage: `url('${video_path}${selectedVideos.backdrop_path}')`,
        }}
      >
        <header className="trendingListing"></header>
      </div>

      <div className="container">{renderVideos(videos)}</div>
    </div>
  );
};

export default MovieList;
