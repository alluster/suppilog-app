import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from 'styled-components';
import CustomLink from '../CustomLink';
import Container from '../../components/Container';
import Gx from '@tgrx/gx';
import Button from '../../components/Button'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { device } from '../../device';

const logo = '/suppilog_logo_horizontal_dark.png'

const NavContainer = styled.div`
	position: fixed;
	min-width: 100%;
	z-index: 100000;
	height: 50px;
	text-align: center;
	top: 0;
	margin-bottom: -40px;
	background-color: #fff;
	box-shadow:
	2.8px 0 2.2px rgba(0, 0, 0, 0.034),
	6.7px 0 5.3px rgba(0, 0, 0, 0.048),
	12.5px 0 10px rgba(0, 0, 0, 0.06),
	22.3px 0 17.9px rgba(0, 0, 0, 0.072),
	41.8px 0 33.4px rgba(0, 0, 0, 0.086),
	100px 0 80px rgba(0, 0, 0, 0.12);
	@media ${device.laptop} {
		height: 80px;
 	}

`;


const Icon = styled(FontAwesomeIcon)`
	font-size: 24px;
	text-align: right;
	padding-top: 10px;
    :hover {
        cursor: pointer;
	}
	@media ${device.laptop} {
		font-size: 40px;
		padding-top: 20px;
		padding-right: 20px;
		color: ${props => props.theme.colors.brand};
	}
	
`;
const Image = styled.img`
	max-height: 20px; 
	@media ${device.laptop} {
		max-height: 40px;
		
	}
	

`

const ImageContainer = styled.div `
	height: 50px;
	text-align: left;
	padding-top: 15px;
	@media ${device.laptop} {
		height: 80px;
		padding-top: 30px;
	}
	
`

const Text = styled.div `
	line-height: 50px !important;
	text-align: center;
	margin-left: 20px;
	margin-right: 20px;


`;


const OpenNav = styled.div`
	top: 0;
	min-height: 100vh;
	background: rgba(255, 255, 255, 0.98);
	text-align: center;
	padding-top: 150px;
	z-index: 10000;
	position: fixed;
	width: 100vw;
	@media ${device.laptop} {
		position: fixed;
		height: calc(100vh + 200px);
 	}

`

const IconContainer = styled(Container)`
	display: absolute,
	min-width: 100%;
	text-align: right !important;

`
const LinkText = styled.h2 `

	line-height: 60px;


`

const ButtonsRow = styled.div`
	@media ${device.laptop} {
    	display: none !important;
 	}
`;

const BurgerContainer = styled.div`
	 text-align: right;
`;

const Navigation = ({ className }) => {

	const [navOpen, setNavOpen] = useState(false)
    return(
		<>
		<NavContainer className={className} >
			<Container>
				<Gx col={4} breakpoint={100}>
					<Link to="/" >
						<ImageContainer>
							<Image src={logo} />
						</ImageContainer>
					</Link>                
				</Gx>
				<Gx col={6} breakpoint={100}>
					<ButtonsRow>
						<Button to="/sign-in"style={{display: "inline-block"}} color={"#31004C"}>Kirjaudu</Button>   
						<Text style={{display: "inline-block"}}>Tai</Text>
						<Button to="/register"style={{display: "inline-block"}}color={"#0C10E9"}>Rekisteröidy</Button>             
					</ButtonsRow>
				</Gx>
				<Gx col={2} breakpoint={100}>
					<BurgerContainer  > 
					{
						!navOpen ? <Icon  onClick={e => setNavOpen(true)}style={{display: "inline-block"}} icon={faBars} />
						: 
						<Icon  onClick={e => setNavOpen(false)} icon={faTimes} style={{marginRight: "10px"}}/>


					}
					</BurgerContainer>	
				</Gx>
			</Container>

		</NavContainer>        
					{
						navOpen ? 
						<OpenNav>
							
							<LinkText onClick={e => setNavOpen(false)} >
								<CustomLink to="/" 
									onClick={e => setNavOpen(false)}
									color={props=>props.theme.colors.linkGray} 
									activeColor={props=>props.theme.colors.primary}
								>
									Etusivu
								</CustomLink>
							</LinkText>
							<LinkText onClick={e => setNavOpen(false)} >
								<CustomLink to="/about-us" 
									onClick={e => setNavOpen(false)}
									color={props=>props.theme.colors.linkGray} 
									activeColor={props=>props.theme.colors.primary}
								>
									Meistä
								</CustomLink>
							</LinkText>
							<LinkText onClick={e => setNavOpen(false)} >
								<CustomLink to="/sellers" 
									onClick={e => setNavOpen(false)}
									color={props=>props.theme.colors.linkGray} 
									activeColor={props=>props.theme.colors.primary}
								>
									Myyjäyrityksille
								</CustomLink>
							</LinkText>
							<LinkText onClick={e => setNavOpen(false)} >
								<CustomLink to="/articles" 
									onClick={e => setNavOpen(false)}
									color={props=>props.theme.colors.linkGray} 
									activeColor={props=>props.theme.colors.primary}
								>
									Suppiblog
								</CustomLink>
							</LinkText>
							<LinkText onClick={e => setNavOpen(false)} >
								<CustomLink to="/tietosuojalauseke" 
									color={props=>props.theme.colors.linkGray} 
									activeColor={props=>props.theme.colors.primary}
								>
									Tietosuojalauseke
								</CustomLink>
							</LinkText>
						
						</OpenNav>
						: 
						<></>
					}
					</>
    );
};
Navigation.propTypes = {
    className: PropTypes.string
};

export default Navigation;