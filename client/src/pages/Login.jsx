import React from 'react'
import './styles/Login.css'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className='main_container_login'>
      <div class="center_login">
        <form method="post">
          <div className='form_login'>
            <h1>Login</h1>
            <div> 
              <input className='txt_field_login' type="text" placeholder='Correo' required />
              <span></span>
            </div>
            <div>
              <input className='txt_field_login' type="password" placeholder='Contraseña' required />
              <span></span>
            </div>
            <button>Ingresar</button>
            <div class="signup_link">
              Aun no tienes cuenta? <a onClick={() => navigate('/Registro')}>Registrate</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
