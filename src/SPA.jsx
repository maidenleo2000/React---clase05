import React from "react";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import NavBarEjercicio from "./NavBarEjercicio";
import HomeSpa from "./pages/HomeSpa";
import VistaWrapper from "./VistaWrapper";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import AreaRestringida from "./AreaRestringida";
//BrowserRouter y HashRouter manejan el ambito de las rutas.
//BrowserRouter ---> espera un fallback (respuesta) del servidor que debe ser manualmente configurado en el backend
//HashRouter ---> NO espera respuesta (fallback) del servidor

const Home = VistaWrapper(HomeSpa);
const Nos = VistaWrapper(Nosotros);
const Contact = VistaWrapper(Contacto);
const Restringido = VistaWrapper(AreaRestringida);

const SPA = () => {
  return (
    <>
      <HashRouter>
        {/* Todos los componentes declarados como Children de HashRouter pertenecen al ambito de las rutas */}
        <NavBarEjercicio />
        <Routes>
          {/* Routes desde la version 6, antes se llamaba Switch */}
          {/* Los Children del componente Routes son las rutas que vamos a usar */}
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nos />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/login" element={<Restringido isLogged={false} />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default SPA;
