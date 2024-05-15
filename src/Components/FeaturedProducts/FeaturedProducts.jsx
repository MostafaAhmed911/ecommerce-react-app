import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import ProductDetails from '../ProductDetails/ProductDetails';
import { Link } from 'react-router-dom'
import { CartContextProvider, cartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';

export default function FeaturedProducts() {
  let {addToCart, setnumOfCartItems} = useContext(cartContext);

 async function addProduct (productId){

    let response = await addToCart(productId);
    if(response.data.status === 'success'){
      setnumOfCartItems(response.data.numOfCartItems)
      toast.success(response.data.message, {duration : 2000, className : 'border-success border'})
    }
    console.log(response);
  }

   const [products, setProducts] = useState( [] )
   async function getProducts ()
  {
    let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
    setProducts (data.data);
  }
  useEffect(() => {
  
    getProducts()
  }, [])
  
  return <>
  <div className="row">
    {products.map((product)=> <div key={product._id} className='col-md-2 products'>
      <Link to={"/ProductDetails/" + product.id}>
      <div className='product cursor-pointer px-2 py-3'>
        <img className='w-100' src={product.imageCover} alt="" />
        <span>{product.category.name}</span>
        <h3 className='h6 fw-bolder'>{product.title.split(' ').slice(0,2).join(' ')}</h3>
        <div className='d-flex justify-content-between'>
          <span className='text-muted'>{product.price} EGP</span>
          <span>
            <i className='fas fa-star text-warning'></i>
            {product.ratingsAverage}
          </span>
        </div>
      </div>
      </Link>
         <button onClick={()=> addProduct(product.id)} className='btn bg-success text-white w-100'> Add To Cart</button>
    </div>)}
  </div>
  </>
}