import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'
 

const Item = ({id,rubro,categoria,nombre,img,precio, stock}) => {
    
  return (
    <div className='contiene-producto'>
        <div className='contiene-imagen'>
        <img src={img} alt={nombre}/>
        </div>
        <div className='contiene-detalle'>
            <h4>{nombre}</h4>        
            <h5>$ {precio}</h5>            
            <Link to={'/item/' + id} ><button className='Option'>Ver Detalle</button></Link>
        </div>        
    </div>
    
  )
}

export default Item