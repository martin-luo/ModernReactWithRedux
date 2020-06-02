import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const { title, description } = video.snippet;

  return (
    <div>
      <iframe
        allowFullScreen
        width={"100%"}
        height={"500px"}
        allow={
          "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        }
        title={title}
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
      ></iframe>
      <div className={"ui segment"}>
        <h4 className={"ui header"}>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export { VideoDetails };
