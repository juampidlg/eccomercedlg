import React, { useEffect, useState } from 'react'
import ItemList from '../itemList/ItemList';
import './itemListContainer.css';
import { useParams } from 'react-router-dom';
import Loader from '../loader/Loader';
import { firebaseApp} from '../../index'
import { collection, getFirestore, getDocs, query, where } from 'firebase/firestore'


function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  const {categoriaId, rubroId} = useParams();  

  useEffect(()=>{
    const db = getFirestore(firebaseApp)
    const prodRef = collection(db,"productos");
    
    if(categoriaId){      
      const q = query(prodRef, where ("Categoria","==",categoriaId))
      getDocs(q).then((snapshot)=>{
      if(snapshot.size !==0){
          const productsList = snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data(),
          }));
          setProductos(productsList)          
        }})      
      }else if(rubroId){      
        const q = query(prodRef, where ("Rubro","==",rubroId))
        getDocs(q).then((snapshot)=>{
        if(snapshot.size !==0){
          const productsList = snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data(),
          }));
          setProductos(productsList)          
        }})
      }else{          
        getDocs(prodRef).then((snapshot)=>{
        if(snapshot.size !==0){
          const productsList = snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data(),
          }));
          setProductos(productsList)
          
    }
  })}
},[categoriaId, rubroId]);
  
  return (
    <div className='titulo'>
        {categoriaId? <h3>Categoría: {categoriaId}</h3> : '' }
        {rubroId? <h3>Rubro: {rubroId}</h3> : '' }        
          <div className='contieneLista'>          
            {productos.length===0? <Loader mensaje={'cargando...'} /> : <ItemList productos = {productos}/>}
          </div>                
    </div>
  )
}




export default ItemListContainer