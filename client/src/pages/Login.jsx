import React, { useEffect, useState, useContext } from 'react'
import './styles/Login.css'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { sign_in, login_google } from './api/Handleapi';
import { gapi } from 'gapi-script'
import GoogleLogin from 'react-google-login'
import google from '../img/google.png'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { useUserContext, useToogleContext } from './UserProvider';
import { useHistory } from 'react-router-dom';
import video from '../img/intro.mp4'

export default function Login() {

  const { user, updateUser } = useUserContext()
  console.log(user)

  const clientID = "210604676754-meeiidpktbvgbu10rg4j0qkoh23jf5tr.apps.googleusercontent.com"

  const update = (context) => {
    updateUser(context)
    console.log(user)
  }

  const navigate = useNavigate();

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientID,
      })
    }
    gapi.load("client:auth2", start)
  }, [])

  const onSuccess = async (res) => {
    Swal.fire({
      title: 'Cargando...',
      icon: 'info',
      showConfirmButton: false,
      background: '#fff',
      customClass: {
        title: 'mi-titulo',
      },
      allowOutsideClick: false, // Evita que el usuario pueda hacer clic fuera de la alerta
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const { email, googleId, givenName } = res.profileObj;
      const response = await login_google(email, googleId, givenName);
      console.log(response)
      update(response.userid)
      // history.push('/Home');
      navigate('/Home');
    } catch (error) {
      // Tratar error en caso de que ocurra durante la ejecución
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrió un error durante la ejecución.',
      });
    } finally {
      // Cerrar la alerta de carga
      Swal.close();
    }
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

      Swal.fire({
        title: 'Cargando...',
        icon: 'info',
        showConfirmButton: false,
        background: '#fff',
        customClass: {
          title: 'mi-titulo',
        },
        allowOutsideClick: false, // Evita que el usuario pueda hacer clic fuera de la alerta
        onBeforeOpen: () => {
          Swal.showLoading();
        },
      });

      try {
        const res = await sign_in(values.correo, values.contraseña);
        console.log(res);

        if (res.acceso) {
          update(res.userid)
          navigate('/Home');
        }
      } catch (error) {
        // Tratar error en caso de que ocurra durante la ejecución
        Swal.fire({
          title: res.error,
          icon: 'error',
          showConfirmButton: false,
          background: '#fff',
          customClass: {
            title: 'mi-titulo',
          },
        })
      } finally {
        // Cerrar la alerta de carga
        Swal.close();
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
                <button className='btn_google' onClick={renderProps.onClick} disabled={renderProps.disabled}><span><img className='img_google' src={google} /></span>Ingresar con google</button>
              )}
            />
          </div>
        </form>
      </div>

      <video autoPlay loop muted className="video-de-fondo-login">
        <source src={video} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>

  )
}
