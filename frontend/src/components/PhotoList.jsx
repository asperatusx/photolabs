import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photosData, handleFavButton, toggleModal, favPhotos } = props;

  const photosArray = photosData.map((photo) => {
    return (
      <PhotoListItem
        key={photo.id}
        photoData={photo}
        handleFavButton={handleFavButton}
        favPhotos={favPhotos}
        toggleModal={toggleModal}
      />
    );
  });

  return <ul className="photo-list">{photosArray}</ul>;
};

export default PhotoList;
