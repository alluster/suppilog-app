import React  from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AnimatedNumber from 'animated-number-react';
import { device } from '../../device';


const CardNumber = ({ingress, number, title, icon}) => {

	const formatValue = (value) => value.toFixed();
	const CardContainer = styled.div `
		font-family: 'Open Sans'
		height: 100%;
		align-items: center;
		background-color: white;
		margin-right: 10px;
		margin-top: 20px
		border-radius: 16px;
		max-width: 100%;
		padding: 20px;
		border: 1px solid #F4F4F4;
		-webkit-box-shadow: 0px 5px 13px 1px rgba(216,216,216,0.26); 
		box-shadow: 0px 5px 13px 1px rgba(216,216,216,0.26);
		@media ${device.laptop} {
			width: auto;

		}
	
	`;
	const CardContent = styled.div`
		display: flex;
		flex-direction: column;
		background-color: white;
		height: 100%;
		border-radius: 0px 0px 16px 16px;


		color: ${props => props.theme.colors.black};

		@media ${device.laptop} {
		}
			
	`;

const TexrContainer = styled.div `
		flex-direction: column;

`;


	const IconContainer = styled.div`

		display: flex;
		height: 100px;
		width: 100px;
		justify-content: center;
		align-items: center;
		margin-right: 20px;
		background-color: ${props => props.theme.colors.background};
		border-radius: 50px 50px 50px 50px;
		@media ${device.laptop} {
		}
	`;

	const Icon = styled.img`
		text-align: center;
		height: 50px;
	`;



	const Title = styled.h4`
		font-size: 14px;
		font-weight: 400;
		@media ${device.laptop} {
			font-size: 16px !important;
		}

	`;
	const Number = styled.p`
		color: ${props => props.theme.colors.black};
		line-height: 60px;
		font-size: 60px;
		font-weight: 600;
		color: ${props => props.theme.colors.brandDark};
		@media ${device.laptop} {
			font-size: 60px;
			font-weight: 600;
		}

	`;


    return(
		<CardContainer>
			<CardContent>
			{/* <IconContainer>
				<Icon src={icon} alt="Icon" />
			</IconContainer> */}
			<TexrContainer>
				<h3>{ingress}</h3>
				<Number
					
				>
				{number}
				</Number>
				<Title>{title}</Title>
			</TexrContainer>
	
			</CardContent>

		</CardContainer>
			
    );
};

CardNumber.propTypes = {
	title: PropTypes.string,
	number: PropTypes.any,
 };

export default CardNumber;