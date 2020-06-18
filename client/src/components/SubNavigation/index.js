import React from 'react';
import styled from 'styled-components';
import CustomLink from '../CustomLink';
import Gx from '@tgrx/gx';
import PropTypes from 'prop-types';
import Container from '../../components/Container';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";


const NavContainer = styled.div`
	text-align: center;
	line-height: 50px;
	min-width: 100%;
	height: 100px;
	top: 0;
	background-color: white;


`;


const Text = styled.div `
	line-height: 50px !important;
	text-align: center;
	margin-left: 20px;
	margin-right: 20px;
	margin-top: 30px;
	font-family: "Roboto Slab";
	font-size: 14px;


`







const SubNavigation = ({ className }) => {

    return(
		<NavContainer className={className} >

		<Container>
		<Gx col={2} breakpoint={100}>
				<CustomLink to="/tuotteet" color="#DB8E41" activeColor="#4E186C">
					<Text style={{display: "inline-block"}}>Tuotteet</Text>
				</CustomLink>
			</Gx>
			
			<Gx col={2} breakpoint={100}>
			<CustomLink to={"/myyjät"} color={"#DB8E41"} activeColor={"#4E186C"}>
					<Text style={{display: "inline-block"}}>Myyjät</Text>
				</CustomLink>
			</Gx>
			<Gx col={2} breakpoint={100}>
			<CustomLink to={"/tuotekategoriat"} color={"#DB8E41"} activeColor={"#4E186C"}>
					<Text style={{display: "inline-block"}}>Tuotegategoriat</Text>
				</CustomLink>
			</Gx>
			<Gx col={2} breakpoint={100}>
			<CustomLink to={"/toimitustavat"} color={"#DB8E41"} activeColor={"#4E186C"}>
					<Text style={{display: "inline-block"}}>Toimitustavat</Text>
				</CustomLink>
			</Gx>
			<Gx col={2} breakpoint={100}>
			<CustomLink to={"/viivakoodilla"} color={"#DB8E41"} activeColor={"#4E186C"}>
					<Text style={{display: "inline-block"}}>Viivakoodilla</Text>
				</CustomLink>
			</Gx>
			<Gx col={2} breakpoint={100}>
			<CustomLink to={"/muu"} color={"#DB8E41"} activeColor={"#4E186C"}>
					<Text style={{display: "inline-block"}}>Muu</Text>
				</CustomLink>
			</Gx>
			
		</Container>
			
			
		</NavContainer>        
    );
};
SubNavigation.propTypes = {
    className: PropTypes.string
};

export default SubNavigation;