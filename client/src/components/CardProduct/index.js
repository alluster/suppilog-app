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
		// margin-right: 10px;
		margin-top: 20px
		border-radius: 16px;
		padding: 10px;
		border: 1px solid #F4F4F4;
		-webkit-box-shadow: 0px 5px 13px 1px rgba(216,216,216,0.26); 
		box-shadow: 0px 5px 13px 1px rgba(216,216,216,0.26);
		@media ${device.laptop} {
			// width: 70vw;

		}
		
	`;

	const ImageContainer = styled.div`
		height: 300px;
		width: 100%;
		background-repeat: no-repeat;
		border-radius: 16px 16px 0px 0px;
		@media ${device.laptop} {
			height: 300px;
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
		height: 100px;
		border-radius: 0px 0px 16px 16px;
		padding: 10px;
		text-align: center;

		color: ${props => props.theme.colors.black};

		@media ${device.laptop} {
			width: calc(100% - 10px);
			padding: 5px;
		}
			
	`;
	
	const Title = styled.h4`
		font-size: 20px;
		font-weight: 600;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		@media ${device.laptop} {
			font-size: 18px !important;
			// margin-top: 20px;
		}

	`;


	const Quantity = styled.p`
		font-size: 14px;	
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	`;

    return(
		<div>
		{
			!data.photo_url === "no image" ? 
			""
			: 
			<Link 
			to={{ pathname: `/product/${data.name}`}} 
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
					<Quantity style={{ 
						fontSize: "12px"}}>
						{data.product_family_name}
					</Quantity>
					<Title>
						{data.name}
					</Title>
					{/* <p style={{ 
						fontSize: "12px"}}>
						{description}
					</p> */}
					
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