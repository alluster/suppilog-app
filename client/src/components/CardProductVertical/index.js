import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Accordion from '../Accordion';
import { Row, Col } from 'react-flexbox-grid';
import {

	Link
  } from "react-router-dom";

import { device } from '../../device';
import { AppContext } from '../../context/Context';
import ProductModal from '../ProductModal';


const CardProductVertical = ({data}) => {
	const context = useContext(AppContext)

	const CardContainer = styled.div `
		height: 100px;
		width: 100%;
		border: 1px solid #F4F4F4;
		background-color: white;
		border-radius: 16px 16px 16px 16px;
		margin-top: 10px;
		margin-bottom: 10px;
		-webkit-box-shadow: 0px 5px 13px 1px rgba(216,216,216,0.26); 
		box-shadow: 0px 5px 13px 1px rgba(216,216,216,0.26);
		:hover {
			cursor: pointer
		}
		@media ${device.laptop} {
			// width: 70vw;

		}
		
	`;

	const ImageContainer = styled.div`
		height: 150px;
		width: 100%;
		background-repeat: no-repeat;
		border-radius: 16px 0px 0px 16px;
		background-size: cover;

	`;

	const Image = styled.img`
		height: 100px;
		width: 100%;
		background-repeat: no-repeat;
		border-radius: 16px 0px 0px 16px;
		object-fit: cover;
		object-position: 50% 50%;
		// @media ${device.laptop} {
		// 	height: 150px;
		// }
	`;

	const CardContent = styled.div`
		display: flex;
		flex-direction: column;
		text-align: left;
		width: 100%;
		color: ${props => props.theme.colors.black};

		// @media ${device.laptop} {
		// 	width: calc(100% - 10px);
		// 	padding: 5px;
		// }
			
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
const handleClick = () => {
	context.setProduct(	data)
	localStorage.setItem("product", JSON.stringify(data)) 
	context.setModalOpen(true)

}
    return(
		<div 			
			onClick={handleClick}
		>
		{
			!data.photo_url === "no image" ? 
			""
			: 
			// <Link 
			// to={{ pathname: `/product/${data.name}`}} 
			// >
			<CardContainer>
				<Row>


					<Col xs={5} md={3}>
							<Image src={data.photo_url || "./placeholder.png"} />
					</Col>
					<Col xs={7} mad={9}>
						<CardContent>
							<Quantity style={{ 
								fontSize: "12px"}}>
								{data.product_family_name}
							</Quantity>
							<Title>
								{data.name}
							</Title>
							{/* <Accordion title={context.t('page.product.accordion-title')} >
								<p>{context.t('product.consumer_package_size')}</p>
								<h3>{data.consumer_package_size},</h3>
								<p>{context.t('product.sales_unit_size')}: </p>
								<h3>{data.sales_unit_size}</h3>
							</Accordion> 
					*/}
						</CardContent>
					</Col>
				
				</Row>

			</CardContainer>
				
			// </Link>
		}
		</div>
		
      
    );
};

CardProductVertical.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.any,
	children: PropTypes.any 
 };

export default CardProductVertical; 