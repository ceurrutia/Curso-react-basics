import React from "react";
import '../estilos/Boton.css';

function Boton({ texto, esBotonDeClick, manejarClick }) {
  return (
    <button

    //uso operador ternario que evalua booleano
      className={esBotonDeClick ? "botonClick" : "botonReiniciar"}
      onClick={manejarClick}
    >
      {texto}
    </button>
  );
}

export default Boton;
