/**
 *
 * ChatMessages
 *
 */

import React from 'react';
import Message from 'components/Message/index';

// import PropTypes from 'prop-types';
import styled from 'styled-components';

const ChatContent = styled.section`
  height: 72vh;
  overflow: auto;
`;

/* eslint-disable react/prefer-stateless-function */
class ChatMessages extends React.Component {
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    return (
      <ChatContent>
        {this.props.messages.map((message, index) => (
          <Message
            key={index}
            date={message.date}
            message={message.message}
            user={message.user}
          />
        ))}
        <div
          style={{ float: 'left', clear: 'both' }}
          ref={el => {
            this.messagesEnd = el;
          }}
        />
      </ChatContent>
    );
  }
}

ChatMessages.propTypes = {};

export default ChatMessages;
