import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {

	Link
  } from "react-router-dom";
const StyledInput = styled.input `
	background-color: white;
	font-family: 'Open Sans'
	height: 40px;
	border: 1px solid #EBEBEB !important;
	line-height: 40px;
	font-size: 18px;
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