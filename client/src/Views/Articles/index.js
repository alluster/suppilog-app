import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/Context';
import Container from '../../components/Container'
import ItemRow from '../../components/ItemRow';
import CardArticle from '../../components/CardArticle'
import Spinner from '../../components/Spinner';
import Moment from 'react-moment';




const Articles = () => {
	const context = useContext(AppContext)

	
	useEffect(() => {
			window.scrollTo(0, 0)
			context.GetArticles()
		
	}, [])
	return(
		<div>

			{
				context.articles === []  ? 
				<Spinner />
				:
					<Container>
						<ItemRow title="Suppiblog">
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
										
										<CardArticle
											id={item.sys.id}
											key={i}
											image={item.fields.image.fields.file.url}
											title={item.fields.title }
											date={ConvertDate()}
											description={item.fields.description}
										/>
									)
								})
							}	
						</ItemRow>
					</Container>
				
			}
		</div>
		
	)
}

export default Articles;
