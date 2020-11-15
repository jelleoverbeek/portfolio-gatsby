import React from "react";
import videoPlayerStyles from "./videoPlayer.module.css";
import Caption from "../caption/caption.js";

const VideoPlayer = ({ videoUrl, caption }) => {
  return (
    <>
      <div className={videoPlayerStyles.wrapper}>
        <video controls muted loop>
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
      {caption && <Caption>{caption}</Caption>}
    </>
  );
};

export default VideoPlayer;
