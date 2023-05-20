import React from 'react'
import './styles/Registro.css'
import { useNavigate } from 'react-router-dom';

export default function Registro() {
  const navigate = useNavigate();
  return (
    <div className='main_container_registro'>
      <div>
        <form method="post">
          <div className='form_registro'>
            <h1 className='title_registro'>Registro</h1>
            <div class="txt_field">
                <label>Nombre de usuario</label>
              <input className='txt_field_registro'  type="text" placeholder='Ej: USER123' required />
              <span></span>
            </div>
            <div class="txt_field">
            <label>Nombre de usuario</label>
              <input className='txt_field_registro' type="text" placeholder='EJ: Correo@gmail.com' required />
              <span></span>
            </div>
            <div class="txt_field">
            <label>Nombre de usuario</label>
              <input className='txt_field_registro' type="password" placeholder='Ej: contraseña132' required />
              <span></span>
            </div>
            <button onClick={()=>(navigate('/'))} >Registrarse</button>
          </div>
        </form>
      </div>
    </div>
  )
}
