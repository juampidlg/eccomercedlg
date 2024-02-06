import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import logo from '../../archivos/LOGO.png'

function Navbar() {
  return (
    <>       
    <nav className='nav'>
    <img src={logo} alt='logo' className='logo' />
    <Link to='/' className='link'>
      <h4>Home</h4>
  </Link>
     
    <div>
      <ul className='nav-list'>
        <li className='dropdown'> <a href='#'>Almacén</a>
          <div className='dropdown-content' >
           {/*<a href='#'>Aceites y Vinagres</a>*/} 
            <NavLink to={'/categoria/Aceites y Vinagres'} className='dropdown-item'>Aceites y Vinagres</NavLink>
            <NavLink to={'/categoria/Aderezos y Condimentos'}className='dropdown-item'>Aderezos y Condimentos</NavLink>
            <NavLink to={`/categoria/Caldos y Sopas`}className='dropdown-item'>Caldos y Sopas</NavLink>
            <NavLink to={`/categoria/Conservas y Legumbres`}className='dropdown-item'>Conservas y Legumbres</NavLink>
            <NavLink to={`/categoria/Dulces y Mermeladas`}className='dropdown-item'>Dulces y Mermeladas</NavLink>
            <NavLink to={`/categoria/Arroz y Cereales`}className='dropdown-item'>Arroz y Cereales</NavLink>           
          </div>
        </li>
        <li className='dropdown'> <a href='#'>Bebidas</a>
          <div className='dropdown-content' >
            <NavLink to={'/categoria/Aguas'}>Aguas</NavLink>
            <NavLink to={'/categoria/Amargos'}>Amargos</NavLink>            
            <NavLink to={'/categoria/Vinos'}>Vinos</NavLink>
            <NavLink to={'/categoria/Espumantes'}>Espumantes</NavLink>
            <NavLink to={'/categoria/Cervezas'}>Cervezas</NavLink>
            <NavLink to={'/categoria/Gaseosas'}>Gaseosas</NavLink>
          </div>
        </li>
        <li className='dropdown'> <a href='#'>Frescos</a>
          <div className='dropdown-content' >
            <NavLink to={'/categoria/Fiambres'}>Fiambres</NavLink>
            <NavLink to={'/categoria/Lacteos'}>Lácteos</NavLink>
            <NavLink to={'/categoria/Pastas'}>Pastas</NavLink>
            <NavLink to={'/categoria/Quesos'}>Quesos</NavLink>            
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