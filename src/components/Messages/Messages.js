import React from 'react';
import './Messages.css'
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message';
function Messages({messages, nameCurrent}) {

    return (
        <ScrollToBottom className="messagesContainer">
            {
                messages.map((message, index) => {
                    return (
                        <Message key={index} message={message} nameCurrent={nameCurrent}></Message>
                    )
                })
            }
        </ScrollToBottom>
    );
}

export default Messages;