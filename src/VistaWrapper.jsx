import React from "react";
import "./VistaWrapper.css";
import SidebarEjercicio from "./SidebarEjercicio";

const VistaWrapper =
  // eslint-disable-next-line no-unused-vars
    (Componente) =>
    ({ ...props }) => {
      return (
        <>
          <SidebarEjercicio />
          <div className="main">
            <Componente {...props} />
          </div>
        </>
      );
    };

export default VistaWrapper;
