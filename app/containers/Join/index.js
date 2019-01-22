/**
 *
 * Join
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import Button from 'components/Button/index';
import { Redirect } from 'react-router-dom';
import { firestore } from 'firebaseConfig';
import Logo from 'images/Logo.jpg';
import { Image } from 'semantic-ui-react';
import makeSelectJoin from './selectors';
import reducer from './reducer';
import { login } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class Join extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  nameValue = e => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    if (this.props.join.redirect) {
      firestore
        .collection('users')
        .doc(this.state.name)
        .set({
          name: this.state.name,
          active: true,
        })
        .catch(error => {
          console.error('Error writing document: ', error);
        });
      return (
        <Redirect
          to={{
            pathname: '/Chat',
            name: this.state.name,
          }}
        />
      );
    }

    return (
      <div className="joinBody">
        <div className="cardJoin">
          <Image className="joinLogo" src={Logo} size="small" />
          <h1>Chat</h1>
          <h2>Ingresa un nombre para identificarte y unirte al chat</h2>
          <div className="group">
            <input
              className="inputText"
              type="text"
              required
              onChange={this.nameValue}
            />
            <span className="highlight" />
            <span className="bar" />
            <label>Usuario</label>
          </div>
          <Button text="Unirte" click={() => this.props.dispatch(login())} />
        </div>
      </div>
    );
  }
}

Join.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  join: makeSelectJoin(),
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

const withReducer = injectReducer({ key: 'join', reducer });

export default compose(
  withReducer,
  withConnect,
)(Join);
