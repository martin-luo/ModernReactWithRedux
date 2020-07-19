import React from "react";

import "./VideoItem.css";

const VideoItem = ({ video, onClick }) => {
  const { title, thumbnails, description } = video.snippet;

  return (
    <div className={"item video-item"} onClick={onClick}>
      <img
        src={thumbnails.medium.url}
        alt={description}
        className={"ui image"}
      />
      <div className={"content"}>
        <div className={"header"}>{title}</div>
      </div>
    </div>
  );
};

export { VideoItem };
