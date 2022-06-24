import React from 'react'
import image2 from "../../images/RamaCode (1).png";

export default function Inicio({home}) {
  return (
    <div className='w-full flex flex-col  z-30 '>
    <img
      className={
      home?
        " opacity-0 duration-300 ease-in-out shadow-3xl transition-all z-30  flex justify-center items-center mx-auto rounded-full  bg-sky-900 bg-opacity-80   scale-75 h-full "
        :
        "scale-90 object-cover z-30 duration-300 opacity-100 -rotate-12 drop-shadow-xl "
      }
      src={image2}
      alt="RamaCode"
    />
  </div>
  )
}
