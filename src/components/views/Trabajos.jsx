import React from "react";
import { Link } from "react-router-dom";
import LoginTurnos  from "../../images/Login.png";
import CardsTrabajos from "./CardsTrabajos";

export default function Trabajos() {
    

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
imagen:"https://images.unsplash.com/photo-1653559260394-ee10e61e0155?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=350&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NTEyNjI1Mg&ixlib=rb-1.2.1&q=80&w=350",
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
    <div className="flex flex-col justify-center items-center duration-150 ease-in-out gap-5 w-full h-full p-5">
      <h1 className="text-4xl text-sky-900  z-10 font-black ">Trabajos</h1>

      <section className="w-full flex flex-wrap flex-col md:flex-row gap-5 gap-y-10 mb-8 md:mb-0 flex-between items-center p-8">
        {trabajos.map((trabajo) => (
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
