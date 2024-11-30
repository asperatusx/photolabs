import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const { id, location, similar_photos, urls, user } = props.photoDetails;
  const { toggleModal, handleFavButton, favPhotos } = props;

  const similarPhotosArray = Object.values(similar_photos)
  const isFav = favPhotos.includes(id);

  return (
    <div className="photo-details-modal">
      <button onClick={toggleModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__images'>
        <PhotoFavButton handleFavButton={handleFavButton} photoId={id} isFav={isFav}/>
        <img className='photo-details-modal__image' src={urls.full} alt="selected enlarged photo" />
        <div className='photo-details-modal__photographer-details'>
          <img className='photo-details-modal__photographer-profile' src={user.profile} alt={`${user.name}'s profile image`}/>
          <div className='photo-details-modal__photographer-info'>
            <span>{user.name}</span>
            <p className='photo-details-modal__photographer-location'>{location.city} {location.country}</p>
          </div>
        </div>
        <h2 className='photo-details-modal__header'>Similar Photos</h2>
        <PhotoList photosData={similarPhotosArray} handleFavButton={handleFavButton} favPhotos={favPhotos}/>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
