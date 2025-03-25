import React from "react";
import { InputTextareaProps } from "./InputTextareaProps.type"

const InputTextarea:React.FC<InputTextareaProps> = ({ name, style, placeholder }) => {
  return(
    <div>
      <textarea name={name} className={`${style} outline-0 px-3 py-1 rounded`} placeholder={placeholder}></textarea>
    </div>
    )
}

export default InputTextarea