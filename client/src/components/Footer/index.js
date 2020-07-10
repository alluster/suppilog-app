import React from 'react';
import styled from 'styled-components';
import Gx from '@tgrx/gx';
import Container from '../Container';


const FooterContent = styled.div`
    width: 100%;
    height: 300px;
	margin-top: 300px !important;
	align-items: center;
	text-alig: center;
	background-color: ${props => props.theme.colors.background}
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
    
    }
`;

const Column = styled.div `
    display: flex;
	flex-direction: column;
	align-items: center;


`;
const ColumnLowLeft = styled.div`
    font-size: 12px;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        height: 100px;
 
     }
`;
const ColumnLowRight= styled.div`
  
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        height: 100px;
 
     }

`;

const ColumnHigh = styled.div`
	text-align: center;
	margin-top: 50px;
    font-size: 12px;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        height: 100px;
 
     }
`;

const Logo = styled.img`
    width: 150px;
    
`;




const disclaimer = "Suppilog.com, A Digital Wholesale Platform"
const Footer = () => {
    return(
        <FooterContent>
			<Container>
				<Gx col={12} >
                    <Column>
                        <ColumnHigh>
                            <Logo src="/logo-footer.png" alt="Suppilog Oy"/>
                        
                        </ColumnHigh>
                        <ColumnLowLeft>
                        {disclaimer}

                        </ColumnLowLeft>
                    </Column>
                </Gx>
                <Gx col={12} >
                <Column>
                        <ColumnHigh>
                        </ColumnHigh>
                        <ColumnLowRight >
                            © 2020 Suppilog Oy
                        </ColumnLowRight>
                    </Column>
                </Gx>
			</Container>
           
        </FooterContent>
    );
};


export default Footer;