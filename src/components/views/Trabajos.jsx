import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginTurnos  from "../../images/Login.png";
import CartaOnline  from "../../images/React App - carta-online-kappa.vercel.app.png";
import CardsTrabajos from "./CardsTrabajos";
import SkeletonCards from "./SkeletonCards";

export default function Trabajos() {
    
  const [loading,setLoading]=useState(false)

  setTimeout(()=>{
    setLoading(true)
},500)


const trabajos=[{
    nombre:"SistemadeCola",
    descripcion:"Sistema de cola para atender a los clientes",
    imagen:LoginTurnos,
    url:"//sistema-de-cola.vercel.app",
    repositorio:"//github.com/RamiroQuiro/SistemaColadeEspera",
    herramientas:["react","tailwindCSS","firebase"],
},
{nombre:"CartaOnline",
descripcion:"Carta online para restaurantes",
imagen:CartaOnline,
url:"//carta-online-kappa.vercel.app/",
repositorio:"//github.com/RamiroQuiro/CartaOnline",
herramientas:["react","tailwindCSS","firebase"],},
{nombre:"VQAgrimensura",
descripcion:"Landing page VQAgrimensura",
imagen:"https://images.unsplash.com/photo-1584824486516-0555a07fc511?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
url:"//rama-code.vercel.app/",
repositorio:"//github.com/RamiroQuiro/RamaCode",
herramientas:["react","css"],},

]

  return (
    <div className="flex flex-col  z-50 items-center duration-150 ease-in-out gap-5 w-10/12 h-full  p-5">
      <h1 className="text-2xl text-sky-800  z-10 font-medium ">Trabajos</h1>

      <section className="w-full flex flex-wrap flex-col md:flex-row gap-5 gap-y-10 mb-8 md:mb-0 flex-between items-center p-8">
      
      {
        !loading?
      <>
      <SkeletonCards/>
        <SkeletonCards/>
        <SkeletonCards/>
        <SkeletonCards/>:
        </>:
        trabajos.map((trabajo) => (
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
  );
}
