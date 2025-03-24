import React from 'react';
import { ButtonProps } from "./ButtonProps.type"

const Button:React.FC<ButtonProps> = ({ label,func,color,background,style }) => {
  return(
    <button className={`bg-${background} text-${color} font-bold rounded ${style}`} onClick={func}>{label}</button>
    )
}

export default Button