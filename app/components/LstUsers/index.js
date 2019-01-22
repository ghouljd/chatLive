/**
 *
 * LstUsers
 *
 */

import React from 'react';
import { firestore } from 'firebaseConfig';
import { Icon } from 'semantic-ui-react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const LstUsersContent = styled.section`
  margin: 5em 0em;
`;

const Title = styled.h2`
  font-size: 1.25em;
`;

const ItemList = styled.li`
  margin: 1em 0.5em !important;
  color: #fff;
  font-size: 1.3em;
`;

/* eslint-disable react/prefer-stateless-function */
class LstUsers extends React.Component {
  constructor(props) {
    super(props);

    this.state = { users: [] };

    firestore
      .collection('users')
      .where('active', '==', true)
      .onSnapshot(querySnapshot => {
        const users = [];
        querySnapshot.forEach(doc => {
          users.push(doc.data().name);
        });
        this.setState({
          users,
        });
      });
  }

  render() {
    return (
      <LstUsersContent>
        <Title>Usuarios Conectados</Title>
        <ul>
          {this.state.users.map(user => (
            <ItemList key={user}>
              <Icon name="user" />
              {user}
            </ItemList>
          ))}
        </ul>
      </LstUsersContent>
    );
  }
}

LstUsers.propTypes = {};

export default LstUsers;
