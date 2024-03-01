import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/Context'
import ItemCarrito from '../itemCarrito/ItemCarrito';
import './itemCarritoContainer.css'
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../loader/Loader';
import { firebaseApp} from '../../index';
import { doc, getFirestore, getDoc} from 'firebase/firestore';




const ItemCarritoContainer = () => {
    const {carrito, setCarrito, totalCarrito, setTotalCarrito, setUnidadesCarrito}=useAppContext();
    const navigate = useNavigate();
    const resetar = ()=>{
      setCarrito([])
      //setCarritoNuevo([])
      setUnidadesCarrito(0)
      setTotalCarrito(0)
    }
    //VER ESTA REDIRECCION COMO LA ARMO
    useEffect(() => {
      if (carrito.length===0) {
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    }, [carrito]);
    const[productos, setProductos] = useState([]);
    const[nuevoCarrito, setNuevoCarrito]=useState([]) 

    
    /*const validarStock = ()=>{
      //setCarritoNuevo([])
    //validacion.splice(0, validacion.length);
      const db = getFirestore(firebaseApp)
      
      let disponibilidad = '';
      const carritoValidado = carrito.map((p)=>{
                
        const prodRef = doc(db,"productos",p.id.toString());
        getDoc(prodRef).then((snapshot)=>{
          if(snapshot.exists()){
            let idProduct = (snapshot.id)
            let product=(snapshot.data())
            console.log(idProduct)
            console.log(product)
            if(p.cantidad <= product.Stock){
              disponibilidad=`Hay ${product.Stock} del producto ${idProduct}`
              //setCarrito(p=>[{...p, disponibilidad: disponibilidad}])
              
            }else{
              disponibilidad = `hay ${product.Stock} unidades en stock`
              //setCarritoNuevo(carritoNuevo=>[...carritoNuevo, disponibilidad])
             //carritoNuevo(...carrito, {disponibilidad: `hay ${product.Stock} unidades en stock de ${product.Nombre}`})
            }
            
          }else{
            console.log('item no encontrado')
          }
          setCarrito(p=>({...p,disponibilidad}))
          return console.log('aca disponibilidad',disponibilidad);
          
          
          
        });
        
        

      });
      
      
      
    };
    console.log(carritoNuevo)*/

    /*const validarStock = ()=>{
      //setCarritoNuevo([])
    //validacion.splice(0, validacion.length);
      const db = getFirestore(firebaseApp)
      
      
      setCarrito(prevCarrito=>prevCarrito.map((p)=>{
        let disponibilidad='';
        const prodRef = doc(db,"productos",p.id.toString());
        getDoc(prodRef).then((snapshot)=>{
          if(snapshot.exists()){
            let idProduct = (snapshot.id)
            let product=(snapshot.data())
            console.log(idProduct)
            console.log(product)
            if(p.cantidad <= product.Stock){
              //disponibilidad=`Hay ${product.Stock} del producto ${idProduct}`
              //setCarrito(carrito=>[{...carrito, disponibilidad: disponibilidad}])
              disponibilidad = `hay ${product.Stock} unidades en stock del producto ${idProduct}`
            }else{
              disponibilidad = `hay ${product.Stock} unidades en stock del producto ${idProduct}`
              //setCarritoNuevo(carritoNuevo=>[...carritoNuevo, disponibilidad])
             //carritoNuevo(...carrito, {disponibilidad: `hay ${product.Stock} unidades en stock de ${product.Nombre}`})
            }
            
          }else{
            console.log('item no encontrado')
          }
          console.log({...p,disponibilidad})
          return { ...p, disponibilidad };
          
          
          
        });

        
        
        

      }));   
      
    };*/
    
    {/*ESTA ES LA ULTIMA VERSION
    const validarStock = () => {
      // Agrega la clave y su valor a cada objeto del array
      const db = getFirestore(firebaseApp)
      const productosActualizados = carrito.map(producto => {
        const prodRef = doc(db,"productos",producto.id.toString());
        getDoc(prodRef).then((snapshot)=>{
          if(snapshot.exists()){
            let idProduct = (snapshot.id)
            let product=(snapshot.data())
            console.log(idProduct)
            console.log(product)
            if (producto.cantidad <= product.Stock) {
              console.log('ok')

              return{
                ...producto,
                disponibilidad: `HOLA Hay ${product.Stock} del producto ${idProduct}`, // Puedes ajustar el valor según tus necesidades                
              };
              
              
            } else {
              // Si no se cumple la condición, devuelve el objeto sin cambios
              return producto;
            };
            setProductos(productosActualizados);

          }else{
            console.log('Producto no encontrado')
          }
          setProductos(productosActualizados);
    })})
    //
    setProductos(productosActualizados);
  };*/}

    {/*useEffect(() => {
      setProductos(carrito);
      const db = getFirestore(firebaseApp)
      
      
        agregarDisponibilidad = productos.map((producto) => {
        const prodRef = doc(db,"productos",producto.id.toString());
        let disponibilidad='no hay nada3';
        
        //const productoEnCarrito = carrito.find((productoCarrito) => productoCarrito.id === producto.id);
        getDoc(prodRef).then((snapshot)=>{
          
          if(snapshot.exists()){
            
                let idProduct = (snapshot.id)
                let product=(snapshot.data())
                console.log(idProduct)
                console.log(product)
                if(producto.cantidad <= product.Stock){
                  disponibilidad =`HOLA Hay ${product.Stock} del producto ${idProduct}`
                  console.log(disponibilidad)
                  
                  setNuevoCarrito(agregarDisponibilidad=>({...producto, disponibilidad: disponibilidad}));
                  
                  //setCarrito(p=>[{...p, disponibilidad: disponibilidad}])
                  
                }else{
                  disponibilidad = `hay ${product.Stock} unidades en stock`
                  console.log(disponibilidad)
                  
                  //setCarritoNuevo(carritoNuevo=>[...carritoNuevo, disponibilidad])
                //carritoNuevo(...carrito, {disponibilidad: `hay ${product.Stock} unidades en stock de ${product.Nombre}`})
                }               
            
            
          }else{
            console.log('item no encontrado')
          }
            
          
        });
        
          
        
      });   
      
    }, [carrito]);
  }*/}
  

  
  const validarStock = () => {
    // Agrega la nueva clave y su valor solo si se cumple cierta condición
      const db = getFirestore(firebaseApp)
      const productosActualizados = carrito.map(producto => {
      const prodRef = doc(db,"productos",producto.id.toString());
      
      getDoc(prodRef).then((snapshot)=>{
        let idProduct = (snapshot.id)
        let product=(snapshot.data())
        let disponibilidad = '';
        // Realiza la comprobación antes de asignar la nueva clave
      if (snapshot.exists()&&(producto.cantidad <= product.Stock)) {
        disponibilidad='si'
        //return {
          
          //...producto,
          //disponibilidad: 'Nuevo Valor', // Puedes ajustar el valor según tus necesidades
        //};
      } else {
        disponibilidad='no'
        // Si no se cumple la condición, devuelve el objeto sin cambios
        //return {...producto,
        //disponibilidad: 'Viejo Valor',}; // Puedes ajustar el valor según tus necesidades
      }
    console.log(disponibilidad)    
    });
    
      })
      //setProductos(productosActualizados);
      

    // Actualiza el estado con los productos actualizados
    
    
    //setCarrito(productos);
  };
  //setProductos(productosActualizados);
  //console.log(productosActualizados)

    console.log(productos)
    console.log(nuevoCarrito)    
    console.log(carrito)
    
    
  return (
    <div className='contiene-gestionCarrito'>
      <div className='contiene-totales'>
        <div className='contiene-botones'>
          {carrito.length >0? <h2>El total del carrito es $: {Math.round(totalCarrito*100)/100} </h2> : <h2>No hay productos en el carrito</h2>}
          <button onClick={()=>{validarStock()}}>Validar Stock</button> {/*onClick={()=>{validarStock()}}*/}
          <button className='btn-contieneTotales' onClick={()=>{resetar()}} disabled={carrito.length===0? true : false}>Resetear</button>        
          <Link to='/formulario'><button className='btn-contieneTotales'disabled={carrito.length===0? true : false}>Comprar</button></Link>
          {/*<button className='btn-contieneTotales'disabled={carrito.length===0? true : false} >Comprar</button>{/*onClick={()=>{validarStock()}}*/}
          {/*<button onClick={()=>{console.log(carritoNuevo)}}>ver validacion</button>*/}
        </div>
        <ul>
        {/*{validacion.map((elemento)=>{
          return(<li>{elemento.disponibilidad}</li>)
        })}*/}
        </ul>
      
        </div>
      {carrito.length>0?<div>
        {carrito.map((item)=>
          <ItemCarrito key={item.id} id={item.id} imagen={item.imagen} cantidad={item.cantidad} descripcion={item.descripcion} precio={item.precio} disponibilidad={item.disponibilidad}/>
        )}
      </div>:<Loader mensaje={'Redirigiendo a home...'} />}
      {/*<Loader mensaje={'Redirigiendo a home...'} />*/}
      
    </div>
  )
}

export default ItemCarritoContainer