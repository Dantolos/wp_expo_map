import { useState, useEffect } from 'react';
import ContentBox from './ContentBox';
import Tooltipps from './Tooltipps';
import MapMenu from './MapMenu';
import { IoCloseCircle } from 'react-icons/io5';

export default function ExpoMapMain( { zoomControlsRef } ) {
	const [tooltippPosition, setTooltippPosition] = useState( { x: 0, y: 0 } );
	const [tooltippContent, setTooltippContent] = useState( '' );
	const [currentHover, setCurrentHover] = useState( null );
	const [loading, setLoading] = useState( false );

	const toggleContentContainer = () => {
		document.getElementById( 'expomap-content-container' )
			?.classList.add( 'hidden-content-container' );
	};

	useEffect( () => {
		if ( !currentHover ) return;

		setLoading( true );
		const listItem = document.querySelector(
			`.expomap-list-item[data-boothid="${currentHover}"]`
		);

		const boothID = listItem?.dataset.content;
		if ( !boothID ) {
			setLoading( false );
			return;
		}

		const fetchTitle = async () => {
			try {
				const REST_URL = `${window.location.origin}/wp-json/wp/v2/`;
				const response = await fetch( `${REST_URL}booth/${boothID}?_fields=title` );
				const data = await response.json();
				setTooltippContent( data.title?.rendered ?? '' );
			} catch {
				setTooltippContent( '' );
			} finally {
				setLoading( false );
			}
		};
		fetchTitle();
	}, [currentHover]);



	return (
		<>
			{ /* zoomControlsRef is passed down from App via view.js */ }
			<MapMenu zoomControlsRef={ zoomControlsRef } />
			<Tooltipps position={ tooltippPosition } content={ tooltippContent } loading={ loading } />
			<div id="expomap-content-container" className="hidden-content-container">
				<IoCloseCircle
					onClick={ toggleContentContainer }
					size="35px"
					color="#F95300"
					className="expomap-closeicon"
				/>
				<ContentBox zoomControlsRef={ zoomControlsRef } />
			</div>
		</>
	);
}
