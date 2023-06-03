import React, { useEffect, useState } from 'react'
import './styles/Login.css'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { sign_in, login_google } from './api/Handleapi';
import { gapi } from 'gapi-script'
import GoogleLogin from 'react-google-login'
import google from '../img/google.png'

export default function Login() {

  const clientID = "210604676754-meeiidpktbvgbu10rg4j0qkoh23jf5tr.apps.googleusercontent.com"


  const navigate = useNavigate();

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientID,
      })
    }
    gapi.load("client:auth2", start)
  }, [])

  const onSuccess = (res) => {
    const { email, googleId, givenName } = res.profileObj
    login_google(email, googleId, givenName)
    navigate('/Home')
  }

  const onFailure = () => {
    console.log("error")
  }

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
      console.log(values.correo)

      if (res) {
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
            <button className='btn_login' type='submit'>Ingresar</button>
            <div className="signup_link">
              Aun no tienes cuenta? <a onClick={() => navigate('/Registro')}>Registrate</a>
            </div>
          <GoogleLogin
            clientId={clientID}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_policy"}
            style={{ backgroundColor: "black" }}
            render={renderProps => (
              <button className='btn_google' onClick={renderProps.onClick} disabled={renderProps.disabled}><span><img className='img_google' src={google}/></span>Ingresar con google</button>
            )}
          />
          </div>
        </form>
      </div>
    </div>
  )
}
