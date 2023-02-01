import React, { useState } from 'react'
import "./Product.scss"
const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const images = [
    "https://images.pexels.com/photos/10026453/pexels-photo-10026453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ]
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelectedImage(0)}/>
          <img src={images[1]} alt="" onClick={e=>setSelectedImage(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImage]} alt="" />
        </div>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default Product