import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = (props) => {
  const { topicsData, favPhotos } = props;

  const isFavPhotoExist = () => {
    return favPhotos.length > 0 ? true : false 
  }

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicsData={topicsData}/>
      <FavBadge isFavPhotoExist={isFavPhotoExist()} favPhotosCount={favPhotos.length}/>
    </div>
  )
}

export default TopNavigationBar;