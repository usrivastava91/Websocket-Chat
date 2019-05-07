import React from 'react'
import { connect } from 'react-redux';
import ChatScreen from './chat-screen';
import ConnectedTextbox from './text-box';
import { sendMessage } from './actions';

const mapStateToProps = state => {
  return { messages: state.messages };
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      draft: ''
    }
    this.updateDraft = this.updateDraft.bind(this)
    this.send = this.send.bind(this)

  }

  updateDraft(event) {
    this.setState({ draft: event.target.value })
  }


  send(event) {
    event.preventDefault()
    this.props.sendMessage(this.state.draft)
    this.state.draft = '';
  }

  componentWillReceiveProps(nextProps) {
    this.props.socket.emit('message', nextProps.messages[nextProps.messages.length - 1]);
  }

  render() {
    return (
      <div>
        <ChatScreen />
        <form>
          <input className='m' autoComplete='off' value={this.state.draft} onChange={this.updateDraft} />
          <button onClick={this.send}>Send</button>
        </form>
      </div>
    )
  }
}

const ConnectedApp = connect(mapStateToProps, { sendMessage })(App);
export default ConnectedApp;
