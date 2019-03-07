# Pefin Challenge

## What this repo provides
1. An echo service implemented using websockets (socket.io) available on port 9001.
2. A small client that provides a text box for sending messages to the service.
3. A redux store containing just a reducer for storing messages.

## What you're asked to implement/develop
1. Set up the redux store to manage messages.
2. Create a middleware to receive actions, and emit their messages to the socket.
3. The middleware should also listen to the socket for messages, and dispatch the correct actions.
4. Update the `<App />` component to render messages from the datastore.

## Guidelines
1. Feel free to break `<App />` into multiple components.
2. Set up the appropriate actions/middleware to handle the expected functionality.
3. Consider creating a robust API so that future changes to the chat protocol will be easy to implement.
4. Consider adding tests to the app.
5. Your submission should include a brief discussion of what architecture or design decisions you made, and how you arrived to them.

## Getting Started
1. Fork this repo, and clone it locally.
2. Run `yarn` to install dependencies.
3. Run `yarn start` to start the local development environment.
4. Open `http://localhost:9000` in a browser.
5. When done implementing the functionality, commit to your own fork, and open a PR or send a link to the repo.
