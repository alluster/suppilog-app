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
	font-size: 18px;
	padding-left: 20px;
	width: calc(100% - 20px);

	::placeholder {
		color: ${props => props.theme.colors.linkGray} !important;
		font-size: 18px;
		font-weight: 400;
		@media ${device.laptop} {
			font-size: 16px;	
		}

	}
	::-webkit-input-placeholder {
		color: ${props => props.theme.colors.linkGray} !important;
		font-size: 18px;
		font-weight: 400;
		@media ${device.laptop} {
			font-size: 16px;	
		}


	}
	:-ms-input-placeholder {
		color: ${props => props.theme.colors.linkGray} !important;
		font-size: 18px;
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
const Label = styled.p`
	margin-bottom: 10px;

`



const Input = ({onChange, placeholder, label, className}) => {
    return(
		<>
			<Label>{label}</Label>
			<StyledInput className={className} placeholder={placeholder} onChange={onChange} />
		</>
	);
};

Input.propTypes = {
	onChange: PropTypes.any,
	placeholder: PropTypes.any
 };

export default Input;