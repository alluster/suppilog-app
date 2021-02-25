import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/Context';
import Container from '../../components/Container'
import Hero from '../../components/Hero';
import ItemRow from '../../components/ItemRow';
import CardNumber from '../../components/CardNumber';
import BannerWithImage from '../../components/BannerWithImage';
import BannerCentered from '../../components/BannerCentered';
import ScrollAnimation from 'react-animate-on-scroll';
import styled from 'styled-components';
import CardArticle from '../../components/CardArticle'
import SearchBar from '../../components/SearchBar';
import Button from '../../components/Button';
import { Row, Col } from 'react-flexbox-grid';
import Navigation from '../../components/Navigation';
import ProductModal from '../../components/ProductModal';
import CardPerson from '../../components/CardPerson';
import Markdown from '../../components/Markdown';

const StyledButton = styled(Button) `
	width: 100%;
	height: 50px;
	font-size: 20px;
`;

const ContentBlock = styled(Container)`
	margin-top: 50px;
	margin-bottom: 100px;
`;


const Text = styled.div `
	line-height: 30px !important;
	text-align: center;
	margin-left: 20px;
	margin-right: 20px;
	color: white;
`;

const Home = () => {
	const context = useContext(AppContext);
	useEffect(() => {
		context.i18n.changeLanguage(context.lang);
		window.scrollTo(0, 0)
		context.GetArticles()
		context.GetPageContent("63PEJ5YVRz4DvnEFMZJj3R", `${context.lang}`)

		// eslint-disable-next-line
	}, [])

	const NumberCards = () => {
		if(context.pageContent.companyInNumbersCards) {
			return(
				<ContentBlock>
					<h2>
						{context.t('card.number.row-title')}
					</h2> 
					<Row>
						{
							context.pageContent.companyInNumbersCards.map((item, i) => {
								if(item.fields)

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
								return(
									null
								)
							}
							)}
					</Row>
				</ContentBlock>

			)
		}
		else{
			return(
				""
			)
		}
	}
	const Articles = () => {
		if(context.pageContent.selectedBlogPosts) {
			return(
				<ContentBlock>
						<ItemRow title={context.t('card.article.row-title')} >
							{
								context.pageContent.selectedBlogPosts.slice(0,3).map((item, i) => {
									if(item.fields)

									return(
										<CardArticle
											id={item.sys.id}
											key={i}
											image={item.fields.thumbImage.fields.file.url}
											title={item.fields.title }
											description={item.fields.description}
										/>	
									)
									return(
										null
									)
									
								})
							}
						</ItemRow>
				</ContentBlock>
			)
		}
		else{
			return(
				""
			)
		}
	}
	const PersonCards = () => {
		if(context.pageContent.personCards) {
			return(
				<ContentBlock>
					<ItemRow title={context.t('card.person.row-title')}>
						{
							context.pageContent.personCards.map((item, i) => {
								if(item.fields)
								return(
									<CardPerson
										key={i}
										image={item.fields.image.fields.file.url && item.fields.image.fields.file.url }
										name={item.fields.name }
										description={item.fields.description}
										phone={item.fields.phone }
										email={item.fields.email }
										position={item.fields.position}

									/>
								)
								
									return(
										null
									)
								
							})
						}	
					</ItemRow>
				</ContentBlock>
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
					if(item.fields)

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
					return(
						null
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
	const Testimonials = () => {
		if(context.pageContent.testimonials) {
			return(
				context.pageContent.testimonials.map((item, i) => {
					if(item.fields)

					return(
						<BannerCentered
							key={i}
							title={item.fields.body}
							ingress={item.fields.name}
							
						/>

					)
					return(
						null
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
	const MarkdownContent = () => {
		if(context.pageContent.content) {
			return(
				<ContentBlock>
					<Markdown source={context.pageContent.content}/>
				</ContentBlock>
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
			<ProductModal />
			<Navigation />
			<Hero 
				image={context.pageContent.image ?  context.pageContent.image.fields.file.url : "/suppilog-dinner.jpg"} 
				title={context.pageContent.heroTitle}
				ingress={context.pageContent.title}  
			>
				<StyledButton onClick={() => window.location.assign('https://secure.suppilog.fi/kayttajat/rekisteroidy')} >{context.t('button.register')}</StyledButton>
				<Text style={{display: "inline-block"}}>{context.t('button.or')}</Text>
				<StyledButton 
					onClick={() => window.location.assign('https://secure.suppilog.fi/kayttajat/kirjaudu')} 
					style={{display: "inline-block"}} color={"transparent"}
				>
					{context.t('button.sign-in')}			 
				</StyledButton>   
			</Hero>
			<Container>
				<SearchBar />
			</Container>
			<ScrollAnimation animateIn="fadeIn">
				{MarkdownContent()}
			</ScrollAnimation>
				{Banners()}
			<ScrollAnimation animateIn="fadeIn">
				{Testimonials()}
			</ScrollAnimation>
			<ScrollAnimation animateIn="fadeIn">
				{NumberCards()}	
			</ScrollAnimation>
			<ScrollAnimation animateIn="fadeIn">
				{PersonCards()}	
			</ScrollAnimation>
			<ScrollAnimation animateIn="fadeIn">
				{Articles()}
			</ScrollAnimation>
		</div>
		
	)
}

export default Home;
