import React, { useEffect, useState } from 'react'
import CardsTrabajos from './CardsTrabajos'
import DoritoWeb from '../../images/A Pen by RamiroQuiroga - codepen.io.png'
import PaginaTributo from '../../images/FireShot Capture 011 - A Pen by RamiroQuiroga - codepen.io.png'
import Formulario from '../../images/Formulario FCC.org - codepen.io.png'
import LandingPage from '../../images/Landing Page FCC.org - codepen.io.png'
import PureCssToggle from '../../images/Pure CSS read more toggle - codepen.io.png'
import CifradoCesar from '../../images/FireShot Capture 008 - Cifrador Cesar - codepen.io.png'
import PageDocumentacion from '../../images/Poyecto FCC N°3 - codepen.io.png'
import CardNetlify from '../../images/Document - thirsty-bell-74652b.netlify.app.png'
import { titles } from '../../contexts/themes'
import SkeletonCards from './SkeletonCards'



export default function Labs() {

    const [loading,setLoading]=useState(false)
const labs=[{
    nombre:"Card Practica",
    descripcion:"Practica de card en FrontEnd",
    imagen:CardNetlify,
    url:"https://thirsty-bell-74652b.netlify.app/",
    repositorio:"",
    herramientas:["css","html",],
},
{
    nombre:"Cifrado Cesar",
    descripcion:"cifrado Cesar para FreeCodeCamp",
    imagen:CifradoCesar,
    url:"//codepen.io/ramiroquiroga/full/wvrgyxy",
    repositorio:"//codepen.io/ramiroquiroga/pen/wvrgyxy",
    herramientas:["css","html","JS"],
},
{
    nombre:"Portafolio DoritoWeb",
    descripcion:"portfolio  para FreeCodeCamp",
    imagen:DoritoWeb,
    url:"//codepen.io/ramiroquiroga/full/PoKGQKz",
    repositorio:"//codepen.io/ramiroquiroga/pen/PoKGQKz",
    herramientas:["css","html","JS"],
},
{
    nombre:"Pagina Documentacion",
    descripcion:"Pagina Documntacion que se hizo para FreeCodeCamp",
    imagen:PageDocumentacion,
    url:"//codepen.io/ramiroquiroga/full/eYEJvmV",
    repositorio:"//codepen.io/ramiroquiroga/pen/eYEJvmV",
    herramientas:["css","html","JS"],
},
{
    nombre:"Landing Page para FCC",
    descripcion:"Landing Page para FreeCodeCamp",
    imagen:LandingPage,
    url:"//codepen.io/ramiroquiroga/full/zYdxEdz",
    repositorio:"//codepen.io/ramiroquiroga/pen/zYdxEdz",
    herramientas:["css","html",],
},
{
    nombre:"Formulario para FCC",
    descripcion:"Landing Page para FreeCodeCamp",
    imagen:Formulario,
    url:"//codepen.io/ramiroquiroga/full/rNzNrBK",
    repositorio:"//codepen.io/ramiroquiroga/pen/rNzNrBK",
    herramientas:["css","html",],
},
{
    nombre:"Pagina Tributo para FCC",
    descripcion:"Pagina Tributo para FreeCodeCamp",
    imagen:PaginaTributo,
    url:"//codepen.io/ramiroquiroga/full/oNeNwvr",
    repositorio:"//codepen.io/ramiroquiroga/pen/oNeNwvr",
    herramientas:["css","html",],
},
{
    nombre:"cssToggle",
    descripcion:"Puro Css menu Toggle",
    imagen:PureCssToggle,
    url:"//codepen.io/ramiroquiroga/full/zYPOEyP",
    repositorio:"//codepen.io/ramiroquiroga/pen/zYPOEyP",
    herramientas:["css","html"],
},
]

setTimeout(()=>{
    setLoading(true)
},500)
  return (
    <div className="flex flex-col  z-30 items-start duration-150 ease-in-out gap-5 w-10/12 h-full mx-auto p-5  md:p-5">
    <h1 className={titles.h1+"ml-12 "}>Practicas y Pruebas</h1>

    <section className="w-full flex flex-wrap flex-col md:flex-row gap-5 gap-y-10 mb-8 md:mb-0 flex-between items-center pt-0 p-8">
    {
        !loading?
        <>
        <SkeletonCards/>
        <SkeletonCards/>
        <SkeletonCards/>
        <SkeletonCards/>
        <SkeletonCards/>
        </>
        :
      
        labs.map((trabajo,index) => (
          <CardsTrabajos
            key={index}
          nombre={trabajo.nombre}
          imagen={trabajo.imagen}
          website={trabajo.url}
          repositorio={trabajo.repositorio}
          herramientas={trabajo.herramientas}
          />
          
          ))
        }
      
    </section>
  </div>
  )
}
