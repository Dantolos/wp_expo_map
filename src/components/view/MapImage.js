import React, { useState, useEffect, useRef, Component } from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";



export default function MapImage( { loadHandler } ) {
    const [svgContent, setSvgContent] = useState(null);
    const svgRef = useRef(); 
    let ImageURL = document.getElementById('expo-react-container').dataset.map

    useEffect(() => {
      const fetchSvg = async () => {
        try {
          const response = await fetch(ImageURL);
          if (!response.ok) {
            throw new Error('Failed to fetch SVG');
          }
          const svgText = await response.text();
          setSvgContent(svgText);
          loadHandler()
        } catch (error) {
          console.error('Error fetching SVG:', error);
        }
      };
      fetchSvg(); 
    }, [ImageURL]);


    return (
      <> 
       <TransformWrapper style={{width:'100vw',height:'100vh'}}>
        <TransformComponent> 
          <div 
            ref={svgRef} 
            className='expo-plan-image-container'  
            width="100%" height="100%" 
            dangerouslySetInnerHTML={{ __html: svgContent }} 
          >
          </div>
        </TransformComponent>
      </TransformWrapper>
      </> 
    );
}
