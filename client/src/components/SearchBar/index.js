import React, { useState, useEffect} from 'react';
import styled from 'styled-components';

import { device } from '../../device';
import Input from '../../components/Input';
import { ReactiveBase, DataSearch, ReactiveList, SelectedFilters } from '@appbaseio/reactivesearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../../style.css';
import CardProduct from '../CardProduct';
import CardListItem from '../CardListItem';

import ReactSwipe from 'react-swipe';


const SearchBar = () => {

const [searchText, setSearchText] = useState("")
const InputContainer = styled.div`
	position: absolute;
	min-width: 900px !important;
	margin-top: -15px !important;
	display: flex;
	flex-direction: row;
	height: 100%;
	border: #E6E6E6 solid 0.8px;
	@media ${device.laptop} {
		max-width: calc(100% - 20px) !important;
		min-width: calc(100% - 20px) !important;
		height: 50px;
	}
`;

const InputLogoContainer = styled.div`
	background: white;
	padding-top: 20px;
	width: 250px;
	justify-content: center;
	height: auto;
	text-align: center;
	@media ${device.laptop} {
		max-width: 80px !important;
		height: 50px;

	}

`
const InputLogo = styled.img `
	height: 20px;
	width: auto;
	margin-left: auto;
	margin-right: auto;
	@media ${device.laptop} {
		height: 15px !important;
	}

`;


const InputButton = styled.button`
	  background-color: ${props => props.theme.colors.primary}
	  color: white;
	  height: 61.6px;
	  font-size: 20px;
	  font-weight: 600;
	  line-height: 60px;
	  text-align: center;
	  display: inline-block;
	  width: 300px;
	  margin-top: -0.8px;
	  margin-right: -0.8px;
	  @media ${device.laptop} {
		max-width: 60px !important;
		height: 50px;
		line-height: 50px;


	}

`;

const Icon = styled.i`
	 line-height: 60px;
	 margin-right: 20px;
	 font-size: 25px;
	 @media ${device.laptop} {
		height: 50px;
		line-height: 50px;
		font-size: 15px;
		text-align: center
		margin-right: 0px;;


	}
`
const ButtonText = styled.span`
color: white !important;
@media ${device.laptop} {
	display: none


}
`;
    return(
		<ReactiveBase
				app="suppilog"
				credentials="iNQDxBHRm:f194e6d7-45c6-4f5e-ab94-fc3adbd1f47a"
				url="https://scalr.api.appbase.io"
				analytics={true}
				
				noInitialQuery={true}
				
			>
		
			<DataSearch

				onChange={(value) => {setSearchText(value) ;
				}}
				componentId="search"
				placeholder="Etsi tuotteita"
				autosuggest={true}
				showIcon={true}
				showFilter={true}
				filterLabel=""
				showClear={true}
				defaultValue="Suosituimmat"

				dataField={[
					'search_terms',
					'name',
					'product_family_name',
					'vendor_name',

				]}
				fieldWeights={[
					1,
					1,
					1
				]}
				fuzziness={1}
				highlightField={[
					'name'
				]}
				className="search-bar"
				/>
				
			<SelectedFilters 
				showClearAll={true}	
				clearAllLabel="Tyhjennä haku"

			/>
		
			
			<ReactiveList


				style={{
					backgroundColor: "white", 
					zIndex: "1000000", 
					display: "flex",
					flexDirection: "column"
					}}
				componentId="result"
				dataField="name"
				pagination={true}
				scrollTarget={false}
				scrollOnChange={false}
				react={{
				and: [
					'search'
				]
				}}
				size={3}
				render={({ data }) =>(
					<div
					style={{display: "flex", flexDirection: "row", width: "100%"}}
					>
						{data.map( item => (
							<CardProduct 
									key={item._id} 
									name={item.name}
									image={item.photo_url ? item.photo_url : '/placeholder.png'}
									type={item.consumer_package_size}
									quantity={item.sales_unit_size}
							/>
						))}
					</div>
			
						
				)}
			/>
				

		</ReactiveBase>

		

    );
};

export default SearchBar;