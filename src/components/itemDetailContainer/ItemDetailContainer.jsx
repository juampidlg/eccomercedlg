import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../itemDetail/ItemDetail'
import './itemDetailContainer.css';
import Loader from '../loader/Loader';
import { firebaseApp} from '../../index'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])

    const {id} = useParams();

    useEffect(()=>{
        const db = getFirestore(firebaseApp)
        const prodRef = doc(db,"productos",id);
        getDoc(prodRef).then((snapshot)=>{
            if(snapshot.exists()){
                setProducto({id:snapshot.id, ...snapshot.data()})
            }})
            },[]);
    return (
        <div className='itemDetailContainer'>
            {producto.length===0? <Loader mensaje={'cargando...'} /> : <ItemDetail key={producto.id} id={producto.id} rubro={producto.Rubro} categoria={producto.Categoria} nombre={producto.Nombre} img={producto.Imagen} precio={producto.Precio} stock={producto.Stock} />}
        </div>
    )
}

export default ItemDetailContainer