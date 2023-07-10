import { useState } from "react";
import "./App.css";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";

function App() {
  const [numeroDeClicks, setNumeroDeClicks] = useState(0);

  const manageClick = () => {
    setNumeroDeClicks(numeroDeClicks + 1);
  };

  const reiniciarContador = () => {
    setNumeroDeClicks(0);
  };

  const restarContador = () => {
    setNumeroDeClicks(numeroDeClicks - 1);
  }
  return (
    <div className="App">
      <div className="contenedor">
        <Contador numeroDeClicks={numeroDeClicks} />
        <Boton text="Click" esBotonDeClick={true} manageClick={manageClick} />
        <Boton
          text="Reload"
          esBotonDeClick={false}
          manageClick={reiniciarContador}
        />
        <Boton 
        text='Restar' esBotonDeClick={true} manageClick={restarContador}/>
      </div>
    </div>
  );
}

export default App;
