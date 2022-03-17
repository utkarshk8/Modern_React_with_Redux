import React from "react";
import "./ImageCards.css";
import ImageCard from "./ImageCard";

const ImageCards = ({ images }) => {
  const resultimages = images.map((image) => {
    return (
      <ImageCard src={image.urls.regular} key={image.id} alt={image.user.id} />
    );
  });
  return (
    <div className="ui container container2">
      <div>Found {images.length} images.</div>
      <div className="image-list">{resultimages}</div>
    </div>
  );
};

export default ImageCards;
