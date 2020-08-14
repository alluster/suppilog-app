import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faCog, faPlus, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';
import ReactMarkdown from 'react-markdown';
import {

	Link
  } from "react-router-dom";

import { device } from '../../device';


const CardPerson = ({ image, name, description, position, email, phone }) => {
	const CardContainer = styled.div `
		width: 280px;
		font-family: 'Open Sans'
		height: 300px;
		background-color: white;
		margin-right: 10px;
		margin-top: 10px
		border-radius: 5px;
		// border: 1px solid #DFDFDF;
		// box-shadow:
		// 	2.8px 0 2.2px rgba(0, 0, 0, 0.034),
		// 	6.7px 0 5.3px rgba(0, 0, 0, 0.048),
		// 	;
		@media ${device.laptop} {
			width: 100%;
		}
		
`;

	const CardContent = styled.div`
		display: flex;
		flex-direction: column;
		background-color: white;
		min-height: 100px;
		border-radius: 0px 0px 5px 5px;
		padding: 15px 15px 15px 0px;
			
	`;
	const ImageContainer = styled.div`
		
		background-repeat: no-repeat;
		background-size: cover;

	`;

	const Image = styled.img`
		height: 200px;
		width: 200px
		border-radius: 100px;
		object-fit: cover;
		object-position: 50% 0%


	`;

    return(
			<CardContainer>
				<ImageContainer>
					<Image src={image} />
				</ImageContainer>
				<CardContent>
					<h2 style={{ 
							fontSize: "24px", 
							fontWeight: "600"}}>
						{name}
					</h2>
					<h2 style={{ 
						fontSize: "16px", 
						fontWeight: "400"}}
					>
						{position}
					</h2>
					<h2 
					style={{ 
							fontSize: "14px", 
							marginTop: "10px",
							fontWeight: "600"}}
							
					>
						{email}
					</h2>
					<h2 style={{ 
								fontSize: "14px", 
								marginTop: "10px",
								fontWeight: "600"}}
							>
						{phone}
					</h2>
					<ReactMarkdown style={{ 
						fontSize: "14px", marginTop: "10px"}}>
						{description}
					</ReactMarkdown>
					
				</CardContent>

			</CardContainer>
    );
};

CardPerson.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.any,
	children: PropTypes.any
 };

export default CardPerson;