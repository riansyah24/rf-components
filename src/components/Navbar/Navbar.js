/*
- Title for navbar
title = string

- Background for navbar. Give a value like tailwind. Example : red-500, blue-700, green-300
background = string

- Font color for title navbar. Give a value like tailwind. Example : red-500, blue-700, green-300
color = string

- Works like className for components
style = string

- Like a slot html
slot = any
*/

import React from 'react';

export default function Navbar({title,background,color,style, slot}){
  return(
    <nav className={`p-3 bg-${background} ${style}`}>
      <a href="/" className={`font-bold text-2xl text-${color}`}>{title}</a>
      <div>{slot}</div>
    </nav>
    )
}