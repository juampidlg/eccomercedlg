import React, { useState } from 'react'
import './formulario.css'

const Formulario = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [emailConfirm, setEmailConfirm] = useState('')
    const [phone, setPhone] = useState('')

  return (
    <div className='formulario'>
      <h3>Confirmación de compra</h3>
      <div className='contiene-input'>
        <label>Nombre:</label>
        <input className='input' type="text" onChange={(event) => setName(event.target.value)}/>
      </div>
        
      <div className='contiene-input'>
        <label>Email:</label>
        <input className='input' type="email" onChange={(event) => setEmail(event.target.value)}/>
      </div>
        
      <div className='contiene-input'> 
        <label>Confirmacion de Email:</label>
        <input className='input' type="email" onChange={(event) => setEmailConfirm(event.target.value)}/>
      </div>
        
      <div className='contiene-input'>
        <label>Telefono:</label>
        <input className='input' type="number" onChange={(event) => setPhone(event.target.value)}/>
      </div>

      <button className='btn-enviar'>enviar</button>
        

        
    </div>
  )
}

export default Formulario