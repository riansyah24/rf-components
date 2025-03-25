import React from 'react';
import { FormProps } from "./FormProps.type"

const Form:React.FC<FormProps> = ({ action, theme, color, label, slot }) => {
  return(
    <div>
      <form action={action} className="flex flex-col gap-3">
        {slot} 
        <button type="submit" className={`border-2 border-${theme} bg-${theme} ${color} rounded px-2 py-1 font-bold`}>{label}</button>
      </form>
    </div>
    )
}
export default Form