import React from 'react'
import carrito from './assets/carrito.png'

function CartWidget() {
  return (
    <div className='contiene-carrito'>
        <img className="carrito" src={carrito} alt='carrito' />
        0
    </div>
    
  )
}

export default CartWidget