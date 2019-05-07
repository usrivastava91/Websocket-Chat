import io from 'socket.io-client'
import React from 'react'
import { render } from 'react-dom'
import ConnectedApp from './App'
import { Provider } from "react-redux";
import store from './store';
// See this function for an example of how to send messages and how to
// subscribe and listen for messages
// const example = (socket) => {
//   socket.emit('message', 'hello world')
//   socket.on('message', msg => {
//     console.log('Received message: ', msg)
//   })
// }

const main = () => {
  const socket = io('localhost:9001')

  const app = (
   

    <Provider store = { store }>  <ConnectedApp socket={socket} /> </Provider>
  )

  render(app, document.getElementById('app-root'))
}

main()
