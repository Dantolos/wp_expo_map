import { useState, useEffect } from 'react';
import ContentSelection from './ContentSelection';
import { FormToggle } from '@wordpress/components';

export default function ExpoMapListItem( props ) {
	const { booth, itemId, index, toggleActiveState, setSelectetContent, postList } = props;




	return (
		<div key={ itemId } className="element-item">
			<div className="element-item-label">
				<div className="element-item-nr " style={{width: "50px"}}>
					{ booth.nr }
				</div>
				<FormToggle
					checked={ booth.active }
					onChange={ () => toggleActiveState( index ) }
				/>
			</div>
				<div>
					<ContentSelection
						thisId={ itemId }
						postList={ postList }
						setSelectetContent={ setSelectetContent }
						selectedContent={ booth.selectedContent }
					/>
				</div>
		</div>
	);
}
