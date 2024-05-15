import React, { useContext } from 'react'
import logo from '../../assets/images/freshcart-logo.svg'
import { Link } from 'react-router-dom'
import { cartContext } from '../../Context/CartContext'

export default function NavBar({userData, logOut}) {

  let {numOfCartItems} = useContext(cartContext)
  return <>
  <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light">
      <div className="container">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="" />
      </Link>
      <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        {userData !== null ? <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" to="/" aria-current="page">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="categories">Categories</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="brands">Brands</Link>
          </li>
        </ul>:null}
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
          <li className="nav-item d-flex align-items-center">
            <i className='fab mx-2 fa-facebook'></i>
            <i className='fab mx-2 fa-twitter'></i>
            <i className='fab mx-2 fa-instagram'></i>
            <i className='fab mx-2 fa-youtube'></i>
            <i className='fab mx-2 fa-linkedin'></i>
          </li>
          {userData === null ? <>
          <li className="nav-item">
            <Link className="nav-link" to="login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="register">Register</Link>
          </li>
          </> :
          <>
          <li className="nav-item position-relative">
            <Link className="nav-link px-2" to="cart">
              <i className='fas fa-shopping-cart fa-lg'></i>  
              <span className='badge position-absolute top-0 end-0 text-white bg-primary '>{numOfCartItems}</span>
            </Link>
          </li>
          <li className="nav-item">
            <span className="nav-link cursor-pointer" onClick={logOut}>LogOut</span>
          </li>
          </>}
          
          
          


        </ul>
      </div>
    </div>
  </nav>
  
  </>
}