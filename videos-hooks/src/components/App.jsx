import React, { useState, useEffect } from "react";

import { SearchBar } from "./SearchBar";
import { VideoList } from "./VideoList";

import { VideoDetails } from "./VideoDetails";
import { useVideos } from "../hooks/useVideos";

export const App = () => {
  const [videos, search] = useVideos("hyper cars");
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className={"container ui"}>
      <SearchBar onFormSubmit={search} />

      <div className={"ui grid"}>
        <div className={"ui row"}>
          <div className={"eleven wide column"}>
            <VideoDetails video={selectedVideo} />
          </div>
          <div className={"five wide column"}>
            <VideoList
              videos={videos}
              onVideSelect={(selectedVideo) => setSelectedVideo(selectedVideo)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
