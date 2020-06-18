import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch, faCog, faPlus, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import {

	Link
  } from "react-router-dom";



const CardProduct = ({ to, image, title, description, likes }) => {
	const CardContainer = styled.div `
		font-family: 'Open Sans'
		height: 300px;
		background-color: white;
		margin-right: 10px;
		margin-top: 10px
		border-radius: 5px;
		border: 1px solid #DFDFDF;
		box-shadow:
			2.8px 0 2.2px rgba(0, 0, 0, 0.034),
			6.7px 0 5.3px rgba(0, 0, 0, 0.048),
			;
		@media (max-width: ${props => props.theme.screenSize.tablet}) {
			width: 100%;
		}
		
`;

const CardContent = styled.div`
		display: flex;
		flex-direction: column;
		background-color: white;
		height: 100px;
		border-top: 1px solid #DFDFDF;
		border-radius: 0px 0px 5px 5px;
		padding: 10px;
		color: ${props => props.theme.colors.primary}
`
const ImageContainer = styled.div`
		background-image: url(${image});
		background-size: cover;
		height: 200px;
		border-radius: 5px 5px 0px 0px;

`
    return(
        <Link to={to}>
		<CardContainer>
			<ImageContainer image={image}/>
			<CardContent>
				<h4 style={{ 
						fontSize: "20px", 
						fontWeight: "400"}}>
					{title}
				</h4>
				<p style={{ 
					fontSize: "12px"}}>
					{description}
				</p>
				<div style={{marginTop: "auto"}}>
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
				</div>
			</CardContent>

		</CardContainer>
			
		</Link>
    );
};

CardProduct.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.any,
	children: PropTypes.any
 };

export default CardProduct;