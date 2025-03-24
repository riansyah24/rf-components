import React from "react";
import { InputPasswordProps } from "./InputPasswordProps.type"

const InputPassword:React.FC<InputPasswordProps> = ({ name, initialValue, style, placeholder }) => {
  return(
    <div className={`px-3 py-1 ${style} rounded`}>
      <input type="password" name={name} className="outline-0" value={initialValue} placeholder={placeholder}/>
    </div>
    )
}

export default InputPassword