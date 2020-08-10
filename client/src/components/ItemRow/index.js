import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	Link
  } from "react-router-dom";



const ItemRow = ({ title, children }) => {
	const Container = styled.div `
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-content: stretch;
		background-size: cover;
		margin-top: 30px;
		margin-bottom: 30px;
			@media (max-width: ${props => props.theme.screenSize.tablet}) {
				width: 100%;
			}
			
	`;

    return(
		<div>
			<h3>{title}</h3>
			<Container children={children} >
				{children}
			</Container>
		</div>

    );
};

ItemRow.propTypes = {
	title: PropTypes.string,
	children: PropTypes.any
 };

export default ItemRow;