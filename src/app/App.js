import React from 'react'
import { connect } from "react-redux";
import { sendMessage } from './actions';

const mapStateToProps = state => {
  return { messages: state.messages };
}

var updatedMessages = [];
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

    // console.log('outside',this.props.messges)
    // setTimeout(console.log('ye late hai', this.props.messages))
    // this.props.socket.emit('message', this.props.messages);
  }

  componentWillReceiveProps(nextProps) {
    // console.log('------ON STATE CHANGE---------',this.props.messages)
    this.props.socket.emit('message', nextProps.messages[nextProps.messages.length - 1]);
    updatedMessages.push(nextProps.messages[nextProps.messages.length - 1]);
    // console.log('------ON STATE CHANGE---------', updatedMessages)


  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')

  }
  render() {
    return (
      <div>
        <ul className='messages'>
          {updatedMessages.map(message => (
            <li>
              {message}
            </li>
          ))}
        </ul>
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
