import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
	NavLink
  } from "react-router-dom";

function CustomLink({ children, to}) {
	const Styled = styled.div`
		margin-right: 10px;
		color: ${props => props.theme.colors.black};
		
	`

 

	return (
		<NavLink to={to}  >
			<Styled >
				{children}
			</Styled>
		</NavLink>
	
	)
}

CustomLink.propTypes = {
	children: PropTypes.any,
	to: PropTypes.any,
	theme: PropTypes.any,
	pathName: PropTypes.string,
	color: PropTypes.any,
	activeColor: PropTypes.any

};
export default CustomLink;