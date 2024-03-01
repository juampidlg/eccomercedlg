import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/Context'
import ItemCarrito from '../itemCarrito/ItemCarrito';
import './itemCarritoContainer.css'
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../loader/Loader';
import { firebaseApp} from '../../index';
import { doc, getFirestore, getDoc, updateDoc} from 'firebase/firestore';




const ItemCarritoContainer = () => {
    const {carrito, setCarrito, totalCarrito, setTotalCarrito, setUnidadesCarrito}=useAppContext();
    const navigate = useNavigate();
    const resetar = ()=>{
      setCarrito([])      
      setUnidadesCarrito(0)
      setTotalCarrito(0)
    }
    
    useEffect(() => {
      if (carrito.length===0) {
        setUnidadesCarrito(0)
        setTotalCarrito(0)
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    }, [carrito]);
    
    const [controlStock,setControlStock] = useState([]);
    const [stockVerificado,setStockVerificado] = useState(false);
    let [contador, setContador]=useState(0);
  
  const validarStock = () => {
      setControlStock([])      
      const db = getFirestore(firebaseApp)
      const productosActualizados = carrito.map(producto => {
      const prodRef = doc(db,"productos",producto.id.toString());
      
      getDoc(prodRef).then((snapshot)=>{        
        let product=(snapshot.data())
        
        let disponibilidad = '';
        producto.stock = product.Stock
      if (snapshot.exists()&&(producto.cantidad <= product.Stock)) {
      } else {
            disponibilidad= product.Stock===1?`Hay solo ${product.Stock} unidad de ${product.Nombre}`:product.Stock===0?`No hay unidades disponibles de ${product.Nombre}`:`Hay solo ${product.Stock} unidades de ${product.Nombre}`;
            setControlStock(controlStock=>([...controlStock, disponibilidad]))
      }});
      if(controlStock.length===0){
        setStockVerificado(true);
      }
    });
  };
    
  const lista = controlStock.map((elemento)=>(
     <li key={elemento}> {elemento} </li>
   ));
    
    
  return (
    <div className='contiene-gestionCarrito'>
      <div className='contiene-totales'>
        {carrito.length >0? <h2>El total del carrito es $: {Math.round(totalCarrito*100)/100} </h2> : <h2>No hay productos en el carrito</h2>}
        <div className='contiene-botones'>
          <button onClick={()=>{validarStock()}}>Validar Stock</button>
          <button className='btn-contieneTotales' onClick={()=>{resetar()}}>Resetear</button>        
          <Link to='/formulario'><button  className='btn-contieneTotales'disabled={stockVerificado&&(controlStock.length===0)? false : true}>Comprar</button></Link>
        </div>
      </div>
        {controlStock.length>0?<ul className='lista'>{lista}</ul>: (stockVerificado && (controlStock.length===0))? <p>Stock verificado</p> :<p>Validar stock antes de comprar</p> }
          {carrito.length>0?<div>
            {carrito.map((item)=>
              <ItemCarrito key={item.id} id={item.id} imagen={item.imagen} cantidad={item.cantidad} descripcion={item.descripcion} precio={item.precio} disponibilidad={item.disponibilidad}/>
            )}
            </div>:<Loader mensaje={'Redirigiendo a home...'} />}
          </div>)
}

export default ItemCarritoContainer