/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  text-align: center;
  background-color: #6ec2ed !important;
`;

/* eslint-disable react/prefer-stateless-function */
class Button extends React.Component {
  render() {
    return (
      <ButtonStyle className="ui primary button" onClick={this.props.click}>
        {this.props.text}
      </ButtonStyle>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
