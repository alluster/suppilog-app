import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import PropTypes from 'prop-types';

import Gx from '@tgrx/gx';
import { device } from '../../device';
import ScrollAnimation from 'react-animate-on-scroll';
import SearchBar from '../../components/SearchBar';

const HeroStyled = styled.div`

	height: 500px;
	z-index: -1;
			justify-content: center;

	@media ${device.laptop} {
		height: 60vh;
    }
`;

const HeroContent = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;

	@media ${device.laptop} {
		flex-direction: column;

    }
`;


const TextContainer = styled.div `
	display: flex;
	flex: 2;
	height: 500px;
	text-align: left;
	display: flex;
	flex-direction: column
	justify-content: center;

	@media ${device.laptop} {
		justify-content: flex-start;
		flex: 1;
		justify-content: center;
		height: 50vh;
		padding-top: 10vh;

	}	
	`;

const LogoImage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	height: 500px;
	@media ${device.laptop} {
		display: none;

	}	
`;

const Title = styled.h1`
	color: white;
	display: flex;
    font-weight: 400 !important;
	letter-spacing: -.5px;
	font-size: 45px !important;
	margin: 0px !important;
    font-size:  ${props => props.theme.fontSize.h1}
    @media ${device.laptop} {
		font-size: 44px !important;
		letter-spacing: -.30px;
		margin-top: 100px;
		line-height: 50px;
		hyphens: manual;


	}	
`;

const Ingress = styled.p `
	font-size: 22px;
    color: white;
    font-weight: 300 !important;
	letter-spacing: 0.6px;
	margin-top: 0px;
    @media ${device.laptop} {
        font-size: 18px;
		margin-top: 10px;



     }
`;







const AppStoreImage = styled.img`
		object-fit: contain;
		height: 30px;
		margin-top: 20px;
	 
`;





const Hero = ({title, ingress, image, children, searchBar}) => {
    return(
        <HeroStyled style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
		<Container>
		<ScrollAnimation animateIn="fadeIn" animateOnce>

				<HeroContent>
					<LogoImage>
						<img src="/logo-image.png" style={{ height: "120px"}}/>
					</LogoImage>
					<TextContainer>
						<Title>
							{title}
							<div>
								{children}
							</div>
						</Title>
			
						<Ingress>
							{ingress}
						</Ingress>
						{/* <AppStoreImage src="/appstore.png" /> */}
							
					</TextContainer>
		
					</HeroContent>

					{
						searchBar === true ?
							<SearchBar />
						:

							""
					}
					</ScrollAnimation>
				</Container>
        </HeroStyled>
		
        
    );
};

Hero.propTypes = {
    title: PropTypes.string,
    ingress: PropTypes.string,
	image: PropTypes.string,
	children: PropTypes.any

 };

export default Hero;