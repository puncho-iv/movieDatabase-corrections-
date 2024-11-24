import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./movieDetails.css";
import MovieCard from "../movie-card/movieCard";
import { getReviews } from "../../api/movieService";

const MovieDetails = () => {
  const [currentMovie, setCurrent] = useState();
  const [recommended, setRecommended] = useState([]);
  const [review, setReview] = useState([]);
  const navigate = useNavigate();
  const image_path = "https://image.tmdb.org/t/p/original";
  const { id } = useParams();

  useEffect(() => {
    getData();
    recommendedMovies();
    getReview();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=41467446ef4c8f2ffa78fc5c6692fbd5&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setCurrent(data));
  };

  const recommendedMovies = async () => {
    const recommendedResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=41467446ef4c8f2ffa78fc5c6692fbd5&language=en-US`
    );
    const recommended = await recommendedResponse.json();
    setRecommended(recommended.results);
  };

  const getReview = async () => {
    const reviewResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=41467446ef4c8f2ffa78fc5c6692fbd5&language=en-US`
    );
    const review = await reviewResponse.json();
    setReview(review.results);
  };

  // const getReview = async () => {
  //   const { data } = await getReviews(id);
  //   setReview(data.results);
  // };

  const selectMovie = async (movie) => {
    console.log(selectMovie);
    navigate(`/movie/${movie.id}`, { replace: true });
  };

  return (
    <div className="movie">
      <div className="movie_intro">
        <img
          className="movie__backdrop"
          src={`${image_path}${currentMovie ? currentMovie.backdrop_path : ""}`}
          alt=""
        />
      </div>
      <div className="movie_detail">
        <div className="movie_detailLeft">
          <div className="movie_posterBox">
            <img
              className="movie_poster"
              src={`${image_path}${
                currentMovie ? currentMovie.poster_path : ""
              }`}
              alt=""
            />
          </div>
        </div>
        <div className="movie_detailRight">
          <div className="movie_detailRightTop">
            <div>
              <div className="movie_name">
                {currentMovie ? currentMovie.original_title : ""}
              </div>

              <div className="movie_tagline">
                {currentMovie ? currentMovie.tagline : ""}
              </div>

              <div className="movie-detail">
                <div className="movie_rating">
                  {currentMovie ? currentMovie.vote_count : ""} votes
                </div>
                <div className="movie_runtime">
                  {currentMovie ? currentMovie.runtime : ""} mins
                </div>
              </div>
              <div className="movie_genres">
                {currentMovie && currentMovie.genres
                  ? currentMovie.genres.map((genre, index) => (
                      <span className="movie_genre" id={genre.id}>
                        {genre.name}

                        {/* {index < currentMovie.genres.length - 1 && " , "} */}
                      </span>
                    ))
                  : ""}
              </div>
            </div>

            <div className="movie_release_date">
              Release date: {currentMovie ? currentMovie.release_date : ""}
            </div>
          </div>

          <div className="movie_detailRightBottom">
            <div className="synopsisText">
              <div>{currentMovie ? currentMovie.overview : ""}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="review-area">
        <div>
          <h3 className="header">Reviews</h3>
        </div>

        <div className="reviewCard">
          {review && review.length > 0
            ? review.map((movieReview) => (
                <div key={movieReview.id} className="">
                  <div className="reviewData">
                    <div className="reviewHeader">
                      <img
                        src={`${image_path}${movieReview.author_details.avatar_path}`}
                        alt=""
                        className="review-image"
                      /> 
                      <h3> A review by {movieReview.author_details.username}</h3>
                    </div>
                    
                    <p className="content_text">{movieReview.content}</p>
                  </div>
                </div>
              ))
            : "No reviews available"}
        </div>
      </div>

      <div className="">
        <div className="header">
          <h3>Recommendations</h3>
        </div>
        <div className="recommended_movies">
          {recommended && recommended.length > 0
            ? recommended.map((movie) => (
                <div key={movie.id} className="recommended_movie">
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    selectMovie={selectMovie}
                  />
                </div>
              ))
            : "No recommendations"}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
