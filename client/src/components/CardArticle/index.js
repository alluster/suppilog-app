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
		width: 280px;
		font-family: 'Open Sans'
		height: 300px;
		background-color: white;
		margin-right: 10px;
		margin-top: 20px
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
		border-top: 1px solid #DFDFDF;
		border-radius: 0px 0px 5px 5px;
		padding: 15px 15px 15px 0px;
			
	`;
	const ImageContainer = styled.div`
		height: 200px;
		background-repeat: no-repeat;
		background-size: auto;
		border-radius: 5px 5px 0px 0px;

	`;

	const Image = styled.img`
		height: 200px;
		min-width: 100%;
		border-radius: 5px 5px 0px 0px;


	`;

    return(
        <Link to={`/article/${id}`}>
			<CardContainer>
				<ImageContainer>
					<Image src={image} />
				</ImageContainer>
				<CardContent>
					<p>{date}</p>
					<h4 style={{ 
							fontSize: "16px", 
							fontWeight: "600"}}>
						{title}
					</h4>
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