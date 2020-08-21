import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Gx from '@tgrx/gx';
import Container from '../Container';
import { device } from '../../device';



const Content = styled.div`
	width: 100%;
	position: fixed;
    height: 100px;
	margin-top: calc(100vh - 100px);
	z-index: 1000000;
	align-items: center;
	text-align: center;
	background-color: white;
    @media ${device.laptop} {
    }
`;




const GDPR = () => {
	const [show, setShow] = useState(
		localStorage.getItem('displayDisclamer') || false
	)
	const Disclamer = () => {
	const setCookies = () => {
		localStorage.setItem('displayDisclamer', true)
	}
			if(show === true ){
				return(
					<Content>
						<h1>Disclaimer</h1>
						<button 
							onClick={setCookies}
						> 
							I accept coockies
						</button>
			
					</Content>
				)
			}
	
		}
		
		
	
		useEffect(() => {
			setShow(localStorage.getItem('displayDisclamer'))
			
		}, [])

	
	
    return(
	<div>
		{Disclamer()}
	</div>

    );
};


export default GDPR;