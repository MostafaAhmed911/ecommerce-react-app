import logo from './logo.svg';
import './App.css';
import { Offline, Online } from "react-detect-offline";
import Layout from './Components/Layout/Layout';
import toast, { Toaster } from 'react-hot-toast';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import NavBar from './Components/NavBar/NavBar';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Brands from './Components/Brands/Brands'
import NotFound from './Components/NotFound/NotFound';
import Cart from './Components/Cart/Cart';
import Categories from './Components/Categories/Categories';
import Products from './Components/Products/Products';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import { useState } from 'react';
import jwtDecode from 'jwt-decode';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import { CartContextProvider } from './Context/CartContext';
import Checkout from './Components/Checkout/Checkout';
import { Provider } from 'react-redux';
import { store } from './Redux/store';


function App() {
  const [userData, setUserData] = useState(null)

  function saveUserData(){
    let encodedToken = localStorage.getItem('userToken');
    let decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
  }
  let routers = createBrowserRouter([
    {path:'', element:<Layout userData={userData} setUserData={setUserData}/>, children:[
      {index:true, element: <ProtectedRoute> <Home/> </ProtectedRoute> },
      {path:'cart', element: <ProtectedRoute> <Cart/> </ProtectedRoute>  },
      {path:'checkout', element: <ProtectedRoute> <Checkout/> </ProtectedRoute>  },
      {path:'about', element: <ProtectedRoute> <About/> </ProtectedRoute> },
      {path:'categories', element: <ProtectedRoute> <Categories/> </ProtectedRoute> },
      {path:'products', element: <ProtectedRoute> <Products/> </ProtectedRoute>},
      {path:'Productdetails/:id', element: <ProductDetails/>},
      {path:'brands', element: <ProtectedRoute> <Brands/> </ProtectedRoute> },
      {path:'login', element:<Login saveUserData={saveUserData}/>},
      {path:'register', element:<Register/>},
      {path:'*', element:<NotFound/>},
    ]}
  ])
  return(

  
  <>
  <Provider store={store}>

  
  <CartContextProvider>
    <Offline> <div className='network'>Sorry you are Offline Now (surprise!)</div></Offline>
    <Toaster/>
       <RouterProvider router={routers}></RouterProvider>
  </CartContextProvider>
  </Provider>
  </> 
    
   )

  
}
export default App;
