import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import './movieDetails.css'

const MovieDetails = () => {
  const [currentMovie, setCurrent] = useState()
  const image_path = "https://image.tmdb.org/t/p/original";
  const {id} = useParams()

//     const fetchData =async()=> {
//       try{
//         const response = await axiosClient.get(`/movie/${id}`);
//         setCurrent(response.data);
//         window.scrollTo(0,0)
//       } catch (error) {
//         console.log(error)
//       }
//     }

//     fetchData();
// }, [id])

useEffect(() => {
  getData()
  window.scrollTo(0,0)
}, [])

const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=41467446ef4c8f2ffa78fc5c6692fbd5&language=en-US`)
    .then(res => res.json())
    .then(data => setCurrent(data))
}

  return (
    <div className='movie'>
        <div className="movie_intro">
                <img className="movie__backdrop" src={`${image_path}${currentMovie ? currentMovie.backdrop_path : ""}`} alt='' />
            </div>
      <div className='movie_detail'>
        <div className="movie_detailLeft">
          <div className="movie_posterBox">
            <img className='movie_poster' src={`${image_path}${currentMovie ? currentMovie.poster_path: ""}`} alt=''  />
          </div>
        </div>
        <div className="movie_detailRight">
          <div className="movie_detailRightTop">
            <div className="movie_name">{currentMovie ? currentMovie.original_title : ""}</div>
            <div className="movie_tagline">{currentMovie ? currentMovie.tagline: ""}</div>
            <div className="movie_rating">{currentMovie ? currentMovie.vote_count: ""} votes</div>
            <div className="movie_runtime">{currentMovie ? currentMovie.runtime: ""} mins</div>
            <div className="movie_release_date">Release date: {currentMovie ? currentMovie.release_date: ""}</div>
            <div className="movie_genres">{currentMovie && currentMovie.genres ? currentMovie.genres.map(genre => ( 
              <span className='movie_genre' id={genre.id}>{genre.name}</span>
            )): ""}</div>
          </div>
    
        <div className="movie_detailRightBottom">
          <div className="synopsisText">
            <div>{currentMovie ? currentMovie.overview: ""}</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
