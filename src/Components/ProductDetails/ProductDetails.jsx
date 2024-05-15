import React from 'react'
import styles from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Slider from "react-slick"


export default function ProductDetails() {
  let { id } = useParams()
  console.log(id); // [object object]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const [product, setProduct] = useState( [] )
  async function getProduct ()
 {
   let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
   console.log(data.data);
   setProduct (data.data)
 }
 useEffect(() => {
 
   getProduct()
 }, [])

  return <>
  <div className="container py-5">
    <div className="row align-items-center">
      <div className="col-md-4">
      <Slider {...settings}>
        {product?.images?.map((img)=> <img src={img} />)}
        </Slider>
      </div>
      <div className="col-md-8">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <div className='d-flex justify-content-between py-2'>
          <span className='text-muted'>{product.price} EGP</span>
          <span>
            <i className='fas fa-star text-warning'></i>
            {product.ratingsAverage}
          </span>
        </div>
        <button className='btn bg-success text-white w-100'> Add To Cart</button>
      </div>
    </div>
  </div>
  </>
}