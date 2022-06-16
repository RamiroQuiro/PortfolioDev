import React from 'react'
import image2 from "../../images/RamaCode (1).png";

export default function Inicio({home}) {
  return (
    <div className='w-full '>
    <img
      className={
      home?
        " opacity-0 duration-300 ease-in-out shadow-3xl transition-all z-20  flex justify-center items-center mx-auto rounded-full  bg-sky-900 bg-opacity-80   scale-30 h-full rotate-12"
        :
        "scale-90 object-cover duration-300 opacity-100 -rotate-12 drop-shadow-xl "
      }
      src={image2}
      alt="RamaCode"
    />
  </div>
  )
}
