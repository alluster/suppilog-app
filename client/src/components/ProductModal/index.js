import React, { useContext, useState, useEffect } from 'react';
import styled  from 'styled-components';
import { AppContext } from '../../context/Context';
import CustomLink from '../CustomLink';
import Container from '../../components/Container';
import { Row, Col } from 'react-flexbox-grid';
import Button from '../../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { device } from '../../device';


const Icon = styled(FontAwesomeIcon)`
	font-size: 40px;
	float: right;
	padding-top: 20px;
	color: ${props => props.theme.colors.white};
    :hover {
		cursor: pointer;
	}
	
	
`;


const Modal = styled.div`
	top: 0;
	min-height: 100vh;
	background: rgba(0, 0, 0, 0.8);
	padding-top: 50px;
	z-index: 10000;
	position: fixed;
	width: 100vw;
	@media ${device.laptop} {
		position: fixed;
		text-align: left;
 	}

`;

const ModalContent = styled(Container)`
	 margin-top: 40px;
	 color: white;
	 max-height: 80vh
	 text-align: center;
`;


const Image = styled.img`
	 max-height: 40vh;
	 width: auto;

`;



const ProductModal = ({ className, children }) => {
	const context = useContext(AppContext)
	

    return(
		<>
			{
				context.modalOpen ? 
					<Modal>
					
						<ModalContent>
							<Icon onClick={() => context.setModalOpen(false)} icon={faTimes} />
							<Image src={context.product.photo_url}/>
							<h2>{context.product.name}</h2>
							<p>{context.product.product_family_name}</p>
							<p>{context.product.consumer_package_size}</p>
							<p>{context.product.vendor_name}</p>
							<p>{context.product.search_terms}</p>


						</ModalContent>
					</Modal>
				: 
					<></>
			}
		</>
    );
};


export default ProductModal;