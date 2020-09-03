import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from '../Input';
import Button from '../Button';
import { device } from '../../device';
import { AppContext } from '../../context/Context';




const StyledButton = styled(Button) `
	width: 100%;
	height: 50px;
	font-size: 20px;
`;


const CTA = styled.p`
	text-align: center;
	margin-bottom: 10px;
	margin-top: 20px;
		@media ${device.laptop} {
		text-align: left;
	}
`;

const StyledInput = styled.input `
	background-color: white;
	font-family: 'Open Sans'
	font-weight: 600;
	height: 60px;
	line-height: 60px;
	font-size: 18px;
	padding-left: 20px;
	width: calc(100% - 20px);
	margin-bottom: 30px;
	::placeholder {
		color: ${props => props.theme.colors.linkGray} !important;
		font-size: 18px;
		font-weight: 400;
		@media ${device.laptop} {
			font-size: 16px;	
		}

	}
	::-webkit-input-placeholder {
		color: ${props => props.theme.colors.linkGray} !important;
		font-size: 18px;
		font-weight: 400;
		@media ${device.laptop} {
			font-size: 16px;	
		}


	}
	:-ms-input-placeholder {
		color: ${props => props.theme.colors.linkGray} !important;
		font-size: 18px;
		font-weight: 600;
		@media ${device.laptop} {
			font-size: 16px;	
		}
	}
	@media ${device.laptop} {
		height: 50px;
		line-height: 30px;


		
    }
`;

const Label = styled.p`
	margin-bottom: 10px;

`
const LoginForm = () => {
	const context = useContext(AppContext)
	const [value, setValue] = useState("")
    return(
		<form>
			<Label>{context.t("input.email")}</Label>
			<StyledInput 
				onChange={e => setValue(e.target.value)} 
				value={value}
				type="email"

				/> 
		
			<StyledButton
				color="#0C10E9"
				type="submit"
				onClick={() => {
					localStorage.setItem('email', value);
					window.location.assign('https://secure.suppilog.fi/kayttajat/rekisteroidy') 
				}
				}
			>	
				{context.t('button.register')}
			</StyledButton>
			<CTA>{
				context.t('notification.already-member')}
			</CTA>

			<StyledButton
				textColor="#0C10E9"
				onClick={() => {
					localStorage.setItem('email', value);
					window.location.assign('https://secure.suppilog.fi/kayttajat/kirjaudu') 
				}
				}
				color="#EEEEEE"
				>
					{context.t('button.sign-in')}
			</StyledButton>
		</form>

    );
};

LoginForm.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ])
 }

export default LoginForm;