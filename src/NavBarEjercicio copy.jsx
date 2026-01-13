import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBarEjercicio = () => {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función auxiliar para asignar clases a los links (incluyendo estado activo)
  // Esto reemplaza la lógica automática de Bootstrap
  const linkClasses = ({ isActive }) =>
    `block py-2 px-3 rounded transition-colors duration-200 ${
      isActive
        ? "text-white font-bold bg-blue-700 lg:bg-transparent lg:text-white" // Estilo Activo
        : "text-blue-100 hover:text-white hover:bg-blue-500 lg:hover:bg-transparent" // Estilo Inactivo
    }`;

  return (
    // navbar navbar-expand-lg navbar-dark bg-primary
    <nav className="bg-blue-600 border-gray-200 px-4 py-3 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Brand */}
        {/* to es el equivalente en TAG a al href */}
        <Link className="text-xl font-semibold whitespace-nowrap" to="/">
          Navbar
        </Link>

        {/* Botón Toggler (Móvil) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-blue-100 rounded-lg lg:hidden hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {/* Icono de hamburguesa (SVG) en lugar de navbar-toggler-icon */}
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Contenido Colapsable */}
        {/* Lógica: Si isOpen es false, 'hidden'. Si es true, 'block'. En lg siempre es 'block' y 'flex' */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full lg:block lg:w-auto`}
          id="navbar-default"
        >
          {/* navbar-nav me-auto... */}
          <ul className="flex flex-col p-4 mt-4 font-medium border border-blue-500 rounded-lg bg-blue-600 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:p-0">
            <li>
              {/* Nota: En React Router v6 activeClassName fue reemplazado por una función en className */}
              <NavLink to="/" className={linkClasses}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/nosotros" className={linkClasses}>
                Nosotros
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacto" className={linkClasses}>
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarEjercicio;
