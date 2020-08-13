import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/Context';
import Container from '../../components/Container'
import Hero from '../../components/Hero';
import ItemRow from '../../components/ItemRow';
import CardNumber from '../../components/CardNumber';
import Banner from '../../components/Banner';
import BannerWithImage from '../../components/BannerWithImage';
import ScrollAnimation from 'react-animate-on-scroll';
import CardProduct from '../../components/CardProduct'
import Spinner from '../../components/Spinner';
import ReactMarkdown from 'react-markdown';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams
  } from "react-router-dom";




const Article = () => {
	const [image, setImage] = useState()
	const [article, setArticle] = useState({ image: "", title:""})
	let { id } = useParams();
	const context = useContext(AppContext)
	const getArticle = async () => {

		if(context.article === {}){

		}
		else(
			setArticle({
				image: context.articleImage ? context.articleImage : "" ,
				title: context.article.title
			})
		)
	}

	useEffect(() => {
			window.scrollTo(0, 0)
			context.GetArticle(id)
			getArticle()


	}, [])
	return(
		
		
		<div>

			<Hero 
				image={context.article.image ?  context.article.image.fields.file.url : "" } 
				title={context.article.title} 
			/>
			<Container>
				<ReactMarkdown 
					source={context.article.body}
				/>
			</Container>
		
			
			
		</div>
		
	)
}

export default Article;
