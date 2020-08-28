import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../Button';
import LoginForm from '../LoginForm';
import { device } from '../../device';
import { AppContext } from '../../context/Context';


const Container = styled.div `
	width: 100%;
	background-color: ${props => props.theme.colors.background}
	height: 600px;
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
		padding-left: 20px;
		padding-right: 20px;
 	}



`;
const ContentBlock = styled.div `
	flex: 1;
	flex-direction: column;
	align-items: center
	@media ${device.laptop} {
		align-items: center;

		margin-top: 30px;
		margin-bottom: 30px;
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
	margin-top: 30px !important;
    @media ${device.laptop} {
        font-size: 18px;
		margin-top: 20px;



     }
`;
const Body = styled.p `
	font-size: 18px;
    font-weight: 400;
	margin-top: 30px !important;
    @media ${device.laptop} {
        font-size: 18px;
		margin-top: 20px;



     }
`;
const StyledButton = styled(Button) `
`



const Banner = () => {
	const context = useContext(AppContext)

    return(
		<Container>
			<Wrapper>
			<ContentBlock>
					<Title>{context.t('banner.register.title')}</Title>
					<Ingress>{context.t('banner.register.ingress')}</Ingress>
					<Body>{context.t('banner.register.body')}</Body>

				</ContentBlock>
            	<ContentBlock>
					<LoginForm />
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