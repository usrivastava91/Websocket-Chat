const Parcel = require('parcel-bundler')
const express = require('express')
const http = require('http')
const io = require('socket.io')

const startParcel = async () => {
  const bundler = new Parcel('./src/app/index.html')
  bundler.serve(9000)
}

const main = async () => {
  const app = express()
  const server = http.Server(app)
  startParcel()

  const messages = []

  const socket = io(server)

  socket.on('connection', connection => {
    console.log('a user connected');
    connection.on('disconnect', () => {
      console.log('a user disconnected')
    })

    // echo the message back
    connection.on('message', msg => {
      console.log('message: ' + msg)
      connection.emit('message', msg)
    })

    const interval = setInterval(() => {
      const time = new Date().toISOString()
      connection.emit('message', `The time is ${time}`)
    }, 5000)
  })

  server.listen(9001, () => {
    console.log('Chat server listening on *:9001')
  })
}

main()
