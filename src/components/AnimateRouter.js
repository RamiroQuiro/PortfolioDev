import { Route, Routes } from "react-router-dom";
import AboutMe from "./views/AboutMe";
import Contacto from "./views/Contacto";
import Home from "./views/Home";
import Inicio from "./views/Inicio";
import Labs from "./views/Labs";
import Trabajos from "./views/Trabajos";


export default function AnimateRouter() {
  return (
    <Route  element={<Home />}>
          <Route path="/" element={<Inicio />} />
          <Route path="trabajos" element={<Trabajos />} />
          <Route path="labs" element={<Labs />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
  )
}
