import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const {photosData, topicsData} = props
  return (
    <div className="home-route">
      <TopNavigationBar topicsData={topicsData} />
      <PhotoList photosData={photosData} />
    </div>
  );
};

export default HomeRoute;
