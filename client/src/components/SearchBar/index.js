import React, { useState, useContext} from 'react';
import { AppContext } from '../../context/Context'
import { ReactiveBase, DataSearch, ReactiveList, SelectedFilters, ToggleButton } from '@appbaseio/reactivesearch';
import '../../style.css';
import CardProductVertical from '../CardProductVertical';
import ItemRow from '../../components/ItemRow';
import Spinner from '../Spinner';
import { Row, Col, Grid } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTimes } from '@fortawesome/free-solid-svg-icons'
const SearchBar = () => {
	const context = useContext(AppContext);
	const [searchText, setSearchText] = useState("")

    return(
		<ReactiveBase
				app="suppilog"
				credentials="iNQDxBHRm:f194e6d7-45c6-4f5e-ab94-fc3adbd1f47a"
				url="https://scalr.api.appbase.io"
				recordAnalytics={true}				
			>
			<DataSearch

				// onValueChange={(value) => { 
				// 	if(value === ''){
				// 		setSearchText(null)
				// 	}

				// }}
				// // onValueSelected={(value, cause, source) => {
				// // 	if(value) {
				// // 		setSearchText(value.value)

				// // 	}
				// // 	else{
				// // 		setSearchText(null)
				// // 	}
				// // 	}
					
				// // }

				// onQueryChange={value => setSearchText(value)}

				// onQueryChange={
				// 	function(prevQuery, nextQuery) {
				// 	  if ('match_all' in nextQuery['query']) {
				// 		nextQuery['query'] = { match_none: {} }
				// 	  }
				// 	}
				//   }
				// queryFormat="and"
				noInitialQuery={true}
				componentId="search"
				placeholder={context.t('page.home.hero.search-placeholder')}
				autosuggest={true}
				renderNoSuggestion={() => (
					<></>
				)
				}
				onValueChange={(value) => { 
					if(value === ''){
					  setSearchText({searchText: ""})
					}
					else{
						setSearchText(value)
					}
				  }}
				  onValueSelected={(value, cause, source) => {
					  setSearchText(value)
					}
				  }

				// showFilter={true}
				// filterLabel="Filters"
				showClear={true}
				clearIcon={
					<FontAwesomeIcon 
						icon={faTimes}
						// style={{zIndex: 10000, marginTop: "-30px", lineHeight: "48px"}}

					/>
				}
				// customQuery={(value, props) =>
				// 	value.length > 0
				// 	  ? DataSearch.defaultQuery(value, props)
				// 	  : { match_none: {} }
				//   }
				// defaultValue="Suosituimmat"
				// defaultSuggestions={[{label: "Suosituimmat", value: "Suosituimmat"}]}
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
				
				highlightField={[
					'name'
				]}
				className="search-bar"
				/>
				{/* <ToggleButton
					className="toggle-button"
					componentId="Filters"
					dataField={
						'name'
	
					}
					data={
						[
							{"label": `${context.t('page.home.search.filter.restaurants')}`, "value": "olut"},
							{"label": "K-Kaupat",   "value": "ruoka"},
							{"label": "Alkoholilupa A", "value": "panimo"},
							{"label": "Apteekit", "value": "vitamiini"},
							{"label": "Europe", "value": "natural"},
							{"label": "Luontaistuotekaupat", "value": "f"}
						]
					}
					multiSelect={false}
	
				/> */}
			{/* <SelectedFilters 
				showClearAll={true}	
				clearAllLabel="Tyhjennä haku"
				className="filter-buttons"

			/> */}
		{/* {
			searchText !== "" ?
				<p onClick={() => setSearchText("")}>Tyhjennä haku</p>

			:
			<></>
		} */}
			<ReactiveList
				// renderResultStats={function(stats) {
				// 	return `${context.t('page.home.search.result-stats-1')} ${stats.numberOfResults} ${context.t('page.home.search.result-stats-3')} (${context.t('page.home.search.result-stats-2')} ${stats.displayedResults})`;
				// }}
				// renderResultStats={false}
				// style={{
				// 	backgroundColor: "white", 
				// 	zIndex: "1000000", 
				// 	display: "flex",
				// 	flexDirection: "column"
				// 	}}

				defaultQuery={()=> {
					if(searchText){
					  return {
						query: {
						  match: {
							name: searchText
						  }
						}
					  }
					} else {
					  return {
						query: {
						  match_none: {}
						}
					  }
	
					}
				  }}

				componentId="result"
				dataField="name"
				pagination={true}
				showFilter={false}
				pages={4}
				scrollTarget="search"
				loader={<Spinner />}
				scrollOnChange={false}
				showResultStats={false}
				renderNoResults={() => <></> }
				react={{
				and: [
					'search'
					// , 'Filters'
				]
				}}
				size={6}
				render={({ data }) => {


						return(
							<div>

								{
									data.map( item => (
										
									// <Col lg={4} key={item._id} >
										<CardProductVertical 
											key={item._id}
											data={item}
									
										/>
									// </Col>
									
								))}
							</div>

						
					)}
					
						
				
			}
			/>
		</ReactiveBase>
    );
};

export default SearchBar;