import React from 'react'
import styles from './Products.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { increamentByAmount, increase } from '../../Redux/counterSlice'


export default function Products() {
 let {counter} = useSelector((state)=>(state.counter))

 let dispatch = useDispatch();
  return <>
  <button onClick={()=> dispatch(increase())} className='btn'>+</button>
  <button onClick={()=> dispatch(increamentByAmount(10))} className='btn'>++</button>
  <h2>Counter: {counter}</h2>
  </>
}