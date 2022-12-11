import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {

  const [selectedImg, setSelectedImg] 
  = useState(0)
  const [quantity, setQuantity] = useState(1)
  const images = [
    "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
  ];
  return (
    <div className='product'>
      <div className='left'>
        <div className='images'>
          <img src={images[0]} alt='' onClick={(e)=>setSelectedImg(0)}/>
          <img src={images[1]} alt='' onClick={(e)=>setSelectedImg(0)}/>
          hi
        </div>
        <div className='mainImg'>
          <img src={images[selectedImg]} alt='' />
        </div>
      </div>
      <div className='right'>
        <h1>Tttle here</h1>
        <span className='price'>$155</span>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

        <div className='quantity'>
          <button onClick={(e)=>setQuantity((prev)=>(prev === 1? 1: prev -1))}>-</button>
          {quantity}
          <button onClick={(e)=>setQuantity(prev => prev+1)}>+</button>
        </div>
        <button className='add'>
          <AddShoppingCartIcon/>ADD TO CART
        </button>
        <div className='link'>
          <div className='item'>
              <FavoriteBorderIcon/> ADD TO WISHLIST
          </div>

          <div className='item'>
              <BalanceIcon/> ADD TO COMPARE
          </div>
        </div>

        <div className='info'>
          <span> Vendor :Zara</span>
          <span>Product Type: T-shirt</span>
          <span>Tag: tshirt, top</span>
        </div>
        <hr/>

        <div className='info'>
        <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product
