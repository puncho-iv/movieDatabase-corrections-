import React, { useEffect, useState } from "react";
import MovieCard from "../movie-card/movieCard";
import {
    getInTheatres, 
} from "../../api/movieService";
import { useNavigate } from "react-router-dom";

const TV = () => {
  const [latest, setLatest] = useState([]);
  const [, setSelectedMovies] = useState([]);
  const navigate = useNavigate();

  const selectMovie = async (movie) => {
    navigate(`/tv-shows/${movie.id}`); // Navigate to movie details page
    setSelectedMovies(movie);
  };

  useEffect(() => {
    // Fetch and set latest movies
    const fetchLatestMovies = async () => {
      try {
        const response = await getInTheatres(); // Assuming this fetches top rated movies
        setLatest(response.data.results); // Update latest state with fetched data
      } catch (error) {
        console.error("Error fetching latest movies:", error);
      }
    };

    fetchLatestMovies();
  }, [latest]);

  return (
    <div className="poster">
      <h2>TV Shows</h2>
      <div className="latest-movies">
        {latest.map((movie) => (
          <MovieCard key={movie.id} movie={movie}  />
        ))}
      </div>
    </div>
  );
};

export default TV;
