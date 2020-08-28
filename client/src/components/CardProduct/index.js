import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch, faCog, faPlus, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import {

	Link
  } from "react-router-dom";

import { device } from '../../device';
import { AppContext } from '../../context/Context';


const CardProduct = ({ id, image, name, description, price, type, quantity, res }) => {
	const context = useContext(AppContext)

	const CardContainer = styled.div `
		font-family: 'Open Sans'
		min-height: 100%;
		min-width: 270px;
		background-color: white;
		margin-right: 10px;
		margin-top: 20px
		border-radius: 16px;
		padding: 10px;
		padding-bottom: 40px;
		border: 1px solid #F4F4F4;
		-webkit-box-shadow: 0px 5px 13px 1px rgba(216,216,216,0.26); 
		box-shadow: 0px 5px 13px 1px rgba(216,216,216,0.26);
		@media ${device.laptop} {
			width: 80vw;

		}
		
	`;

	const ImageContainer = styled.div`
		height: 300px;
		background-repeat: no-repeat;
		background-size: auto;
		border-radius: 16px 16px 0px 0px;
		@media ${device.laptop} {
			height: 150px;
		}
	`;

	const Image = styled.img`
		height: 300px;
		min-width: 100%;
		border-radius: 16px 16px 0px 0px;
		object-fit: cover;
		// object-position: 50% 0%
		@media ${device.laptop} {
			height: 150px;
		}
	`;

	const CardContent = styled.div`
		display: flex;
		flex-direction: column;
		background-color: white;
		height: 200px;
		border-radius: 0px 0px 16px 16px;
		padding: 10px;

		color: ${props => props.theme.colors.black};

		@media ${device.laptop} {
			width: calc(100% - 10px);
			padding: 5px;
		}
			
	`;
	
	const Title = styled.h4`
		font-size: 20px;
		font-weight: 600;
		@media ${device.laptop} {
			font-size: 22px !important;
			margin-top: 20px;
		}

	`;

	const Price = styled.h1`
		font-size: 50px;
		font-weight:600;
		color: ${props => props.theme.colors.lightGray} ;
		-webkit-text-fill-color: ${props => props.theme.colors.lightGray};

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
		color: ${props => props.theme.colors.primary};
		-webkit-text-fill-color: ${props => props.theme.colors.lightGray};
	`;
    return(
		<div>
		{
			image === "no image" ? 
			""
			: 
			<Link to={`/product/${id}/${image}/${name}`} >
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
						{context.t('card.product.quantity')} {quantity}
					</Quantity>
					<Price >
						0,00 €
					</Price>
					
					<Type style={{ 
						fontSize: "18px"}}>
						/{type}
					</Type>
			
				</CardContent>
				
			</CardContainer>
				
			</Link>
		}
		</div>
		
      
    );
};

CardProduct.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.any,
	children: PropTypes.any 
 };

export default CardProduct; 