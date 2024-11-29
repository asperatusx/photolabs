import React from 'react';
import './App.scss';
import { useState } from 'react';

import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';



// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favPhotos, setFavPhotos] = useState([]);

  const toggleFavPhoto = photoId => {
    setFavPhotos(prevFav => {
      return prevFav.includes(photoId) ? prevFav.filter(id => id !== photoId) : [...prevFav, photoId]
    })
  }
  console.log(favPhotos)
  return (
    <div className="App">
      <HomeRoute photosData={photos} topicsData={topics} toggleFavPhoto={toggleFavPhoto} favPhotos={favPhotos}/>
    </div>
  );
};

export default App;
