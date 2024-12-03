import React from "react";
import "./App.scss";
import useApplicationData from "hooks/useApplicationData";

import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";


const App = () => {
  //grab object from custom hook
  const {
    isLoading,
    photosData,
    topicsData,
    topicPhotosData,
    favPhotos,
    modal,
    photoDetails,
    toggleModal,
    handleFavButton,
    onClickTopic,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        isLoading={isLoading}
        photosData={photosData}
        topicsData={topicsData}
        topicPhotosData={topicPhotosData}
        favPhotos={favPhotos}
        toggleModal={toggleModal}
        handleFavButton={handleFavButton}
        onClickTopic={onClickTopic}
      />
      {modal && (
        <PhotoDetailsModal
          toggleModal={toggleModal}
          photoDetails={photoDetails}
          handleFavButton={handleFavButton}
          favPhotos={favPhotos}
        />
      )}
    </div>
  );
};

export default App;
