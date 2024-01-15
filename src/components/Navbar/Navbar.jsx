import React from 'react'
import CartWidget from '../CartWidget/CartWidget';

function Navbar() {
  return (
    <>
    <h3>E-Commerce DLG</h3>
    <nav className='nav'>      
    <div>
      <ul className='nav-list'>
        <li className='dropdown'> <a href='#'>Productos de despensa</a>
          <div className='dropdown-content' >
            <a href='#'>Aceites y vinagres</a>
            <a href='#'>Arroces y pastas</a>
            <a href='#'>Harinas y cereales</a>
            <a href='#'>Salsas y condimentos</a>
            <a href='#'>Conservas y enlatados</a>
            <a href='#'>Legumbres y granos</a>
          </div>
        </li>
        <li className='dropdown'> <a href='#'>Bebidas</a>
          <div className='dropdown-content' >
            <a href='#'>Aguas y refrescos</a>
            <a href='#'>Jugos y bebidas naturales</a>
            <a href='#'>Tés y cafés</a>
            <a href='#'>Bebidas alcohólicas</a>
            <a href='#'>Bebidas energéticas</a>
          </div>
        </li>
        <li className='dropdown'> <a href='#'>Frescos y perecederos</a>
          <div className='dropdown-content' >
            <a href='#'>Frutas y verduras</a>
            <a href='#'>Carnes y Aves</a>
            <a href='#'>Productos lácteos</a>
            <a href='#'>Panadería y pasteleria</a>            
          </div>
        </li>
      </ul>        
    </div>
    <CartWidget />
    </nav>
    </>
    
  )
}

export default Navbar