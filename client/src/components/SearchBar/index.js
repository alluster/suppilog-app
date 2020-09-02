import React, { useState, useContext} from 'react';
import { AppContext } from '../../context/Context'
import { ReactiveBase, DataSearch, ReactiveList, SelectedFilters } from '@appbaseio/reactivesearch';
import '../../style.css';
import CardProduct from '../CardProduct';
import ItemRow from '../../components/ItemRow';

const SearchBar = () => {
	const [searchText, setSearchText] = useState("")
	const context = useContext(AppContext);
    return(
		<ReactiveBase
				app="suppilog"
				credentials="iNQDxBHRm:f194e6d7-45c6-4f5e-ab94-fc3adbd1f47a"
				url="https://scalr.api.appbase.io"
				recordAnalytics={true}
				
				noInitialQuery={true}
				
			>

			<DataSearch
				
				onChange={(value) => {setSearchText(value)}}
				componentId="search"
				placeholder={context.t('page.home.hero.search-placeholder')}
				autosuggest={true}
				showIcon={false}
				showFilter={true}
				filterLabel="Filters"
				showClear={true}
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
					componentId="MeetupTops"
					dataField={[
						'search_terms',
						'name',
						'product_family_name',
						'vendor_name',

					]}
					data={
						[{"label": "Ravintolat",   "value": "olut"},
						{"label": "K-Kaupat",   "value": "Travel"},
						{"label": "Alkoholilupa A", "value": "Outdoors"},
						{"label": "Apteekit", "value": "Outdoors"},
						{"label": "Europe", "value": "Outdoors"},
						{"label": "Luontaistuotekaupat", "value": "Outdoors"}
					]
						

					}
					// multiSelect={true}
	
				/> */}
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
				scrollTarget=""
				scrollOnChange={false}
				react={{
				and: [
					'search'
				]
				}}
				size={3}
				render={({ data,  }) => {
					if(data) {
						return(
							<ItemRow>
								{data.map( item => (
									<CardProduct 
										key={item._id} 
										data={item}
										// name={item.name}
										// image={item.photo_url ? item.photo_url : '/placeholder.png'}
										// consumer_package_size={item.consumer_package_size}
										// sales_unit_size={item.sales_unit_size}
										// id={item._id}
										// product_family_name={item.product_family_name}
										// vendor={item.vendor}
									/>
								))}
							</ItemRow>	
						)
					}
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