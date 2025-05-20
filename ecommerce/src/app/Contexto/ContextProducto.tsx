

import { createContext } from "react";
import { Producto } from "../Modelos/Producto";

export const contextProducto = createContext({
    producto: [] as Producto[],

    setProducto: (productos: Producto[])=>{},
    editProducto: (producto:Producto) =>{},
    deleteProducto: () =>{},
    getProducto:(producto:Producto)=>{}
})