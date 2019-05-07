import React from 'react';
import { connect } from 'react-redux';
import { sendMessage } from './actions';

class Textbox extends React.Component {
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
        event.preventDefault();
        this.props.sendMessage(this.state.draft);
        this.props.socket.emit('message', this.state.draft);
        this.state.draft = '';
      }

    render() {
        return (
            <form>
                <input className='m' value={this.state.draft} autoComplete='off' onChange={this.updateDraft} />
                <button onClick={this.send}>Send</button>
            </form>
        )
    }
}

const ConnectedTextbox = connect(null,{ sendMessage })(Textbox);
export default ConnectedTextbox;