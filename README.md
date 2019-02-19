# Pefin Challenge

## What this repo provides
1. An echo service implemented using websockets (socket.io) available on port 9001.
2. A small client that provides a text box for sending messages to the service.
3. A redux store containing just a reducer for storing messages.

## What you're asked to implement/develop
1. Set up the redux store to manage messages.
2. Create a middleware to receive actions, and emit their messages to the socket.
3. The middleware should also listen to the socket for messages, and dispatch the correct actions.
4. Update the <App /> component to render messages from the datastore.
