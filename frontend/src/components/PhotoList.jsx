import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";


const PhotoList = () => {
  const photosArray = photos.map(photo => {
    return (
      <PhotoListItem key={photo.id} photoData={photo}/>
    )
  })

  return (
    <ul className="photo-list">
      {photosArray}
    </ul>
  );
};

export default PhotoList;
