'use client'
import BotonAgregar from '@/app/Componentes/BotonAgregar';
import Card from '@/app/Componentes/Card';
import { Producto } from '@/app/Modelos/Producto';
import { useContextCarrito } from '@/app/Provider/ProviderCarrito'
import React, { useEffect } from 'react'

export default function page() {

  const { producto,cargarProducto, guardarProducto } = useContextCarrito();


  useEffect(()=>{
      cargarProducto();
      
  },[]);


  function guardarProductoDetalle(){
    let producto: Producto={
       // "idProducto":0,
        "nombreProducto":"Sal",
        "precioProducto":10,
        "isvProducto":5,
        "imgProducto":""
    }

    guardarProducto(producto);

    cargarProducto();
  }

  return (
    <>
      <div className='container'>


      <button className='btn btn-warning' onClick={guardarProductoDetalle}> Agregar Producto</button>

        <div className='row'>
   {/*{

          producto.map((item) => (
            <div className="card col-md-3" style={{ "width": "18rem" }} key={item.idProducto}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.nombreProducto}</h5>
                <p className="card-text">Precio Producto: {item.precioProducto}</p>
                <p className="card-text">ISV Producto: {item.isvProducto}</p>
                <p className="card-text">Costo Total Producto: {item.precioProducto + item.isvProducto}</p>

                <button type='button' className="btn btn-primary" onClick={()=>agregarCarrito(item)}>Agregar al Carrito</button>
              </div>
            </div> 
          ))
        }*/}

        {
          producto.map((item)=>(

            <div className='col-md-4' key={item.idProducto}>
              <Card {...item} ></Card>
              <BotonAgregar {...item}></BotonAgregar>
            </div>
          ))
        }

        </div>
     

      </div>


    </>
  )
}
