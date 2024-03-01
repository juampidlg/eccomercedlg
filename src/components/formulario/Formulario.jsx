import React, { useEffect, useState } from 'react'
import './formulario.css'
import { useAppContext } from '../../context/Context'
import { firebaseApp} from '../../index'
import { collection, getFirestore, getDocs, query, where, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore'
import Swal from 'sweetalert2';

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

    const {carrito, setCarrito , totalCarrito, setUnidadesCarrito, setTotalCarrito}= useAppContext();
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
           
      
    })
    .catch((err)=>{
      console.log(err)
    
    })
    setCarrito([])
    setTotalCarrito(0)
    setUnidadesCarrito(0)
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

  const alert =()=>{ Swal.fire({
    title: "Está seguro que desea ordenar la compra?",
    text: "No podrá deshacer la operación!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, Confirmo la compra!"
  }).then((result) => {
    if (result.isConfirmed) {
      agregarOrden();      
      Swal.fire({
        title: "Compra exitosa!",
        text: `Orden de compra generada`,
        icon: "success"
      });
    }
  })};


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
        <input className='input' type="email" value={emailConfirm} onChange={(e) => {handleEmailConfirm(e)}}/>
      </div>
        
      <div className='contiene-input'>
        <label>Telefono:</label>
        <input className='input' type="number" value={phone} onChange={(e) => {handlePhone(e)}}/>
      </div>

      <button className='btn-enviar' onClick={()=>{alert()}} disabled={btnHabilitado}>Confirmar</button>
      {idOrden!==''? <h5>Id de Orden de compra nº : {idOrden}</h5> : ''}
        

        
    </div>
  )
}

export default Formulario