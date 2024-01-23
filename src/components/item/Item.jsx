import React from 'react'
import './item.css'
import Contador from '../itemCount/Contador' 

const Item = ({id,rubro,categoria,nombre,img,precio}) => {
    
  return (
    <div className='contiene-producto'>
        <div className='contiene-imagen'>
        <img src={img} alt={nombre}/>
        </div>
        <div className='contiene-detalle'>
            <h4>{nombre}</h4>        
            <h5>$ {precio}</h5>
            <Contador valorInicial={0} stock={10} agregar={(cantidad)=> console.log('cantidad agregada', cantidad)}/>
        </div>        
    </div>
    
  )
}

export default Item