import React, { useState, useContext} from 'react';
import { AppContext } from '../../context/Context'
import { ReactiveBase, DataSearch, ReactiveList, SelectedFilters, ToggleButton } from '@appbaseio/reactivesearch';
import '../../style.css';
import CardProduct from '../CardProduct';
import ItemRow from '../../components/ItemRow';
import Spinner from '../Spinner';
import { Row, Col, Grid } from 'react-flexbox-grid';

const SearchBar = () => {
	const [searchText, setSearchText] = useState("")
	const context = useContext(AppContext);
	const [showResults, setShowResults] = useState(false)

    return(
		<ReactiveBase
				app="suppilog"
				credentials="iNQDxBHRm:f194e6d7-45c6-4f5e-ab94-fc3adbd1f47a"
				url="https://scalr.api.appbase.io"
				recordAnalytics={true}
				
				noInitialQuery={true}
				
			>
			<DataSearch
				onQueryChange={value => setSearchText(value)}
				componentId="search"
				placeholder={context.t('page.home.hero.search-placeholder')}
				autosuggest={true}
				showIcon={false}
				// showFilter={true}
				// filterLabel="Filters"
				showClear={true}
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
				fuzziness={1}
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
				componentId="result"
				dataField="name"
				pagination={false}
				// scrollTarget="search"
				// loader={true}
				scrollOnChange={false}
				react={{
				and: [
					'search'
					// , 'Filters'
				]
				}}
				size={9}
				render={({ data }) => {
					if(searchText )  {
						console.log(searchText)

						return(
							<Row>

								{
									data.map( item => (
										
									<Col lg={4} key={item._id} 
									>
										<CardProduct 
											data={item}
											// name={item.name}
											// image={item.photo_url ? item.photo_url : '/placeholder.png'}
											// consumer_package_size={item.consumer_package_size}
											// sales_unit_size={item.sales_unit_size}
											// id={item._id}
											// product_family_name={item.product_family_name}
											// vendor={item.vendor}
										/>
									</Col>
									
								))}
							</Row>

						
					)}
					else{
						return(
							<></>
						)
					}
						
				}
			}
			/>
		</ReactiveBase>
    );
};

export default SearchBar;