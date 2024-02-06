import React, { useEffect, useState } from 'react'
import productos from '../../archivos/productos';
import { obtenerProductoId } from '../../archivos/productos'
import { useParams } from 'react-router-dom'
import ItemDetail from '../itemDetail/ItemDetail'
import './itemDetailContainer.css';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])

    const {id} = useParams();

    useEffect(()=>{
        const productoObtenido = obtenerProductoId(id)        
        .then(response=> {
            setProducto(response)
        })
        .catch(error=> {
            console.log(error)
        })
        
    },[]);
  return (
    <div className='itemDetailContainer'>
        {producto.length==0? <h2>Cargando...</h2> : <ItemDetail key={producto.id} id={producto.id} rubro={producto.Rubro} categoria={producto.Categoria} nombre={producto.Nombre} img={producto.Imagen} precio={producto.Precio} stock={producto.Stock} />}
    </div>
  )
}

export default ItemDetailContainer