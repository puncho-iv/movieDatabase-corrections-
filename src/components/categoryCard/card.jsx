import React, { useEffect, useState } from "react";
import MovieCard from "../movie-card/movieCard";
import "./card.css";
import {
  getStreamingMovies,
  getTopRatedMovies,
 
} from "../../api/movieService";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const [movies, setMovies] = useState([]);
  const [latest, setLatest] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getStreamingMovies(); // Assuming this fetches streaming movies
        setMovies(response.data.results); // Update movies state with fetched data
      } catch (error) {
        console.error("Error fetching streaming movies:", error);
      }
    };

    fetchData();
  }, []);


  const selectMovie = async (movie) => {
    navigate(`/movie/${movie.id}`); // Navigate to movie details page
    setSelectedMovies(movie);
  };

  useEffect(() => {
    // Fetch and set latest movies
    const fetchLatestMovies = async () => {
      try {
        const response = await getTopRatedMovies(); // Assuming this fetches top rated movies
        setLatest(response.data.results); // Update latest state with fetched data
      } catch (error) {
        console.error("Error fetching latest movies:", error);
      }
    };

    fetchLatestMovies();
  }, []);

  return (
    <div className="poster">
      <h2>Latest Movies</h2>
      <div className="latest-movies">
        {latest.map((movie) => (
          <MovieCard key={movie.id} movie={movie} selectMovie={selectMovie} />
        ))}
      </div>
    </div>
  );
};

export default Card;
