import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {

	Link
  } from "react-router-dom";
const StyledInput = styled.input `
	background-color: white;
	font-family: 'Open Sans'
	height: 60px;
	border: 0.5px: solid #EBEBEB
	line-height: 60px;
	font-size: 20px;
	padding-left: 20px;
	width: 100%;
	
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