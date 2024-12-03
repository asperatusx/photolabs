import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import SkeletonPhotoListItem from "skeleton/SkeletonPhotoListItem";

const PhotoList = (props) => {
  const { isLoading, photosData, handleFavButton, toggleModal, favPhotos } =
    props;

  //When photos are being fetched it will display skeleton
  if (isLoading) {
    const skeletonArray = Array.from({ length: 9 }).map((_, index) => {
      return <SkeletonPhotoListItem key={index} />;
    });

    return <ul className="photo-list">{skeletonArray}</ul>;
  }

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
