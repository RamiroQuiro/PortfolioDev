import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { themes } from "../../contexts/themes";
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
    <div className={"min-h-screen transition-all ease-in-out flex justify-center items-center "}>

      {/* OutLet condicionar si es home o page */}
<div className={
  home?
  "absolute duration-300 ease-in-out shadow-3xl transition-all z-20  flex justify-center items-center mx-auto rounded-full  bg-sky-900 bg-opacity-80 scale-30 h-full rotate-12"
:
"absolute duration-300 ease-in-out transition-all flex justify-center mt-40 bg-opacity-0 items-center mx-auto  h-full "
}>
     <Outlet context={[home]}/>
</div>
      <div className="w-full  flex justify-around items-center">
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
