import React from "react";
import { InputEmailProps } from "./InputEmailProps.type"

const InputEmail:React.FC<InputEmailProps> = ({ name, initialValue, style, placeholder }) => {
  return(
    <div className={`px-3 py-1 ${style} rounded`}>
      <input type="email" name={name} className="outline-0" value={initialValue} placeholder={placeholder}/>
    </div>
    )
}

export default InputEmail