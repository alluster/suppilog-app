import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import theme from "./theme";
import { ThemeProvider } from 'styled-components';
import Home from './Views/Home';
import Category from './Views/Category';

import Hero from './components/Hero';
import Footer from './components/Footer';
import SubNavigation from './components/SubNavigation';
import Navigation from './components/Navigation';
import Provider from './context/Provider';
import Container from './components/Container';
import ItemRow from './components/ItemRow';
import CardNumber from './components/CardNumber';
import Banner from './components/Banner';




const GlobalStyle = createGlobalStyle`
    body, html {
        margin: 0px;
        padding: 0px;
		max-width: 100% ;
		height: 100%;
		font-family: 'Open Sans', sans-serif;
		font-display: swap;
		color: ${props => props.theme.colors.black}

    }
    h1 {

        margin: 0px;
		font-weight: 500;
    }
    h2 {

		margin: 0px;

    }
    h3 {
  
		margin: 0px;

    }
    h4 {
		margin: 0px;

    }
    h5 {
      
		margin: 0px;

    }
    h6 {
  
		margin: 0px;

	}
	p {
		margin: 0px;

	}
    img {
        max-width: 100%;
    }
    a {
		all: unset;
		font-family: 'Open Sans', sans-serif;
    }
    a:link {
        all: unset;
    }
    a:focus {
        all: unset;
    }
    a:active {
        all: unset;
    }
    a:visited {
        all: unset;
    }
    a:hover {
		cursor: pointer !important;
		all: unset;
    }
    button {
		all: unset;
		font-family: 'Open Sans', sans-serif;
		

	}
	button:hover {
		cursor: pointer !important;
	}





    input {
		all: unset;
		font-family: 'Open Sans', sans-serif;

        ::-webkit-input-placeholder {
    }
    :-moz-placeholder {
        /* FF 4-18 */
        opacity: 1;
    }
    ::-moz-placeholder {
        /* FF 19+ */
        opacity: 1;
    }
    :-ms-input-placeholder {
        /* IE 10+ */
    }
    ::-ms-input-placeholder {
        /* Microsoft Edge */
    }
    ::placeholder {
        /* modern browser */
    }
    }
    
`;


function App() {
	
  return (
	<ThemeProvider theme={theme}>
		<Provider>

		<Router>
			<Navigation />
			<Hero image={"/suppilog-dinner.jpg"} 
				title={"Kaikki tarvitsemasi tuotteet digitaalisessa palvelussamme"} 
				ingress={"Uusi tapa hoitaa tukkuostaminen"}  
			/>
			<Container>
				<ItemRow>
					<CardNumber ingress="Suppilogissa on tehty jo yli" number={90665} title="yritystenvälistä tukkutilausta" />
					<CardNumber ingress="Tilaa yli" number={76780} title="tukkutuotetta kaikista parhaimmilla toimitusehdoilla ja hinnoilla"c/>
					<CardNumber ingress="Yli" number={56789} title="yritystä käyttää Suppilogin digitaalista tukkukaupankäynnin alustaa myymiseen ja ostamiseen"/>

				</ItemRow>
			</Container>
			<Banner />
		
			{/* <SubNavigation/> */}
			<Switch>
				<Route exact path="/" component={Category} />
				<Route exact path="/tuotekategoriat" component={Category} />
				<Route exact path="/tuotteet" component={Category} />
				<Route exact path="/" component={Home} />
				<Route exact path="/" component={Home} />

			</Switch>
			<Footer />

		</Router>
		<GlobalStyle />

		</Provider>
	</ThemeProvider>

  );
}
export default App