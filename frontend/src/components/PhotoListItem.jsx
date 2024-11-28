import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const {id, location, imageSource, username, profile} = props.photoData

  return (
    <div key={id}>
      <img src={imageSource} alt="picture of phone in hand" />
      <img src={profile} alt="joe profile picture" />
      <p>{username}</p>
      <p>{location.city} {location.country}</p>
    </div>
  )
};

export default PhotoListItem;
