import { useState, useEffect, useRef } from 'react';
import { MAP_SVG } from "../../helper/svg-preparing";
import BoothContent from './Content_Booth';
import ArenaContent from './Content_Arena';
import InfoContent from './Content_Info';
import ZoneContent from './Content_Zone';

// Simple in-memory cache to avoid redundant API calls
const dataCache = new Map();

async function fetchingExpoData( contentID ) {
	if ( !contentID ) return null;

	if ( dataCache.has( contentID ) ) {
		return dataCache.get( contentID );
	}

	try {
		const REST_URL = `${window.location.origin}/wp-json/wp/v2/`;
		const response = await fetch( `${REST_URL}booth/${contentID}?_fields=id,title,acf` );
		if ( !response.ok ) throw new Error( `HTTP error: ${response.status}` );
		const data = await response.json();
		dataCache.set( contentID, data );
		return data;
	} catch ( error ) {
		console.error( 'Error fetching booth data:', error );
		return null;
	}
}

export default function ContentBox( { zoomControlsRef } ) {
	const [content, setContent] = useState( false );
	const initialized = useRef( false );

	// Helper-Funktion – zentriert die Karte auf ein SVG-Element
	const centerOnElement = ( svgElement ) => {
    if ( !zoomControlsRef?.current || !svgElement ) return;

    const wrapper = document.querySelector( '#expo-plan-wrapper' );
    const wrapperRect = wrapper.getBoundingClientRect();
    const elemRect = svgElement.getBoundingClientRect();

    const elemCenterX = elemRect.left + elemRect.width / 2;
    const elemCenterY = elemRect.top + elemRect.height / 2;

    const wrapperCenterX = wrapperRect.left + wrapperRect.width / 2;
    const wrapperCenterY = wrapperRect.top + wrapperRect.height / 2;

    const offsetX = wrapperCenterX - elemCenterX;
    const offsetY = wrapperCenterY - elemCenterY;

    // ← state gibt es nicht, stattdessen direkt instance verwenden
    const instance = zoomControlsRef.current.instance;
    const currentScale = instance.transformState.scale;
    const currentX = instance.transformState.positionX;
    const currentY = instance.transformState.positionY;

    zoomControlsRef.current.setTransform(
        currentX + offsetX,
        currentY + offsetY,
        currentScale,
        400,
        'easeOut'
    );
};



	useEffect( () => {
		if ( initialized.current ) return;
		initialized.current = true;

		async function init() {
			const MAP_WRAPPER = document.querySelector( '#expo-plan-wrapper' );
			const MAP_SVG_IMAGE = MAP_WRAPPER?.querySelector( '.expo-plan-image-container>svg' );
			if ( !MAP_SVG_IMAGE ) return;

			const EXPO_MAP = new MAP_SVG( MAP_SVG_IMAGE );

			// Handle URL param ?b=<boothID> for deep-linking
			const URL_PARAM = new URL( window.location.href ).searchParams;
			if ( URL_PARAM.get( 'b' ) ) {
				const contentData = await fetchingExpoData( URL_PARAM.get( 'b' ) );
				if ( contentData ) {
					setContent( contentData );
					document.getElementById( 'expomap-content-container' )
						?.classList.remove( 'hidden-content-container' );
				}
			}

			// Item list listeners
			const MAP_ITEM_LIST = document.querySelectorAll( '.expomap-list-item' );
			MAP_ITEM_LIST.forEach( BOOTH_LIST_ITEM => {
				BOOTH_LIST_ITEM.addEventListener( 'mouseover', () => {
					if ( BOOTH_LIST_ITEM.dataset.content ) {
						MAP_SVG_IMAGE.getElementById( BOOTH_LIST_ITEM.dataset.boothid )
							?.classList.add( 'hover-element' );
					}
				} );
				BOOTH_LIST_ITEM.addEventListener( 'mouseleave', () => {
					MAP_SVG_IMAGE.getElementById( BOOTH_LIST_ITEM.dataset.boothid )
						?.classList.remove( 'hover-element' );
				} );
				BOOTH_LIST_ITEM.addEventListener('click', async () => {
					const svgEl = MAP_SVG_IMAGE.getElementById(BOOTH_LIST_ITEM.dataset.boothid);
					MAP_SVG_IMAGE.querySelectorAll( '.active-element' ).forEach( el =>
			        el.classList.remove( 'active-element' )
			    );
			    svgEl?.classList.add( 'active-element' );
					centerOnElement( svgEl );
					const contentData = await fetchingExpoData( BOOTH_LIST_ITEM.dataset.content );
					setContent( contentData );
					document.getElementById( 'expomap-content-container' )
						?.classList.remove( 'hidden-content-container' );
				} );
			} );

			// SVG map element listeners
			EXPO_MAP.ALL_ELEMENTS.forEach( MAP_ELEMENT => {
				MAP_ELEMENT.addEventListener('click', async () => {
					MAP_SVG_IMAGE.querySelectorAll( '.active-element' ).forEach( el =>
			        el.classList.remove( 'active-element' )
			    );
			    MAP_ELEMENT.classList.add( 'active-element' );

			    centerOnElement( MAP_ELEMENT );
					centerOnElement( MAP_ELEMENT );
					const listItem = document.querySelector(
						`.expomap-list-item[data-boothid="${MAP_ELEMENT.id}"]`
					);
					if ( !listItem?.dataset.content ) return;

					const contentData = await fetchingExpoData( listItem.dataset.content );
					setContent( contentData );
					const container = document.getElementById( 'expomap-content-container' );
					if ( contentData ) {
						container?.classList.remove( 'hidden-content-container' );
					} else {
						container?.classList.add( 'hidden-content-container' );
					}
				} );
			} );
		}

		init();
	}, []);

	console.log('dasf')

	return (
		<div className="expomap-content">
			{ content && (
				<>
					{ content.acf?.booth_type === 'b' && <BoothContent contentData={content} /> }
					{ content.acf?.booth_type === 'a' && <ArenaContent contentData={content} /> }
					{ content.acf?.booth_type === 'i' && <InfoContent contentData={content} /> }
					{ content.acf?.booth_type === 'z' && <ZoneContent contentData={content} />}
					{ content.acf?.booth_type === 's' && <InfoContent contentData={content} /> }
				</>
			) }
		</div>
	);
}
