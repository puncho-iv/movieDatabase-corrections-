import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import './movieDetails.css'

const MovieDetails = () => {
  const [currentMovie, setCurrent] = useState()
  const [selectedMovies, setSelectedMovies] = useState([]);
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
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovie ? currentMovie.backdrop_path : ""}`} />
            </div>
      
    </div>
  )
}

export default MovieDetails
