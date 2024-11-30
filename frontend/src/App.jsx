import React from 'react';
import './App.scss';
import { useState } from 'react';

import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';



// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favPhotos, setFavPhotos] = useState([]);
  const [modal, setModal] = useState(false);
  const [photoDetails, setPhotoDetails] = useState({});

  const toggleModal = (e, photoInfo) => {
    e.stopPropagation();
    setModal(prevModal => !prevModal)
    setPhotoDetails(photoDetails => {
      return photoDetails = {...photoInfo}
    })
  }

  const handleFavButton = (photoId) => {
    setFavPhotos(prevFav => {
      return prevFav.includes(photoId) ? prevFav.filter(id => id !== photoId) : [...prevFav, photoId]
    })
  }

  return (
    <div className="App">
      <HomeRoute photosData={photos} topicsData={topics} favPhotos={favPhotos} toggleModal={toggleModal} handleFavButton={handleFavButton}/>
      { modal && <PhotoDetailsModal toggleModal={toggleModal} photoDetails={photoDetails} handleFavButton={handleFavButton} favPhotos={favPhotos}/> }
    </div>
  );
};

export default App;
