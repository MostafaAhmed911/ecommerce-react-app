import { useFormik } from 'formik';
import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login({saveUserData}) {

  
  let navigate = useNavigate();

 async function handleLogin(values)
  {
    let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values)
    if(data.message === 'success')
    {
      localStorage.setItem('userToken', data.token);
      saveUserData();
      navigate('/')
    }
  }
  function validate(values){
    let errors = {};
    if(!values.email)
    {
      errors.email = "email is Required";
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
    {
      errors.email = "email is invalid";
    }
    if(!values.password)
    {
      errors.password = "password is Required";
    }
    else if(!/^[A-Z][a-z0-9]{5,10}$/.test(values.password))
    {
      errors.password = "password must start with uppercase...";
    }
    return errors

  }
  let formik = useFormik({
    initialValues:{
      email:'',
      password:'',
    },
    validate,
    onSubmit: handleLogin,
  })
  return <>
  <div className="w-75 mx-auto py-4">
    <h3>Login</h3>

    <form onSubmit={formik.handleSubmit}>

      <label htmlFor="email">Email: </label>
      <input onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange} value={formik.values.email} type="email" name='email' id='email' />
      {formik.errors.email && formik.touched.email ? <div className="alert alert-danger">{formik.errors.email}</div> : null}

      <label htmlFor="password">Password: </label>
      <input onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange} value={formik.values.password} type="password" name='password' id='password' />
      {formik.errors.password && formik.touched.password ? <div className="alert alert-danger">{formik.errors.password}</div> : null}

      <button disabled={! (formik.isValid && formik.dirty)} type='submit' className='btn btn-success text-white'>Login</button>
    </form>
  </div>
  </>
}