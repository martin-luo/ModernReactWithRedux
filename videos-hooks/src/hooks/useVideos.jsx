import { useState, useEffect } from "react";

import { youtube } from "../apis/youtube";
import { YOUTUBE_API } from "../credentials/youtube";

export const useVideos = (term = "hyper cars") => {
  const [videos, setVideos] = useState([]);

  const searchVideos = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: YOUTUBE_API,
      },
    });

    setVideos(response.data.items);
  };

  useEffect(() => {
    searchVideos(term);
  }, [term]);

  return [videos, searchVideos];
};
