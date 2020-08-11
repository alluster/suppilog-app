import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../Button';
import { device } from '../../device';


const Container = styled.div `
	width: 100%;
	background-color: ${props => props.theme.colors.background}
	height: 600px;
	margin-top: 100px;
`

const Wrapper = styled.div`
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
	padding-right: 10px;
	padding-top: 50px;
	display: flex;
	flex-direction: row;
	@media ${device.laptop} {
		flex-direction: column;
 	}



`;
const ContentBlock = styled.div `
	flex: 1;

`;
const Title = styled.h1`
    color: ${props => props.theme.colors.black};
	font-weight: 600;
	letter-spacing: -.5px;
	font-size: 45px !important;
	margin: 0px !important;
    font-size:  ${props => props.theme.fontSize.h3}
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        font-size: 24px;


     }
`;


const StyledButton = styled(Button) `
`



const Banner = () => {
    return(
		<Container>
			<Wrapper>
            	<ContentBlock>
					<h1>Luo tunnukset palveluun</h1>
					<StyledButton
						color="#0C10E9"
						to="/"

					>
						Rekisteröidy
					</StyledButton>
				</ContentBlock>
				<ContentBlock>
					<Title>Kaikki tarvitsemasi tuotteet digitaalisessa palvelussamme</Title>
				</ContentBlock>
        	</Wrapper>
		</Container>
       
    );
};

 Banner.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ])
 }

export default Banner;