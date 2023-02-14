import React from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'
import './videoCard.css'

const VideoCard = ({movie, selectMovie}) => {
    const image_path = "https://image.tmdb.org/t/p/w500"
  return (
    <div className='videoCard' onClick={() => selectMovie(movie)}>
        {movie.poster_path ? <img src={`${image_path}${movie.poster_path}`} alt=''/>:null}
        <AiFillPlayCircle id='videoplay'/>
    </div>
  )
}

export default VideoCard

