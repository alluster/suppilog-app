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
		flex-wrap: nowrap;
		overflow-x: auto;
		padding-bottom: 30px;
			@media ${device.laptop} {
				width: 100%;
			}
			
	`;


    return(
		<div children={children}>
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