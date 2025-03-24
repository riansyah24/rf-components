import React from 'react';
import { NavbarProps } from "./NavbarProps.type"

const Navbar:React.FC<NavbarProps> = ({ title,background,color,style, slot }) => {
  return(
    <nav className={`p-3 bg-${background} ${style}`}>
      <a href="/" className={`font-bold text-2xl text-${color}`}>{title}</a>
      <div>{slot}</div>
    </nav>
    )
}

export default Navbar