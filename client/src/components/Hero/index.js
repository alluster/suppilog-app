import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import PropTypes from 'prop-types';
import { device } from '../../device';
import ScrollAnimation from 'react-animate-on-scroll';
import SearchBar from '../../components/SearchBar';

const HeroStyled = styled.div`

	height: 600px;
	z-index: -1;
	justify-content: center;
	align-items: center;

	@media ${device.laptop} {
		height: 90vh;
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
	text-align: left;
	display: flex;
	flex-direction: column;

	justify-content: center;
	max-width: 100%;
	line-break: normal;
	@media ${device.laptop} {
		justify-content: flex-start;
		flex: 1;
		justify-content: center;
		height: 90vh;
		padding-top: 10px;

	}	
	`;

const LogoImage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	height: 600px;
	@media ${device.laptop} {
		display: none;

	}	
`;

const Title = styled.h1`
	color: white;
	display: flex;
	font-weight: 400 !important;
	line-height: 55px;
	letter-spacing: -.5px;
	font-size: 55px !important;
	margin: 0px !important;
    font-size:  ${props => props.theme.fontSize.h1}
    @media ${device.laptop} {
		letter-spacing: -.30px;
		line-height: 50px;
		hyphens: auto;


	}	
`;

const Ingress = styled.p `
	font-size: 22px;
    color: white;
    font-weight: 300 !important;
	letter-spacing: 0.6px;
	margin-top: 25px;
	margin-bottom: 30px;
    @media ${device.laptop} {
        font-size: 18px;
		margin-top: 10px;


     }
`;





const Hero = ({title, ingress, image, children, searchBar}) => {
    return(
        <HeroStyled style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
			<Container>
				<ScrollAnimation animateIn="fadeIn" animateOnce>

					<HeroContent>
						<LogoImage>
							<img src="/logo-image.png" alt="Hero" style={{ height: "120px"}}/>
						</LogoImage>
						<TextContainer>
							<Title>
								{title}
							
							</Title>
				
							<Ingress>
								{ingress}
							</Ingress>
							{children}
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