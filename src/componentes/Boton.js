import "./Boton.css";

function Boton({ text, esBotonDeClick, manageClick }) {
  return (
    <button
      className={esBotonDeClick ? "boton-click" : "boton-reinicio"}
      onClick={manageClick}
    >
      {text}
    </button>
  );
}

export default Boton;
