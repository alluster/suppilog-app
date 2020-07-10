import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import PropTypes from 'prop-types';
import Input from '../../components/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Gx from '@tgrx/gx';
const HeroStyled = styled.div`
	height: 500px;
	z-index: -1;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        padding-top: 20px;

     }
`;

const TextContainer = styled.div `
	display: flex;
	flex-direction: column;
	height: 500px;
	justify-content: center;
	text-align: left;
	`;
const InputContainer = styled.div`
	position: absolute;
	min-width: 900px !important;
	margin-top: -15px !important;
	display: flex;
	flex-direction: row;
	height: 60px;
	border: #E6E6E6 solid 0.8px;

`;
const InputLogoContainer = styled.div`
	background: white;
	width: 250px;
	justify-content: center;
	height: 60px;
	text-align: center;

`
const InputLogo = styled.img `
	padding-top: 20px;
	height: 20px;
	width: auto;
	margin-left: auto;
	margin-right: auto;


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

`;

const Icon = styled.i`
	 line-height: 60px;
	 margin-right: 20px;
	 font-size: 25px;

`




const Title = styled.h1`
    color: white;
	font-weight: 600;
	letter-spacing: -.5px;
	font-size: 45px !important;
	margin: 0px !important;
    font-size:  ${props => props.theme.fontSize.h3}
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        font-size: 24px;


     }
`;

const Ingress = styled.p `
    font-size:  22px;
    color: white;
    font-weight: 400;
	margin-top: 30px !important;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        font-size: 14px;
        margin-top: 20px;

     }
`;


const AppStoreImage = styled.img`
		object-fit: contain;
		height: 30px;
		margin-top: 20px;
	 
`;

const LogoImage = styled.div`
	 align-items: center;
	 justify-content: center;
	 display: flex;
	 height: 500px;
`





const Hero = ({title, ingress, image, children}) => {
    return(
        <HeroStyled style={{backgroundImage: `url(${image})`,  objectFit: "cover"}}>
		<Container>
			<Gx col={5} brakepoint={100}>
				<LogoImage>
					<img src="/logo-image.png" style={{ height: "120px"}}/>
				</LogoImage>
			</Gx>
			<Gx col={7} brakepoint={100}>
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
			</Gx>
			
			<InputContainer>
			<InputLogoContainer>
				<InputLogo src="/logo-input.png" />
			</InputLogoContainer>
				<Input 	
					placeholder={"Etsi tuotteita hakusanalla"} 
				/>
			<InputButton>
				<Icon>
					<FontAwesomeIcon icon={faSearch} />
				</Icon>

				Etsi
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