import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/Context';
import Container from '../../components/Container'
import HeroSmall from '../../components/HeroSmall';
import ItemRow from '../../components/ItemRow';
import CardNumber from '../../components/CardNumber';
import Banner from '../../components/Banner';
import BannerWithImage from '../../components/BannerWithImage';
import BannerCentered from '../../components/BannerCentered';
import ScrollAnimation from 'react-animate-on-scroll';
import CardPerson from '../../components/CardPerson'
import Spinner from '../../components/Spinner';
import Button from '../../components/Button';
import Markdown from '../../components/Markdown';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
  import Moment from 'react-moment';




const Sellers = () => {
	const context = useContext(AppContext)
	console.log(context.pageContent)
	console.log(context.lang)

	useEffect(() => {
		window.scrollTo(0, 0)
		context.GetPageContent("0KgwW0poD0KoWgQvWeu1j", `${context.lang}`)
		
	}, [])
	return(
		<div>

			<HeroSmall 
				image={context.pageContent.image ? context.pageContent.image.fields.file.url : ""} 
				title={context.pageContent.name} 
				ingress={context.pageContent.title}  
			/>
		
			<ScrollAnimation animateIn="fadeIn">

							<Markdown source={context.pageContent.content}/>

			</ScrollAnimation>
			
			<ScrollAnimation animateIn="fadeIn">
				<Banner />
			</ScrollAnimation>

		</div>
		
	)
}

export default Sellers;
