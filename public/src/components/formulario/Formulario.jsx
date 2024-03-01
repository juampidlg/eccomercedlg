import React, { useEffect, useState } from 'react'
import './formulario.css'
import { useAppContext } from '../../context/Context'
import { firebaseApp} from '../../index'
import { collection, getFirestore, getDocs, query, where, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore'


const Formulario = () => {

    const [name, setName] = useState('')
    const handleName = (e)=>{
      setName(e.target.value)      
    }
    const [email, setEmail] = useState('')
    const handleEmail = (e)=>{
    setEmail(e.target.value)      
    }
    const [emailConfirm, setEmailConfirm] = useState('')
    const handleEmailConfirm = (e)=>{
      setEmailConfirm(e.target.value)      
      }
    const [phone, setPhone] = useState('')
    const handlePhone = (e)=>{
      setPhone(e.target.value)      
      }

    const {carrito, setCarrito , totalCarrito}= useAppContext();
    const [idOrden, setIdOrden] = useState('')

    const [btnHabilitado, setBtnHabilitado] = useState(true)


    const nuevaOrden = {
      "fecha": new Date(),
      "nombre":name,
      "email":email,
      "telefono":phone,
      "importe total":Math.round(totalCarrito*100)/100,
      "productos": carrito,
      "estado": 'En preparación'
  }
  
    const db = getFirestore(firebaseApp)
    const ordenRef = collection(db,"ordenes");
     
    
    const agregarOrden=()=>{addDoc(ordenRef, nuevaOrden).then((response)=>{
      actualizarStock()
      setIdOrden(response.id);
      console.log(response.id);
      
    })
    .catch((err)=>{
      console.log(err)
    
    })
    setCarrito([])
  }

  const actualizarStock=()=>{
    carrito.map((producto)=>{
      const updateStockRef = doc(db,"productos",producto.id.toString());
      getDoc(updateStockRef).then(snapshot=>{       
      updateDoc(updateStockRef, {Stock: (snapshot.data().Stock - producto.cantidad)})})
  })}

  useEffect(()=>{
    if(name!=='' && email!=='' && emailConfirm!=='' && email===emailConfirm && phone!==''){
      setBtnHabilitado(false)
    }else{
      setBtnHabilitado(true)
    }
  },[name,email,emailConfirm,phone])

  useEffect(()=>{
    setName('')
    setEmail('')
    setEmailConfirm('')
    setPhone('')

  },[idOrden])


  return (
    <div className='formulario'>
      <h3>Confirmación de compra</h3>
      <div className='contiene-input'>
        <label>Nombre:</label>
        <input className='input' type="text" value={name} onChange={(e)=>{handleName(e)}}/>
      </div>
        
      <div className='contiene-input'>
        <label>Email:</label>
        <input className='input' type="email" value={email} onChange={(e)=>{handleEmail(e)}}/>
      </div>
        
      <div className='contiene-input'> 
        <label>Confirmacion de Email:</label>
        <input className='input' type="email" value={emailConfirm} onChange={(event) => setEmailConfirm(event.target.value)}/>
      </div>
        
      <div className='contiene-input'>
        <label>Telefono:</label>
        <input className='input' type="number" value={phone} onChange={(event) => setPhone(event.target.value)}/>
      </div>

      <button className='btn-enviar' onClick={()=>{agregarOrden()}} disabled={btnHabilitado}>enviar</button>
      {idOrden!==''? <h5>Orden de compra generada id nº : {idOrden}</h5> : ''}
        

        
    </div>
  )
}

export default Formulario