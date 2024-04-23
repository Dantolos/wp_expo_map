import { useState, useEffect } from 'react';

import {
     ComboboxControl
} from '@wordpress/components';

export default function ContentSelection( { thisId, postList, setSelectetContent, selectedContent } ) {
     const [currentContent, setCurrentContent] = useState('please selcet'); 

     const handleContentSelect = (selectedValue) => { 
          setSelectetContent(thisId, selectedValue);
          setCurrentContent(selectedValue);
          
     };

     useEffect( () => {
          if(selectedContent){
               setCurrentContent(selectedContent);
          } 
     } )

     return (
          <div className="em-content-selection-wrapper">
               <p>contentselection</p>
               <ComboboxControl
                    label="select content"
                    value={ currentContent }
                    onChange={  handleContentSelect }
                    options={postList}
                    onInputChange={(inputValue) =>
                         setFilteredOptions(postList.filter(option =>
                                   option.label.toLowerCase().startsWith(inputValue.toLowerCase())
                              )
                         )
                    }
               />
               
          </div>
     )
}