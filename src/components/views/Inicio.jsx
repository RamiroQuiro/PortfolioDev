import React from 'react'
import image2 from "../../images/RamaCode.png";

export default function Inicio({home}) {
  return (
    <div className='w-full overflow-hidden'>
    <img
      className={
      home?
        " opacity-0 duration-500 invisible ease-in-out shadow-3xl transition-all z-20  flex justify-center items-center mx-auto rounded-full  bg-sky-900 bg-opacity-80   scale-30 h-full rotate-12"
        :
        "scale-90 object-cover duration-500 opacity-100 visible delay-150 -rotate-12 drop-shadow-xl "
      }
      src={image2}
      alt="RamaCode"
    />
  </div>
  )
}
