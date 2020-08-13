import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from '../Input';
import Button from '../Button';
import { device } from '../../device';

const Wrapper = styled.div`
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
	padding-right: 40px;
	@media ${device.laptop} {
		padding-right: 10px;
	}


`;

const StyledButton = styled(Button) `
	width: 100%;
	height: 50px;
	font-size: 20px;
`
const StyledButtonGhost = styled(Button) `
	text-align: center;
	width: 100%;
	font-weight: 600;
	font-size: 20px;
`

const Title = styled.h1`
	margin-bottom: 40px;
	font-weight: 400;
`;

const StyledInput = styled(Input)`
	margin-bottom: 20px !important;
	border: #E6E6E6 solid 0.8px;

`

const CTA = styled.p`
	text-align: center;
	margin-bottom: 10px;
	margin-top: 20px;
`




const LoginForm = () => {
    return(
        <Wrapper>
			<Title>Luo tunnukset palveluun</Title>
		   <StyledInput 
				label="Anna sähköpostiosoite"
				placeholder=""
			/>
			<StyledInput 
				label="Luo salasana"
				placeholder=""
			/>
			<StyledButton
				color="#0C10E9"
				to="/register"

			>	
			Rekisteröidy
			</StyledButton>
			<CTA>Onko sinulla jo tunnukset?</CTA>

			<StyledButton
				textColor="#0C10E9"
				to="/sign-in"
				>
				Kirjaudu sisään
			</StyledButton>
        </Wrapper>
    );
};

LoginForm.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ])
 }

export default LoginForm;