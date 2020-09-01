import React, { useEffect, useState, useContext } from 'react';
import Container from '../../components/Container'
import HeroSmall from '../../components/HeroSmall';
import styled from 'styled-components';
import { AppContext } from '../../context/Context';
import BannerWithImage from '../../components/BannerWithImage';





const Product = () => {
	const context = useContext(AppContext);
	const [product, setProduct] = useState({})
	useEffect(() => {
		context.i18n.changeLanguage(context.lang);

			setProduct(JSON.parse(localStorage.getItem("product")))
			window.scrollTo(0, 0)
	
	}, [])


	return(
		
		
		<div>

			<HeroSmall 
			title={product.name}
			image="/suppilog-dinner.jpg"
			/>
			<BannerWithImage 
				image={product.photo_url}
				title={product.name}
				ingress={product.vendor}
			
				buttonText=""
				
			
				>
					<p>{context.t('product.consumer_package_size')}</p>
					<h3>{product.consumer_package_size},</h3>
					<p>{context.t('product.sales_unit_size')}: </p>
					<h3>
						{product.sales_unit_size} 
					</h3>
				</BannerWithImage>

			
			
		</div>
		
	)
}

export default Product;
