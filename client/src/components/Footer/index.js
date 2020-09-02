import React, {useEffect, useContext  }from 'react';
import styled from 'styled-components';
import Container from '../Container';
import { device } from '../../device';
import Social from '../Social'
import { AppContext } from '../../context/Context';
import Markdown from '../Markdown';

const Footer = () => {
	const context = useContext(AppContext);

const FooterContent = styled.div`
    width: 100%;
    height: 100%;
	margin-top: auto;
	padding-top: 30px;
	align-items: center;
	text-align: center;
	background-color: ${props => props.theme.colors.background}
    @media ${device.laptop} {
		height: 600px;
		bottom: 0;
    }
`;


const Logo = styled.img`
    width: 150px;
    
`;

const Content = styled.div`
	margin-top: 20px;
	margin-bottom: 20px;
	
`;

const SocialButtons = styled.div`
	margin-top: 30px;
`;


const disclaimer = "Suppilog.com, A Digital Wholesale Platform"

useEffect(() => {
		context.GetFooterContent("4g3oxVSEZ0pvZelnhxZVHL",`${context.lang}`)
	
}, [])

    return(
        <FooterContent>
			<Container>
						<Logo src="/logo-footer.png" alt="Suppilog Oy"/>
						<Content>
							<Markdown source={context.footerContent.body} />
							<SocialButtons>
								<Social />
							</SocialButtons>
						</Content>
						
                        
			</Container>
           
        </FooterContent>
    );
};


export default Footer;