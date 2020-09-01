import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from '../Input';
import Button from '../Button';
import { device } from '../../device';
import { AppContext } from '../../context/Context';

const Wrapper = styled.div`
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
	padding-right: 40px;
	@media ${device.laptop} {
		padding-right: 10px;
	}


`;

const StyledButton = styled(Button) `
	width: 100%;
	height: 50px;
	font-size: 20px;
`;

const StyledInput = styled(Input)`
	margin-bottom: 20px !important;
	border: #E6E6E6 solid 0.8px;

`;

const CTA = styled.p`
	text-align: center;
	margin-bottom: 10px;
	margin-top: 20px;
		@media ${device.laptop} {
		text-align: left;
	}
`;




const LoginForm = () => {
	const context = useContext(AppContext)

    return(
        <Wrapper>
		   <StyledInput 
				label={context.t('input.email')}
				placeholder=""
			/>
			<StyledButton
				color="#0C10E9"
				to="/register"

			>	
				{context.t('button.register')}
			</StyledButton>
			<CTA>{
				context.t('notification.already-member')}
			</CTA>

			<StyledButton
				textColor="#0C10E9"
				to="/sign-in"
				color="#EEEEEE"
				>
					{context.t('button.sign-in')}
			</StyledButton>
        </Wrapper>
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