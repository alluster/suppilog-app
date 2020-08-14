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
	z-index: 10000;
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
`;


const Icon = styled(FontAwesomeIcon)`
	font-size: 24px;
	text-align: right;
	padding-top: 10px;
    :hover {
        cursor: pointer;
	}
	
`;
const Image = styled.img`
	max-height: 20px; 
	

`

const ImageContainer = styled.div `
	height: 50px;
	text-align: left;
	padding-top: 15px;
	
	
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


const Navigation = ({ className }) => {
	// const router = useRouter()
	// const context = useContext(AppContext)  
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
			
					<div onClick={e => setNavOpen(true)} style={{lineHeight: "50px !important", textAlign: "right", lineHeight: "50px", color: "#212121"}}> 
						<Icon style={{display: "inline-block"}} icon={faBars} />
					</div>	
               
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
							<IconContainer>
								<div onClick={e => setNavOpen(false)} style={{lineHeight: "50px !important", textAlign: "center", pointer: "cursor", color: "#212121"}}> 
									<Icon  icon={faTimes} style={{marginRight: "10px"}}/>
									<h2 style={{display: "inline-block"}}>Sulje </h2>
								</div>	
							</IconContainer>
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