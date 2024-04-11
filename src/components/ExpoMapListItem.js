import apiFetch from '@wordpress/api-fetch';
import { useState, useEffect } from 'react';
import ContentSelection from './ContentSelection';

import {
	FormToggle,
} from '@wordpress/components';

export default function ExpoMapListItem( props ) {
     const { booth, itemId, toggleActiveState, setSelectetContent } = props;
     const [ postList, setPostList ] = useState([]);

     useEffect( () => {
          var postArray = [];
          fetch( '/wp-json/wp/v2/booth' )
               .then( response => response.json() )
               .then( data => { 
                         data.map( post => {
                              postArray.push({
                                   value: post.id,
                                   label: post.title.rendered
                              }) 
                         } )
                         setPostList(postArray);
                    }  
               )
               .catch( error => {
                    console.error( 'Error:', error );
                    setError(error);
               })  
     }, [])

     return (
          <div key={itemId} className="element-item">

               <div className="element-item-label">
                    <div className="element-item-nr">
                         { booth.nr }
                    </div>
                    <div> 
                         <ContentSelection thisId={itemId} postList={postList} setSelectetContent={setSelectetContent} selectedContent={booth.selectedContent} /> 
                    </div>
               </div>
               <FormToggle
                    checked={ booth.active }
                    onChange={ () => toggleActiveState(index) } 
               />
          </div>
     )
} 