import React from 'react';
import ProgressBar from './components/ProgressBar';

function App() {
  return (
    <ProgressBar
      items={[
        { name: 'Sold', color: '#BD1FBE', value: 677 },
        { name: 'Got free', color: '#FC64FF', value: 23 },
        { name: 'Burned', color: '#7FFF00', value: 202 },
        { name: 'Free float', color: '#808080', value: 323 },
      ]}
      height={20}
      width={5}
    />
  );
};

export default App;