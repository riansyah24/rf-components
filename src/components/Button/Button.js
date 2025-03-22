/*
- Label for components
label = string

- Font color for title navbar. Give a value like tailwind. Example : red-500, blue-700, green-300
color = string

- Background for navbar. Give a value like tailwind. Example : red-500, blue-700, green-300
background = string

- Works like className for components
style = string

- Give a function for onClick
func = void
*/
import React from 'react';

export default function Button({label,func,color,background,style}) {
  return(
    <button className={`bg-${background} text-${color} font-bold rounded ${style}`} onClick={func}>{label}</button>
    )
}