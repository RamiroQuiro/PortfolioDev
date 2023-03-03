import React, { useState } from "react";
import { Link } from "react-router-dom";
import { titles } from "../../contexts/themes";
import LoginTurnos from "../../images/Login.png";
import CartaOnline from "../../images/CartaOnline.png";
import CardsTrabajos from "./CardsTrabajos";
import Galeria360 from "../../images/Galeria360.png"
import Practica from "../../images/PracticasReactJS.png"
import Ecommerce from "../../images/Ecommerce.png"
import SkeletonCards from "./SkeletonCards";

export default function Trabajos() {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 500);

  const trabajos = [
    {
      nombre: "Practicas en ReactJS",
      descripcion: "Pagina Personal en donde voy subiendo cosas pequeñas",
      imagen: Practica,
      url: "//practicas-reactjs.vercel.app",
      repositorio: "https://github.com/RamiroQuiro/Galeria360",
      herramientas: ["react", "tailwindCSS", "nodeJS"],
    },
    {
      nombre: "Ecommerce con Planilla de Calulos Google",
      descripcion: "Tienda Virtual con base de datos de tus productos con una simple y poderosa planilla de calculos.",
      imagen: Ecommerce,
      url: "//tienda-virtual-psi.vercel.app/",
      repositorio: "https://github.com/RamiroQuiro/ecommerceNextJS",
      herramientas: ["react", "tailwindCSS", "nodeJS"],
    },
    {
      nombre: "Galeria Multimedia",
      descripcion: "Galeria Local Automatica para Plataforma 360°",
      imagen: Galeria360,
      url: "//galeria360.vercel.app//",
      repositorio: "https://github.com/RamiroQuiro/Galeria360",
      herramientas: ["react", "tailwindCSS", "nodeJS"],
    },
    {
      nombre: "SistemadeCola",
      descripcion: "Sistema de cola para atender a los clientes",
      imagen: LoginTurnos,
      url: "//cola-de-espera.vercel.app/",
      repositorio: "//github.com/RamiroQuiro/SistemaColadeEspera",
      herramientas: ["react", "tailwindCSS", "firebase"],
    },
    {
      nombre: "CartaOnline",
      descripcion: "Carta online para restaurantes",
      imagen: CartaOnline,
      url: "//carta-online-kappa.vercel.app",
      repositorio: "//github.com/RamiroQuiro/CartaOnline",
      herramientas: ["react", "tailwindCSS", "firebase"],
    },
    {
      nombre: "VQAgrimensura",
      descripcion: "Landing page VQAgrimensura",
      imagen:
        "https://images.unsplash.com/photo-1584824486516-0555a07fc511?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      url: "//rama-code.vercel.app/",
      repositorio: "//github.com/RamiroQuiro/RamaCode",
      herramientas: ["react", "css"],
    },
  ];

  return (
    <div className="flex flex-col  z-50 items-start duration-150 ease-in-out gap-5 w-full md:w-10/12 h-full ml-5 pt-8  md:py-5">
      <h1 className={titles.h1 + "ml-12 "}>Trabajos</h1>

      <section className="w-full flex flex-wrap flex-col md:flex-row gap-5 md:gap-y-10 mb-8 md:mb-0 flex-between items-center pt-0 p-8">
        {!loading ? (
          <>
            <SkeletonCards />
            <SkeletonCards />
            <SkeletonCards />
            <SkeletonCards />:
          </>
        ) : (
          trabajos.map((trabajo, i) => (
            <CardsTrabajos
              key={i}
              nombre={trabajo.nombre}
              imagen={trabajo.imagen}
              website={trabajo.url}
              repositorio={trabajo.repositorio}
              herramientas={trabajo.herramientas}
            />
          ))
        )}
      </section>
    </div>
  );
}
