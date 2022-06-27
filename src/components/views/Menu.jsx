import React from 'react'
import { NavLink } from 'react-router-dom'
import homeGif from '../../images/icons8-casa.gif'
import { image } from '../../images/imagenes'
import './menu.css'


export default function Menu({home,changeHome,setHome}) {


  return (
    <div className={home?"w-1/2 duration-500":"fixed scale-75 md:scale-100 left-5 z-50 md:left-10 duration-500"}>
    <ul 
    
    className={home?"z-50 flex flex-col justify-end items-start md:items-center gap-5 md:gap-6 scale-90 md:scale-100 md:pl-7 text-lg duration-500 ":"menuActivo flex flex-col justify-end items-center gap-6 text-lg duration-500 z-50  "}>
      <NavLink 
      to="/"
      
      className={home?"hidden":"flex flex-col delay-100 link duration-200 absolute -bottom-16 w-8 hover:-translate-y-1 group cursor-pointer  translate-x-24 "}>
        <div 
        className=" group-hover:shadow-lg  group-hover:shadow-gray-300 duration-200 rounded-3xl flex justify-center  items-center">
          <img
            className="group-hover:-translate-y-3 w-3/5 delay-150 animate- duration-300"
            src={image.back.url}
            alt="Trabajos"
          />
        </div>
        <p className="group-hover:font-bold font-medium  text-xs text-center group-hover:text-sky-900  ">
          volver
        </p>
      </NavLink>
      <NavLink 
      to="/trabajos"
      className={"flex flex-col delay-100 link duration-200 w-16 hover:-translate-y-1 group cursor-pointer gap-3 translate-x-24 "}>
        <div 
        className="bg-gradient-to-tr  from-blue-400 to-blue-500 group-hover:shadow-lg group-hover:-translate-y-1 group-hover:shadow-gray-300 duration-200  py-4 rounded-3xl flex justify-center  items-center">
          <img
            className="group-hover:-translate-y-3 w-2/4 delay-150 duration-300"
            src="data:image/png;base64,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"
            alt="Trabajos"
          />
        </div>
        <p className="group-hover:font-bold font-medium uppercase text-sm text-center group-hover:text-sky-900  ">
          Trabajos
        </p>
      </NavLink>
      <NavLink 
      to='/labs'
      className={"flex flex-col link duration-200 delay-150 w-16 hover:-translate-y-1 group cursor-pointer gap-3 translate-x-10"}>
        <div className="bg-gradient-to-tr from-red-300 via-red-300 to-red-400 group-hover:shadow-lg group-hover:shadow-gray-300 duration-200 h-full py-4 rounded-3xl group-hover:-translate-y-1 flex justify-center text-3xl items-center">
          <img
            width={"60%"}
            alt="Laboratorio y Practicas"
            className="group-hover:-translate-y-3 delay-150 duration-200"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEL0lEQVRoge1XXWwUVRT+zsz+lNoWjJEXdyHdFpuaGBK0RUXaxNAusDzwAAW2qVG6mAaCbH3xBY0EX4xKVsuDaKsP2lZqNPzYNBYSaVOIXX6MVdFEWWNmjTH1pS3SzuzOHh+2u126Mzuz2HW3yX7JJHPP+e75zsm5d+5coIgiiljWoFwEFU/fZj2fuqdsSTWFpQyWD+SkAwDQ5PWldeFCX/eS6xU7sBiZ1n8CS7kPln0HigXkG5Z8iGp8oRQA33GMj138tGcwm1iF0gEbgDoS6Mvmfe07s5mY1wJCj3gwsuMNhGo9SRsL1LvF2368ua1jtZkYeS1AqmyEKtoRdjUsGBmlBDoaU6O/Nrf6dhnFyGsBztAIxKgCx62RNB8B5cwYMCoiLwfZM2f9uj4Cvx4D7SagZt4ybYlEq4c++2hSi18om1gBEATgGe7recUO65MApLiLK6JW8bDexIL9lWjytu8GaGB++O2Fvu4NWrxC6UAaLDT3VeKdgWpdnlGgQFC+DOCpNAfzmH9jyeZ7TdAIQ729001eH4D4htbjGXeAOaZlJoLhUvk/YNgB/8aSzYGgnJbskfqSBi1+Yn0XLzQmsewLyNnfaC6WixaWfQcKtoBtra0VZngFW4AaW/H4woim9XiGBZy4qtRr2QNBpe5eEjMLFuillNEtPZ7hJibmgzoSBwE8n3VmAKwD/zzGzB8zUJvUAX4iorZIy33Xm70HjjLzwi2H6LxufpmETo7zA1FSwgBKNNyyYLE5X9xAmr+5ujg7WS7OrbgJwLHYJcQik5uGX71hlWfdKeapCAvVl/rf/1srXMYOqFDaoZ08ANhjqvwcgDdTjVoncCp++fEqpKr4Ie66OQhnaBRSVQNCtR7EBOuDv69zu6t/OJOgMwP79ZIHMuwBZiYm+ABgq/8tHKh/Nvm4O9+eJ1HHa8ymPwQzq5wIu55Ojp2/jUBUZThCo0mb5GrAzConAEwxsOtiX/cXmWLqigeC8nYA6yr+mITjm+/v8q25MoGV0l8A4Lr/mrzVTPJMAn5e3wKmBUnJ1QjVYkO4qvEu3kT9/j+nS1fXGCUPZNgDgXF5EITtT7zbj0c/GUrzT7R5MH54D4gweKTOvsNISDh9u5OAE0a8BJjgj7WUvWMYV8t48sbsWhDcFlnBw+fHNCfWnBuFqETAjG1d47OVGVX67zgJOGYm8QSIcRyf30nb6IuhWUA0IhwCIK69dB32qRnNifapGVR+fQ0AhKggdGQSEUW1CxkuJTooF6NqlxFJ+ytE2AsASlkpVJsVohJJo0TtNsytLIvTGfsAvAwAW/a2e4joFAgPJclnOrPMPYmd8PokInphuPeD9HWsWwDity1p03p8ONZjRkhNvJBA7wEpyf93OJj5FIA1Wk7NJcTx0zdsUkAi4kOpgtnlZwrOHMQsoogiCgH/AgrXUzI3DT6rAAAAAElFTkSuQmCC"
          />
        </div>
        <p className="group-hover:font-bold font-medium text-center uppercase text-sm group-hover:text-sky-900  ">
          Labs
        </p>
      </NavLink >
      <NavLink 
          to='/aboutme'
      className={"flex flex-col link duration-200 delay-200 hover:break-normal w-16 hover:-translate-y-1 group cursor-pointer gap-3  translate-x-10"}>
        <div className="bg-gradient-to-tr from-orange-200 to-orange-300 group-hover:shadow-lg group-hover:-translate-y-1 group-hover:shadow-gray-300 duration-200 h-full py-4 rounded-3xl flex justify-center text-3xl items-center">
          <img
            alt="sobre mi"
            width={"60%"}
            className="group-hover:-translate-y-3 delay-150 duration-300"
            src="data:image/png;base64,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"
          />
        </div>
        <p className="group-hover:font-bold  group-hover:break-normal font-medium text-center uppercase text-sm group-hover:text-sky-900  ">
          Acerca de mi
        </p>
      </NavLink >
      <NavLink 
          to='/contacto'
      className={"flex flex-col link duration-200 delay-300 w-16 hover:-translate-y-1 group cursor-pointer gap-3 z-50 translate-x-24"}>
        <div className="bg-gradient-to-tr from-teal-600 to-teal-700 group-hover:shadow-lg group-hover:-translate-y-1 group-hover:shadow-gray-300 duration-200 h-full py-4 rounded-3xl flex justify-center text-3xl items-center z-50 ">
          <img
            width="60%"
            className="group-hover:-translate-y-3 delay-150 duration-300"
            alt="contacto"
            src="data:image/png;base64,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"
          />
        </div>
        <p className="group-hover:font-bold font-medium text-center uppercase text-sm group-hover:text-sky-900 z-50  ">
          Contacto
        </p>
      </NavLink >
    </ul>
  </div>
  )
}
