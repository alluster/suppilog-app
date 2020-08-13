import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../Button';
import LoginForm from '../LoginForm';
import { device } from '../../device';


const Container = styled.div `
	width: 100%;
	height: 300px;
	margin-top: 80px;
	@media ${device.laptop} {
		height: 100%;
 	}
`

const Wrapper = styled.div`
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
	padding-right: 10px;
	display: flex;
	align-items: center

	height: 100%;
	flex-direction: row;
	@media ${device.laptop} {
		flex-direction: column;
		text-align: center
 	}



`;
const ContentBlock = styled.div `
	flex: 1;
	flex-direction: column;
	align-items: center

`;
const Title = styled.h1`
    color: ${props => props.theme.colors.black};
	font-weight: 600;
	letter-spacing: -.5px;
	font-size: 35px !important;
	margin: 0px !important;
    font-size:  ${props => props.theme.fontSize.h3}
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
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
		text-align: center;


     }
`;

const StyledButton = styled(Button) `
`

const Image = styled.div`
padding: 20px;
`;


const BannerWithImage = ({image, title, ingress, body}) => {
    return(
		<Container>
			<Wrapper>
            	<ContentBlock>
					<Image>
						<img src={image}/> 
					</Image>
				</ContentBlock>
				<ContentBlock>
					<Title>{title}</Title>
					<Ingress>{ingress}</Ingress>
					<p>{body}</p>
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