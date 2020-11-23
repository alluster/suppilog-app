import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {

	Link
  } from "react-router-dom";
  import { device } from '../../device';

  
const StyledButton = styled.button `
	background-color: ${props => props.color || props.theme.colors.primary};
	font-family: 'Open Sans'
	color: ${props => props.textColor || "white"} ;
	-webkit-text-fill-color: ${props => props.textColor || "white"} ;
	height: 30px; 
	text-align: center;
	line-height: 30px;
	font-weight: 600;
	font-size: 12px;
	border-radius: 5px;
	padding-right: auto;
	padding-left: auto;
	margin-top: auto;
	min-width: 120px;
		@media ${device.laptop} {
		}
`;

const Button = ({onClick, children, to, color, className, textColor}) => {
    return(
        <Link to={to || ""}><StyledButton className={className} color={color} textColor={textColor} onClick={onClick} >{children}</StyledButton></Link>
    );
};

Button.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.any,
	children: PropTypes.any
 };

export default Button;