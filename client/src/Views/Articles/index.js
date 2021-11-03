import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/Context';
import Container from '../../components/Container'
import CardArticle from '../../components/CardArticle'
import HeroSmall from '../../components/HeroSmall';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components'
import Navigation from '../../components/Navigation';
import Spinner from '../../components/Spinner';
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
		if (context.articles) {
			return (
				<ContentBlock>
					<Row title={context.t('card.article.row-title')} >
						{
							!context.loading ?
								(
									context.articles.map((item, i) => {
										return (
											<Col key={i} sm={12} md={4}>
												<Card
													id={item.sys.id}
													image={item.fields.thumbImage.fields.file.url}
													title={item.fields.title}
													description={item.fields.description}
												/>
											</Col>

										)

									})
								) :
								<Spinner />

						}
					</Row>

				</ContentBlock>
			)
		}
		else {
			return (
				""
			)
		}
	}
	useEffect(() => {
		context.i18n.changeLanguage(context.lang);
		window.scrollTo(0, 0)
		context.GetArticles(context.lang)

		// eslint-disable-next-line
	}, [])
	return (
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
