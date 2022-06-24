import React from "react";
import { titles } from "../../contexts/themes";

const experiencia = [
  {
    h3: "Técnico en Redes",
    empresaAño: "CePSI Eva Perón | 2021 - actual",
    descripcion:
    'Técnico en Redes, implementacion de sistema, reparación, instalacion y matenimiendo de equipos informaticos, seguridad logica seguridad.',
  },
  {
    h3: "Soporte Informatico",
    empresaAño: "Asistencia Domiciliaria | 2015 - 2022",
    descripcion:
      "Técnico en Redes, implementacion de sistema, reparación, instalacion y matenimiendo de equipos informaticos, seguridad logica seguridad.",
  },
  {
    h3: "Diseño y Comunicación",
    empresaAño: "CePSI Eva Perón | 2018 - 2021",
    descripcion:
      "Aréa Comunicacion Insitucional; diseño de flyer, organizacion de jornadas, videos insitucionales, folletos informativos",
  },
  {
    h3: "Soporte Informatico",
    empresaAño: " Insituto San Martin de Porres | 2015 - 2016",
    descripcion:
      "Técnico en Redes, implementacion de sistema, reparación, instalacion y matenimiendo de equipos informaticos, seguridad logica seguridad.",
  },
  {h3: "Técnico en Redes",
    empresaAño: "CePSI Eva Perón | 2012 - 2018",
    descripcion:
    'Técnico en Redes, implementacion de sistema, reparación, instalacion y matenimiendo de equipos informaticos, seguridad logica seguridad.',}
];

export default function Timeline() {
  return (
    <div className="w-full mx-auto flex flex-col relative gap-10 justify-center items-center ">
        <h1 className={titles.h2}>Experiencia</h1>
      <div className="w-1 blur-xxs inset-x-1/2 h-full mt-16 absolute bg-gray-500/50"></div>
      {experiencia?.map((item, i) => (
        
        <div 
        key={i}
        className="w-3/4 border-b-2 relative border-x-2 gap-2 hover:-translate-x-2 duration-150 flex flex-col items-start p-3 z-10 bg-white rounded-lg h- shadow-md  hover:border-l-orange-500/80 hover:pl-2  hover:border-l-2">
          <h3 className={titles.h2 + "underline text-left"}>
            {item.h3}
          </h3>
          <p className="font-medium">{item.empresaAño}</p>
          <p className="text-sm">
            {item.descripcion}
          </p>
          <div className="w-4 h-4 absolute rounded-full -bottom-2 inset-x-1/2   bg-green-700/50 animate-ping"></div>
          <div className="w-4 h-4 absolute rounded-full -bottom-2 inset-x-1/2   bg-orange-500/80 "></div>
        </div>
      ))}

    
    </div>
  );
}
