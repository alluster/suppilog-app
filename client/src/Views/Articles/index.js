import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/Context';
import Container from '../../components/Container'
import ItemRow from '../../components/ItemRow';
import CardArticle from '../../components/CardArticle'
import Spinner from '../../components/Spinner';
import Moment from 'react-moment';
import HeroSmall from '../../components/HeroSmall';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components'
import { device } from '../../device';
import Navigation from '../../components/Navigation';

const Articles = () => {
	const context = useContext(AppContext)
	const ContentBlock = styled(Container)`
		margin-top: 50px;
		margin-bottom: 100px;
	`;
	const Card = styled(CardArticle)`
		width: auto !important;
	`;


	const Articles = () => {
		if(context.articles) {
			return(
				<ContentBlock>
						<Row title={context.t('card.article.row-title')} >
							{
								context.articles.map((item, i) => {
									return(
										<Col key={i} sm={12} md={4}>
										<Card
											id={item.sys.id}
											image={item.fields.thumbImage.fields.file.url}
											title={item.fields.title }
											description={item.fields.description}
										/>	
										</Col>
									
									)
									
								})
							}
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
	useEffect(() => {
		context.i18n.changeLanguage(context.lang);
		window.scrollTo(0, 0)
		context.GetArticles()	
		context.GetPageContent("6pyem7N53mBVoeSHpcpUpn", `${context.lang}`)
	
		
	}, [])
	return(
		<div>
			<Navigation />
			<HeroSmall 
				title={context.t('page.articles.hero.title')}
				image="/suppilog-dinner.jpg"
				ingress={context.t('page.articles.hero.ingress')}

			/>
			{Articles()}
		</div>
		
	)
}

export default Articles;
