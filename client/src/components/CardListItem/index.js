import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch, faCog, faPlus, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import {

	Link
  } from "react-router-dom";

import { device } from '../../device';


const CardListItem = ({ id, image, name, description, price, type, quantity, res }) => {

	const CardContainer = styled.div `
		display: flex;	
		width: 100%;
		font-family: 'Open Sans'
		height: 100%;
		background-color: white;
		margin-right: 10px;
		margin-top: 20px
		border-radius: 16px;
		border: 1px solid #F4F4F4;
		-webkit-box-shadow: 0px 5px 13px 1px rgba(216,216,216,0.26); 
		box-shadow: 0px 5px 13px 1px rgba(216,216,216,0.26);
		@media ${device.laptop} {

		}
		
`;

	const CardContent = styled.div`
		display: flex;
		flex-direction: column;
		background-color: white;
		// min-height: 100px;
		border-radius: 0px 0px 16px 16px;
		padding: 10px;
		padding-left: 20px;
		color: ${props => props.theme.colors.black};

		@media ${device.laptop} {
			width: calc(100% - 10px);
		}
			
	`;
	const ImageContainer = styled.div`
		height: 150px;
		background-repeat: no-repeat;
		background-size: auto;
		border-radius: 16px 0px 0px 16px;
		@media ${device.laptop} {
			height: 150px;
		}
	`;

	const Image = styled.img`
		height: 150px;
		width: 150px;
		border-radius: 16px 0px 0px 16px;
		object-fit: cover;
		// object-position: 50% 0%
		@media ${device.laptop} {
			height: 150px;
		}
	`;
	const Title = styled.h4`
		font-size: 20px;
		font-weight: 600;
		@media ${device.laptop} {
			font-size: 14px !important;
		}

	`;

	const Price = styled.h1`
		font-size: 50px;
		font-weight:600;
		color: ${props => props.theme.colors.lightGray} !important;

	`;



	const Type = styled.p`

	`;


	const Quantity = styled.p`
		font.size: 14px;	
	`;

	const Tags = styled.p``;

	const Alert = styled.p`
		font-size: 12px;
		font-weight: 600;
		color: ${props => props.theme.colors.primary}
	`;
    return(
		<div>
	
			<Link to={`/article/${id}`}>
			<CardContainer>
				<ImageContainer>
					<Image src={`${image}`} />
				</ImageContainer>
				<CardContent>
					{/* <Tags>
						{}
					</Tags> */}
					<Title>
						{name}
					</Title>
					{/* <p style={{ 
						fontSize: "12px"}}>
						{description}
					</p> */}
					<Quantity style={{ 
						fontSize: "12px"}}>
						Myyntierä: {quantity}
					</Quantity>
					<Price >
						{price}
					</Price>
					<Type style={{ 
						fontSize: "12px"}}>
						/{type}
					</Type>
					<Alert>
						Rekisteröidy nähdäksesi tuotteen hinnat
					</Alert>
				</CardContent>
	
			</CardContainer>
				
			</Link>
		
		</div>
		
      
    );
};

CardListItem.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.any,
	children: PropTypes.any 
 };

export default CardListItem; 