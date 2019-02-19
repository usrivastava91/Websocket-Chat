import io from 'socket.io-client'
import { makeStore } from './store'
import React from 'react'
import { render } from 'react-dom'
import App from './App'

// See this function for an example of how to send messages and how to
// subscribe and listen for messages
const example = (socket) => {
  socket.emit('message', 'hello world')
  socket.on('message', msg => {
    console.log('Received message: ', msg)
  })
}

const main = () => {
  const socket = io('localhost:9001')
  const store = makeStore()

  const app = (
    <App socket={socket} />
  )

  render(app, document.getElementById('app-root'))
}

main()
