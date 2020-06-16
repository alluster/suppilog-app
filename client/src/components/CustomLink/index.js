import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
	useLocation,
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink
  } from "react-router-dom";

function CustomLink({ props, children, to, color, activeColor }) {
	const location = useLocation();
	console.log(props)
	const Styled = styled.div`
		
		margin-right: 10px;
		color: ${color};
		${props => {
			if (location.pathname === to) return css`
				color: ${activeColor} !important;
				border-bottom: 3px solid ${activeColor}
			`;
		}};

	`

 

	return (
		<NavLink to={to}  >
			<Styled color={color} activeColor={activeColor}>
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