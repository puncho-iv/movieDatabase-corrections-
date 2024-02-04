import React, { useState, useEffect } from "react";
import "./movieCard.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, selectMovie }) => {
  const image_path = "https://image.tmdb.org/t/p/w500";
  const roundedVoteAverage = movie.vote_average.toFixed(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []); // Add empty dependency array to run useEffect only once

  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`movie/${movie.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="movieCard" onClick={() => selectMovie(movie)}>
            {movie.poster_path ? (
              <img src={`${image_path}${movie.poster_path}`} alt="" />
            ) : null}
            <div className="cards_overlay">
              <div className="cards_title">
                <h5>{movie ? movie.title : ""}</h5>
                </div>
                <div>
                  {movie ? movie.release_date : ""}
                  <div className="card_rating">
                    <h3>{roundedVoteAverage}</h3>
                  </div>
                  {/* <div className="cards_description">{movie ? movie.overview.slice(0,80) + "..." : ''}</div> */}
                </div>
              
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default MovieCard;
