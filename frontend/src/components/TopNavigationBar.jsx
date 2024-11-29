import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = (props) => {
  const { topicsData } = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicsData={topicsData}/>
      <FavBadge />
    </div>
  )
}

export default TopNavigationBar;