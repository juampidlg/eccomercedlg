import React from 'react'
import carritoImg from './assets/carrito.png'
import { useAppContext } from '../../context/Context';
import './cartWidget.css'
import { Link } from 'react-router-dom';


function CartWidget() {
  const { carrito, totalCarrito, unidadesCarrito} = useAppContext(); 
  const item = carrito.length < 2? 'Item' : 'items'
  const producto = unidadesCarrito <= 1? 'producto' : 'productos'
  
  
  return (
    <div className='contiene-carrito'>
      <div className="contiene-imgCarrito"> 
      <Link to='/carrito'><img className="carrito" src={carritoImg} alt='carrito' /></Link>          
      </div>
      <div className='contiene-subtotales tooltip'>
        <Link to='/carrito'> <span className="tooltiptext">ir al carrito</span></Link>
        {/*{carrito.length > 0 && <p className='subtotales'>{carrito.length} {item} / {unidadesCarrito} {producto} / $ {Math.round(totalCarrito*100)/100}</p>}*/}
        {carrito.length > 0 && <p className='subtotales'>{carrito.length} {item}</p> }
        {carrito.length > 0 && <p className='subtotales'>{unidadesCarrito} {producto}</p>}
        {carrito.length > 0 && <p className='subtotales'> Total carrito $ {Math.round(totalCarrito*100)/100}</p>}
        {carrito.length > 0 && <p className='subtotales-mobile'>{unidadesCarrito}</p>}        
      </div>  
    </div>
  )
}

export default CartWidget