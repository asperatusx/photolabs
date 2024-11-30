import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const { id, location, similar_photos, urls, user } = props.photoDetails;
  const { toggleModal, toggleFavPhoto } = props;

  const similarPhotosArray = Object.values(similar_photos)

  console.log(props.photoDetails)
  return (
    <div className="photo-details-modal">
      <button onClick={toggleModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__images'>
        <PhotoFavButton toggleFavPhoto={toggleFavPhoto} photoId={id}/>
        <img className='photo-details-modal__image' src={urls.full} alt="selected enlarged photo" />
        <div className='photo-details-modal__photographer-details'>
          <img className='photo-details-modal__photographer-profile' src={user.profile} alt="user profile image" />
          <div className='photo-details-modal__photographer-info'>
            <span>{user.name}</span>
            <p className='photo-details-modal__photographer-location'>{location.city} {location.country}</p>
          </div>
        </div>
        <h2 className='photo-details-modal__header'>Similar Photos</h2>
        <PhotoList photosData={similarPhotosArray} toggleFavPhoto={toggleFavPhoto}/>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
