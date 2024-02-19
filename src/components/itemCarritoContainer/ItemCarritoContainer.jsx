import React, { useEffect } from 'react'
import { useAppContext } from '../../context/Context'
import ItemCarrito from '../itemCarrito/ItemCarrito';
import './itemCarritoContainer.css'
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../loader/Loader';



const ItemCarritoContainer = () => {
    const {carrito, setCarrito, totalCarrito, setTotalCarrito, setUnidadesCarrito}=useAppContext();
    const navigate = useNavigate();
    const resetar = ()=>{
      setCarrito([])
      setUnidadesCarrito(0)
      setTotalCarrito(0)
    }

    useEffect(() => {
      if (carrito.length===0) {
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    }, [carrito]);

    
  return (
    <div className='contiene-gestionCarrito'>
      <div className='contiene-totales'>
        {carrito.length >0? <h2>El total del carrito es $: {Math.round(totalCarrito*100)/100} </h2> : <h2>No hay productos en el carrito</h2>}
        <button className='btn-contieneTotales' onClick={()=>{resetar()}}>Resetear</button>
        <Link to='/formulario'><button className='btn-contieneTotales'>Comprar</button></Link>
      </div>
      {carrito.length>0?<div>
        {carrito.map((item)=>
          <ItemCarrito key={item.id} id={item.id} imagen={item.imagen} cantidad={item.cantidad} descripcion={item.descripcion} precio={item.precio}/>
        )}
      </div>:<Loader mensaje={'Redirigiendo a home...'} />}
    </div>
  )
}

export default ItemCarritoContainer