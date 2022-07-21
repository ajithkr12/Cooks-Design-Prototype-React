import React from 'react'
import image1 from '../images/img1.png'
import image2 from '../images/img2.png'
import image3 from '../images/img3.png'
import {useState} from 'react'
import { IconContext } from "react-icons";
import { CgArrowLongDown } from 'react-icons/cg';
function MainButton({ value,setValue})  {

  const DisplayImage1 = () => {
    setValue(0);
    console.log('hhhhhhhhhhhhhh',value);
  };
  const DisplayImage2 = () => {
    setValue(1)
    console.log('ppppppppppp',value);

  };
  const DisplayImage3 = () => {
    setValue(2)
    console.log('lllllllllll',value);
  };


  return (
    <div className='col-md-3 c'>

      <div>

      </div>

      <div className='scroll-image-container'>
        <div className='scroll-container'>
          <p>Scroll to see more</p>
          <IconContext.Provider value={{ color: "white",size:'2em' ,className: "arrow-long-down" }}>
            <i className=''>
            <CgArrowLongDown/>
            </i>
          </IconContext.Provider>
        </div>

        <div className='image-button-container'>
          <img onClick={DisplayImage1} src={image1} alt="food"/>
          <img onClick={DisplayImage2} src={image2} alt="food"/>
          <img onClick={DisplayImage3} src={image3} alt="food"/>
        </div>
      </div>
      <div>
        <h3>PREPARATION</h3>
        <h2>25 MINS</h2>
      </div>


    </div>
  )
}
export default MainButton;

// counter,setCounter