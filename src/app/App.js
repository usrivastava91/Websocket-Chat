import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      draft: ''
    }
    this.updateDraft = this.updateDraft.bind(this)
    this.send = this.send.bind(this)
  }

  updateDraft (event) {
    this.setState({ draft: event.target.value })
  }

  send (event) {
    event.preventDefault()
    console.log(this.state.draft)
    this.props.socket.emit('message', this.state.draft)
  }

  render () {
    return (
      <div>
        <ul className='messages'>
          <li>message 1</li>
          <li>message 2</li>
          <li>message 3</li>
          <li>message 4</li>
        </ul>
        <form>
          <input className='m' autoComplete='off' value={this.state.draft} onChange={this.updateDraft} />
          <button onClick={this.send}>Send</button>
        </form>
      </div>
    )
  }
}

export default App
