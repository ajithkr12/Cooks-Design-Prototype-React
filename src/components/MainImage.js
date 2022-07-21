import React from 'react'
import image1 from '../images/img1.png';
import image2 from '../images/img2.png';
import image3 from '../images/img3.png'
export const MainImage = (props) => {
console.log(props.imgURL)
// const img=require({image})
  return (
    <div className='col-md-6 b'>
      <div>

      </div>
      <div className='image-box'>
        <img src={props.imgURL} alt="food"/>
      </div>
      <div>
        <h4>{props.title}</h4>
        <p>{props.desc}</p>
      </div>

    </div>
  )
}
