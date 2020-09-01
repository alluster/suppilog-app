import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
	useLocation,
	NavLink
  } from "react-router-dom";

function CustomLink({ props, children, to, color, activeColor }) {
	const Styled = styled.div`
		margin-right: 10px;
		
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