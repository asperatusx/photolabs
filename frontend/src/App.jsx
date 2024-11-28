import React from 'react';

import PhotoList from 'components/PhotoList';
import './App.scss';
import TopicList from 'components/TopicList';
import TopNavigationBar from 'components/TopNavigationBar';


// Note: Rendering a single component to build components in isolation
const App = () => {
  // const photos = [];
  // for (let i = 0; i < 3; i++) {
  //   photos.push(<PhotoListItem key={i} photoData={sampleDataForPhotoListItem}/>)
  // }
  
  return (
    <div className="App">
      <TopNavigationBar />
      {/* <TopicList />
      <PhotoList /> */}
    </div>
  );
};

export default App;
