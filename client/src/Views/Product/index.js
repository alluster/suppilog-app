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
import Markdown from '../../components/Markdown';
import styled from 'styled-components';
import CardArticle from '../../components/CardArticle'
import Moment from 'react-moment';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams
  } from "react-router-dom";




const Product = (props) => {
	const [image, setImage] = useState()
	const [article, setArticle] = useState({ image: "", title:""})
	let { id } = useParams();
	const context = useContext(AppContext)
	const getArticle = async () => {
		console.log(props)
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
			context.GetArticles()



	}, [])
	const Content = styled(Container) `
		margin-top: 40px;
		margin-bottom: 100px;
	`;
	
	return(
		
		
		<div>

			<Hero 
				image={props.match.params.image ?  props.match.params.image : "" } 
				title={props.match.params.name} 
			/>
			<Content>
			
			</Content>

			
			
		</div>
		
	)
}

export default Product;
