export class MAP_SVG {
     constructor(SVG) {
        
          this.ALL_ELEMENTS = SVG.querySelectorAll('[id^="_ai-"]');

          this.SORTED_ELEMNTS = [];

          this.ALL_ELEMENTS.forEach( (element) =>  { 
          
               // Sort interactive elements by categories
               let sort_key = element.id.split('-')[1]
               if (!this.SORTED_ELEMNTS[sort_key]){
                    this.SORTED_ELEMNTS[sort_key] = []
               }
               this.SORTED_ELEMNTS[sort_key].push(element); 
      
               // Element hover effect
               element.addEventListener('mouseenter', () => { 
                    element.classList.add('hover-element'); 
                    if(element.children){
                         for (const childElement of element.children) {  
                              childElement.classList.add('hover-element')
                         }
                    }
               })
               element.addEventListener('mouseleave', () => { 
                    element.classList.remove('hover-element');
                    if(element.children){
                         for (const childElement of element.children) {  
                              childElement.classList.remove('hover-element')
                         }
                    }
               })

          });
 
     }
}   

