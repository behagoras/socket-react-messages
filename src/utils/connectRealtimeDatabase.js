import {useEffect} from 'react'
import {io} from "socket.io-client";

export default function useConnectRealtimeDatabase () {
  // const [response, setResponse] = useState("");
  useEffect(()=>{
    try {
      const socket = io('http://ec2-54-218-100-15.us-west-2.compute.amazonaws.com:2000');
    } catch (error) {
      console.log('error socket =>', error);
    }
  },[])

  return {}
}