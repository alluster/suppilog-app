import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

const Banner = ({title, children}) => {
	const [open, setOpen] = useState(false)
	const AccordionContainer = styled.div`
	
	`;
	
	const AccordionLine= styled.div`
		border-top: solid 1px black;
		width: 100%;
		display: flex;
		flex-direction: row;
		margin-top: 30px;

	`;	
	
	const AccordionContent = styled.div`
		width: 100%;

	`;
	const Icon = styled(FontAwesomeIcon)`
		justify-content: flex-end;
		flex: 1;
		font-size: 30px;
	`;	
	const IconContainer = styled.div`
		align-items: flex-end;

	`;

	const Title = styled.h3`
		flex: 1;
	`;



    return(
		<AccordionContainer 
			children={children} 
			onClick={() => setOpen(!open)}
		>
			<AccordionLine >
				<Title>
					{title}
				</Title>
				<IconContainer>
					{
						open ?
					<Icon icon={faAngleDown} />
					:
					<Icon icon={faAngleUp}  />
					}
				</IconContainer>
				

			</AccordionLine>
			{
				open ?
				<AccordionContent >
					{children}
				</AccordionContent>
				: 
				null	
		}
		</AccordionContainer>
       
    );
};

 

export default Banner;