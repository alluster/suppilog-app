import React, { useContext, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from '../../context/Context';
import CustomLink from '../CustomLink';
import Container from '../../components/Container';
import { Row, Col } from 'react-flexbox-grid';
import Button from '../../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { device } from '../../device';
import Flag from 'react-world-flags'

const logo = '/suppilog_logo_horizontal_dark.png'

const NavContainer = styled.div`
	position: absolute;
	min-width: 100%;
	z-index: 100000;
	height: 80px;
	top: 0;
	margin-bottom: -40px;
    ${props => {
        if (props.navColor === 'dark') return css`
            background-color: ${props => props.theme.colors.brand};
		`;
	}}

`;


const Icon = styled(FontAwesomeIcon)`
	font-size: 40px;
	text-align: right;
	padding-top: 20px;
	color: ${props => props.theme.colors.white};

    :hover {
		cursor: pointer;
	}
	
	
`;
const Image = styled.img`
	max-height: 30px;
	@media ${device.laptop} {
		max-height: 40px;
		
	}
	

`

const ImageContainer = styled.div `
	height: 80px;
	text-align: left;
	padding-top: 25px;
	:hover {
		cursor: pointer;
	}
	@media ${device.laptop} {
		height: 80px;
		padding-top: 30px;
	}
	
`

const Text = styled.div `
	line-height: 80px !important;
	text-align: center;
	margin-left: 20px;
	margin-right: 20px;
	color: white;



`;


const OpenNav = styled.div`
	top: 0;
	min-height: 100vh;
	background: rgba(255, 255, 255, 0.98);
	text-align: center;
	padding-top: 50px;
	z-index: 10000;
	position: fixed;
	width: 100vw;
	@media ${device.laptop} {
		position: fixed;
		height: calc(100vh + 200px);
		text-align: left;
 	}

`;

const LinkText = styled.h2 `

	line-height: 60px;
	color: black !important;


`;

const ButtonsRow = styled.div`
	align-self: center;
	align-items: center;
	justify-content: center;
	text-align: center;
	@media ${device.laptop} {
    	display: none !important;
 	}
`;

const BurgerContainer = styled.div`
	text-align: right;
	width: 100%;

`;

const LanguageSelector = styled.div`
	display: flex;
	height: 30px;
	flex-direction: row;
	justify-content:center;
	align-items: center;
	margin-top: 100px;

`;
const StyledFlag = styled(Flag)`
	max-height: 20px !important;
	padding: 30px;
	margin-bottom: 50px;
	:hover{
		cursor: pointer;
	}
`;



const Navigation = ({ className, navColor }) => {
	const context = useContext(AppContext)
	const [navOpen, setNavOpen] = useState(false)

	const LocaleSelector = (locale) => {
		localStorage.setItem('lang', locale);
		context.setLang(locale)
		setNavOpen(false)
		window.location.reload();
	}

	useEffect(() => {
		let mounted = true;
		if(mounted){
			context.GetPages(`${context.lang}`)
		}
		return () => mounted = false;
		
	}, [])
    return(
		<>
		<NavContainer navColor={navColor} className={className} >
			<Container>
				<Row>
					<Col xs={3}>
						{
							navOpen ? 
						
								""
								: 
								
								<CustomLink to="/" >
									<ImageContainer>
										<Image src={logo} />
									</ImageContainer>
								</CustomLink>                
				
						}
					</Col>
					<Col xs={6}>
						{
								navOpen ? 
						
								""
								: 

							
									<ButtonsRow>
										<Button 
											onClick={() => window.location.assign('https://secure.suppilog.fi/kayttajat/kirjaudu')} 
											style={{display: "inline-block"}} color={"#31004C"}
										>
											{context.t('button.sign-in')}
											 
										</Button>   
										<Text style={{display: "inline-block"}}>{context.t('button.or')}</Text>
										<Button 
											onClick={() => window.location.assign('https://secure.suppilog.fi/kayttajat/rekisteroidy')} 
											style={{display: "inline-block"}}color={"#0C10E9"}>
												{context.t('button.register')}
										</Button>             
									</ButtonsRow>
							
						}
					</Col>


					
					<Col xs={3}>
						<BurgerContainer  > 
						{
							!navOpen ? 
							
							<Icon  onClick={e => setNavOpen(true)}style={{display: "inline-block"}} icon={faBars} />
							: 
							<Icon  onClick={e => setNavOpen(false)} icon={faTimes} style={{color: "black"}}/>


						}
						</BurgerContainer>	
					</Col>			
				</Row>
			</Container>

		</NavContainer>        
					{
						navOpen ? 
						<OpenNav>
						
							<Container>
								{
									context.pages.map((item, i) => {
										return(
											<LinkText key={i} onClick={e => setNavOpen(false)} >		
												<CustomLink to={`/page/${item.sys.id}`} 
												>
													{item.fields.name}
												</CustomLink>
											</LinkText>

										)
									})
								}
								<LanguageSelector>
									<StyledFlag code="fi" onClick={e => LocaleSelector("fi")}  />
									<StyledFlag code="gb" onClick={e => LocaleSelector("en-US")}/>
								</LanguageSelector>
							</Container>
						</OpenNav>
						: 
						<></>
					}
					</>
    );
};


export default Navigation;