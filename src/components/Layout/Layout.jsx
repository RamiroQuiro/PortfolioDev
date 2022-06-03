import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="flex flex-col md:flex bg-paleta-300 bg-opacity-20 h-screen ">
        <nav className="flex w-full mx-auto items-center h justify-around bg-paleta-100 fixed bg-opacity-20 dark:bg-gray-200 py-4 font-medium uppercse text-sm w-full ">
            <div>logo</div>
            <ul className="items-center flex justify-center gap-5 cursor-pointer">
                <li>home</li>
                <li>trabajos</li>
                <li>labs</li>
            </ul>
            <div>logo</div>
        </nav>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
