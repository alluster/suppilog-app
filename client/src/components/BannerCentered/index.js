import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../Button';
import LoginForm from '../LoginForm';
import { device } from '../../device';
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome';
import {  faStar } from '@fortawesome/free-solid-svg-icons'


const BannerContainer = styled.div `
	width: 100%;
	height: 100%;
	background-color: ${props => props.theme.colors.backgroundDark};
	margin-top: 80px;
	padding: 20px 0px 20px 0px;
	margin-bottom: 50px;
	@media ${device.laptop} {
		margin-top: 30px;
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
	text-align: center
	flex-direction: row;
	@media ${device.laptop} {
		flex-direction: column;
 	}



`;
const ContentBlock = styled.div `
	flex: 1;
	flex-direction: column;
	align-items: center

`;
const Title = styled.h3`
    color: ${props => props.theme.colors.black};
	font-weight: 600;
	letter-spacing: -.5px;
	margin: 0px !important;
    font-size:  ${props => props.theme.fontSize.h3}
    @media ${device.laptop} {
        font-size: 24px;


     }
`;
const Ingress = styled.p `
	font-size: 20px;
    font-weight: 400;
	margin-top: 20px;
	margin-bottom: 20px;
    @media ${device.laptop} {
        font-size: 20px;
		margin-top: 20px;



     }
`;

const StyledButton = styled(Button) `
`

const Image = styled.div`
padding: 20px;
`;
const Icons = styled.div`
	 margin-top: 20px;
	 margin-bottom: 20px;
`;


const BannerCentered = ({ title, ingress, body}) => {
    return(
		<BannerContainer>
			<Wrapper>
            
				<ContentBlock>
				
					
					<Title>{title}</Title>
					<Icons>
						<FontAwesomeIcon icon={faStar} style={{color: "#FF9F00", fontSize: "24px"}}/>
						<FontAwesomeIcon icon={faStar} style={{color: "#FF9F00", fontSize: "24px"}}/>
						<FontAwesomeIcon icon={faStar} style={{color: "#FF9F00", fontSize: "24px"}}/>
						<FontAwesomeIcon icon={faStar} style={{color: "#FF9F00", fontSize: "24px"}}/>
						<FontAwesomeIcon icon={faStar} style={{color: "#FF9F00", fontSize: "24px"}}/>
					</Icons>
					
					<Ingress>{ingress}</Ingress>
					<p>{body}</p>
				</ContentBlock>
        	</Wrapper>
		</BannerContainer>
       
    );
};

BannerCentered.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ])
 }

export default BannerCentered;