import React, { useState } from "react";
import { Link } from "react-router-dom";
import { themes, titles } from "../../contexts/themes";
import { image } from "../../images/imagenes";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import { enviar } from "../../hooks/WhatsAppForm";
export default function Contacto() {
  const [formularioWhatsApp, setFormularioWhatsApp] = useState({
    
  });
const handleChange=(e)=>{
setFormularioWhatsApp({...formularioWhatsApp,[e.target.name]:e.target.value})
}

  const handleEnviar=(e)=>{
e.preventDefault()
enviar("3856771992",formularioWhatsApp.name,formularioWhatsApp.mensaje,formularioWhatsApp.email)
e.target.reset()
  }

  return (
    <div className="flex flex-col  z-50 items-center duration-150 ease-in-out gap-5 w-10/12 h-full  p-5">
      <div className={titles.h1 + "  "}>Contactame</div>
      <div>
        <p className="font-medium text-gray-700 pb-3">
          Mis vias de comunicación para cualquier duda:
        </p>
        <div className="flex justify-around items-center py-3 h-8 ">
          <Link
            to="//facebook.com/ramirochangomoreno/"
            className="object-cover filter saturate-50 hover:saturate-150"
            target={"_blank"}
          >
            <img
              className="object-cover h-auto w-2/3"
              src={image.messenger.url}
              alt="facebbok"
            />
          </Link>
          <Link
            to="//instagram.com/ramirochangomoreno/"
            className="object-cover filter saturate-50 hover:saturate-150"
            target={"_blank"}
          >
            <img
              className="object-cover w-2/3"
              src={image.instagram.url}
              alt="instagram"
            />
          </Link>
          <CopyToClipboard text="rama.exe.13@gmail.com">
            <div
              onClick={(e) => {
                e.preventDefault();
                toast.success("Email Copiado", {
                  className: "bg-gray-800 text-xs font-bold",
                });
              }}
              className="object-cover cursor-pointer filter saturate-50 hover:saturate-150"
            >
              <img
                className="object-cover w-2/3"
                src={image.gmail.url}
                alt="gmail"
              />
            </div>
          </CopyToClipboard>
          <CopyToClipboard text="ramiryexe@hotmail.com">
            <div
              onClick={(e) => {
                e.preventDefault();
                toast.success("Email Copiado", {
                  className: "bg-gray-800 text-xs font-bold",
                });
              }}
              className="object-cover filter cursor-pointer saturate-50 hover:saturate-150"
            >
              <img
                className="object-cover w-2/3"
                src={image.hotmail.url}
                alt="hotmail"
              />
            </div>
          </CopyToClipboard>
        <CopyToClipboard text="ramirochangomoreno#3280">
        <div
              onClick={(e) => {
                e.preventDefault();
                toast.success("Usuario Copiado", {
                  className: "bg-gray-800 text-xs font-bold",
                });
              }}
              className="object-cover filter cursor-pointer saturate-50 hover:saturate-150"
            >
        <img
                className="object-cover w-2/3"
                src={image.discord.url}
                alt="hotmail"
              /></div>
        </CopyToClipboard>
        </div>
      </div>
      <form 
      onSubmit={handleEnviar}
      className="flex w-full ">
        <div className="max-w-2xl  px-20 py-14  m-auto  shadow-xl rounded-full ">
          <h2 className={titles.h2 + "mb-3 "}>O escribeme al WhatsApp</h2>
          <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                  placeholder="Nombre"
                />
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="col-span-2">
              <label className="text-gray-700" for="name">
                <textarea
                  className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                 name="mensaje"
                 onChange={handleChange}
                  placeholder="Escribe aquí tu mensaje "
                  rows="5"
                  cols="40"
                ></textarea>
              </label>
            </div>
            <div className="col-span-2 text-center">
              <button
               type="submit"
                className="py-2 px-4  bg-sky-600 hover:bg-sky-700 focus:ring-sky-500 focus:ring-offset-sky-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Mandar WhatsApp
              </button>
            </div>
          </div>
        </div>
      </form>
      <Toaster />
    </div>
  );
}
