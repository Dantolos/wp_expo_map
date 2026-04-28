import React, { useState, useEffect, useRef } from 'react';
import { TransformWrapper, TransformComponent, useControls } from 'react-zoom-pan-pinch';

// Inner component has access to useControls() hook from TransformWrapper context
function MapImageInner( { svgContent } ) {
	const controls = useControls();
	return (
		<TransformComponent>
			<div
				className='expo-plan-image-container'
				width="100%"
				height="100%"
				dangerouslySetInnerHTML={{ __html: svgContent }}
			/>
		</TransformComponent>
	);
}

export default function MapImage( { loadHandler } ) {
	const [svgContent, setSvgContent] = useState( null );
	const transformRef = useRef( null );

	const ImageURL = document.getElementById( 'expo-react-container' ).dataset.map;

	useEffect( () => {
		const fetchSvg = async () => {
			try {
				const response = await fetch( ImageURL );
				if ( !response.ok ) throw new Error( 'Failed to fetch SVG' );
				const svgText = await response.text();
				setSvgContent( svgText );
			} catch ( error ) {
				console.error( 'Error fetching SVG:', error );
			}
		};
		fetchSvg();
	}, [ImageURL] );

	// Once SVG is loaded, expose the TransformWrapper controls to the parent
	useEffect( () => {
		if ( svgContent && transformRef.current ) {
			loadHandler( transformRef.current );
		}
	}, [svgContent] );

	if ( !svgContent ) return null;

	return (
		<TransformWrapper
			ref={ transformRef }
			style={{ width: '100vw', height: '100vh' }}
			initialScale={1}
			minScale={.5}
			initialPositionX={ 0 }
			initialPositionY={ 0 }
			limitToBounds={ false }
		>
			<MapImageInner svgContent={ svgContent } />
		</TransformWrapper>
	);
}
