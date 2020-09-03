import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from '../../device';
import { AppContext } from '../../context/Context';
import Button from '../Button';
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

const StyledButton = styled(Button) `
width: 100%;
height: 50px;
font-size: 20px;
`;



const CTA = styled.p`
text-align: center;
margin-bottom: 10px;
margin-top: 20px;
	@media ${device.laptop} {
	text-align: left;
}
`;
const Input = ({ placeholder, label, className }) => {
	const context = useContext(AppContext);
	const [value, setValue] = useState("")



    return(
		<>
			<Label>{label}</Label>
			<StyledInput className={className} placeholder={placeholder} onChange={e => setValue(e.target.value)} value={value}/> 
		</>
	);
};

Input.propTypes = {
	onChange: PropTypes.any,
	placeholder: PropTypes.any
 };

export default Input;