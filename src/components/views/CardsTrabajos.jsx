import React from 'react'
import { Link } from 'react-router-dom'
import { image } from '../../images/imagenes'

export default function CardsTrabajos({ nombre,imagen,website,repositorio,herramientas,id }) {
  return (
    <div className="bg-gray-50 bg-opacity-95  w-72 shadow-md hover:shadow-lg hover:-translate-y-1 mx-auto rounded-xl hover:scale-110 duration-150 ">
          <div className="flex items-center ">
            <img
              alt="profil"
              src={imagen}
              className=" rounded-t-xl mx-auto object-cover h-2/3"
            />
           
          </div>
          <p className="text-gray-600 px-2 pt-2 text-sm font-bold ">
           {nombre}
          </p>
          <div class="flex justify-around px-3 w-full pb-1  items-center ">
            <Link
            to={website}
            target="_blank"
            className="w-8"
            >
                <img 
                className="peer"
            alt="www"
            src={image.www.url}/>
            <span className="text-xs text-center p-2 bg-zinc-800 bg-opacity-70 z-50 text-white font-roboto-mono-bold absolute  translate-y-5 peer-hover:translate-y-0 duration-200 invisible peer-hover:visible opacity-0 peer-hover:opacity-100 rounded-lg peer ">
                      WebSite
                    </span>
          </Link>
            <Link
            to={repositorio}
            target="_blank"
            className="w-8"
            ><img 
            className="peer"
            alt="www"
            src={image.gitHub.url}/>
             <span className="text-xs text-center p-2 bg-zinc-800 bg-opacity-70 z-50 text-white font-roboto-mono-bold absolute  translate-y-5 peer-hover:translate-y-0 duration-200 invisible peer-hover:visible opacity-0 peer-hover:opacity-100 rounded-lg peer ">
                      Repositorio
                    </span>
          </Link>
          <div className="text-xs bg-white py-1 rounded-xl  items-center justify-center text-center  w-2/4 ">
              Herramientas
              <div className="flex justify-around">
               {
                   herramientas.map((herra,id)=>(
                        <img
                        className='w-7 object-contain' src={image[herra].url}alt={herra}
                        />
                    ))
               }
              </div>

           </div>
          </div>
          
        </div>
  )
}
