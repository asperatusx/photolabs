import React from 'react';
import './App.scss';
import useApplicationData from 'hooks/useApplicationData';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';



// Note: Rendering a single component to build components in isolation
const App = () => {
  const { photosData, topicsData, favPhotos, modal, photoDetails, toggleModal, handleFavButton } = useApplicationData()

  return (
    <div className="App">
      <HomeRoute photosData={photosData} topicsData={topicsData} favPhotos={favPhotos} toggleModal={toggleModal} handleFavButton={handleFavButton}/>
      { modal && <PhotoDetailsModal toggleModal={toggleModal} photoDetails={photoDetails} handleFavButton={handleFavButton} favPhotos={favPhotos}/> }
    </div>
  );
};

export default App;
