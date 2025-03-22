/*
- Style for input search. Give a value like tailwind. Example : bg-red-500, text-2xl
styleInputSearch = string

- Style for button search. Give a value like tailwind. Example : bg-red-500, text-2xl
buttonStyle = string

- Value for input field
initialValue = string

- Give a label for button components
label = string

- Functions to change input fields such as onChange
changeField = void

- Works like submit
submit = void
*/

import React from "react"

export default function InputSearch({buttonStyle,initialValue,changeField,label,styleInputSearch,submit}) {
  return(
    <form className={`rounded px-3 py-1 flex justify-between ${styleInputSearch}`} onSubmit={submit}>
      <input type="text" className="outline-0" value={initialValue} onChange={changeField}/>
      <button type="submit" className={ `rounded ${buttonStyle}`}>{label}</button>
    </form>
    )
}