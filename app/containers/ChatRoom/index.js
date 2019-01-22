/**
 *
 * ChatRoom
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectChatRoom from './selectors';
import reducer from './reducer';
import { updateMessages, logOut } from './actions';

import { Form, TextArea } from 'semantic-ui-react';
import Button from 'components/Button/index';
import ChatMessages from 'components/ChatMessages/index';
import Menu from 'components/Menu/index';
import { Redirect } from 'react-router-dom';
import { Row, Col } from 'antd';
import { firestore } from 'firebaseConfig';

/* eslint-disable react/prefer-stateless-function */
export class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  componentDidMount = () => {
    firestore
      .collection('messages')
      .orderBy('date')
      .onSnapshot(docs => this.props.dispatch(updateMessages(docs.docChanges)));
  };

  componentWillUnmount = () => {
    const unsubscribe = firestore.collection('messages').onSnapshot(() => {});
    unsubscribe();
  };

  writeMessage = () => {
    if (this.state.message !== '') {
      firestore
        .collection('messages')
        .add({
          user: this.props.location.name,
          message: this.state.message,
          date: Date.now(),
        })
        .catch(error => {
          console.error('Error adding document: ', error);
        });
      this.setState({
        message: '',
      });
    }
  };

  message = e => {
    this.setState({
      message: e.target.value,
    });
  };

  onEnterPress = e => {
    if (e.keyCode == 13 && e.shiftKey == false) this.writeMessage();
  };

  render() {
    if (
      typeof this.props.location.name === 'undefined' ||
      this.props.chatRoom.redirect
    )
      return <Redirect to="/" />;
    return (
      <div>
        <Row>
          <Col span={4}>
            <Menu
              click={() =>
                this.props.dispatch(logOut(this.props.location.name))
              }
            />
          </Col>
          <Col span={20}>
            <div className="contentChat">
              <h1>
                Ya puedes comenzar a conversar <b>{this.props.location.name}</b>
              </h1>
              <ChatMessages messages={this.props.chatRoom.messages} />
              <div className="sendMessage">
                <Form>
                  <TextArea
                    onChange={this.message}
                    value={this.state.message}
                    onKeyDown={this.onEnterPress}
                  />
                </Form>
                <Button text="Enviar" click={this.writeMessage} />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

ChatRoom.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  chatRoom: makeSelectChatRoom(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'chatRoom', reducer });

export default compose(
  withReducer,
  withConnect,
)(ChatRoom);
