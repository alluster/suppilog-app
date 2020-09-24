import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/Context';
import Container from '../../components/Container'
import Hero from '../../components/Hero';
import ItemRow from '../../components/ItemRow';
import Markdown from '../../components/Markdown';
import styled from 'styled-components';
import CardArticle from '../../components/CardArticle';
import Moment from 'react-moment';
import {
	useParams
  } from "react-router-dom";
import Navigation from '../../components/Navigation';
import HeroSmall from '../../components/HeroSmall';




const Article = () => {
	const [article, setArticle] = useState({ image: "", title:""})
	let { id } = useParams();
	const context = useContext(AppContext)
	
	useEffect(() => {
			window.scrollTo(0, 0)
			context.GetArticle(id)
			context.GetArticles()
	
	}, [ ])
	const Content = styled(Container) `
		margin-top: 40px;
		margin-bottom: 100px;
	`;
	
	return(
		
		
		<div>
			<Navigation />
			<HeroSmall
				image={context.article.image ?  context.article.image.fields.file.url : "" } 
				title={context.article.title} 
			/>
			<Content>
				<Markdown 
					source={context.article.body}
				/>
			</Content>
			<Container>
				<ItemRow title="Suppiblog">
					{
						context.articles.slice(0,3).map((item, i) => {
						
								
						
							
							return(
								
								<CardArticle
									id={item.sys.id}
									key={i}
									image={item.fields.image.fields.file.url}
									title={item.fields.title }
									description={item.fields.description}
								/>
							)
						})
					}	
				</ItemRow>
			
			</Container>
			
			
		</div>
		
	)
}

export default Article;
