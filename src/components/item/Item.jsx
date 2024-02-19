import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

const Item = ({id,rubro,categoria,nombre,img,precio, stock}) => { 
    
  return (
    <div className='contiene-producto'>
        <div className='contiene-imagen'>
          <img className='img-listaProductos' src={img} alt={nombre}/>
        </div>
        {/*<img src={img} alt={nombre}/>*/}
        <div className='contiene-detalle'>
            <p className='nombre'>{nombre}</p>        
            <p className='precio'>$ {precio}</p>            
            <Link to={'/item/' + id} ><button className='Option' >Ver Detalle</button></Link> 
        </div>        
    </div>
    
  )
}

export default Item