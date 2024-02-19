import React from 'react'
import './loader.css'

const Loader = ({mensaje}) => {
  return (
    <div className='contiene-loader'>
      <span class="loader"></span>
      <p>{mensaje}</p>
    </div>    
  )
}
export default Loader