import React, { useEffect, useState, useContext } from 'react';
import Button from '../../components/Button';
import HeroSmall from '../../components/HeroSmall';
import styled from 'styled-components';
import { AppContext } from '../../context/Context';
import BannerWithImage from '../../components/BannerWithImage';
import Accordion from '../../components/Accordion';
import Navigation from '../../components/Navigation';




const Product = () => {
	const context = useContext(AppContext);
	const initialState = {
		name: "Product not found, please return to front page",
		photo_url: "",
		consumer_package_size: "",
		sales_unit_size: ""
	}
	const [product, setProduct] = useState({
		
	})
	const Content = styled.div`
		min-height: 100vh;
		margin-bottom: 200px;
	`;
	const StyledButton = styled(Button) `
	width: 100%;
	height: 50px;
	font-size: 20px;
	margin-top: 30px;
`;

	useEffect(() => {
		window.scrollTo(0, 0)

		if(localStorage.getItem("product") !== null)
			return(
				setProduct(JSON.parse(localStorage.getItem("product")))
			)
			else(
				setProduct(initialState)
			)
	
	}, [localStorage])


	return(
		<div>
		<Navigation/>

		<Content>
			<HeroSmall 
				title={product.name}
				image={product.photo_url}
			/>
			<BannerWithImage 
				image={product.photo_url}
				title={product.name}
				ingress={product.product_family_name}
			
				
			
				>

	
					<Accordion title={context.t('page.product.accordion-title')} >
						<p>{context.t('product.consumer_package_size')}</p>
						<h3>{product.consumer_package_size},</h3>
						<p>{context.t('product.sales_unit_size')}: </p>
						<h3>{product.sales_unit_size}</h3>
					</Accordion> 
					
					<StyledButton onClick={() => window.location.assign('https://secure.suppilog.fi/kayttajat/rekisteroidy')} >{context.t('button.product-details')}</StyledButton>

				</BannerWithImage>
				
			
		</Content>
		</div>
	)
}

export default Product;
