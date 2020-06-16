import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../context/Context';
import Button from '../../components/Button'
import Container from '../../components/Container'

import Hero from '../../components/Hero'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";




const Home = () => {
	const context = useContext(AppContext)
	return(
		<div>
			<Hero image={"/suppilog-dinner.jpg"} 
				title={"Digitaalinen kauppapaikka"} 
				ingress={"Suppilogosta löydät kaikki tarvitsemasi tuotteet"}  />
			<Container>
				<h1>Home</h1>
			</Container>
		</div>
		
	)
}

export default Home;
