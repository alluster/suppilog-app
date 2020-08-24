import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import PropTypes from 'prop-types';

import Gx from '@tgrx/gx';
import { device } from '../../device';
import ScrollAnimation from 'react-animate-on-scroll';
import SearchBar from '../../components/SearchBar';

const HeroStyled = styled.div`
	height: 300px;
	z-index: -1;
	@media ${device.laptop} {
		height: 300px;
    }
`;

const HeroContent = styled.div`
	display: flex;
	flex-direction: row;

	@media ${device.laptop} {
		flex-direction: column;
    }
`;


const TextContainer = styled.div `
	display: flex;
	flex: 2;
	height: 300px;
	text-align: left;
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media ${device.laptop} {
		justify-content: flex-start;
		flex: 1;justify-content: center;
		height: 300px;
    }

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
	font-weight: 600;
	letter-spacing: -.5px;
	font-size: 45px !important;
	margin: 0px !important;
    font-size:  ${props => props.theme.fontSize.h3}
    @media ${device.laptop} {
		font-size: 34px !important;
		// text-align: center;
		letter-spacing: -.30px;
		margin-top: 100px;
		line-height: 40px;


	}	
`;

const Ingress = styled.p `
	font-size: 22px;
    color: white;
    font-weight: 400;
	margin-top: 10px;
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





const HeroSmall = ({title, ingress, image, children, searchBar}) => {
    return(
        <HeroStyled style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
		<Container>
		<ScrollAnimation animateIn="fadeIn" animateOnce>

				<HeroContent>
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

HeroSmall.propTypes = {
    title: PropTypes.string,
    ingress: PropTypes.string,
	image: PropTypes.string,
	children: PropTypes.any

 };

export default HeroSmall;