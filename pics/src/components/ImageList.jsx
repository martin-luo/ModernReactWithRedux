import React from "react";

import "./ImageList.css";
import { ImageCard } from "./ImageCard";

const ImageList = ({ images }) => {
  return (
    <div className={"images-list"}>
      {images.map((image) => (
        <ImageCard key={`image-${image.id}`} image={image} />
      ))}
    </div>
  );
};

export { ImageList };
