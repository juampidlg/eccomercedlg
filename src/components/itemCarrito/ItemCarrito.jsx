import React, { useState, useEffect } from 'react'
import './itemCarrito.css'
import borrar from '../../assets/borrar.png'
import { useAppContext } from '../../context/Context'
import Swal from 'sweetalert2';


const ItemCarrito = ({id,descripcion,imagen,precio,cantidad,disponibilidad}) => {

  const pcio = Math.round(precio*100)/100;
  const cant = Math.round(cantidad*100)/100;
  const [btnSumar,setBtnSumar]=useState(false)
  const [leyendaCarrito, setLeyendaCarrito]=useState('');
  const {carrito, setCarrito , setTotalCarrito, totalCarrito, setUnidadesCarrito, unidadesCarrito}= useAppContext();

  const sumar = (producto)=>{
    const nuevoCarrito = carrito.map((p) => {
      if (p.id === producto) {        
        if(p.stock > p.cantidad){
          p.cantidad = p.cantidad + 1;
          setLeyendaCarrito('')
          }
        if(p.stock===p.cantidad){
            setBtnSumar(true)
            setLeyendaCarrito('Alcanzo el máximo de productos en stock')
          }
        }
      return p;
      
    });
    setCarrito(nuevoCarrito)    
    totalizarCarritoSuma(producto)
  }
 
    function totalizarCarritoSuma(){
      setTotalCarrito(Math.round(((totalCarrito) + (1*precio))*100)/100)
      setUnidadesCarrito(unidadesCarrito + 1)      
    }
    
    const restar = (producto)=>{
    const nuevoCarrito = carrito.map((p) => {
      if (p.id === producto) {
        if(cant > 0){
          p.cantidad = p.cantidad - 1;
          setLeyendaCarrito('')
        }
        if (p.cantidad < p.stock){
          setBtnSumar(false)
          setLeyendaCarrito('')
        }
        if(p.cantidad===0){
          setLeyendaCarrito('Ha quitado todos los productos')
        }
      }
        return p;
      });
      setCarrito(nuevoCarrito)      
      totalizarCarritoResta(producto)
      }
      function totalizarCarritoResta(){
          setTotalCarrito(Math.round(((totalCarrito) - (1*precio))*100)/100)
          setUnidadesCarrito(unidadesCarrito - 1)      
      }
      const alert =()=>{ Swal.fire({
        title: "Está seguro que desea eliminar?",
        text: "No podrá deshacer la eliminación!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {
          eliminarProducto(id)
          Swal.fire({
            title: "Eliminado!",
            text: `El producto ha sido eliminado`,
            icon: "success"
          });
        }
      })};

      const eliminarProducto = (id) => {
      const nuevoCarrito = carrito.filter((item) => item.id !== id);
      setCarrito(nuevoCarrito);
            
      };

      useEffect(()=>{
        setTotalCarrito(valor);
        setUnidadesCarrito(total);
      },[carrito])

      const cantidadTotalCarrito = (carrito) => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
      };

      const total = cantidadTotalCarrito(carrito)

      const valorTotalCarrito = (carrito) => {
        return carrito.reduce((acc, prod) => acc + (prod.cantidad * prod.precio), 0);
      };
      const valor = valorTotalCarrito(carrito)
      ;
      
  return (
    <article className='article'>
        <header  className='header'>
            <h5>
                {descripcion}
            </h5>
            <img src={imagen} alt='Imagen' className='imgGestionCarrito' />            
        </header>        
        <section className='descripcion-GestionCarrito'>        
          <p>cantidad:<span> {cantidad}</span></p>
          <p>Precio: <span> {precio}</span></p>
          <p>Total item:<span> {Math.round((pcio*cant)*100)/100}</span></p>
        </section>
        <div className='botones-GestionCarrito'>
          <div className='botones'>
            <button className='btn-gestionCarrito' onClick={()=>{sumar(id)}} disabled={btnSumar}>+</button> 
            <button className='btn-gestionCarrito' onClick={()=>{restar(id)}} disabled={cantidad===0}>-</button>
            <button className='btn-gestionCarrito' onClick={()=>{alert()}}><img src={borrar} className='imgBorrar'/></button>         
          </div>
          <p className='leyenda'>{leyendaCarrito}</p>          
            <p>{disponibilidad}</p>                   
        </div>
    </article>
  )
}

export default ItemCarrito