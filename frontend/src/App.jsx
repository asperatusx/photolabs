import React from 'react';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';


// Note: Rendering a single component to build components in isolation
const App = () => {
  // const photos = [];
  // for (let i = 0; i < 3; i++) {
  //   photos.push(<PhotoListItem key={i} photoData={sampleDataForPhotoListItem}/>)
  // }
  
  return (
    <div className="App">
      <HomeRoute />
    </div>
  );
};

export default App;
