import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return <>
  <div className='px-4 pt-5  footer'>
    <div className='contain'>
    <h2>Get The FreshCartApp</h2>
  <p className='text-muted'>We will send you a Link , open it on your phone to download our App</p>
  <form>
    <div className="row">
      <div className="col-md-10">
        <input placeholder='Email..' className='form-control' />
      </div>
      <div className="col-md-2">
        <button className='btn btn-success'>Share App Link</button>
      </div>
    </div>
  </form>
  </div>

    </div>

  </>
}