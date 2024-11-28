import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const {id, location, imageSource, username, profile} = props.photoData

  return (
    <div key={id} className="photo-list__item">
      <img className="photo-list__image" src={imageSource} alt="picture of phone in hand" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt="joe profile picture" />
        <div className="photo-list__user-container">
          <p className="photo-list__user-info">{username}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
