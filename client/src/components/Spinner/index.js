import React from 'react';
import styled from 'styled-components';
import ClipLoader from "react-spinners/ClipLoader";
import { device } from '../../device';


const Spinner = () => {
	const Wrapper = styled.div `
		display: flex;
		justify-content: center;
		align-items: center;

		margin-left: auto;
		margin-right: auto;
		flex-direction: column;
		margin-top: 30px;
		margin-bottom: 30px;
			@media ${device.laptop} {
				width: 100%;
			}
			
	`;

	const LoadingText = styled.p`
		margin-bottom: 20px;
	`;

    return(
			<Wrapper>
				<LoadingText>Loading content please wait..</LoadingText>
				<ClipLoader/>
			</Wrapper>

    );
};

export default Spinner;