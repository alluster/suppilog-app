import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../Button';
import { device } from '../../device';


const Container = styled.div `
	width: 100%;
	height: 100%;
	padding-top: 40px;
	padding-bottom: 40px;
	@media ${device.laptop} {
		height: 100%;
 	}
`

const Wrapper = styled.div`
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
	display: flex;
	align-items: center
	flex-direction: row;
	@media ${device.laptop} {
		flex-direction: column;
		padding-left: 20px;
		padding-right: 20px;

 	}


`;
const ContentBlock = styled.div `
	flex: 1;
	flex-direction: column;
	align-items: center;
	width: 100%;
	padding-left: 10px;
	padding-right: 10px;
	@media ${device.laptop} {
		align-items: left;

 	}
`;
const ImageContainer = styled.div `
	height: 100%;
	max-width: 50%;
	padding: 10px;
	@media ${device.laptop} {
		padding: 0px;
		max-width: 100%;


     }

`;
const Title = styled.h1`
    color: ${props => props.theme.colors.black};
	font-weight: 600;
	letter-spacing: -.5px;
	font-size: 45px !important;
	margin: 0px !important;
    font-size:  ${props => props.theme.fontSize.h3}
    @media ${device.laptop} {
        font-size: 24px;


     }
`;
const Ingress = styled.p `
	font-size: 22px;
    font-weight: 400;
	margin-top: 20px;
	margin-bottom: 20px;
    @media ${device.laptop} {
        font-size: 20px;
		margin-top: 20px;



     }
`;
const StyledButton = styled(Button) `
	width: 100%;
	height: 50px;
	font-size: 20px;
	margin-top: 20px;
`
const Image = styled.img`
	max-height: 500px;

`;



const BannerWithImage = ({image, title, ingress, buttonText, button, to , children}) => {
    return(
		<Container>
			<Wrapper>
            	<ImageContainer>
						<Image src={image} alt="Banner" /> 
				</ImageContainer>
				<ContentBlock>
					<Title>{title}</Title>
					<Ingress>{ingress}</Ingress>
					{children}
					{
						button === true ?
							<StyledButton to={`${to}`} textColor="white">
								{buttonText}
							</StyledButton>
							: ""
					}
				</ContentBlock>
        	</Wrapper>
		</Container>
       
    );
};

BannerWithImage.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ])
 }

export default BannerWithImage;