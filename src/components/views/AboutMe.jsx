import React, { useEffect, useState } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import { titles } from "../../contexts/themes";
import CertificadoandSkill from "./CertificadoandSkill";
import Timeline from "./Timeline";

export default function AboutMe() {
const [home]=useOutletContext()
const [locacion,setLocacion]=useState()
const location=useLocation()
console.log(location)

useEffect(()=>{
  if(location.pathname!=="/AboutMe"){
    setLocacion(false)}
    else
    setLocacion(true)
},[])


  return (
    <div className={
      locacion?
      "opacity-0 delay-500 translate-x-60"
      :
      "flex flex-col  z-50 items-center opacity-100 delay-500 duration-150 ease-in-out gap-5 w-10/12 h-full  p-5"}>
       <section className="w-full flex  flex-wrap flex-col md:flex-row gap-5 gap-y-10 mb-8 md:mb-0 mx-auto items-center p-8">
        <h1 className={titles.h1+""}>Sobre Mi</h1>
        <p className="font-medium text-sm">Mi nombre, <span className="font-bold underline">Ramiro Quiroga</span>,  de Santiago del Estero - Argentina, desarrollador Web y Diseñador Digital, trabajando en el área de informática siempre. Aprendiendo constantemente, hoy en día enfocandome en el FrontEnd utilizando ReactJS de preferencia.</p>
      <div className=" flex items-center mx-auto flex-col md:flex-row ">
        <CertificadoandSkill/>
      <Timeline/>
      </div>
      </section>
    </div>
  );
}
