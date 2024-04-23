import React from 'react'; 
import {useState, useEffect} from 'react'

import { 
     IoAddCircle,
     IoListCircle,
     IoScanCircle,
     IoRemoveCircle,
     IoCloseCircle
 } from "react-icons/io5";


export default function MapMenu() { 
     const [close, setClose] = useState(false);
     const [scale, setScale] = useState(1)

     const handleList = () => {
          setClose( !close )
          let itemlist = document.querySelector('.expomap-itemlist');
          itemlist.classList.toggle('hidden-itemlist');
     }

     function handleZoomIn() {
          if(scale >= 2) { return }
          setScale( scale + .1 )
     }

     function handleZoomOut() {
          if(scale <= .5) { return }
          setScale( scale - .1 )
     }

     function handleZoomReset() {
          setScale( 1 )
     }

     useEffect(() => {
          let SVG_MAP = document.querySelector('.expo-plan-image-container>svg');
          if(SVG_MAP){
               SVG_MAP.style.transform = `scale(${scale})`
          }
     }, [scale])

     useEffect(() => { 
          let SVG_MAP = document.querySelector('.expo-plan-image-container>svg');
          if(SVG_MAP){
               SVG_MAP.addEventListener('scroll', (e) => {
                    console.log(e)
               })
          }
      }, [] )



     return (
          <div className="expomap-mapmenu-container"> 
               <div className="expomap-menu-item" data-label="list" onClick={handleList}> 
                    { close 
                         ? ( <IoCloseCircle size="100%" color="white"/> )
                         : ( <IoListCircle size="100%" color="white"/> )
                    }
               </div>
               <div className="expomap-menu-item" data-label="zoom-out" onClick={handleZoomOut}> 
                    <IoRemoveCircle size="100%" color="white"/> 
               </div>
               <div className="expomap-menu-item" data-label="zoom-in" onClick={handleZoomIn}> 
                    <IoAddCircle size="100%" color="white"/> 
               </div>
               {/* <div className="expomap-menu-item" id="map-reset" data-label="zoom-reset" onClick={handleZoomReset}> 
                    <IoScanCircle size="100%" color="white"/> 
               </div> */}
          </div>
     )
}