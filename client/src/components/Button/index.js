import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {

	Link
  } from "react-router-dom";
const StyledButton = styled.button `
	background-color: ${props => props.color};
	font-family: 'Open Sans'
	color: white;
	-webkit-text-fill-color: white;
	height: 30px; border-radius: 15px;
	text-align: center;
	line-height: 30px;
	font-weight: bold;
	font-size: 14px;
	padding-left: 30px;
	padding-right: 30px;
	padding-right: auto;
	margin-top: auto;
		@media (max-width: ${props => props.theme.screenSize.tablet}) {
			width: 100%;
		}
`;

const Button = ({onClick, children, to, color}) => {
    return(
        <Link to={to}><StyledButton color={color} onClick={onClick} >{children}</StyledButton></Link>
    );
};

Button.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.any,
	children: PropTypes.any
 };

export default Button;