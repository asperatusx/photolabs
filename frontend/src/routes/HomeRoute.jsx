import React from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = (props) => {
  const {
    photosData,
    topicsData,
    handleFavButton,
    favPhotos,
    toggleModal,
    onClickTopic,
  } = props;
  return (
    <div className="home-route">
      <TopNavigationBar
        topicsData={topicsData}
        favPhotos={favPhotos}
        onClickTopic={onClickTopic}
      />
      <PhotoList
        photosData={photosData}
        topicPhotosData
        handleFavButton={handleFavButton}
        favPhotos={favPhotos}
        toggleModal={toggleModal}
      />
    </div>
  );
};

export default HomeRoute;
