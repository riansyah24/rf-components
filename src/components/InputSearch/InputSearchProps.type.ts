export interface InputSearchProps {
  //Style for input search. Give a value like tailwind. Example : bg-red-500, text-2xl
  styleInputSearch? : string; 
  
  //Style for button search. Give a value like tailwind. Example : bg-red-500, text-2xl
  buttonStyle? : string; 
  
  //Name for components
  name : string; 
  
  //Set placeholder
  placeholder? : string; 
  
  //Works like search function. Source : https://react.dev/reference/react-dom/components/form
  search : () => void; 
}