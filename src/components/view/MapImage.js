import React, { useState, useEffect, useRef, Component } from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";



export default function MapImage( { loadHandler } ) {
    const [svgContent, setSvgContent] = useState(null);
    const svgRef = useRef(); 

    const [width, setWidth]   = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [initialScale, setInitialScale] = useState(1);
    
    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        if( width < 1000 ) {
          setInitialScale(5)
        }
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);


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
       <TransformWrapper 
        style={{width:'100vw',height:'100vh'}}
        initialScale={initialScale}
        initialPositionX={0}
        initialPositionY={0} 
        >
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
