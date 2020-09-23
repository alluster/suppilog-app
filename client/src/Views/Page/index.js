import React, { useContext, useEffect } from 'react';
import {
	useParams
} from "react-router-dom";
import { AppContext } from '../../context/Context';
import Container from '../../components/Container'
import HeroSmall from '../../components/HeroSmall';
import ItemRow from '../../components/ItemRow';
import CardNumber from '../../components/CardNumber';
import BannerWithImage from '../../components/BannerWithImage';
import BannerCentered from '../../components/BannerCentered';
import ScrollAnimation from 'react-animate-on-scroll';
import styled from 'styled-components';
import CardArticle from '../../components/CardArticle'
import Spinner from '../../components/Spinner';
import { Row, Col } from 'react-flexbox-grid';
import Navigation from '../../components/Navigation';
import CardPerson from '../../components/CardPerson';
import Markdown from '../../components/Markdown';



const Page = () => {
	const context = useContext(AppContext)

	const Content = styled.div`
		min-height: 100vh;
	`;
	const ContentBlock = styled(Container)`
		margin-top: 50px;
		margin-bottom: 100px;
	`;
	let { id } = useParams();

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
								return(
									<CardPerson
										key={i}
										image={item.fields.image.fields.file.url}
										name={item.fields.name }
										description={item.fields.description}
										phone={item.fields.phone }
										email={item.fields.email }
										position={item.fields.position}

									/>
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
	const Testimonials = () => {
		if(context.pageContent.testimonials) {
			return(
				context.pageContent.testimonials.map((item, i) => {
					return(
						<BannerCentered
							key={i}
							title={item.fields.body}
							ingress={item.fields.name}
							
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
	useEffect(() => {
		let mounted = true;
		if(mounted){
			window.scrollTo(0, 0)
			context.GetPersons()
			context.GetPageContent(`${id}`, `${context.lang}`)
		}
		return () => mounted = false;
		
	}, [id])
	return(

		<div>
			<Navigation />
			{ 
				!context.loading ? 
					<div>
						<HeroSmall 
							image={context.pageContent.image ? context.pageContent.image.fields.file.url : ""} 
							title={context.pageContent.name} 
							ingress={context.pageContent.title}  
						/>
						<Content>
							<ScrollAnimation animateIn="fadeIn">
								{MarkdownContent()}
							</ScrollAnimation>
							<ScrollAnimation animateIn="fadeIn">
								{Testimonials()}
							</ScrollAnimation>
							<ContentBlock>
								<ScrollAnimation animateIn="fadeIn">
									{Banners()}
								</ScrollAnimation>
							</ContentBlock>
							<ContentBlock>
							<ScrollAnimation animateIn="fadeIn">
								{PersonCards()}
							</ScrollAnimation>
							</ContentBlock>
							<ContentBlock>
								<ScrollAnimation animateIn="fadeIn">
									{Articles()}
								</ScrollAnimation>
							</ContentBlock>
						</Content>

					</div>
				:
					<Spinner />
			}
		</div>
		
	)
}

export default Page;
