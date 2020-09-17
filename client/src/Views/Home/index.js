import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/Context';
import Container from '../../components/Container'
import Hero from '../../components/Hero';
import ItemRow from '../../components/ItemRow';
import CardNumber from '../../components/CardNumber';
import BannerWithImage from '../../components/BannerWithImage';
import ScrollAnimation from 'react-animate-on-scroll';
import styled from 'styled-components';
import CardArticle from '../../components/CardArticle'
import Spinner from '../../components/Spinner';
import SearchBar from '../../components/SearchBar';
import Button from '../../components/Button';
import { Row, Col } from 'react-flexbox-grid';
import Navigation from '../../components/Navigation';

const StyledButton = styled(Button) `
	width: 100%;
	height: 50px;
	font-size: 20px;
`;

const CardRow = styled.div`
	margin-top: 50px;
	margin-bottom: 50px;
`;

const Home = () => {
	const context = useContext(AppContext);

	useEffect(() => {
		context.i18n.changeLanguage(context.lang);
		window.scrollTo(0, 0)
		context.GetArticles()
		context.GetPageContent("63PEJ5YVRz4DvnEFMZJj3R", `${context.lang}`)
		
	}, [])
	const NumberCards = () => {
		if(context.pageContent.companyInNumbersCards) {
			return(
					context.pageContent.companyInNumbersCards.map((item, i) => {
									return(
										<Col key={i} xs={12} md={4}>
											<CardNumber 
									
												icon={item.fields.icon.fields.file.url}
												ingress={item.fields.title} 
												number={item.fields.number} 
												title={item.fields.ingress} 
											/>
										</Col> 

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
	const Banners = () => {
		if(context.pageContent.banners) {
			return(
				context.pageContent.banners.map((item, i) => {
					return(
						<BannerWithImage
							key={i}
							title={item.fields.title}
							image={item.fields.image.fields.file.url}
							ingress={item.fields.ingress}
							button={true}
							buttonColor="#31004C"
							buttonText={item.fields.buttonText}
							to={`/page/${item.fields.buttonLink}`}
						>
							<p>{item.fields.body}</p>

						</BannerWithImage>

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
			<Navigation />

			<Hero 
				image={context.pageContent.image ?  context.pageContent.image.fields.file.url : "/suppilog-dinner.jpg"} 
				title={context.pageContent.heroTitle}
				ingress={context.pageContent.title}  
			>
				<StyledButton onClick={() => window.location.assign('https://secure.suppilog.fi/kayttajat/rekisteroidy')} >{context.t('button.register')}</StyledButton>
				<p style={{color: "white", fontSize: "12px", fontWeight: 300}}>{context.t('notification.register')}</p>
			</Hero>
			<Container>
				<SearchBar />
			</Container>
				{Banners()}
			<ScrollAnimation animateIn="fadeIn">
			<CardRow>
				<Container>
					<h2>
						{context.t('card.number.row-title')}
					</h2> 
					<Row>
						{NumberCards()}	
					</Row>
				</Container>
			</CardRow>
			</ScrollAnimation>
		
				{
					context.articles === []  ? 
					<Spinner />
					:
						<Container>
							<CardRow>
								<ItemRow title={context.t('card.article.row-title')} >
									{
										context.articles.slice(0,3).map((item, i) => {
											return(
												<CardArticle
													id={item.sys.id}
													key={i}
													image={item.fields.thumbImage.fields.file.url}
													title={item.fields.title }
													description={item.fields.description}
												/>
											)
										})
									}	
								</ItemRow>
							</CardRow>
						</Container>
					
				}
		</div>
		
	)
}

export default Home;
