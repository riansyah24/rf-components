export interface FormProps {
  //Like a slot html
  slot : React.ReactNode; 
  
  //Give a action after click button submit. Source : https://react.dev/reference/react-dom/components/form
  action : () => void;
  
  //Background and border for button submit. 
  theme : string;
  
  //Label for button submit. Give a value like tailwind. Example : red-500, blue-700, green-300
  label : string;
  
  //Font color for button submit. Give a value like tailwind. Example : red-500, blue-700, green-300
  color : string
}