export interface ButtonProps {
  //Label for components
  label : string; 
  
  //Font color for title navbar. Give a value like tailwind. Example : red-500, blue-700, green-300
  color : string; 
  
  //Background for navbar. Give a value like tailwind. Example : red-500, blue-700, green-300
  background : string; 
  
  //Works like className for components
  style? : string; 
  
  //Give a function for onClick
  func : () => void;
}