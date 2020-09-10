import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import PropTypes from 'prop-types';
import { device } from '../../device';
import ScrollAnimation from 'react-animate-on-scroll';
import SearchBar from '../../components/SearchBar';
import Overlay from '../../components/Overlay';

const HeroStyled = styled.div`
	height: 300px;
	z-index: 1;
	position: relative;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	@media ${device.laptop} {
		height: 300px;
    }
`;

const HeroContent = styled.div`
	display: flex;
	position: relative;
	z-index: 1000;
	flex-direction: row;

`;


const TextContainer = styled.div `
	display: flex;
	flex: 2;
	height: 300px;
	position: relative;
	text-align: left;
	display: flex;
	flex-direction: column;
	justify-content: center;
		@media ${device.laptop} {
			// justify-content: flex-start;
			flex: 1;
			justify-content: center;
		}
	`;

const Title = styled.h1`
	color: white;
	display: flex;
    font-weight: 400 !important;
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
    font-weight: 300;
	margin-top: 10px;
	letter-spacing: 0.4px;
    @media ${device.laptop} {
        font-size: 18px;
		margin-top: 10px;



     }
`;



const HeroSmall = ({ title, ingress, image, children }) => {
    return(
        <HeroStyled style={{backgroundImage: `url(${image})`}}>
			<Container>
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
					</TextContainer>
				</HeroContent>
			</Container>
			<Overlay themeColor="Brand"/>
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