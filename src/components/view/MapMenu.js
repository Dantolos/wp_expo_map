import React from 'react';
import { useState } from 'react';
import {
	IoAddCircle,
	IoListCircle,
	IoRemoveCircle,
	IoCloseCircle,
} from 'react-icons/io5';

// MapMenu receives zoomControlsRef from ExpoMapMain
// and uses react-zoom-pan-pinch's built-in API — no manual SVG transform manipulation
export default function MapMenu( { zoomControlsRef } ) {
	const [listOpen, setListOpen] = useState( false );

	const handleList = () => {
		setListOpen( prev => !prev );
		document.querySelector( '.expomap-itemlist' )?.classList.toggle( 'hidden-itemlist' );
	};

	const handleZoomIn = () => {
		zoomControlsRef?.current?.zoomIn( 0.3 );
	};

	const handleZoomOut = () => {
		zoomControlsRef?.current?.zoomOut( 0.3 );
	};

	return (
		<div className="expomap-mapmenu-container">
			<div className="expomap-menu-item" data-label="list" onClick={ handleList }>
				{ listOpen
					? <IoCloseCircle size="100%" color="white" />
					: <IoListCircle size="100%" color="white" />
				}
			</div>
			<div className="expomap-menu-item" data-label="zoom-out" onClick={ handleZoomOut }>
				<IoRemoveCircle size="100%" color="white" />
			</div>
			<div className="expomap-menu-item" data-label="zoom-in" onClick={ handleZoomIn }>
				<IoAddCircle size="100%" color="white" />
			</div>
		</div>
	);
}
