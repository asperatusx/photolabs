import React from 'react';
import './App.scss';
import useApplicationData from 'hooks/useApplicationData';

import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';



// Note: Rendering a single component to build components in isolation
const App = () => {
  const { favPhotos, modal, photoDetails, toggleModal, handleFavButton } = useApplicationData()

  return (
    <div className="App">
      <HomeRoute photosData={photos} topicsData={topics} favPhotos={favPhotos} toggleModal={toggleModal} handleFavButton={handleFavButton}/>
      { modal && <PhotoDetailsModal toggleModal={toggleModal} photoDetails={photoDetails} handleFavButton={handleFavButton} favPhotos={favPhotos}/> }
    </div>
  );
};

export default App;
