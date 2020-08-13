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
	@media ${device.laptop} {
		height: 80vh;
    }
`;

const HeroContent = styled.div`
	display: flex;
	flex-direction: row;

	@media ${device.laptop} {
		height: 80vh;
		flex-direction: column;
		justify-content: center;
		align-items:center;
    }
`;


const TextContainer = styled.div `
	display: flex;
	flex: 2;
	height: 500px;
	text-align: left;
	display: flex;
	flex-direction: column
	justify-content: center
	@media ${device.laptop} {
		height: 200px;
		justify-content: flex-start;
		margin-top: 30px;

	}	
	`;

const LogoImage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	height: 500px;
	@media ${device.laptop} {
		height: 150px;
		margin-top: 100px;
		align-items: flex-end

	}	
`;

const Title = styled.h1`
	color: white;
	display: flex;
	font-weight: 600;
	letter-spacing: -.5px;
	font-size: 45px !important;
	margin: 0px !important;
    font-size:  ${props => props.theme.fontSize.h3}
    @media ${device.laptop} {
		font-size: 28px !important;
		text-align: center;
		letter-spacing: -.30px;


	}	
`;

const Ingress = styled.p `
	font-size: 22px;
    color: white;
    font-weight: 400;
	margin-top: 30px !important;
    @media ${device.laptop} {
        font-size: 18px;
		margin-top: 20px;
		text-align: center;


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