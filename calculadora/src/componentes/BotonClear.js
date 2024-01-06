import React from "react";
import './estilos/BotonClear.css';


const BotonClear = (props) => (
   <div className='BotonClear'>
    { props.children }
    </div>
);

export default BotonClear;