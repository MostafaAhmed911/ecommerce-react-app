import { useFormik } from 'formik';
import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  let navigate = useNavigate();

 async function handleRegister(values)
  {
    let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
    if(data.message === 'success')
    {
      navigate('/login')
    }
  }
  function validate(values){
    let errors = {};

    if(!values.name)
    {
      errors.name = "Name is Required";
    }
    else if(values.name.length < 3)
    {
      errors.name = "Name minlength is 3";
    }
    else if(values.name.length > 10)
    {
      errors.name = "Name maxlength is 10";
    }
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
    if(!values.rePassword)
    {
      errors.rePassword = "rePassword is Required";
    }
    else if(values.password !== values.rePassword)
    {
      errors.rePassword = "password and rePassword not match";
    }
    if(!values.phone)
    {
      errors.phone = "phone is Required";
    }
    else if(!/^01[0125][0-9]{8}$/.test(values.phone))
    {
      errors.phone = "phone must be valid egy number";
    }

    return errors

  }
  let formik = useFormik({
    initialValues:{
      name:'',
      phone:'',
      email:'',
      password:'',
      rePassword:''
    },
    validate,
    onSubmit: handleRegister,
  })
  return <>
  <div className="w-75 mx-auto py-4">
    <h3>Register Now...</h3>

    <form onSubmit={formik.handleSubmit}>

      <label htmlFor="name">name: </label>
      <input onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange} value={formik.values.name} type="text" name='name' id='name' />
      {formik.errors.name && formik.touched.name ? <div className="alert alert-danger">{formik.errors.name}</div> : null}

      <label htmlFor="email">Email: </label>
      <input onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange} value={formik.values.email} type="email" name='email' id='email' />
      {formik.errors.email && formik.touched.email ? <div className="alert alert-danger">{formik.errors.email}</div> : null}

      <label htmlFor="password">Password: </label>
      <input onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange} value={formik.values.password} type="password" name='password' id='password' />
      {formik.errors.password && formik.touched.password ? <div className="alert alert-danger">{formik.errors.password}</div> : null}

      <label htmlFor="rePassword">rePassword: </label>
      <input onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange} value={formik.values.rePassword} type="rePassword" name='rePassword' id='rePassword' />
      {formik.errors.rePassword && formik.touched.rePassword ? <div className="alert alert-danger">{formik.errors.rePassword}</div> : null}

      <label htmlFor="phone">Phone: </label>
      <input onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange} value={formik.values.phone} type="tel" name='phone' id='phone' />
      {formik.errors.phone && formik.touched.phone ? <div className="alert alert-danger">{formik.errors.phone}</div> : null}

      <button disabled={! (formik.isValid && formik.dirty)} type='submit' className='btn btn-success text-white'>Register</button>
    </form>
  </div>
  </>
}