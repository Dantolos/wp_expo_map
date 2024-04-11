import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ExpoMapMain from './components/view/ExpoMapMain';
import MapImage from './components/view/MapImage';

function App() {
  const [ mapImageLoaded, setMapImageLoaded ] = useState(false);

  const loadHandler = () => {
    console.log('MAP LOADET')
    setMapImageLoaded(true);
  };

  return (
    <>
      <MapImage loadHandler={loadHandler} />
      {mapImageLoaded && <ExpoMapMain />}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('expo-react-container'));
