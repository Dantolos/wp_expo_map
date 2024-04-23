import { __ } from '@wordpress/i18n'; 
import { useSelect } from '@wordpress/data';
import { useState, useEffect } from 'react';
import { plusCircle,  more } from '@wordpress/icons';
import { MAP_SVG } from './helper/svg-preparing';
import ExpoMapListItem from './components/ExpoMapListItem';

import { 
	useBlockProps,
	InspectorControls,
	MediaUploadCheck,
	MediaUpload,
	
} from '@wordpress/block-editor';

import {
	PanelBody,
	PanelHeader,
	RangeControl,
	TabPanel,
	Button,
	ResponsiveWrapper,
	FormToggle,
	Card, CardHeader, CardBody
} from '@wordpress/components';

import './editor.scss';


export default function Edit( {attributes, setAttributes } ) {

	const { mapSVGId, mapSVGUrl, mapZoom, boothes } = attributes;
	const [fetchedSVG, setFetchedSVG] = useState(null);
	const [ expoMap, setExpoMap ] = useState(false);
	const [expoList, setExpoList] = useState(false);
	
	//const EXPO_MAP = new MAP_SVG()

	const onSelectMedia = (media) => { 
		setAttributes({
			mapSVGId: media.id,
			mapSVGUrl: media.url,
		});
	}

	const setSelectetContent = async (itemId, selectedContent) => {

		const selectedItem = boothes.find(item => item.id === itemId);
		
		if (selectedItem) {
			// If the item exists, update it with the new data
			const updatedBoothes = await boothes.map( item => {
			    if (item.id === itemId) {
				   return { ...item, selectedContent: selectedContent }; // Update the selectedContent property of the matching item
			    }
			    return item;
			});

			await setAttributes({ boothes: updatedBoothes });
		} else {
			console.error(`Item with ID ${itemId} not found.`);
		}
		
	};
 
	const fetchSVG = async () => {
		try {
		    const response = await fetch(mapSVGUrl);
		    if (!response.ok) {
			   throw new Error('Failed to fetch SVG');
		    }
		    const svgContent = await response.text();
			setFetchedSVG(svgContent); // Update state with fetched SVG content
			
		} catch (error) {
		    console.error('There was a problem with the fetch of the SVG MAP:', error);
		}
	}

	// Fetch SVG when mapSVGUrl changes
	useEffect(() => { 
		if (mapSVGUrl) {
		    fetchSVG();
		} 
	}, [mapSVGUrl]);
			
	// call map class and saves in expomap state
	useEffect(() => {
		let MAP_WRAPPER = document.querySelector('#expo-plan-wrapper');
		let MAP_SVG_IMAGE = MAP_WRAPPER.querySelector('svg');
		if(MAP_SVG_IMAGE) {
			let newExpoMap = new MAP_SVG(MAP_SVG_IMAGE);

            	// Compare the new ExpoMap with the existing one
			if (!expoMap || !isEqual(newExpoMap, expoMap)) {
				setExpoMap(newExpoMap);
			}
		}
	}, [fetchedSVG]);

	useEffect( () => {
		if ( expoMap ) { 
			let elementList = []
			
			for (let index = 0; index < expoMap.ALL_ELEMENTS.length; index++) {
				const element = expoMap.ALL_ELEMENTS[index];
				const elementType = element.id.replace('_ai', '')
									.replace('b', 'Booth')
									.replace('z', 'Zone')
									.replace('i', 'Info') 
									.replace('a', 'Arena') 
									.replace('-', ' ').replace('-', ' ') 
									.replace(/\d+/g, "")
									.trim();
				const elementTypeID = element.id.replace('_ai-', '')
									.replace(/\d+/g, "")
									.replace('-', '');
				const elementNr = element.id.replace('_ai-', '')
									.replace('_ai-', '')
									.replace('-', ' ')
									.replace(/[abiz]/g, '')
									.trim()

				let newElement = { 
						id : element.id,
						type : elementType,
						type_id : elementTypeID,
						nr : elementNr,
						active : true 
					}
				elementList.push(newElement) 
			}
			
			elementList.sort((a, b) => a.type.localeCompare(b.type) || (a.nr - b.nr)); 

			setExpoList(elementList) 
			if(boothes.length < 1){
				setAttributes({ boothes: elementList })
			} 
		} 

		let elementItem = document.querySelectorAll('.element-item')
		
	}, [expoMap]);

	const toggleActiveState = (index) => {
		setExpoList(prevList => {
		  const updatedList = prevList.map((elem, idx) => {
		    if (idx === index) {
			 return { ...elem, active: !elem.active }; 
		    }
		    return elem;
		  });
		  return updatedList;
		});
	};
	 
	//useEffect( () => console.log('-------> ',boothes) )

	return (
		<>
			<InspectorControls>
			<TabPanel
				className="my-tab-panel"
				activeClass="active-tab"
				orientation="horizontal"
				initialTabName="tab2" 
				tabs={ [
					{
						name: 'tab1',
						title: 'General',
						className: 'tab-one',
					},
					{
						name: 'tab2',
						title: 'Elements',
						className: 'tab-two',
					},
				] }>
				{
					( tab ) => {
						if(tab.name === 'tab1') return (
								<PanelBody 
								title={ __( 'Map', 'expo-plan' ) }
								initialOpen={ true }
							>
								
								<MediaUploadCheck>
									<MediaUpload
										onSelect={onSelectMedia}
										value={mapSVGId}
										allowedTypes={ ['image'] }
										render={({open}) => (
											<Button 
												className={mapSVGId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
												onClick={open}
											>
												{ mapSVGId == 0 && __('Choose your svg map', 'Expo Plan')}
												{ attributes != undefined && 
													<ResponsiveWrapper>
														<img src={ mapSVGUrl } height="300px" width="300px" style={{height:"300px"}}/>
													</ResponsiveWrapper>
												}
											</Button>
										)}
									/>
								</MediaUploadCheck>
		
								<RangeControl
									label="Zoom"
									allowReset
									resetFallbackValue={1}
									step={.1}
									withInputField={true}
									icon={ more }
									separatorType="topFullWidth"
									trackColor="blue"
									isShiftStepEnabled
									marks={[
										{ value: 0, label: '0', },
										{ value: 2, label: '1', },
										{ value: 10, label: '10', }
									]}
									railColor="grey"
									renderTooltipContent={ () => mapZoom }
									value={ mapZoom }
									onChange={ ( value ) => setAttributes( { mapZoom: value } )	} 
									min={ 0 }
									max={ 10 }
								/>
							</PanelBody>
						) 
						if(tab.name === 'tab2') return (
							<>
								{expoList &&
								expoList.map((item, index) => {
									const isFirstOfType = index === 0 || item.type !== expoList[index - 1].type;

									if (isFirstOfType) {
										return (
											<PanelBody
											title={item.type} 
											initialOpen={ false } 
											>
												<ExpoMapListItem booth={ boothes.find( booth => item.id === booth.id ) } itemId={item.id} toggleActiveState={toggleActiveState} setSelectetContent={setSelectetContent} />
										
												{expoList.slice(index + 1).map((nextItem, nextIndex) => (
													nextItem.type === item.type && (
														<ExpoMapListItem 
															key={index + nextIndex + 1} 
															booth={ boothes.find( booth => nextItem.id === booth.id ) }
															itemId={nextItem.id}
															index={index + nextIndex + 1} 
															toggleActiveState={toggleActiveState}
															setSelectetContent={setSelectetContent} 
														/>
													)
												))}
											</PanelBody>
										);
									} else {
										return null; 
									}
								})}		
							</>
						)
					}
					
				}
			</TabPanel>

			</InspectorControls>
			<div { ...useBlockProps() }>
				<div id='expo-plan-wrapper'>
					
					{/* Render fetched SVG content */}
					{fetchedSVG && <div className="expo-plan-image-container" style={{ transform: `scale(${mapZoom})` }} dangerouslySetInnerHTML={{ __html: fetchedSVG }} />}
					
					
				</div>
			</div>

		</>
	);
}
