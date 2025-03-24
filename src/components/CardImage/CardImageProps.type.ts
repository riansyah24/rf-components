export interface CardImageProps {
  //Source for image 
  img : string; 
  
  //Border for components. Give a value like tailwind. Example : red-500, blue-700, green-300
  border : string; 
  
  //Works like className for components
  style? : string; 
  
  //Works like slot 
  slot : React.ReactNode; 
}