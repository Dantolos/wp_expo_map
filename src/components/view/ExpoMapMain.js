import { MAP_SVG } from "../../helper/svg-preparing";
import {useState, useEffect} from 'react'
import ContentBox from "./ContentBox";
import Tooltipps from "./Tooltipps";
import MapMenu from "./MapMenu";
import { IoCloseCircle } from "react-icons/io5";

export default function ExpoMapMain() {
     const [tooltippPosition, setTooltippPosition] = useState({x: 0, y: 0});
     const [tooltippContent, setTooltippContent] = useState('Stand')
     const [currentHover, setCurrentHover] = useState(null);
     const [loading, setLoading] = useState(false);
 
     const toggleContentContainer = () => {
          let contentContainer = document.getElementById('expomap-content-container')
          contentContainer.classList.add('hidden-content-container')
     }

     // useEffect( async () => {
     //      const MAP_WRAPPER = await document.querySelector('#expo-plan-wrapper>#expo-react-container'); 
     //      console.log(MAP_WRAPPER)
     //      const MAP_SVG_IMAGE = MAP_WRAPPER.querySelector('.expo-plan-image-container>svg');
     //      console.log(MAP_SVG_IMAGE)
          
     //      let EXPO_MAP = await new MAP_SVG(MAP_SVG_IMAGE)
          
     //      // interactive map function
     //      if(EXPO_MAP){
     //           EXPO_MAP.ALL_ELEMENTS.forEach( MAP_ELEMENT => {
          
     //                MAP_ELEMENT.addEventListener('mouseover', e => { 
     //                     setCurrentHover(MAP_ELEMENT.id)
     //                     //add tooltips
     //                     setTooltippPosition({x: e.clientX, y: e.clientY})
     //                     document.querySelector('.tooltip-container').classList.remove('hidden-toolbar');
     //                     //hover response list item 
     //                     let responseListItem = document.querySelector('.expomap-list-item[data-boothid="'+MAP_ELEMENT.id+'"]')
     //                     responseListItem.classList.toggle('expomap-list-item-hover');
     //                });

     //                MAP_ELEMENT.addEventListener('mousemove', e => {
     //                     setTooltippPosition({x: e.clientX, y: e.clientY})
     //                });

     //                MAP_ELEMENT.addEventListener('mouseout', e => {   
     //                     document.querySelector('.tooltip-container').classList.add('hidden-toolbar');
                         
     //                     //hover response list item 
     //                     let responseListItem = document.querySelector('.expomap-list-item[data-boothid="'+MAP_ELEMENT.id+'"]')
     //                     responseListItem.classList.toggle('expomap-list-item-hover');
     //                });


     //           } )
     //      }
     // }, [])

     useEffect(() => {
          if(!currentHover){ return } 
          setLoading(true);
          let boothID = document.querySelector('.expomap-list-item[data-boothid="'+currentHover+'"]').dataset.content
          
          const fetchTitle = async () => {
               try { 
                    const REST_URL = `${window.location.origin}/wp-json/wp/v2/`;
                    const response = await fetch(`${REST_URL}booth/${boothID}`);
                    const data = await response.json();
                    setTooltippContent( data.title.rendered );
               } catch (error) {
                    setTooltippContent( '' );
               } finally {
                    setLoading(false); 
               }
          } 
          fetchTitle()

     }, [currentHover] )

     return (
          <>
               <MapMenu />
               <Tooltipps position={tooltippPosition} content={tooltippContent} loading={loading} />
               <div id="expomap-content-container" class="hidden-content-container">
                    <IoCloseCircle onClick={toggleContentContainer} size="35px" color="#F95300" className="expomap-closeicon"/>
                    <ContentBox />
               </div> 
          </>
     )
}




