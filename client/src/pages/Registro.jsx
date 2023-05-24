import React from 'react'
import './styles/Registro.css'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { sign_up } from './api/Handleapi';
import Swal from 'sweetalert2/dist/sweetalert2.js'


export default function Registro() {
  const navigate = useNavigate();


  const formik = useFormik({
    initialValues: {
      usuario: '',
      correo: '',
      contraseña: ''
    },

    validationSchema: Yup.object({
      usuario: Yup.string().required("*Complete este campo"),
      correo: Yup.string().email('*Campo invalido').required("*Complete este campo"),
      contraseña: Yup.string().min(3,"*Minimo 3 caracteres").required("*Complete este campo"),
    }),

    onSubmit: async(values) => {
      const { errors } = formik;
      const { usuario, correo, contraseña } = values;

      const noErrors = Object.keys(errors).length === 0;
      const noEmptyFields = usuario.length !== 0 && correo.length !== 0 && contraseña.length !== 0;
      const res  = await sign_up(values.usuario, values.correo, values.contraseña)
      console.log(res)

      if (res.ok && noErrors && noEmptyFields ) {
        navigate('/')
      }
      if(res.ok == false){
        Swal.fire({
          title: res.error,
          icon: 'error',
          showConfirmButton: false,
          background: '#fff',
          customClass: {
            title: 'mi-titulo',
          },
        })
      }
      
    }
  })

  // console.log(formik.values)
  console.log(formik.errors)



  return (
    <div className='main_container_registro'>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className='form_registro'>
            <h1 className='title_registro'>Registro</h1>
            <div className="txt_field">
              <label className={formik.errors.usuario && formik.touched.usuario ? 'label_Registro_Error' : 'label_Registro'}>{formik.errors.usuario && formik.touched.usuario ? formik.errors.usuario : 'Nombre de usuario'}</label>
              <input
                className='txt_field_registro'
                type="text"
                placeholder='Ej: USER123'
                name='usuario'
                onChange={formik.handleChange}

              />
              <span></span>
            </div>
            <div className="txt_field">
              <label className={formik.errors.correo && formik.touched.correo ? 'label_Registro_Error' : 'label_Registro'}>{formik.errors.correo && formik.touched.correo ? formik.errors.correo : 'Correo electronico'}</label>
              <input
                className='txt_field_registro'
                type="text"
                placeholder='EJ: Correo@gmail.com'
                name='correo'
                onChange={formik.handleChange}
              />
              <span></span>
            </div>
            <div className="txt_field">
              <label className={formik.errors.contraseña && formik.touched.contraseña ? 'label_Registro_Error' : 'label_Registro'}>{formik.errors.contraseña && formik.touched.contraseña ? formik.errors.contraseña : 'Contraseña'}</label>
              <input
                className='txt_field_registro'
                type="password"
                placeholder='Ej: contraseña132'
                name='contraseña'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <span></span>
            </div>
            <button type='submit' >Registrarse</button>
          </div>
        </form>
      </div>
    </div>
  )
}
