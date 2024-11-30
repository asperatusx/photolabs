import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  const {id, location, urls, user} = props.photoData;
  const { toggleFavPhoto, toggleModal } = props;

  return (
    <div key={id} className="photo-list__item">
      <PhotoFavButton toggleFavPhoto={toggleFavPhoto} photoId={id}/>
      <img onClick={(e) => toggleModal(e, props.photoData)} className="photo-list__image" src={urls.full} alt="picture of phone in hand" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} alt="joe profile picture" />
        <div className="photo-list__user-container">
          <p className="photo-list__user-info">{user.name}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
