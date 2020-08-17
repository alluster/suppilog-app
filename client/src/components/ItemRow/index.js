import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	Link
  } from "react-router-dom";
  import { device } from '../../device';



const ItemRow = ({ title, children }) => {
	const Container = styled.div `
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-content: stretch;
		margin-bottom: 30px;
		min-height: 100%;
			@media ${device.laptop} {
				width: 100%;
			}
			
	`;
			const Title = styled.h3`
				margin-top: 60px;
			`;

    return(
		<div children={children}>
			<Title>{title}</Title>
			<Container  >
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