import React from "react";
import { VideoItem } from "./VideoItem";

const VideoList = ({ videos, onVideSelect }) => {
  console.log("videos =", videos);

  return (
    <div className={"ui relaxed divided list"}>
      {videos.map((video) => (
        <VideoItem
          key={video.id.videoId}
          video={video}
          onClick={() => onVideSelect(video)}
        />
      ))}
    </div>
  );
};

export { VideoList };
