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
import Button from '../../components/Button';
import {CopyToClipboard} from 'react-copy-to-clipboard';



const StyledButton = styled(Button) `
	width: 100%;
	height: 50px;
	font-size: 20px;
`;


const Article = (props) => {
	const [article, setArticle] = useState({description: "helloo"})
	const [og, setOg] = useState("")
	let { id } = useParams();
	const context = useContext(AppContext)
	
	useEffect(()  => {
		context.i18n.changeLanguage(context.lang);	
		window.scrollTo(0, 0)
		context.GetArticle(id)
		context.GetArticles()

		// GetOgTag()
	
	}, [id])
	const Content = styled(Container) `
		margin-top: 40px;
		margin-bottom: 100px;
	`;
	// console.log(article)
	// let infoForOg = {
	// 	image: article.image.fields.file.url || 'images.ctfassets.net/d941dswhbyyn/2i5w1xlHSMI0lttLOmORr0/d91a9d643e569575cbbd272febe19572/dinner.jpeg',
	// 	url: window.location.href,
	// 	description: article.description || "Read latest news and articles",
	// 	title: context.article.title || "Suppilog oy"
	// }
	// const GetOgTag = async () => {

	// 	fetch("https://ogtag.me/1e6b0cb9c0cb5f0de1aaa9c468cf77bd" , {
	// 		method : "POST" ,
	// 		body : await JSON.stringify(infoForOg) 

	// 	})
	// 	.then((res) => res.json() )
	// 	.then((data) => setOg(data.url))
	// }
	
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
			{/* <CopyToClipboard 
				text={og}
				onCopy={() => (alert(`${context.t('notification.share')}`))}
			>
				<StyledButton >{context.t('button.share')}</StyledButton>
			</CopyToClipboard> */}
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
