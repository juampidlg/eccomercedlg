import React, { useState } from 'react'
import './contador.css'

const Contador = ({valorInicial, stock, agregar}) => {
    const [cantidad,setCantidad]= useState(valorInicial)

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
  return (
    <div className='contador'>
        <div className='control'>
            <button className='boton' onClick={restar}>-</button>
            <h4 className='numero'>{cantidad}</h4>
            <button className='boton' onClick={sumar}>+</button>            
        </div>
        <button className='boton-carrito' onClick={()=> agregar(cantidad)} disabled={stock==0}>Agregar al Carrito</button>
        {stock==0? <p style={{color: '#F21E40'}}>No hay stock del producto seleccionado</p>: stock<=3? <p style={{color: 'yellow'}}>Atención!! Solo quedan {stock} productos </p> : '' }

    </div>
  )
}

export default Contador