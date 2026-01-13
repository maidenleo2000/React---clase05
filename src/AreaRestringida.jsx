import React from "react";
import { Navigate } from "react-router-dom";

const AreaRestringida = ({ isLogged }) => {
  return (
    <>
      {!isLogged ? (
        <Navigate to="/" />
      ) : (
        <main className="w-75 mt-4">
          <h1>Usuario Logueado</h1>
        </main>
      )}
    </>
  );
};

export default AreaRestringida;
