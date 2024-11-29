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

  const toggleFavPhoto = photoId => {
    setFavPhotos(prevFav => {
      return prevFav.includes(photoId) ? prevFav.filter(id => id !== photoId) : [...prevFav, photoId]
    })
  }

  const toggleModal = () => {
    setModal(prevModal => !prevModal)
  }

  console.log(favPhotos)
  return (
    <div className="App">
      <HomeRoute photosData={photos} topicsData={topics} toggleFavPhoto={toggleFavPhoto} favPhotos={favPhotos} toggleModal={toggleModal}/>
      { modal && <PhotoDetailsModal /> }
    </div>
  );
};

export default App;
