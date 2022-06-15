import React from "react";
import { themes, titles } from "../../contexts/themes";
import { image } from "../../images/imagenes";

export default function Contacto() {
  return (
    <div className="flex flex-col  z-50 items-center duration-150 ease-in-out gap-5 w-10/12 h-full  p-5">
       <div class={titles.h1 + "mb-6  dark:text-white"}>Contactame</div>
      <div>
        <p className="font-medium text-gray-700">Mis vias de comunicación para cualquier duda:</p>
        <div className="flex justify-around items-center py-5">
          <i>
            <img src={image.facebook.url} alt="facebbok" />
            </i><i><img src={image.instagram.url} alt="instagram" /></i><i><img src={image.gmail.url} alt="gmail" /></i>
        </div>
        </div>
    <form class="flex w-full ">
      <div class="max-w-2xl  px-20 py-14  m-auto  shadow-xl rounded-full dark:bg-gray-800">
       <h2 className={titles.h2+"mb-3 "}>O escribeme al WhatsApp</h2>
        <div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
          <div class="col-span-2 lg:col-span-1">
            <div class=" relative ">
              <input
                type="text"
                id="contact-form-name"
                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                placeholder="Name"
              />
            </div>
          </div>
          <div class="col-span-2 lg:col-span-1">
            <div class=" relative ">
              <input
                type="text"
                id="contact-form-email"
                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                placeholder="email"
              />
            </div>
          </div>
          <div class="col-span-2">
            <label class="text-gray-700" for="name">
              <textarea
                class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                id="comment"
                placeholder="Enter your comment"
                name="comment"
                rows="5"
                cols="40"
              ></textarea>
            </label>
          </div>
          <div class="col-span-2 text-center">
            <button
              type="submit"
              class="py-2 px-4  bg-sky-600 hover:bg-sky-700 focus:ring-sky-500 focus:ring-offset-sky-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Mandar WhatsApp
            </button>
          </div>
        </div>
      </div>
    </form>
      </div>
  );
}
