import React from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'
import './videoCard.css'

const VideoCard = ({video, selectVideo}) => {
  const video_path = 'https://api.themoviedb.org/3/movie/{movie_id}/videos';
  return (
    <div className='videoCard' onClick={() => selectVideo(video)}>
        {video.poster_path ? <img src={`${video_path}${video.poster_path}`} alt=''/>:null}
        {/* <AiFillPlayCircle id='videoplay'/> */}
    </div>
  )
}

export default VideoCard

