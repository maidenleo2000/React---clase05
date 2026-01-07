/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const CicloVida = () => {
  const [color, setColor] = useState(null);
  const [texto, setTexto] = useState(null);
  let ponerColor = "red";

  const handleClick = () => {
    setColor("red");
    setTexto("Cambie el color");
  };

  useEffect(() => {
    //fase de montaje / actualizacion
    if (color) console.log("Hizo efecto");

    //fase de desmontaje
    //   return () => {
    //     second
    //   }
  }, [color]); //dependencia del efecto - indica cuando se ejecutan las actualizaciones

  return (
    <div style={{ backgroundColor: color }}>
      <h1>Ciclo de vida</h1>
      {texto && <p>{texto}</p>} {/*Renderizado condicional */}
      <button onClick={handleClick}>Cambiar color</button>
    </div>
  );
};

export default CicloVida;
