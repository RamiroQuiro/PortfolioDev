import React from 'react'
import { titles } from '../../contexts/themes'
import certificadoWebDesign from '../../images/freeCodeCamp.org - www.freecodecamp.org.png'
import certificadoJavaScript from '../../images/www.freecodecamp.org certificado.png'

export default function CertificadoandSkill() {
  return (
    <div className="w-full mx-auto flex flex-col relative gap-10 justify-center items-center">
    <h1 className={titles.h2}>Formación</h1>

    <div className='px-10'>
      <img 
      className='object-cover'
      src={certificadoWebDesign} alt="certificadoWebDesign" />
    </div>
    <div className='px-10'>
      <img
      className='object-cover'
      src={certificadoJavaScript} alt="certificadoWebDesign" />
    </div>
    </div>
  )
}
