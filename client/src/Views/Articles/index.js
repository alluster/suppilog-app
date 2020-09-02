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

const Articles = () => {
	const context = useContext(AppContext)
	const Card = styled(CardArticle)`
	@media ${device.laptop} {
		width: 90% !important;

	}
	`;

	
	useEffect(() => {
			window.scrollTo(0, 0)
			context.GetArticles()
			context.i18n.changeLanguage(context.lang);

	}, [])
	return(
		<div>
			<HeroSmall 
			title={context.t('page.articles.hero.title')}
			image="/suppilog-dinner.jpg"
			ingress={context.t('page.articles.hero.ingress')}

			/>
			{
				context.articles === []  ? 
				<Spinner />
				:
				<Container>
					<Row>
							{
								context.articles.map((item, i) => {
											const ConvertDate = () => {
										return( 
											<Moment
												format="DD/MM/YYYY"
											>
												{item.sys.createdAt}
											</Moment>
										)}
										
								
									
									return(
										<Col xs={12} md={4}>

											<Card
												id={item.sys.id}
												key={i}
												image={item.fields.image.fields.file.url}
												title={item.fields.title }
												date={ConvertDate()}
												description={item.fields.description}
											/>
										</Col>
									)
								})
							}	
					</Row>
				</Container>
					
				
			}
		</div>
		
	)
}

export default Articles;
