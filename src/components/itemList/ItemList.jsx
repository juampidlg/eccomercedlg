import React from 'react'
import Item from '../item/Item'
import './itemList.css';

const ItemList = ({productos}) => {
    
  return (
    <div className='listaProductos'>
        {productos.map(producto=>
            <Item key={producto.id} id = {producto.id} rubro={producto.Rubro} categoria = {producto.Categoria} nombre = {producto.Nombre} img = {producto.Imagen} precio = {producto.Precio} stock = {producto.Stock}/>
            
            )}        
    </div>
  )
}

export default ItemList