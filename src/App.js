import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/views/Home";
import Inicio from "./components/views/Inicio";
import Trabajos from "./components/views/Trabajos";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route  element={<Home />}>
          <Route path="/" element={<Inicio />} />
          <Route path="trabajos" element={<Trabajos />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
