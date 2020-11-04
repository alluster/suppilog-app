import React, { Suspense, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import Home from './Views/Home';
import Footer from './components/Footer';
import BannerRegister from './components/BannerRegister';
import Provider from './context/Provider';
import Page from './Views/Page';
import Articles from './Views/Articles';
import Article from './Views/Article';
import Product from './Views/Product';
import Spinner from './components/Spinner'
import ReactGA from 'react-ga';
import Intercom from 'react-intercom';

const GlobalStyle = createGlobalStyle`
    body, html {
        margin: 0px;
        padding: 0px;
		max-width: 100% ;
		min-height: 100vh;
		font-family: 'Open Sans', sans-serif !important;
		font-display: swap;
		color: ${props => props.theme.colors.black};
		hyphens: manual;
		text-rendering: optimizeLegibility;
		background-color: ${props => props.theme.colors.background}
		
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
		margin: 8px 0px 8px 0px;

	}
    img {
        max-width: 100%;
    }
    a {
		text-decoration: none;
    }
    a:link {
		text-decoration: none;
		::-webkit-any-link {
			text-decoration: none;
		}
    }
    a:focus {
		text-decoration: none;
    }
    a:active {
		text-decoration: none;
    }
    a:visited {
		text-decoration: none;
    }
    a:hover {
		cursor: pointer !important;
		text-decoration: none;
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
    
    
`;


const App = () => {
	useEffect(() => {
		ReactGA.initialize('UA-178741766-1');
		ReactGA.pageview(window.location.pathname + window.location.search);

	}, [])
    
 
	return (
		<Suspense fallback={<Spinner />}>
			<ThemeProvider theme={theme}>
				<Provider>
					<Router>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route  path="/article/:id" component={Article} />
							<Route exact path="/articles" component={Articles} />
							<Route exact path="/:id/:name" component={Page} />
							<Route exact path="/product/:id" component={Product} />

							<Route path='/sign-in' component={() => { 
								window.location.href = 'https://secure.suppilog.fi/kayttajat/kirjaudu'; 
								return null;
							}}/>
							<Route path='/register' component={() => { 
								window.location.href = 'https://secure.suppilog.fi/kayttajat/rekisteroidy'; 
								return null;
							}}/>
						</Switch>
						<Intercom appID="by4niuhj" />
						<BannerRegister />
						<Footer />
					</Router>
					<GlobalStyle />
				</Provider>
			</ThemeProvider>
		</Suspense>

  	);
}	
  	

export default App;