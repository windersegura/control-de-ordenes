import React, {Fragment, useState} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Productos from './components/Productos'


function App() {

  const fecha = new Date().getFullYear();

  //Listado de productos

  const [productos, guardaProductos] = useState([
    {id:1 , nombre: 'camisa Reactjs', precio: 50}
  ]);


  return (
    <Fragment>
        <Header/>
        <h1>Listado de Productos</h1>
        {productos.map(producto => (
          <Productos
            key = {producto.id}
            producto = {producto}
          />
        ))}

        <Footer
          fecha = {fecha}
        />

    </Fragment>
      
    
  );
}

export default App;
