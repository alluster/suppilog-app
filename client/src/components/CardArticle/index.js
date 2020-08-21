import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faCog, faPlus, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';

import {

	Link
  } from "react-router-dom";

import { device } from '../../device';


const CardArticle = ({ id, image, title, description, date }) => {
	const CardContainer = styled.div `
		font-family: 'Open Sans'
		height: 600px;
		background-color: white;
		margin-right: 10px;
		margin-top: 20px
		border-radius: 16px;
		padding: 10px;
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
		height: 250px;
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

    return(
        <Link to={`/article/${id}`}>
			<CardContainer>
				<ImageContainer>
					<Image src={image} />
				</ImageContainer>
				<CardContent>
					<p>{date}</p>
					<Title>
						{title}
					</Title>
					<p style={{ 
						fontSize: "12px", marginTop: "10px"}}>
						{description}
					</p>
					{/* <div style={{marginTop: "auto"}}>
						<FontAwesomeIcon 
							icon={faThumbsUp} 
							style={{
								display: "inline-block", 
								color: "#DFDFDF", 
								fontSize: "10px", 
								marginRight: "8px"}}
						/>
						<p style={{
								display: "inline-block", 
								fontSize: "10px", 
								fontWeight: "bold"}}>
							{likes}
						</p>
					</div> */}
				</CardContent>

			</CardContainer>
		</Link>
    );
};

CardArticle.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.any,
	children: PropTypes.any
 };

export default CardArticle;
