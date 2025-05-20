

import { createContext } from "react";
import { Producto } from "../Modelos/Producto";

export const contextProducto = createContext({
    producto: [] as Producto[],
    cargarProducto: (productos: Producto[])=>{},
    editProducto: (producto:Producto) =>{},
    deleteProducto: (id:number) =>{},
    guardarProducto:(producto:Producto)=>{}
})