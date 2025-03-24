import React from "react";
import { InputTextProps } from "./InputTextProps.type"

const InputText:React.FC<InputTextProps> = ({ name, initialValue, placeholder, style }) => {
  return(
    <div className={`px-3 py-1 ${style}`}>
      <input type="text" name={name} className="outline-0" value={initialValue} placeholder={placeholder}/>
    </div>
    )
}

export default InputText