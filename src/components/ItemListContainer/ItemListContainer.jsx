import React, { useEffect, useState } from 'react'
import { obtenerProductos } from '../../archivos/productos';
import { obtenerProductoCategoria } from '../../archivos/productos';
import ItemList from '../itemList/ItemList';
import './itemListContainer.css';
import { useParams } from 'react-router-dom';


function ItemListContainer({saludo}) {
  const [productos, setProductos] = useState([]);

  const {categoriaId} = useParams();

  useEffect(()=>{
    
      if(categoriaId){
        
        obtenerProductoCategoria(categoriaId)        
        .then(response=>{
          setProductos(response)        
        })
        .catch(error=>{
          console.log(error)})
      }else{
        obtenerProductos()
        .then(response=>{
          setProductos(response)
        })
        .catch(error=>{
          console.log(error)})
      }
  },[categoriaId])
  console.log(productos)
  return (
    <div className='titulo'>        
        {/*{categoriaId? <h3>{productos[0].Rubro} / {productos[0].Categoria}</h3> : '' }*/}
        {categoriaId? <h3>{categoriaId}</h3> : '' }
        
        <div className='contieneLista'>          
          {productos.length==0? <h2>Cargando...</h2> : <ItemList productos = {productos}/>}
        </div>
                
    </div>
    
  )
}

export default ItemListContainer