import React from 'react';
import styled from 'styled-components';

import { device } from '../../device';
import Input from '../../components/Input';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const SearchBar = () => {


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

    return(
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

    );
};

export default SearchBar;