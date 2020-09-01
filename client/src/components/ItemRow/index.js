import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from '../../device';



const ItemRow = ({ children, title }) => {
	const Container = styled.div `
		display: flex;
		flex-direction: row;
		flex-wrap: no-wrap;
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
		padding-bottom: 30px;
			@media ${device.laptop} {
				width: 100%;
			}
			
	`;
const Title = styled.h2`
	margin-bottom: 30px;

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