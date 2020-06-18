import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../context/Context';
import Button from '../../components/Button'
import Container from '../../components/Container'
import SubNavigation from '../../components/SubNavigation'
import Hero from '../../components/Hero'
import CardCategory from '../../components/CardCategory'
import CardProduct from '../../components/CardProduct'

import ItemRow from '../../components/ItemRow'

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link, 
	useLocation
  } from "react-router-dom";




const Category = () => {
	const location = useLocation();
	const context = useContext(AppContext)
	return(
		<div>

			<Container>
				{
					location.pathname  === "/tuotekategoriat" ?
						<ItemRow >
							<CardCategory title={"Juomat"} image={"/juomat.png"}  />
							<CardCategory title={"Kuumat juomat"} image={"/kuumat_juomat.png"}  />
							<CardCategory title={"Leipomo"} image={"/leipomo.png"}  />
							<CardCategory title={"Lähituottajat"} image={"/lahituottajat.png"}  />
							<CardCategory title={"Käyttötavarat"} image={"/kayttotavarat.png"}  />
							<CardCategory title={"Liha"} image={"/liha.png"}  />
						</ItemRow>
						:
						null
				}
				
				{
					location.pathname  === "/tuotteet" ?
						<ItemRow>
							<CardProduct title={"Cookie Cat"} description={"Ipsum lorem doloris maximus"} likes={"129"} image={"/kookie_cat.png"}/>
							<CardProduct title={"Govinda"} description={"Ipsum lorem doloris maximus"} likes={"129"} image={"/govinda.png"}/>
							<CardProduct title={"Garage Beer"} description={"Ipsum lorem doloris maximus"} likes={"129"} image={"/carage.png"}/>
							<CardProduct title={"Lifefood"} description={"Ipsum lorem moi ksks maximus"} likes={"129"} image={"/life_food.png"}/>
						</ItemRow>
					:
					null
				}
			
				
			</Container>
		</div>
		
	)
}

export default Category;
