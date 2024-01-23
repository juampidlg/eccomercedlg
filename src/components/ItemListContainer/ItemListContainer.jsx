import React, { useEffect, useState } from 'react'
import { obtenerProductos } from '../../archivos/productos';
import ItemList from '../itemList/ItemList';
import './itemListContainer.css';


function ItemListContainer({saludo}) {
  const [productos, setProductos] = useState([]);

  useEffect(()=>{
    obtenerProductos()
      .then(response=>{
        setProductos(response)
      })
      .catch(error=>{
        console.log(error)
      })
  },[])
  return (
    <div>
        <h1>{saludo}</h1>
        <div className='contieneLista'>
          <ItemList productos = {productos}/>
        </div>
                
    </div>
    
  )
}

export default ItemListContainer