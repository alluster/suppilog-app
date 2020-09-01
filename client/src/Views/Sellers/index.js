import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/Context';
import HeroSmall from '../../components/HeroSmall';
import Banner from '../../components/Banner';
import ScrollAnimation from 'react-animate-on-scroll';
import Markdown from '../../components/Markdown';

const Sellers = () => {
	const context = useContext(AppContext)
	useEffect(() => {
			window.scrollTo(0, 0)
			context.GetPageContent("0KgwW0poD0KoWgQvWeu1j", `${context.lang}`)
		
	}, [])
	return(
		<div>
			<HeroSmall 
				image={context.pageContent.image ? context.pageContent.image.fields.file.url :  "/suppilog-dinner.jpg"} 
				title={context.pageContent.name} 
				ingress={context.pageContent.title}  
			/>
			<ScrollAnimation animateIn="fadeIn">
				<Markdown source={context.pageContent.content}/>
			</ScrollAnimation>
			<ScrollAnimation animateIn="fadeIn">
				<Banner />
			</ScrollAnimation>
		</div>
	)
}

export default Sellers;
