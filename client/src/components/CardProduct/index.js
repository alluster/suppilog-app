import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import {

	Link
  } from "react-router-dom";

import { device } from '../../device';
import { AppContext } from '../../context/Context';


const CardProduct = ({data}) => {
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
			width: 70vw;

		}
		
	`;

	const ImageContainer = styled.div`
		height: 200px;
		width: 100%;
		background-repeat: no-repeat;
		border-radius: 16px 16px 0px 0px;
		@media ${device.laptop} {
			height: 150px;
		}
	`;

	const Image = styled.img`
		
		border-radius: 16px 16px 0px 0px;
		height: 100%;
		width: inherit;
		object-fit: cover;
		// // object-position: 50% 0%
		// @media ${device.laptop} {
		// 	height: 150px;
		// }
	`;

	const CardContent = styled.div`
		display: flex;
		flex-direction: column;

		background-color: white;
		height: 80px;
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

    return(
		<div>
		{
			!data.photo_url === "no image" ? 
			""
			: 
			<Link 
			to={{ pathname: `/product/${data._id}`}} 
			onClick={() => localStorage.setItem("product", JSON.stringify(data))}
			>
			<CardContainer>
				<ImageContainer>
					<Image src={data.photo_url || "./placeholder.png"} />
				</ImageContainer>
				<CardContent>
					{/* <Tags>
						{}
					</Tags> */}
					<Title>
						{data.name}
					</Title>
					{/* <p style={{ 
						fontSize: "12px"}}>
						{description}
					</p> */}
					<Quantity style={{ 
						fontSize: "12px"}}>
						{data.product_family_name}
					</Quantity>
					{/* <Price >
						0,00 €
					</Price> */}
					{/* <Button>{context.t('button.read-more')}</Button> */}
					{/* <Type style={{ 
						fontSize: "18px"}}>
						/{data.consumer_package_size}
					</Type> */}
			
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