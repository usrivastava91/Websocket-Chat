import React from 'react'
import { connect } from 'react-redux';
import ChatScreen from './chat-screen';
import ConnectedTextbox from './text-box';
import { sendMessage } from './actions';
import io from 'socket.io-client';
const mapStateToProps = state => {
  return { messages: state.messages };
}
 var socket;
class App extends React.Component {
  constructor(props) {
    super(props)
    socket = io('localhost:9001');
    socket.on('message',(msg) => {
      this.props.sendMessage(msg);
    })
  }
  render() {
    return (
      <div>
        <ChatScreen />
        <ConnectedTextbox socket={socket}/>
      </div>
    )
  }
}

const ConnectedApp = connect(mapStateToProps, { sendMessage })(App);
export default ConnectedApp;
