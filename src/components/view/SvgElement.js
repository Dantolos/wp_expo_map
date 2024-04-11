import {useState, useEffect} from 'react'

function SvgElement({ url }) {
     const [svgContent, setSvgContent] = useState(null);
   
     useEffect(() => {
       const fetchSvg = async () => {
         try {
           const response = await fetch(url);
           if (!response.ok) {
             throw new Error('Failed to fetch SVG');
           }
           const svgText = await response.text();
           setSvgContent(svgText);
         } catch (error) {
           console.error('Error fetching SVG:', error);
         }
       };
   
       fetchSvg();
     }, [url]);
   
     // Render the fetched SVG content as a DOM element
     return <div dangerouslySetInnerHTML={{ __html: svgContent }} />;
   }
   
   export default SvgElement;