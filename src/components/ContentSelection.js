import { useState, useEffect } from 'react';
import { ComboboxControl } from '@wordpress/components';

export default function ContentSelection( { thisId, postList, setSelectetContent, selectedContent } ) {
	const [currentContent, setCurrentContent] = useState( null );
	const [filteredOptions, setFilteredOptions] = useState( [] );

	// Sync filteredOptions when postList loads
	useEffect( () => {
		setFilteredOptions( postList );
	}, [postList] );

	// Sync currentContent when selectedContent prop changes
	useEffect( () => {
    if ( selectedContent ) {
        setCurrentContent( selectedContent );
    }
	}, [selectedContent] )

	const handleContentSelect = ( selectedValue ) => {
		setSelectetContent( thisId, selectedValue );
		setCurrentContent( selectedValue );
	};

	return (
		<div className="em-content-selection-wrapper">
			<ComboboxControl
				label=" "
				value={ currentContent }
				onChange={ handleContentSelect }
				options={ filteredOptions }
				onInputChange={ ( inputValue ) =>
					setFilteredOptions(
						postList.filter( option =>
							option.label.toLowerCase().startsWith( inputValue.toLowerCase() )
						)
					)
				}
			/>
		</div>
	);
}
