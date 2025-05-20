'use client'
import React, { useContext, useEffect, useState } from 'react'
import { PlantillaReact } from '../Modelos/PlantillaReact'
import { contextProducto } from '../Contexto/ContextProducto'

import { Producto } from '../Modelos/Producto'

//children (renderizamos los componente /consumidores)
//dar funcionalidad a la definicion del contexto
//exportar contexto

export default function ProviderProducto({children}:PlantillaReact) {

 const [producto, setProducto]= useState<Producto[]>([]);

 let urlApi="http://localhost:5000/producto"


 async function cargarProducto(){
    try{
        const respuesrta= await fetch(urlApi)
        const data= await respuesrta.json();
        setProducto(data);
    }
    catch(err){
        alert('Ocurrio un Error al cargar los productos')
    }
 }

 async function  guardarProducto(prodcuto:Producto) {
    try {
        const respuesta= await fetch(urlApi,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(prodcuto)
        })
        const data= await respuesta.json();
        alert("Agregado Correctamente")
    } catch (error) {
        alert("Ocurrio un error al guardar Producto")
    }
 }

  async function  deleteProducto(id:number) {
    try {
        const respuesta= await fetch(urlApi,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(id)
        })
        const data= await respuesta.json();
        alert("Producto eliminado!")
    } catch (error) {
        alert("Ocurrio un error al eliminar el Producto")
    }
 }

  async function  editProducto(prodcuto:Producto) {
    try {
        const respuesta= await fetch(urlApi,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(prodcuto)
        })
        const data= await respuesta.json();
        alert("Agregado Editado")
    } catch (error) {
        alert("Ocurrio un error al editar Producto")
    }
 }


 useEffect(()=>{
        console.log(producto)
 },[producto])

  return (
    <contextProducto.Provider value={{producto, cargarProducto, editProducto, deleteProducto,guardarProducto}}>
        {children}
    </contextProducto.Provider>
   
  )
}



export function useContextProducto(){
    //hook
    return useContext(contextProducto)
}