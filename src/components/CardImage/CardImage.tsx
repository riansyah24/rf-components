import React from "react"
import { CardImageProps } from "./CardImageProps.type"

const CardImage:React.FC<CardImageProps> = ({ img,border,style,slot }) => {
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

export default CardImage