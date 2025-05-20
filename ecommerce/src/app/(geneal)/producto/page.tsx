'use client'

import { useEffect, useState, ReactNode } from "react";
import { contextProducto } from "@/app/Contexto/ContextProducto";
import { useRouter } from "next/navigation";


export default function page() {
  const [nombreProducto,setNombreProducto]=useState('ddd');
  const [precioProducto,setPrecioProducto] = useState('0.00');
  const [isvProducto,setIsvProducto] = useState('0.00');
  const [imgProcuto,setImgProducto] = useState('');


  
  function login(){
    if(nombreProducto.trim()===''){
      alert('Debe ingresar un producto')
      return
    }else if(precioProducto.trim()===''){
        alert('Debe ingresar un valor del producto')
      return
    }else if(isvProducto.trim()===''){
        alert('Debe ingresar un impuesto')
      return
    }
  }
    useEffect(()=>{
    console.log(nombreProducto)
  },[nombreProducto])
  
  return (
<>
<div className="input-group  mb-3">
  <span className="input-group-text" id="nombreProducto">Nombre Producto</span>
  <input type="text" 
  className="form-control" 
  aria-label="Sizing example input" 
  aria-describedby="inputGroup-sizing-default"
  value={nombreProducto}
  onChange={(e)=> setNombreProducto(e.target.value)}> </input>
</div>

<div className="input-group mb-3">
  <span className="input-group-text" id="precioProducto">Precio Producto</span>
  <input type="text" 
  className="form-control" 
  aria-label="Sizing example input" 
  aria-describedby="inputGroup-sizing-default" 
  value={precioProducto}
  onChange={(e)=> setPrecioProducto(e.target.value)}> </input>
</div>

<div className="input-group mb-3">
  <span className="input-group-text" id="isvProducto">I.S.V.</span>
  <input type="text" 
  className="form-control" 
  aria-label="Sizing example input" 
  aria-describedby="inputGroup-sizing-default" 
  value={isvProducto}
  onChange={(e)=> setIsvProducto(e.target.value)}> </input>
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="imgProcuto">Cargar Imagen</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={imgProcuto}> </input>
</div>
    
</>

  );

  }
