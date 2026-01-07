import "./App.css";
import CicloVida from "./CicloVida";
import ComposicionPadre from "./ComposicionPadre";
import ComposiciónHijo from "./ComposiciónHijo";
import { Contacto, Inicio } from "./HOC";
function App() {
  return (
    <>
      <CicloVida />
      <hr />
      <ComposicionPadre>
        <h1>Children de Composicion Padre</h1>
        <p>Prueba de párrafo en el children</p>
      </ComposicionPadre>
      <ComposicionPadre>
        <ComposiciónHijo texto="Soy un ComponenteHijo de ComponentePadre"></ComposiciónHijo>
      </ComposicionPadre>
      <hr />
      <Inicio />
      <Contacto />
    </>
  );
}

export default App;
