import React, { useEffect, useState } from "react";
import MovieCard from "./movieCard";
import './movieList.css'
import tmdb from "../api/tmdb";
import {GoPlay} from "react-icons/go"

const MovieList = () => {
    const image_path = "https://image.tmdb.org/t/p/original"
    const [ movies, setMovies] = useState ([])
    const [ latest, setLatest ] = useState ([])
    const [ selectedMovies, setSelectedMovies] = useState ([])


    useEffect(() => {
    const fetchMovies = async() => {
        const {data} = await tmdb.get("movie/now_playing?")
        setMovies(data.results)
        setSelectedMovies(data.results[15])
    }

    fetchMovies()

}, [])

    const renderMovies = () => (
        movies.map(movie => (
            <MovieCard
            key={movie.id}
            movie={movie}
            />
        ))
    )
    
    return (
        <div className="api">
            <div className="search">
                
            </div>
            <div className="hero" style= {{backgroundImage:`url('${image_path}${selectedMovies.backdrop_path}')`}}>
                <div className="heroContent">
                <h1>{selectedMovies.title}</h1>
                <p>{selectedMovies.overview}</p>
                <div className="buttons">
                <button className={"moviePlay"}>Play Trailer</button>
                <GoPlay id="play"/>
                </div>
            </div>
            </div>
        
          <div className="container">
            {renderMovies()}
        </div>
        </div>
        
    )
    
  
}

export default MovieList;