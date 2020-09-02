import React, { useContext, useEffect, useRef } from 'react';
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
import Moment from 'react-moment';
import SearchBar from '../../components/SearchBar';
import Button from '../../components/Button';

const Row = styled.div`
	margin-top: 50px;
`
const StyledButton = styled(Button) `
	width: 100%;
	height: 50px;
	font-size: 20px;
`;
const Home = () => {
	const context = useContext(AppContext);

	useEffect(() => {
		context.i18n.changeLanguage(context.lang);
		window.scrollTo(0, 0)
		context.GetArticles()
		context.GetPageContent("5cs7nMQlogDj6T27B1YJIs", `${context.lang}`)
		
	}, [])

	const NumberCards = () => {
		if(context.pageContent.companyInNumbersCard) {
			return(
					context.pageContent.companyInNumbersCard.map((item, i) => {
									return(
										<CardNumber 
											key={i}
											icon="fa-box-open"
											ingress={item.fields.title} 
											number={item.fields.number} 
											title={item.fields.ingress} 
										/>

									)
								})
			)
		}
		else{
			return(
				""
			)
		}
	}
	return(
		<div>			
			
			<Hero 
				image={context.pageContent.bannerImage ?  context.pageContent.bannerImage.fields.file.url : "/suppilog-dinner.jpg"} 
				title={context.pageContent.title}
				ingress={context.pageContent.ingress}  
				

			>
			<StyledButton>{context.t('button.register')}</StyledButton>
			<p style={{color: "white", fontSize: "12px", fontWeight: 300}}>{context.t('notification.register')}</p>
			</Hero>
			<Container>
				<SearchBar />

			</Container>

			
			<ScrollAnimation animateIn="fadeIn">
				<Container>
				<Row>
					<ItemRow title={context.t('card.number.row-title')} >
						{NumberCards()}	
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
					button={true}
					buttonColor="#31004C"
					buttonText={context.t("button.buyers")}
					to="/buyers"

				>
				<p>Ostajayritykset tilaavat yhdellä rekisteröitymisellä haluamiaan tuotteita sadoilta eri myyjäyrityksiltä. Tilausprosessin tehostumisella valikoimahallinta helpottuu, sekä tuotteiden jatkotilaaminen on yksinkertaista</p>
				</BannerWithImage>
			</ScrollAnimation>
			{
				context.articles === []  ? 
				<Spinner />
				:
					<Container>
						<Row>
							<ItemRow title={context.t('card.article.row-title')} >

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
