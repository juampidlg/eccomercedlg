import React, { useState } from 'react'
import './contador.css'
import { useAppContext } from '../../context/Context'

const Contador = ({valorInicial, stock, descripcion, precio, id, imagen}) => {
    const [cantidad,setCantidad]= useState(valorInicial)

    const { carrito, setCarrito, totalCarrito, setTotalCarrito, unidadesCarrito, setUnidadesCarrito} = useAppContext();

    const sumar = ()=>{
        if (cantidad < stock){
            setCantidad(cantidad + 1)
          }
        }

    const restar = ()=>{
        if(cantidad > 0){
            setCantidad(cantidad - 1)
          }
        }
    
    function agregarAlCarrito(producto){        
        const existeProducto = carrito.find((p) => p.id === producto);
    if (existeProducto) {
      // Si el producto ya está en el carrito, aumentar la cantidad
      const nuevoCarrito = carrito.map((p) => {
        if (p.id === producto) {
          p.cantidad = p.cantidad + cantidad;
        }
        return p;
      });
      setCarrito(nuevoCarrito);
    } else {
      // Si el producto no está en el carrito, agregarlo
      const nuevoCarrito = [...carrito, {id,cantidad,descripcion,precio,imagen, stock}];
      setCarrito(nuevoCarrito);
    }   
        totalizarCarrito(producto)        
    };
    function totalizarCarrito(){        
        setTotalCarrito(Math.round(((totalCarrito) + (cantidad*precio))*100)/100)
        setUnidadesCarrito(unidadesCarrito + cantidad)
    }
    
  return (
    <div className='contador'>
        {stock>0?<div className='control'>
            <button className='boton' onClick={restar}>-</button>
            <h4 className='numero'>{cantidad}</h4>
            <button className='boton' onClick={sumar}>+</button>            
        </div>:''}
        {cantidad!==0?<button className='boton-carrito' onClick={() => agregarAlCarrito(id)} disabled={stock===0}>Agregar al Carrito</button>:stock>0?<p style={{fontSize: '11px'}}>Seleccione una cantidad</p>:''}
        {stock===0? <p style={{color: '#F21E40'}}>No hay stock del producto seleccionado</p>: stock<=3? <p style={{color: 'yellow'}}>Atención!! Solo quedan {stock} productos </p > :cantidad===stock?<p style={{fontSize: '11px'}}>Límite de stock</p>:''}
    </div>
  )
}

export default Contador