import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/Context';
import Container from '../../components/Container'
import Hero from '../../components/Hero';
import ItemRow from '../../components/ItemRow';
import CardNumber from '../../components/CardNumber';
import Banner from '../../components/Banner';
import BannerWithImage from '../../components/BannerWithImage';
import ScrollAnimation from 'react-animate-on-scroll';
import styled from 'styled-components';
import CardArticle from '../../components/CardArticle'
import Spinner from '../../components/Spinner';
import Button from '../../components/Button';
import Cookies from 'universal-cookie';
import { faTruck, faBoxOpen, faSmile, faPlus, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import Moment from 'react-moment';
import CardProduct from '../../components/CardProduct';
import SearchBar from '../../components/SearchBar';
import GDPR from '../../components/GDPR';

const Row = styled.div`
	margin-top: 50px;
`


const Home = () => {
	const context = useContext(AppContext)

	useEffect(() => {
		context.i18n.changeLanguage(context.lang);
		window.scrollTo(0, 0)
		context.GetArticles()

	}, [])
	return(
		<div>			
			
			<Hero 
				image={"/suppilog-dinner.jpg"} 
				title={context.t('home.hero.title')}
				ingress={context.t('home.hero.ingress')}  
				
			/>
			<Container>
				<SearchBar />

			</Container>

			
			<ScrollAnimation animateIn="fadeIn">
				<Container>
				<Row>
					<h2>{context.t('card.number.row-title')}</h2>

						<ItemRow>

							<CardNumber icon={faTruck} ingress="Tilauksia" number={90665} title="Palvelussamme tehtyä yritysten välistä tukkutilausta" />
							<CardNumber icon={faBoxOpen} ingress="Tuotteita" number={76780} title="Tilaa yli tukkutuotetta kaikista parhaimmilla toimitusehdoilla ja hinnoilla"c/>
							<CardNumber icon={faSmile} ingress="Käyttäjiä" number={56789} title="yritystä käyttää Suppilogin digitaalista tukkukaupankäynnin alustaa myymiseen ja ostamiseen"/>
						</ItemRow>
				</Row>
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
					button={true}
					buttonColor="#31004C"
					buttonText={context.t("button.buyers")}
					to="/buyers"

				/>
			</ScrollAnimation>
			{
				context.articles === []  ? 
				<Spinner />
				:
					<Container>
					<Row>
						<h2>{context.t('card.article.row-title')}</h2>
						<ItemRow title="Suppiblog">
							{
								context.articles.slice(0,3).map((item, i) => {
											const ConvertDate = () => {
										return( 
											<Moment
												format="DD/MM/YYYY"
											>
												{item.sys.createdAt}
											</Moment>
										)}
										
								
									
									return(
										
										<CardArticle
											id={item.sys.id}
											key={i}
											image={item.fields.image.fields.file.url}
											title={item.fields.title }
											date={ConvertDate()}
											description={item.fields.description}
										/>
									)
								})
							}	
						</ItemRow>
						</Row>
					</Container>
				
			}
		</div>
		
	)
}

export default Home;
