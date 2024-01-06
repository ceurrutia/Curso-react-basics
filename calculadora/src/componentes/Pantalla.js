import React from "react";
import './estilos/Pantalla.css';

//Tipo de sintaxis para componentes sencillos es una funcion flecha que se le asigna la funcion flecha.

const Pantalla = ( {input}  ) => (
    <div className='input'>
    { input }
    </div>
);

export default Pantalla;