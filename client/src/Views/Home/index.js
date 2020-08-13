import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/Context';
import Container from '../../components/Container'
import Hero from '../../components/Hero';
import ItemRow from '../../components/ItemRow';
import CardNumber from '../../components/CardNumber';
import Banner from '../../components/Banner';
import BannerWithImage from '../../components/BannerWithImage';
import ScrollAnimation from 'react-animate-on-scroll';
import CardProduct from '../../components/CardProduct'
import Spinner from '../../components/Spinner';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";




const Home = () => {
	const context = useContext(AppContext)
	useEffect(() => {
		window.scrollTo(0, 0)
		context.GetArticles()
		
	}, [])
	return(
		<div>

			<Hero 
				image={"/suppilog-dinner.jpg"} 
				title={"Kaikki tarvitsemasi tuotteet digitaalisessa palvelussamme"} 
				ingress={"Uusi tapa hoitaa tukkuostaminen"}  
				searchBar
			/>
			<ScrollAnimation animateIn="fadeIn">
				<Container>
					<ItemRow>
						<CardNumber ingress="Suppilogissa on tehty jo yli" number={90665} title="yritystenvälistä tukkutilausta" />
						<CardNumber ingress="Tilaa yli" number={76780} title="tukkutuotetta kaikista parhaimmilla toimitusehdoilla ja hinnoilla"c/>
						<CardNumber ingress="Yli" number={56789} title="yritystä käyttää Suppilogin digitaalista tukkukaupankäynnin alustaa myymiseen ja ostamiseen"/>

					</ItemRow>
				</Container>
			</ScrollAnimation>
			<ScrollAnimation animateIn="fadeIn">

				<Banner />
			</ScrollAnimation>
			<ScrollAnimation animateIn="fadeIn">

				<BannerWithImage 
					title="Tehosta ostamista ja
					säästä aikaa"
					image={"/app-image.png"}
					ingress="Yhdellä rekisteröitymisellä tuotteita sadoilta eri myyjäyrityksiltä."
					body="Ostajayritykset tilaavat yhdellä rekisteröitymisellä haluamiaan tuotteita sadoilta eri myyjäyrityksiltä. Tilausprosessin tehostumisella valikoimahallinta helpottuu, sekä tuotteiden jatkotilaaminen on yksinkertaista"
				/>
			</ScrollAnimation>
			{
				context.articles === []  ? 
				<Spinner />
				:
					<Container>
						<ItemRow title="Suppiblog">
							{
								context.articles.map((item, i) => {
									return(
										<CardProduct 
											id={item.sys.id}
											key={i}
											image={item.fields.image.fields.file.url}
											title={item.fields.title }
										/>
									)
								})
							}	
						</ItemRow>
					</Container>
				
			}
		</div>
		
	)
}

export default Home;
