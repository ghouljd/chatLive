/**
 *
 * Menu
 *
 */

import React from 'react';
import Button from 'components/Button/index';
import LstUsers from 'components/LstUsers/index';
import { Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';
import Logo from 'images/Logo.jpg';

const MenuContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #6ec2ec;
  height: 100vh;
  padding: 2em 0.5em;
`;

/* eslint-disable react/prefer-stateless-function */
class Menu extends React.Component {
  componentDidMount = () => {
    window.onbeforeunload = () => {
      this.props.click();
    };
  };

  render() {
    return (
      <MenuContent>
        <Image src={Logo} size="small" bordered />
        <LstUsers />
        <Button text="Salir" click={this.props.click} />
      </MenuContent>
    );
  }
}

Menu.propTypes = {};

export default Menu;
