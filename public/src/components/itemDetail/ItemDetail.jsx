import React from 'react'
import Contador from '../itemCount/Contador'
import './itemDetail.css'

const ItemDetail = ({id,rubro,categoria,nombre,img,precio, stock}) => {    
    
    return (
    <article className='CardItem'>
        <header className='Header'>
            <h2 className='ItemHeader'>
                {nombre}
            </h2>
        </header>
        <picture>
            <img src={img} alt='Imagen' className='ItemImg'/>
        </picture>
        <section>
            <p className='Info'>
                Rubro: {rubro}
            </p>
            <p className='Info'>
                Categoria: {categoria}                
            </p>
            <p className='Info'>
                {stock===0? 'Precio: no Disponible' : `Precio $: ${precio}`}                
            </p>
            <p className='Info'>
                Stock: {stock}                
            </p>
        </section>
        <footer className='ItemFooter'>
            <Contador valorInicial={0} stock={stock} descripcion={nombre} precio={precio} id={id} imagen={img}/>            
        </footer>
    </article>
  )
}

export default ItemDetail