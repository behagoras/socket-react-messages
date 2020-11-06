import React from 'react'
import useConnectRealtimeDatabase from './utils/connectRealtimeDatabase';

function App() {
  useConnectRealtimeDatabase()
  return (
    <div className="App">
      My app
    </div>
  );
}

export default App;
