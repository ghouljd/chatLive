/**
 *
 * Message
 *
 */

import React from 'react';
import styled from 'styled-components';

const User = styled.p`
  color: #6ec2ec;
  font-size: 1em;
`;

const DateMsg = styled.p`
  color: #919a9d;
  position: relative;
  float: right;
  top: 2.5em;
  font-size: 0.8em;
`;

const MessageData = styled.p`
  padding: 0.5em 1em;
  font-size: 1.2em;
`;

const MessageContent = styled.section`
  background-color: #e4e4e4;
  margin: 0.5em;
  padding: 0.8em;
  border-radius: 0.5em;
`;

/* eslint-disable react/prefer-stateless-function */
class Message extends React.Component {
  realDate = function(timeStamp) {
    const date = new Date(timeStamp);
    return `${date.getHours()}:${date.getMinutes()}`;
  };

  render() {
    return (
      <MessageContent>
        <User>{this.props.user}</User>
        <DateMsg>{this.realDate(this.props.date)}</DateMsg>
        <MessageData>{this.props.message}</MessageData>
      </MessageContent>
    );
  }
}

Message.propTypes = {};

export default Message;
