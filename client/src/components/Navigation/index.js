import React, { useState } from 'react';
import styled from 'styled-components';
import CustomLink from '../CustomLink';
import Container from '../../components/Container';
import Gx from '@tgrx/gx';
import Button from '../../components/Button'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
const logo = '/suppilog_logo_horizontal_dark.png'
const Icon = styled(FontAwesomeIcon)`
	font-size: 18px;
	text-align: right;
    :hover {
        cursor: pointer;
	}
	
`;
const Image = styled.img`
	max-height: 20px; !important

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

const NavContainer = styled.div`
	position: fixed;
	min-width: 100%;
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

const OpenNav = styled.div`
	top: 0;
	min-height: 100vh;
	background: white;
	text-align: center;
	padding-top: 150px;
	z-index: 10000;
	position: absolute;
	width: 100vw;

`

const IconContainer = styled(Container)`
	display: absolute,
	min-width: 100%;
	text-align: right !important;
	margin-top: 0px;

`
const LinkText = styled.h2 `

	line-height: 60px;


`

const Navigation = ({ className }) => {
	// const router = useRouter()
	// const context = useContext(AppContext)  
	const [navOpen, setNavOpen] = useState(false)
    return(
		<>
		<NavContainer className={className} >
		<Container>

			
			<Gx col={2} breakpoint={100}>
				<Link to="/" >
					<ImageContainer>
						<Image src={logo} />
					</ImageContainer>
				</Link>                
			</Gx>
	
			<Gx col={8} breakpoint={100}>

				<Button style={{display: "inline-block"}} color={"#31004C"}>Kirjaudu</Button>   
				<Text style={{display: "inline-block"}}>Tai</Text>
				<Button style={{display: "inline-block"}}color={"#0C10E9"}>Rekisteröidy</Button>             
  

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
							<IconContainer>
								<div onClick={e => setNavOpen(false)} style={{lineHeight: "50px !important", textAlign: "center", pointer: "cursor", lineHeight: "50px", color: "#212121"}}> 
									<Icon  icon={faTimes} style={{marginRight: "10px"}}/>
									<p style={{display: "inline-block"}}>Sulje </p>
								</div>	
							</IconContainer>
							<LinkText onClick={e => setNavOpen(false)} >
								<CustomLink to="/" 
									onClick={e => setNavOpen(false)}
									color={props=>props.theme.colors.primary} 
									activeColor={props=>props.theme.colors.black}
								>
									Etusivu
								</CustomLink>
							</LinkText>
							<LinkText onClick={e => setNavOpen(false)} >
								<CustomLink to="/meista" 
									onClick={e => setNavOpen(false)}
									color={props=>props.theme.colors.primary} 
									activeColor={props=>props.theme.colors.black}
								>
									Meistä
								</CustomLink>
							</LinkText>
							<LinkText onClick={e => setNavOpen(false)} >
								<CustomLink to="/myyjayrityksille" 
									onClick={e => setNavOpen(false)}
									color={props=>props.theme.colors.primary} 
									activeColor={props=>props.theme.colors.black}
								>
									Myyjäyrityksille
								</CustomLink>
							</LinkText>
							<LinkText onClick={e => setNavOpen(false)} >
								<CustomLink to="/tietosuojalauseke" 
									color={props=>props.theme.colors.primary} 
									activeColor={props=>props.theme.colors.black}
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