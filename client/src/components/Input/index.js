import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from '../../device';

import {

	Link
  } from "react-router-dom";
const StyledInput = styled.input `
	background-color: white;
	font-family: 'Open Sans'
	font-weight: 600;
	height: 60px;
	line-height: 60px;
	font-size: 16px;
	padding-left: 20px;
	width: 100%;

	::placeholder,
	::-webkit-input-placeholder {
		color: ${props => props.theme.colors.black} !important;
		font-size: 18px;
		font-family: 'Open Sans !important';
		font-weight: 600;
		
		@media ${device.laptop} {
			font-size: 16px;	
		}


	}
	:-ms-input-placeholder {
		color: ${props => props.theme.colors.black} !important;
		font-size: 18px;
		font-family: 'Open Sans !important';
		font-weight: 600;
		@media ${device.laptop} {
			font-size: 16px;	
		}
	}
	@media ${device.laptop} {
		height: 50px;
		line-height: 30px;


		
    }
`;

const Input = ({onChange, placeholder}) => {
    return(
        <StyledInput placeholder={placeholder} onChange={onChange} />
    );
};

Input.propTypes = {
	onChange: PropTypes.any,
	placeholder: PropTypes.any
 };

export default Input;