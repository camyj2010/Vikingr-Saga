import React from 'react'
import './styles/Registro.css'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import * as Yup from 'yup'


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
      contraseña: Yup.string().required("*Complete este campo"),
    }),

    onSubmit: (values) => {
      console.log(values)
    }
  })

  function validar() {
    const { errors, values } = formik;
    const { usuario, correo, contraseña } = values;

    const noErrors = Object.keys(errors).length === 0;
    const noEmptyFields = usuario.length !== 0 && correo.length !== 0 && contraseña.length !== 0;

    if (noErrors && noEmptyFields) {
      navigate('/');
    }
  }
  console.log(formik.values)
  console.log(formik.values.usuario.length)



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
            <button type='submit' onClick={validar} >Registrarse</button>
          </div>
        </form>
      </div>
    </div>
  )
}
