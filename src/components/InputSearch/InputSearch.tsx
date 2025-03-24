import React from "react"
import { InputSearchProps } from "./InputSearchProps.type"

const InputSearch:React.FC<InputSearchProps> = ({ buttonStyle,name,styleInputSearch, search, placeholder }) => {
  return(
    <form className={`rounded px-3 py-1 flex justify-between items-center ${styleInputSearch}`} action={search}>
      <input type="search" className="outline-0" name={name} placeholder={placeholder}/>
      <button type="submit" className={ `rounded ${buttonStyle}`}>🔍</button>
    </form>
    )
}

export default InputSearch