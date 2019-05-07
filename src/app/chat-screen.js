import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { messages: state.messages };
}

const connectedChatScreen = ({ messages }) => (
    <ul className='messages'>
        {messages.map(message => (
            <li>
                {message}
            </li>
        ))}
    </ul>
)
const ChatScreen = connect(mapStateToProps)(connectedChatScreen);

export default ChatScreen;