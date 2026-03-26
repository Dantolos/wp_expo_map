import React, { useState, useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import ExpoMapMain from './components/view/ExpoMapMain';
import MapImage from './components/view/MapImage';

function App() {
	const [mapImageLoaded, setMapImageLoaded] = useState( false );
	// Shared ref to react-zoom-pan-pinch controls
	const zoomControlsRef = useRef( null );

	const loadHandler = ( controls ) => {
		zoomControlsRef.current = controls;
		setMapImageLoaded( true );
	};

	useEffect( () => {
	    if ( !mapImageLoaded ) return;

	    const searchInput = document.getElementById( 'expomap-search' );
	    if ( !searchInput ) return;

	    searchInput.addEventListener( 'input', ( e ) => {
	        const query = e.target.value.toLowerCase().trim();
	        const items = document.querySelectorAll( '.expomap-list-item' );
	        const separators = document.querySelectorAll( '.expomap-list-type-separator' );

	        // Items filtern
	        items.forEach( item => {
	            const title = item.dataset.title ?? '';
	            item.style.display = title.includes( query ) ? '' : 'none';
	        } );

	        // Separatoren ausblenden wenn alle Items darunter versteckt sind
	        separators.forEach( separator => {
	            let next = separator.nextElementSibling;
	            let hasVisible = false;

	            while ( next && !next.classList.contains( 'expomap-list-type-separator' ) ) {
	                if ( next.classList.contains( 'expomap-list-item' ) && next.style.display !== 'none' ) {
	                    hasVisible = true;
	                    break;
	                }
	                next = next.nextElementSibling;
	            }

	            separator.style.display = hasVisible || query === '' ? '' : 'none';
	        } );
	    } );
	}, [mapImageLoaded] );

	return (
		<>
			<MapImage loadHandler={ loadHandler } />
			{ mapImageLoaded && <ExpoMapMain zoomControlsRef={ zoomControlsRef } /> }
		</>
	);
}

const root = createRoot(document.getElementById('expo-react-container'));
root.render(<App />);
