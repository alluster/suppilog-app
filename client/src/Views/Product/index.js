import React, { useEffect, useState, useContext } from 'react';
import Container from '../../components/Container'
import HeroSmall from '../../components/HeroSmall';
import styled from 'styled-components';
import { AppContext } from '../../context/Context';
import BannerWithImage from '../../components/BannerWithImage';
import Accordion from '../../components/Accordion'
import Navigation from '../../components/Navigation';




const Product = () => {
	const context = useContext(AppContext);
	const [product, setProduct] = useState({})
	const Content = styled.div`
		min-height: 100vh;
		margin-bottom: 200px;
	`;

	useEffect(() => {
		context.i18n.changeLanguage(context.lang);
		setProduct(JSON.parse(localStorage.getItem("product")))
		window.scrollTo(0, 0)
	
	}, [])


	return(
		
		
		<Content>
			<Navigation navColor="dark" />
			{/* <HeroSmall 
			title={product.name}
			image="/suppilog-dinner.jpg"
			/> */}
			<BannerWithImage 
				image={product.photo_url}
				title={product.name}
				ingress={product.product_family_name}
				button
				buttonText="Register to view the product price"
				
			
				>
					
					<Accordion title={context.t('page.product.accordion-title')} >
						<p>{context.t('product.consumer_package_size')}</p>
						<h3>{product.consumer_package_size},</h3>
						<p>{context.t('product.sales_unit_size')}: </p>
						<h3>
							{product.sales_unit_size} 
						</h3>
					</Accordion>
				</BannerWithImage>

			
			
		</Content>
		
	)
}

export default Product;
