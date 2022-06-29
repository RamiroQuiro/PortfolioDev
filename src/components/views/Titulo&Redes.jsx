import React from "react";
import { Link } from "react-router-dom";
import { image } from "../../images/imagenes";
import CVCurriculum from "../../images/CVRamiroQuiroga.pdf";

export default function TituloRedes({ home }) {
  return (
    <div className={
      home?
      "w-1/2   relative flex  h-full items-center  "
    :
    "w-full relative  flex  h-full md:items-start  justify-end "}>
      <div className={home?"text-5xl text-sky-900  z-10 font-black duration-300 -translate-y-32 md:ml-16 scale-75 md:scale-100 "
    :
    "text-5xl text-sky-900 absolute left-0 z-10 font-black duration-300 md:mt-5 flex md:w-full md:mx-auto items-start  "  
    }>
        <div className={home ? "duration-200" : "duration-200  md:mx-auto md:text-center md:scale-75 md:translate-x-0 -translate-x-20 scale-50"}>
          <h1 className=" peer duration-200 hover:scale-110  hover:-rotate-6 hover:p-2 hover:bg-sky-900 hover:text-gray-100 rounded-lg">
            Ramiro Quiroga
          </h1>
          <h2 className="text-lg duration-200 delay-75  ">
            Desarrollo & Diseño Web
          </h2>
        </div>
        {/* redes sociales -  */}
        <div
          className={
            home
              ? "flex mt-2 justify-center items-center duration-150  gap-2 "
              : "flex flex-col  duration-150  justify-center items-center fixed top-1/2 right-2 md:right-10 gap-2 "
          }
        >
          <Link
            to={"//www.linkedin.com/in/ramiro--quiroga"}
            target="_blank"
            className=" my-auto block group cursor-pointer"
          >
            <img
              alt="LinkedIn"
              width="25px"
              height="25px"
              src={image.linkedin.url}
            />
            <span className="text-xs z-40 bg-opacity-90 text-center p-1.5 bg-sky-800 text-white font-roboto-mono-bold absolute -ml-3 translate-y-5 group-hover:translate-y-0 duration-200 invisible group-hover:visible opacity-0 group-hover:opacity-100 rounded-lg">
              Linkedin
            </span>
          </Link>
          <Link
            to={"//www.github.com/ramiroquiro"}
            target="_blank"
            className="group relative block cursor-pointer"
          >
            <img width="25px"
              height="25px"
              alt="Github" src={image.gitHub.url} />
            <span className="text-xs z-40 bg-opacity-90 text-center p-1.5 bg-sky-800 text-white font-roboto-mono-light absolute -ml-3 translate-y-5 group-hover:translate-y-0 duration-200 invisible group-hover:visible opacity-0 group-hover:opacity-100 rounded-lg">
              GitHub
            </span>
          </Link>
          <Link
            to={"//codepen.io/ramiroquiroga"}
            target="_blank"
            className="group relative block cursor-pointer"
          >
            <img
              alt="codepen"
              width="25px"
              height="25px"
              className=" w- -mr-2"
              src="data:image/png;base64,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"
            />
            <span className="text-xs z-40 bg-opacity-90 text-center p-1.5 bg-sky-800 text-white font-roboto-mono-light absolute -ml-3 translate-y-5 group-hover:translate-y-0 duration-200 invisible group-hover:visible opacity-0 group-hover:opacity-100 rounded-lg">
              Codepen
            </span>
          </Link>
          <Link
            to={`//www.behance.net/ramiroquiroga`}
            target="_blank"
            className="group relative block cursor-pointer"
          >
            <img
              width="25px"
              height="25px"
              alt="Behancen"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABuklEQVRIie2UPWsUURiFn3dmBxaiRCtNXAUFBREF5y47sbEQJCKk0l4bt7O0UgT9CWKh5BdIWsEiVjbLLHsFU0hARNSIhQgplblwLJyN65LdNbPBRg9c7sf7nnPuN/zHBNhgp9lsXpb0GGhU1Nsws3av13vWH4gGo1OKAzRKjS1EwwlTiPdxeJzBrqM2JvYSeAsg6ZCZnQH2DMdKLAH1nRose+8f9TtZlh0IIawCpwEPrA7kXqxiAIBzbh14k+f5knPuAbAM3ACuAe+BeWBmFP9PzmAWWCjbSVmvA8e99ydqtdq8pOeVDSQtFkVxKsuyBnCrHL5rZsecc2uSEjO7U9kgiqLzSZJczfP8E/AUII7jV2a2KekhQL1efz2KP/EMJN0GDrZarSchhBUzu1kUxXdJiqKIEMKVEAJmti1/ogGwBrzodrtf0zSdBTCzk3Ecv5N0D/hsZt8kVTPw3i8COOfmgP5e30+S5FKn05kDSNP0upmd247/27qcc4PT+AB8Kdt7gaP8ukUAm/x8cPuBs0OT2tIdt4IjZRmFfcCFMXHgL/xFwwYbu6D5caSBmbWHE3YqLqk9Bf9fxA+7y4hfqSsJ8QAAAABJRU5ErkJggg=="
            />{" "}
            <span className="text-xs z-40 bg-opacity-90 text-center p-1.5 bg-sky-800 text-white font-roboto-mono-light absolute -ml-3 translate-y-5 group-hover:translate-y-0 duration-200 invisible group-hover:visible opacity-0 group-hover:opacity-100 rounded-lg">
              Behance
            </span>
          </Link>
        </div>
      </div>
      {/* CV y Skill */}
      <div
        className={
          home
            ? "flex flex-col gap-4 absolute duration-150   md:translate-x-52 z-30 scale-75 md:scale-100 items-center "
            : "hidden "
        }
      >
        <div className=" flex flex-col   items-center z-50 ">
          <div className="flex flex-col duration-300  hover:break-normal  md:w-16 w-36 bg-red  border-0 md:hover:w-44 hover:border-0  hover:z-50 justify-center items-center mx-auto  group cursor-pointer gap-3 translate-x-20 translate-y-6 md:translate-y-10 md:translate-x-14  ">
            <div className="bg-gray-300/50 md:bg-gradient-to-tr from-red-200 to-orange-400 border-0 md:group-hover:shadow-lg group-hover:shadow-gray-300 duration-300 h-full py-3 hover:py-3 rounded-3xl grid grid-cols-3  justify-center mx-auto  text-3xl items-center">
              <div className="  relative block cursor-pointer">
                <img
                width="100px"
                height="100px"
                  className="object-cover peer w-2/3 mx-auto saturate-50 hover:saturate-100 -0 duration-100 hover:scale-110"
                  alt="JS"
                  src={image.JS.url}
                />
                <span className="text-xs text-center p-2 bg-zinc-800 bg-opacity-70 z-50 text-white font-roboto-mono-bold absolute  translate-y-5 peer-hover:translate-y-0 duration-200 invisible peer-hover:visible opacity-0 peer-hover:opacity-100 rounded-lg peer ">
                  JavaSrcipt
                </span>
              </div>
              <div className="  relative block cursor-pointer">
                <img
                width="100px"
                height="100px"
                  alt="React"
                  className=" peer object-cover w-2/3 mx-auto saturate-50 hover:saturate-100 -0 duration-100 hover:scale-110"
                  src={image.react.url}
                />
                <span className="text-xs text-center p-2 bg-zinc-800 bg-opacity-70 z-50 text-white font-roboto-mono-bold absolute  translate-y-5 peer-hover:translate-y-0 duration-200 invisible peer-hover:visible opacity-0 peer-hover:opacity-100 rounded-lg peer ">
                  ReactJS
                </span>
              </div>
              <div className="  relative block cursor-pointer">
                <img
                width="100px"
                height="100px"
                  alt="css3"
                  className="object-cover peer w-2/3 mx-auto saturate-50 hover:saturate-100 -0 duration-100 hover:scale-110"
                  src={image.css.url}
                />
                <span className="text-xs text-center p-2 bg-zinc-800 bg-opacity-70 z-50 text-white font-roboto-mono-bold absolute ml-3  translate-y-5 peer-hover:translate-y-0 duration-200 invisible peer-hover:visible opacity-0 peer-hover:opacity-100 rounded-lg peer ">
                  CSS
                </span>
              </div>
              <div className="  relative block cursor-pointer">
                <img
                width="100px"
                height="100px"
                  alt="html5"
                  className="object-cover peer w-2/3 mx-auto saturate-50 hover:saturate-100 -0 duration-100 hover:scale-110"
                  src={image.html.url}
                />
                <span className="text-xs text-center p-2 bg-zinc-800 bg-opacity-70 z-50 text-white font-roboto-mono-bold absolute ml-3 translate-y-5 peer-hover:translate-y-0 duration-200 invisible peer-hover:visible opacity-0 peer-hover:opacity-100 rounded-lg peer ">
                  HTML
                </span>
              </div>
              <div className="  relative block cursor-pointer">
                <img
                width="100px"
                height="100px"
                  className="object-cover w-2/3 peer mx-auto saturate-50 hover:saturate-100 -0 duration-100 hover:scale-110"
                  alt="tailwindCSS"
                  src={image.tailwindCSS.url}
                />
                <span className="text-xs text-center p-2 bg-zinc-800 bg-opacity-70 z-50 text-white font-roboto-mono-bold absolute -ml-2 translate-y-5 peer-hover:translate-y-0 duration-200 invisible peer-hover:visible opacity-0 peer-hover:opacity-100 rounded-lg peer ">
                  TailwindCSS
                </span>
              </div>
              <div className="  relative block cursor-pointer">
                <img
                width="100px"
                height="100px"
                  className="object-cover peer w-2/3 mx-auto saturate-50 hover:saturate-100 -0 duration-100 hover:scale-110"
                  alt="nodeJS"
                  src={image.nodeJS.url}
                />
                <span className="text-xs text-center p-2 bg-zinc-800 bg-opacity-70 z-50 text-white font-roboto-mono-bold absolute  translate-y-5 peer-hover:translate-y-0 duration-200 invisible peer-hover:visible opacity-0 peer-hover:opacity-100 rounded-lg peer ">
                  NodeJS
                </span>
              </div>
              <div className="  relative block cursor-pointer">
                <img
                width="100px"
                height="100px"
                  alt="mongoDB"
                  className="object-cover peer w-2/3 mx-auto saturate-50 hover:saturate-100 -0 duration-100 hover:scale-110"
                  src={image.mongoDB.url}
                />
                <span className="text-xs text-center p-2 bg-zinc-800 bg-opacity-70 z-50 text-white font-roboto-mono-bold absolute  translate-y-5 peer-hover:translate-y-0 duration-200 invisible peer-hover:visible opacity-0 peer-hover:opacity-100 rounded-lg peer ">
                  MongoDB
                </span>
              </div>
              <div className="  relative block cursor-pointer">
                <img
                width="100px"
                height="100px"
                  alt="firebase"
                  className="object-cover peer w-2/3 mx-auto saturate-50 hover:saturate-100 -0 duration-100 hover:scale-110"
                  src={image.firebase.url}
                />
                <span className="text-xs text-center p-2 bg-zinc-800 bg-opacity-70 z-50 text-white font-roboto-mono-bold absolute  translate-y-5 peer-hover:translate-y-0 duration-200 invisible peer-hover:visible opacity-0 peer-hover:opacity-100 rounded-lg peer ">
                  Firebase
                </span>
              </div>
              <div className="  relative block cursor-pointer">
                <img
                width="100px"
                height="100px"
                  className="object-cover peer w-2/3 mx-auto saturate-50 hover:saturate-100 -0 duration-100 hover:scale-110"
                  alt="git"
                  src={image.git.url}
                />
                <span className="text-xs text-center ml-2 p-2 bg-zinc-800 bg-opacity-70 z-50 text-white font-roboto-mono-bold absolute  translate-y-5 peer-hover:translate-y-0 duration-200 invisible peer-hover:visible opacity-0 peer-hover:opacity-100 rounded-lg peer ">
                  Git
                </span>
              </div>
              <div className="  relative block cursor-pointer">
                <img
                width="100px"
                height="100px"
                  className="object-cover peer w-2/3 mx-auto saturate-50 hover:saturate-100 -0 duration-100 hover:scale-110"
                  alt="phothoshop"
                  src={image.photoshop.url}
                />
                <span className="text-xs text-center -ml-2 p-2 bg-zinc-800 bg-opacity-70 z-50 text-white font-roboto-mono-bold absolute  translate-y-5 peer-hover:translate-y-0 duration-200 invisible peer-hover:visible opacity-0 peer-hover:opacity-100 rounded-lg peer ">
                  Photoshop
                </span>
              </div>
              <div className="  relative block cursor-pointer">
                <img
                width="100px"
                height="100px"
                  className="object-cover peer w-2/3 mx-auto saturate-50 hover:saturate-100 -0 duration-100 hover:scale-110"
                  alt="captureOne"
                  src={image.captureOne.url}
                />
                <span className="text-xs text-center -ml-2 p-2 bg-zinc-800 bg-opacity-70 z-50 text-white font-roboto-mono-bold absolute  translate-y-5 peer-hover:translate-y-0 duration-200 invisible peer-hover:visible opacity-0 peer-hover:opacity-100 rounded-lg peer ">
                  CaptureOne
                </span>
              </div>
            </div>
            <p className="group-hover:font-bold  group-hover:break-normal font-medium text-center uppercase text-sm group-hover:text-sky-900 tracking-widest ">
              Skill
            </p>
          </div>
        </div>
        <div className=" flex flex-col absolute translate-y-56 translate-x-20 md:translate-x-10 md:translate-y-36 items-center ">
          <Link
            to={CVCurriculum}
            target="_blank"
            className="flex flex-col  duration-200  hover:break-normal w-16 hover:translate-y-4 group cursor-pointer gap-3  -translate-x-10 translate-y-6  "
          >
            <div className=" bg-gradient-to-tr from-zinc-300 to-zinc-400 group-hover:shadow-lg group-hover:shadow-gray-300 duration-200 h-full py-4 rounded-3xl flex justify-center text-3xl items-center">
              <img
                alt="CV"
                className="group-hover:-translate-y-3 delay-150 duration-300"
                width={"60%"}
                src={image.cv.url}
              />
            </div>
            <p className="group-hover:font-bold  group-hover:break-normal font-medium text-center uppercase text-sm group-hover:text-sky-900  ">
              CV
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
