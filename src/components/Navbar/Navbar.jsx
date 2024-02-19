import React, { useEffect, useState } from 'react'
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import logo from '../../archivos/LOGO.png'
import menu from '../../archivos/barra-de-menus.png'
import { useAppContext } from '../../context/Context'

function Navbar() {
  const { carrito } = useAppContext();
  const [menuVisible, setMenuVisible]=useState((window.innerWidth <= 412)? false : true)

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  }
    
  return (
    <>       
    <nav className='nav'>
    
    <Link to='/' className='link'>
      <img src={logo} alt='logo' className='logo' />      
    </Link>
    
    <div className='ul'>
    <h3 className='menu-productos' onClick={toggleMenu}><img src={menu} className='logo-menu' /></h3>
      <ul className='nav-list' style={{ display: menuVisible ? 'block' : 'none' }} >
        <li className='dropdown'><h3 className='rubro'><Link to={'/rubro/Almacen'} className='link-rubro'>Almacén</Link></h3>        
          <div className='dropdown-content' >            
            <NavLink to={'/categoria/Aceites y Vinagres'} className='dropdown-item'>Aceites y Vinagres</NavLink>
            <NavLink to={'/categoria/Aderezos y Condimentos'}className='dropdown-item'>Aderezos y Condimentos</NavLink>
            <NavLink to={`/categoria/Caldos y Sopas`}className='dropdown-item'>Caldos y Sopas</NavLink>
            <NavLink to={`/categoria/Conservas y Legumbres`}className='dropdown-item'>Conservas y Legumbres</NavLink>
            <NavLink to={`/categoria/Dulces y Mermeladas`}className='dropdown-item'>Dulces y Mermeladas</NavLink>
            <NavLink to={`/categoria/Arroz y Cereales`}className='dropdown-item'>Arroz y Cereales</NavLink>           
          </div>
        </li>
        <li className='dropdown'><h3  className='rubro'><Link to={'/rubro/Bebidas'} className='link-rubro'>Bebidas</Link></h3>        
          <div className='dropdown-content' >
            <NavLink to={'/categoria/Aguas'}>Aguas</NavLink>
            <NavLink to={'/categoria/Amargos'}>Amargos</NavLink>            
            <NavLink to={'/categoria/Vinos'}>Vinos</NavLink>
            <NavLink to={'/categoria/Espumantes'}>Espumantes</NavLink>
            <NavLink to={'/categoria/Cervezas'}>Cervezas</NavLink>
            <NavLink to={'/categoria/Gaseosas'}>Gaseosas</NavLink>
          </div>
        </li>
        <li className='dropdown'><h3  className='rubro'><Link to={'/rubro/Frescos'} className='link-rubro'>Frescos</Link></h3>        
          <div className='dropdown-content' >
            <NavLink to={'/categoria/Fiambres'}>Fiambres</NavLink>
            <NavLink to={'/categoria/Lacteos'}>Lácteos</NavLink>
            <NavLink to={'/categoria/Pastas'}>Pastas</NavLink>
            <NavLink to={'/categoria/Quesos'}>Quesos</NavLink>            
          </div>
        </li>
      </ul>
      
    </div>
    <div className='contiene-cartwidget'>
      <ul>
        <li className='dropdown'> <div ><CartWidget /></div>
          <div className='dropdown-content' >            
            <ul className='lista-carrito'>
              {carrito.map((item) => (
                <li key={item.id} className='item-carrito'>
                  {item.cantidad} - {item.descripcion} - ${item.precio} c/u.-                    
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>     
      </div>
      
    </nav>
    </>    
  )
}

export default Navbar