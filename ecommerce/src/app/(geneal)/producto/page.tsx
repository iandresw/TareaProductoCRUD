'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { contextProducto } from "@/app/Contexto/ContextProducto";
import { useRouter } from "next/navigation";


export default function Home() {

  const [nombreProducto,setNombreProducto]=useState('');
  const [precioProducto,setPrecioProducto] = useState('0.00');
  const [isvProducto,setIsvProducto] = useState('0.00');
  const [imgProcuto,setImgProducto] = useState('');

  const {producto,setProducto} = contextProducto()


  const route= useRouter()

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


  useEffect(()=>{
    console.log(nombreProducto)
  },[nombreProducto])


  return (
    <form>
  <fieldset disabled>
    <legend>Disabled fieldset example</legend>
    <div className="mb-3">
      <label  className="form-label">Disabled input</label>
      <input type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input"/>
    </div>
    <div className="mb-3">
      <label for="disabledSelect" className="form-label">Disabled select menu</label>
      <select id="disabledSelect" className="form-select">
        <option>Disabled select</option>
      </select>
    </div>
    <div className="mb-3">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled/>
        <label className="form-check-label" for="disabledFieldsetCheck">
          Can’t check this
        </label>
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </fieldset>
</form>
  );
}
