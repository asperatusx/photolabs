import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const {photosData, topicsData, toggleFavPhoto} = props
  return (
    <div className="home-route">
      <TopNavigationBar topicsData={topicsData} />
      <PhotoList photosData={photosData} toggleFavPhoto={toggleFavPhoto}/>
    </div>
  );
};

export default HomeRoute;
