import React from 'react'
import './styles/Login.css'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { sign_in } from './api/Handleapi';

export default function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      correo: '',
      contraseña: ''
    },

    validationSchema: Yup.object({
      correo: Yup.string().email('*Campo invalido').required("*Complete este campo"),
      contraseña: Yup.string().min(3, 'La contraseña debe tener al menos 3 caracteres.').required("*Complete este campo"),
    }),

    onSubmit: async (values) => {

      const res = await sign_in(values.correo, values.contraseña)

      if (res){
        navigate('/Home')
      }
      
    }
  })
  console.log(formik.errors)


  return (
    <div className='main_container_login'>
      <div className="center_login">
        <form onSubmit={formik.handleSubmit}>
          <div className='form_login'>
            <h1>Login</h1>
            <div className='txt_container'>
              <label className={formik.errors.correo && formik.touched.correo ? 'label_login_error' : 'label_login'}>{formik.errors.correo}</label>
              <input
                className='txt_field_login'
                name='correo'
                type="text"
                placeholder='Correo'
                onChange={formik.handleChange}
              />
              <span></span>
            </div>
            <div className='txt_container'>
              <label className={formik.errors.contraseña && formik.touched.contraseña ? 'label_login_error' : 'label_login'}>{formik.errors.contraseña}</label>
              <input
                className='txt_field_login'
                name='contraseña'
                type="password"
                placeholder='Contraseña'
                onChange={formik.handleChange}
              />
              <span></span>
            </div>
            <button type='submit'>Ingresar</button>
            <div className="signup_link">
              Aun no tienes cuenta? <a onClick={() => navigate('/Registro')}>Registrate</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
