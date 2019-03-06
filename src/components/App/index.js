import React from 'react';

import RoomPanel from '../RoomPanel';
import TargetPanel from '../TargetPanel';

const style = {
  display: "flex",
  flexDirection: "column",
  flex: "1 1 auto",

  width: "100%",
  height: "100%",

  backgroundColor: "black",
  color: "white",
};

const App = () => (
  <div className='App' style={style}>
    <RoomPanel />
    <TargetPanel />
  </div>
);

export default App;
