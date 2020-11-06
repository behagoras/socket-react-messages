import React from 'react'
import {useEffect} from 'react'
import SocketIoClient from "socket.io-client";
function App() {
  useEffect(()=>{
    try {
      const socket = SocketIoClient('http://ec2-54-218-100-15.us-west-2.compute.amazonaws.com:2000');
    } catch (error) {
      console.log('error socket =>', error);
    }
  },[])
  return (
    <div className="App">
      My app
    </div>
  );
}

export default App;
