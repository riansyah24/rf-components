export interface NavbarProps {
  //Title for navbar
  title? : string; 
  
  //Background for navbar. Give a value like tailwind. Example : red-500, blue-700, green-300
  background : string; 
  
  //Font color for title navbar. Give a value like tailwind. Example : red-500, blue-700, green-300
  color? : string; 
  
  //Works like className for components
  style : string; 
  
  //Like a slot html
  slot? : React.ReactNode; 
}