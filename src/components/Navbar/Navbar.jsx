import React from 'react'
import CartWidget from '../CartWidget/CartWidget';

function Navbar() {
  return (
    <>
    <h3>E-Commerce DLG</h3>
    <nav className='nav'>      
    <div>
      <ul className='nav-list'>
        <li className='dropdown'> <a href='#'>Almacén</a>
          <div className='dropdown-content' >
            <a href='#'>Aceites y Vinagres</a>
            <a href='#'>Aderezos y Condimentos</a>
            <a href='#'>Caldos y Sopas</a>
            <a href='#'>Conservas y Legumbres</a>
            <a href='#'>Dulces y Mermeladas</a>
            <a href='#'>Arroz y Cereales</a>
          </div>
        </li>
        <li className='dropdown'> <a href='#'>Bebidas</a>
          <div className='dropdown-content' >
            <a href='#'>Aguas</a>
            <a href='#'>Amargos</a>
            <a href='#'>Tés y cafés</a>
            <a href='#'>Vinos y Espumantes</a>
            <a href='#'>Cervezas</a>
            <a href='#'>Gaseosas</a>
          </div>
        </li>
        <li className='dropdown'> <a href='#'>Frescos</a>
          <div className='dropdown-content' >
            <a href='#'>Fiambres</a>
            <a href='#'>Lácteos</a>
            <a href='#'>Pastas</a>
            <a href='#'>Quesos</a>            
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