import React, { useEffect, useState } from 'react'
import styles from './CategorySlider.module.css'
import axios from 'axios'
import Slider from "react-slick"

export default function CategorySlider() {

  const [categories, setcategories] = useState( [] )
  async function getCategories ()
 {
   let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
   setcategories (data.data);
 }
 useEffect(() => {
 
  getCategories()
 }, [])

 const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1
};

  return <>
        <Slider {...settings}>
          {categories.map((category)=> <div className='' key={category._id}>
            <img className='w-100' height={255} src={category.image} />
            <h2 className='h6 pt-2'>{category.name}</h2>
          </div>)}
        </Slider>
  </>
}