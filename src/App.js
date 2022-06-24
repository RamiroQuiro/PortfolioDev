import { Route, Routes, } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AboutMe from "./components/views/AboutMe";
import Contacto from "./components/views/Contacto";
import Home from "./components/views/Home";
import Inicio from "./components/views/Inicio";
import Labs from "./components/views/Labs";
import Trabajos from "./components/views/Trabajos";


function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route  element={<Home />}>
          <Route path="/" element={<Inicio />} />
          <Route path="trabajos" element={<Trabajos />} />
          <Route path="labs" element={<Labs />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
