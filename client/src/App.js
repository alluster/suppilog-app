import React, { Suspense } from 'react';
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
import Navigation from './components/Navigation';
import Provider from './context/Provider';
import About from './Views/About';
import Sellers from './Views/Sellers';
import Buyers from './Views/Buyers';
import Articles from './Views/Articles';
import Article from './Views/Article';
import Product from './Views/Product';
import Spinner from './components/Spinner'


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
		all: unset;
		font-family: 'Open Sans', sans-serif;
    }
    a:link {
        all: unset !important;
		::-webkit-any-link {
			all: unset;
		}
    }
    a:focus {
        all: unset !important;
    }
    a:active {
        all: unset !important;
    }
    a:visited {
        all: unset !important;
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
		// all: unset;
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
	
	
	
	return (
		<Suspense fallback={<Spinner />}>

		<ThemeProvider theme={theme}>
				<Provider>
					<Router>
						<Navigation />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/article/:id" component={Article} />
							<Route exact path="/articles" component={Articles} />
							<Route exact path="/about-us" component={About} />
							<Route exact path="/sellers" component={Sellers} />
							<Route exact path="/buyers" component={Buyers} />
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
						<Footer />
					</Router>
					<GlobalStyle />
				</Provider>
		</ThemeProvider>
		</Suspense>

  	);
}	
  	

export default App;