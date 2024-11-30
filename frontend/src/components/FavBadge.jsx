import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, favPhotosCount }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={!!isFavPhotoExist}/>
      <span className='.fav-badge__count'>{favPhotosCount}</span>
    </div>
  ) 
};

export default FavBadge;