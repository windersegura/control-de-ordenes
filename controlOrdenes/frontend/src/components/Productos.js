import React from 'react';

const Productos = ({producto}) => {

    const {nombre, precio, id} = producto
    return ( 
        <h1>{nombre}</h1>
     );
}
 
export default Productos;