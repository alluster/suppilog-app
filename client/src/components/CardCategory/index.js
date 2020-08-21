import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {

	Link
  } from "react-router-dom";



const CardCategory = ({ to, image, title }) => {
	const CardContainer = styled.div `
	font-family: 'Open Sans'
	color: white;
	height: 140px;
	width: 140px;
	background-image: url(${image});
	background-size: cover;
	margin-right: 10px;
	border-radius: 5px;

		@media ${device.laptop} {
			width: 100%;
		}
		:last {
			margin-right: none
		}
`;

const CardContent = styled.div`
		background-color: rgb(219, 142, 65, .6);
		height: 140px;
		width: 100%;
		max-width: 140px;
		background-size: cover;
		display: flex;
		justify-content: center;
		flex-direction: column;

		color: white;
		border-radius: 5px;
		:hover {
			background-color: rgb(78, 24, 108, .6);

		}




`
    return(
        <Link to={to}>
			<CardContainer image={image} >
				<CardContent>
					<h4>{title}</h4>
				</CardContent>
			</CardContainer>
		</Link>
    );
};

CardCategory.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.any,
	children: PropTypes.any
 };

export default CardCategory;