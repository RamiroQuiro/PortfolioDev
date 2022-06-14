import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import Menu from "./Menu";
import Titulo from "./Titulo&Redes";

export default function Home() {

const [home,setHome]=useState(true)

let location = useLocation();

useEffect(()=>{
  if(location.pathname!=="/"){
    setHome(false)}
    else
    setHome(true)
},[location,])

const changeHome=()=>{
  setHome(false)
}

  return (
    <div className="bg-gradient-to-r font-roboto transition-all ease-in-out from-gray-50 flex justify-center items-center to-gray-300 dark:form-gray-200 h-screen min-h-screen">

      {/* OutLet condicionar si es home o page */}
<div className={
  home?
  "absolute duration-500 ease-in-out shadow-3xl transition-all z-20  flex justify-center items-center mx-auto rounded-full  bg-sky-900 bg-opacity-80  w-full scale-20 h-full rotate-12"
:
"absolute duration-500 ease-in-out transition-all flex justify-center mt-40 items-center mx-auto scale-15 h-screen  "
}>
     <Outlet/>
</div>
      <div className="w-full h-screen  flex justify-around items-center">
        {/* Menu Parte Izquierda */}
       <Menu
       home={home}
       setHome={setHome}
      //  changeHome={changeHome}
       />
        {/* Titulo y redes Parte Izquierda */}
        
        <Titulo
        home={home}
        />

      </div>
      {/* Centro */}
    </div>
  );
}
