import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import PropTypes from 'prop-types';
import Input from '../../components/Input';


const HeroStyled = styled.div`
	height: 300px;
    padding-top: 20px;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        padding-top: 20px;

     }
`;

const TextContainer = styled.div `
	display: flex;
	justify-content: center;
	flex-direction: column;
	height: 300px;
	`
const InputContainer = styled.div`
	position: absolute;
	min-width: 900px !important;
	margin-top: -15px !important;


`


const Title = styled.h1`
    text-align: center;
    color: white;
	font-weight: 600;
	font-size: 50px !important;
	margin: 0px !important;
    font-size:  ${props => props.theme.fontSize.h3}
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        font-size: 24px;


     }
`;

const Ingress = styled.p `
    font-size:  ${props => props.theme.fontSize.h5};
    color: white;
    font-weight: 400;
	text-align: center;
	margin: 0px !important;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        font-size: 14px;
        margin-top: 20px;

     }
`;






const Hero = ({title, ingress, image, children}) => {
    return(
        <HeroStyled style={{backgroundImage: `url(${image})`,  objectFit: "cover"}}>
		<Container>
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
			<InputContainer>
				<Input 	
					placeholder={"Etsi tuotteita"} 
				/>
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