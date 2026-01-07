//HOC - Higher Order Component => crea un nuevo componente recibiendo un componente
const vista =
  // eslint-disable-next-line no-unused-vars
    (Componente) =>
    // eslint-disable-next-line no-unused-vars
    ({ ...props }) => {
      return (
        <div className="mb-3">
          {/* <header className="bg-indigo-500">
          <h1>Soy el header</h1>
        </header>
        <Componente /> */}
          <header className="bg-indigo-500 text-red-800 first:mt-3">
            <Componente />
          </header>
        </div>
      );
    };

const ComponenteInicio = () => {
  return <h2 className="text-3xl">Soy vista Inicio</h2>;
};

const ComponenteContacto = () => {
  return (
    <>
      <h2 className="text-3xl">Soy vista Contacto</h2>
    </>
  );
};

export const Inicio = vista(ComponenteInicio);
export const Contacto = vista(ComponenteContacto);
