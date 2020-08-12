import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import PropTypes from 'prop-types';
import Input from '../../components/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Gx from '@tgrx/gx';
import { device } from '../../device';
import ScrollAnimation from 'react-animate-on-scroll';

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

const InputContainer = styled.div`
	position: absolute;
	min-width: 900px !important;
	margin-top: -15px !important;
	display: flex;
	flex-direction: row;
	height: 60px;
	border: #E6E6E6 solid 0.8px;
	@media ${device.laptop} {
		max-width: calc(100% - 20px) !important;
		min-width: calc(100% - 20px) !important;
		height: 50px;
	}
`;

const InputLogoContainer = styled.div`
	background: white;
	width: 250px;
	justify-content: center;
	height: 60px;
	text-align: center;
	@media ${device.laptop} {
		max-width: 80px !important;
		height: 50px;

	}

`
const InputLogo = styled.img `
	padding-top: 20px;
	height: 20px;
	width: auto;
	margin-left: auto;
	margin-right: auto;
	@media ${device.laptop} {
		height: 15px !important;
	}

`;


const InputButton = styled.button`
	  background-color: ${props => props.theme.colors.primary}
	  color: white;
	  height: 61.6px;
	  font-size: 20px;
	  font-weight: 600;
	  line-height: 60px;
	  text-align: center;
	  display: inline-block;
	  width: 300px;
	  margin-top: -0.8px;
	  margin-right: -0.8px;
	  @media ${device.laptop} {
		max-width: 60px !important;
		height: 50px;
		line-height: 50px;


	}

`;

const Icon = styled.i`
	 line-height: 60px;
	 margin-right: 20px;
	 font-size: 25px;
	 @media ${device.laptop} {
		height: 50px;
		line-height: 50px;
		font-size: 15px;
		text-align: center
		margin-right: 0px;;


	}
`
const ButtonText = styled.span`
color: white !important;
@media ${device.laptop} {
	display: none


}
`;






const AppStoreImage = styled.img`
		object-fit: contain;
		height: 30px;
		margin-top: 20px;
	 
`;





const Hero = ({title, ingress, image, children}) => {
    return(
        <HeroStyled style={{backgroundImage: `url(${image})`}}>
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
				<InputContainer>
				<InputLogoContainer>
					<InputLogo src="/logo-input.png" />
				</InputLogoContainer>
					<Input 	
						placeholder={"Etsi tuotteita"} 
					/>
				<InputButton>
					<Icon>
						<FontAwesomeIcon icon={faSearch} />
					</Icon>

					<ButtonText>
						Etsi
					</ButtonText>
				</InputButton>	
				</InputContainer>
				
					{/* {
						image ? 
							<ImageContainer>
								<img src={image} alt="Hero image" /> 
							</ImageContainer>
							:
							null
					} */}
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