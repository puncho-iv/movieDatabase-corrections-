import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import "./videoCard.css";
import baseURL from '../../api/apiConfig'

const VideoCard = ({ video, selectVideo }) => {
  const video_path = baseURL;
  return (
    <div className="videoCard" onClick={() => selectVideo(video)}>
      {video.poster_path ? (
        <video src={`${video_path}${video.poster_path}`} alt="" />
      ) : null}
      {/* <AiFillPlayCircle id='videoplay'/> */}
    </div>
  );
};

export default VideoCard;
