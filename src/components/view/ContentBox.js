import { useState, useEffect } from 'react';
import  { MAP_SVG } from "../../helper/svg-preparing";
import BoothContent from './BoothContent';

export default function ContentBox() {
     const [content, setContent] = useState(false);

     useEffect( async() => { 

          const MAP_WRAPPER = document.querySelector('#expo-plan-wrapper'); 
          const MAP_SVG_IMAGE = MAP_WRAPPER.querySelector('.expo-plan-image-container>svg');

          let EXPO_MAP = await new MAP_SVG(MAP_SVG_IMAGE)

          // item map listener
          const MAP_ITEM_LIST = document.querySelectorAll('.expomap-list-item')
          
          if(MAP_ITEM_LIST && MAP_ITEM_LIST.length > 0){
               MAP_ITEM_LIST.forEach( BOOTH_LIST_ITEM => {
                    BOOTH_LIST_ITEM.addEventListener('mouseover', e => {
                         let hoveredListItem = MAP_SVG_IMAGE.getElementById( BOOTH_LIST_ITEM.dataset.boothid )
                         hoveredListItem.classList.add('hover-element')
                    })
                    BOOTH_LIST_ITEM.addEventListener('mouseleave', e => {
                         let hoveredListItem = MAP_SVG_IMAGE.getElementById( BOOTH_LIST_ITEM.dataset.boothid )
                         hoveredListItem.classList.remove('hover-element')
                    })
                    BOOTH_LIST_ITEM.addEventListener('click', async () => { 
                         let contentData = await fetchingExpoData( BOOTH_LIST_ITEM.dataset.content );  
                         await setContent(contentData);
                         let contentContainer = document.getElementById('expomap-content-container')
                         contentContainer.classList.remove('hidden-content-container')
                    })
               })
          }

          // map element listener
          EXPO_MAP.ALL_ELEMENTS.forEach( MAP_ELEMENT => {
               MAP_ELEMENT.addEventListener('click', async () => { 
                    let contentData = await fetchingExpoData( document.querySelector('.expomap-list-item[data-boothid="'+MAP_ELEMENT.id+'"]').dataset.content ) 
                    await setContent(contentData);
                    let contentContainer = document.getElementById('expomap-content-container')
                         contentContainer.classList.remove('hidden-content-container')
               });
          } )
          
     }, [] )

  
     return (
          <div className="expomap-content">
               {content && 
                    <>
                         {  content.acf.booth_type === 'b' &&
                              <BoothContent contentData={content} /> 
                         } 
                    </>
               }
          </div>
     )
} 

async function fetchingExpoData( contentID )  {
     let contentData = null;
     
     if(contentID){ 
          let REST_URL = `${window.location.origin}/wp-json/wp/v2/`;
           
          await fetch(`${REST_URL}booth/${contentID}`)
          .then((resp) => resp.json())
          .then(function(data) {
               console.log(data) 
               contentData = data 
          })
          .catch(function(error) {
               console.log(error);
          });
     } 
     //console.log(contentData)
     return contentData;

}

