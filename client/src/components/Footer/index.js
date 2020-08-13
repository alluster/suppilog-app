import React from 'react';
import styled from 'styled-components';
import Gx from '@tgrx/gx';
import Container from '../Container';
import { device } from '../../device';


const FooterContent = styled.div`
    width: 100%;
    height: 300px;
	margin-top: auto;
	align-items: center;
	text-align: center;
	background-color: ${props => props.theme.colors.background}
    @media ${device.laptop} {
		height: auto
    }
`;

const Column = styled.div `
    display: flex;
	flex-direction: column;
	align-items: center;
	@media ${device.laptop} {
        height: 100px;
 
     }

`;
const ColumnLowLeft = styled.div`
    font-size: 12px;
    @media ${device.laptop} {
 
     }
`;
const ColumnLowRight= styled.div`
  
    @media ${device.laptop} {
		margin-top: 50px;
        height: 40px;
 
     }

`;

const ColumnHigh = styled.div`
	text-align: center;
	margin-top: 50px;
    font-size: 12px;
    @media ${device.laptop} {
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