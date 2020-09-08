import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/Context';
import Container from '../../components/Container'
import HeroSmall from '../../components/HeroSmall';
import ItemRow from '../../components/ItemRow';
import Banner from '../../components/Banner';
import ScrollAnimation from 'react-animate-on-scroll';
import CardPerson from '../../components/CardPerson'
import Spinner from '../../components/Spinner';
import Markdown from '../../components/Markdown';
import styled from 'styled-components';
import { useParams } from "react-router-dom";





const Page = () => {

	const context = useContext(AppContext)
	const Content = styled(Container)`
		margin-top: 50px;
	
	`;
	let { id } = useParams();

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
		{ !context.loading ? 
			<div>
				<HeroSmall 
					image={context.pageContent.image ? context.pageContent.image.fields.file.url : ""} 
					title={context.pageContent.name} 
					ingress={context.pageContent.title}  
				/>
				<Content>
					<ScrollAnimation animateIn="fadeIn">
						<Markdown source={context.pageContent.content}/>
					</ScrollAnimation>
				</Content>
					
				<ScrollAnimation animateIn="fadeIn">
					{
						context.persons === []  ? 
						<Spinner />
						:
							<Content>
								<ItemRow title={context.t('card.person.row-title')}>
									{
										context.persons.map((item, i) => {
									
										
											
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
							</Content>

						
					}
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeIn">
					<Banner />
				</ScrollAnimation>
			</div>
			:
			<Spinner />
}
			

		</div>
		
	)
}

export default Page;
