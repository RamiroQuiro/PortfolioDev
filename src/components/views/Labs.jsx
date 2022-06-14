import React from 'react'
import CardsTrabajos from './CardsTrabajos'

export default function Labs() {

const labs=[{
    nombre:"cssToggle",
    descripcion:"Puro Css menu Toggle",
    imagen:"LoginTurnos",
    url:"//codepen.io/ramiroquiroga/full/zYPOEyP",
    repositorio:"//codepen.io/ramiroquiroga/pen/zYPOEyP",
    herramientas:["css","html"],
},
{
    nombre:"Cifrado Cesar",
    descripcion:"cifrado Cesar para FreeCodeCamp",
    imagen:"LoginTurnos",
    url:"//codepen.io/ramiroquiroga/full/wvrgyxy",
    repositorio:"//codepen.io/ramiroquiroga/pen/wvrgyxy",
    herramientas:["css","html","JS"],
},
{
    nombre:"Portafolio DoritoWeb",
    descripcion:"portfolio  para FreeCodeCamp",
    imagen:"LoginTurnos",
    url:"//codepen.io/ramiroquiroga/full/PoKGQKz",
    repositorio:"//codepen.io/ramiroquiroga/pen/PoKGQKz",
    herramientas:["css","html","JS"],
},
{
    nombre:"Pagina Documentacion",
    descripcion:"Pagina Documntacion que se hizo para FreeCodeCamp",
    imagen:"LoginTurnos",
    url:"//codepen.io/ramiroquiroga/full/eYEJvmV",
    repositorio:"//codepen.io/ramiroquiroga/pen/eYEJvmV",
    herramientas:["css","html","JS"],
},
{
    nombre:"Landing Page para FCC",
    descripcion:"Landing Page para FreeCodeCamp",
    imagen:"LoginTurnos",
    url:"//codepen.io/ramiroquiroga/full/zYdxEdz",
    repositorio:"//codepen.io/ramiroquiroga/pen/zYdxEdz",
    herramientas:["css","html",],
},
{
    nombre:"Formulario para FCC",
    descripcion:"Landing Page para FreeCodeCamp",
    imagen:"LoginTurnos",
    url:"//codepen.io/ramiroquiroga/full/rNzNrBK",
    repositorio:"//codepen.io/ramiroquiroga/pen/rNzNrBK",
    herramientas:["css","html",],
},
{
    nombre:"Pagina Tributo para FCC",
    descripcion:"Pagina Tributo para FreeCodeCamp",
    imagen:"LoginTurnos",
    url:"//codepen.io/ramiroquiroga/full/oNeNwvr",
    repositorio:"//codepen.io/ramiroquiroga/pen/oNeNwvr",
    herramientas:["css","html",],
},
]

  return (
    <div className="flex flex-col justify-center items-center duration-150 ease-in-out gap-5 w-10/12 h-full p-5">
    <h1 className="text-4xl text-sky-900  z-10 font-black ">Practicas y Pruebas</h1>

    <section className="w-full flex flex-wrap flex-col md:flex-row gap-5 gap-y-10 mb-8 md:mb-0 flex-between items-center p-8">
      {labs.map((trabajo) => (
          <CardsTrabajos
          nombre={trabajo.nombre}
          imagen={trabajo.imagen}
          website={trabajo.url}
          repositorio={trabajo.repositorio}
          herramientas={trabajo.herramientas}
          />

      ))}
      
    </section>
  </div>
  )
}
