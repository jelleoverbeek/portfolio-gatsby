import React from "react";
import videoPlayerStyles from "./videoPlayer.module.css";

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className={videoPlayerStyles.wrapper}>
      <video controls autoPlay muted loop>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
