import React from 'react';
import styled from 'styled-components';
import Gx from '@tgrx/gx';

const FooterContent = styled.div`
    width: 100%;
    height: 600px;
    margin-top: 100px;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
    
    }
`;

const Column = styled.div `
    display: flex;
    flex-direction: column;

`;
const ColumnLowLeft = styled.div`
    display: flex;
    align-items: flex-end;
    // flex-direction: column;
    height: 300px;
    color: #4B4B4B;
    font-size: 12px;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        height: 100px;
 
     }
`;
const ColumnLowRight= styled.div`
    display: flex;
    align-items: flex-end;
    // flex-direction: column;
    height: 300px;
    justify-content: flex-end;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        height: 100px;
 
     }

`;

const ColumnHigh = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    height: 200px;
    font-size: 12px;
    @media (max-width: ${props => props.theme.screenSize.tablet}) {
        height: 100px;
 
     }
`;

const Logo = styled.img`
    width: 150px;
    
`;




const disclaimer = "Certify.com is a service for content creators to tag their work in web so that it can be easily traced an verified by viewers. This creates transparency and repels fraud."
const Footer = () => {
    return(
        <FooterContent>
                <Gx col={6}>
                    <Column>
                        <ColumnHigh>
                            <Logo src="/logo.svg" alt="Certify"/>
                            <h4>info@certificate.com</h4>
                            {/* <span>Anna tukesi projektille. <Link href="https://shop.spreadshirt.fi/personaldatafi/">Osta huppari verkkokaupasta</Link></span> */}
                        </ColumnHigh>
                        <ColumnLowLeft>
                        {disclaimer}

                        </ColumnLowLeft>
                    </Column>
                </Gx>
                <Gx col={6} style={{ alignItems: "flex-end" }}>
                <Column>
                        <ColumnHigh>
                        </ColumnHigh>
                        <ColumnLowRight >
                            © 2020 Certify.com
                        </ColumnLowRight>
                    </Column>
                </Gx>
        </FooterContent>
    );
};


export default Footer;