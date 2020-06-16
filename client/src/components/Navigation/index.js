import React from 'react';
import styled from 'styled-components';
import CustomLink from '../CustomLink';
import Gx from '@tgrx/gx';
import Button from '../../components/Button'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch, faCog, faPlus, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
const logo = '/suppilog_logo_horizontal_white.png'
const Icon = styled(FontAwesomeIcon)`
    font-weight: 400;
	font-size: 12px;
	margin-right: 5px;
    :hover {
        cursor: pointer;
	}
	
`;
const Image = styled.img`
	max-height: 30px; !important

`

const ImageContainer = styled.div `
	max-height: 50px;
	padding: 10px;
`

const Text = styled.div `
	line-height: 50px !important;
	color: white;
	text-align: center;
	margin-left: 20px;
	margin-right: 20px;


`



const NavContainer = styled.div`
	position: fixed;
    text-align: center;
    line-height: 50px;
	min-width: 100%;
	height: 50px;
	top: 0;
	margin-bottom: -40px;
	background-color: #4E186C;
	box-shadow:
	2.8px 0 2.2px rgba(0, 0, 0, 0.034),
	6.7px 0 5.3px rgba(0, 0, 0, 0.048),
	12.5px 0 10px rgba(0, 0, 0, 0.06),
	22.3px 0 17.9px rgba(0, 0, 0, 0.072),
	41.8px 0 33.4px rgba(0, 0, 0, 0.086),
	100px 0 80px rgba(0, 0, 0, 0.12)
;

`;



const Navigation = ({ className }) => {
	// const router = useRouter()
	// const context = useContext(AppContext)  
    return(
		<NavContainer className={className} >
			<Gx col={2} breakpoint={100}>
				<Link to="/" >
					<ImageContainer>
						<Image src={logo} />
					</ImageContainer>
				</Link>                
			</Gx>
	
			<Gx col={4} breakpoint={100}>
			<Button style={{display: "inline-block"}}color={"#1E88E5"}>Rekisteröidy</Button>             

				<Text style={{display: "inline-block"}}>Tai</Text>
				<Button style={{display: "inline-block"}} color={"#DB8E41"}>Kirjaudu</Button>     

			</Gx>
			
			<Gx col={1} breakpoint={100}>
				<Link to="/">
					<div style={{lineHeight: "50px !important", color: "white"}}> 
						<Icon style={{display: "inline-block"}} icon={faEnvelope} />
						<span style={{display: "inline-block", fontSize: "12px"}}>Viestit</span>
					</div>	
				</Link>                
			</Gx>

			<Gx col={1} breakpoint={100}>
				<Link to="/">
					<div style={{lineHeight: "50px !important", color: "white"}}> 
						<Icon style={{display: "inline-block"}} icon={faCog} />
						<span style={{display: "inline-block", fontSize: "12px"}}>Asetukset</span>
					</div>	
				</Link>                
			</Gx>
			
		</NavContainer>        
    );
};
Navigation.propTypes = {
    className: PropTypes.string
};

export default Navigation;