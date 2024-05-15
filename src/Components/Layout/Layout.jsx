import React from 'react' 
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout({userData, setUserData}) {
  function logOut(){
    localStorage.removeItem('userToken')
    setUserData(null)
  }
  return <>
  <div className='pt-5'>
  <NavBar userData={userData} logOut={logOut}/>
  <div className="conatiner">
  <Outlet></Outlet>
  </div>
  <Footer/>
  </div>


  </>
}