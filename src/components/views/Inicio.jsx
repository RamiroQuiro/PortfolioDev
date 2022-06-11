import React from 'react'
import image2 from "../../images/RamaCode.png";

export default function Inicio() {
  return (
    <div className="absolute  shadow-3xl  z-20  flex justify-center items-center mx-auto rounded-full rotate-12 bg-sky-900 bg-opacity-80  w-1/3 h-3/5">
    <img
      className="w-4/5 h-auto object-cover -rotate-12 drop-shadow-xl "
      src={image2}
      alt="RamaCode"
    />
  </div>
  )
}
