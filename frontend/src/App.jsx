import React from 'react';

import PhotoList from 'components/PhotoList';
import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  // const photos = [];
  // for (let i = 0; i < 3; i++) {
  //   photos.push(<PhotoListItem key={i} photoData={sampleDataForPhotoListItem}/>)
  // }
  
  return (
    <div className="App">
      <PhotoList />
    </div>
  );
};

export default App;
