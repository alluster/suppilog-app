import React , { useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch, faCog, faPlus, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import AnimatedNumber from 'animated-number-react';
import { device } from '../../device';


const CardNumber = ({ingress, number, title}) => {

	// const formatValue = (value) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	const formatValue = (value) => value.toFixed();
	const CardContainer = styled.div `
		width: 33%;
		font-family: 'Open Sans'
		height: 300px;
		background-color: white;
		height: 100%;
		@media ${device.laptop} {
			width: 100%;
		}
		
	`;
	const Number = styled(AnimatedNumber)`
		color: ${props => props.theme.colors.black};
		font-size: 70px;
		font-weight: 600;
		@media ${device.laptop} {
			font-size: 30px;
		}

	`

	const CardContent = styled.div`
		display: flex;
		flex-direction: column;
		background-color: white;
		height: 100%;
		text-align: center;

	`;
		const Title = styled.h2`
			font-weight: 400;
			text-align: center;
			color: ${props => props.theme.colors.black};


		`;


    return(
		<CardContainer>
			<CardContent>
				<h2>{ingress}</h2>
			<Number
				value={number}
				formatValue={formatValue}
				duration={3000}
        	/>
			<p>{title}</p>
			</CardContent>

		</CardContainer>
			
    );
};

CardNumber.propTypes = {
	title: PropTypes.string,
	number: PropTypes.any,
 };

export default CardNumber;