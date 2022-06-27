import React from 'react'
import image2 from "../../images/RamaCode.webp";

export default function Inicio({}) {
  return (
    <div className='w-full  '>
      <div className=''>
    <img
      className={
        " opacity-100 duration-300 ease-in-out transition-all -z-10  flex justify-center items-center mx-auto scale-150 md:scale-75 h-full -rotate-12"
      }
      width="100%"
      height="100%"
      src={image2}
      alt="RamaCode"
    /></div>
  </div>
  )
}
