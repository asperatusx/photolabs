import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const {photosData, topicsData, toggleFavPhoto, favPhotos} = props
  return (
    <div className="home-route">
      <TopNavigationBar topicsData={topicsData} favPhotos={favPhotos}/>
      <PhotoList photosData={photosData} toggleFavPhoto={toggleFavPhoto}/>
    </div>
  );
};

export default HomeRoute;
