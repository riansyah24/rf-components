/*
- Source for image 
img = string

- Border for components. Give a value like tailwind. Example : red-500, blue-700, green-300
border = string

- Works like className for components
style = string

- Works like slot 
slot = any 
*/
import React from "react"

export default function CardImage({img,border,style,slot}) {
  return(
    <div className={`rounded border-2 border-${border} p-2 ${style}`}>
      <div>
        <img src={img} className="object-contain aspect-square rounded" />
      </div>
      <div>
      {slot}
      </div>
    </div>
    )
}