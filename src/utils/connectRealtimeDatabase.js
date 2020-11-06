import {useEffect, useState} from 'react'
import {io} from "socket.io-client";
import {formatMessage} from './messages'

// import celery from 'celery-node';
import {
  realtimeHost,
  redisServer
} from "../config";

import {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
} from './users'
const server = require('./server');


// const brokerUrl = `${redisServer}:5555/0`;
// const backend = `${redisServer}`;
// console.log('backend', backend)
// console.log('brokerUrl', brokerUrl)
// console.log(brokerUrl);
// const celeryClient = celery.createClient(brokerUrl, backend);

const botName = 'Platzi-Message Bot';

export default function useConnectRealtimeDatabase () {
  // const [response, setResponse] = useState("");
  useEffect(()=>{
    try {
      const socket = io('http://ec2-54-218-100-15.us-west-2.compute.amazonaws.com:2000');
      // socket.on('joinRoom', ({ username, room }) => {
      //   const user = userJoin(socket.id, username, room);
      //   socket.join(user.room);
      //   // Welcome current user
      //   socket.emit('message', formatMessage(botName, 'Welcome to Platzi Message!'));
      //   // Broadcast when a user connects
      //   socket.broadcast
      //     .to(user.room)
      //     .emit(
      //       'message',
      //       formatMessage(botName, `${user.username} has joined the chat`)
      //     );
      //   // Send users and room info
      //   // socket.to(user.room).emit('roomUsers', {
      //   //   room: user.room,
      //   //   users: getRoomUsers(user.room)
      //   // });
      // });
  
      // socket.on('chatMessage', msg => {
      //   const user = getCurrentUser(socket.id);
      //   //const task = celeryClient.createTask('tasks.showMessage');
      //   try {
      //     // const task = celeryClient.createTask('tasks.insertMessage');
      //     // const { taskId } = task.applyAsync([null, user.username, user.room, msg]);
      //     // console.log('socket => taskId', taskId)
      //     console.log(
      //       'socket => formatMessage(user.username, msg)',
      //       formatMessage(user.username, msg)
      //     )
      //   } catch (error) {
      //     console.log('event error ',error);
      //   }
      //   // socket.to(user.room).emit('message', formatMessage(user.username, msg));
      // });
  
      // socket.on('disconnect', () => {
      //   const user = userLeave(socket.id);
  
      //   if (user) {
      //     socket.to(user.room).emit(
      //       'message',
      //       formatMessage(botName, `${user.username} has left the chat`)
      //     );
  
      //     // Send users and room info
      //     socket.to(user.room).emit('roomUsers', {
      //       room: user.room,
      //       users: getRoomUsers(user.room)
      //     });
      //   }
      // });
    } catch (error) {
      console.log('error socket =>', error);
    }
  },[])

  return {}
}