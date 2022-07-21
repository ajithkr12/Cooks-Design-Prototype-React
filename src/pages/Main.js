import React from 'react'
import  MainButton  from '../components/MainButton';
import { MainImage } from '../components/MainImage';
import MainTitle from '../components/MainTitle';
import Navbar from '../components/Navbar';

import image1 from '../images/img1.png';
import image2 from '../images/img2.png';
import image3 from '../images/img3.png'

function Main  ({value,setValue})  {
  console.log('evide vannu ---->',value)
  return (
    <div className="container-fluid main-container">
        <div className="row">
            <Navbar/>
           
              <MainTitle/>
              {/* <MainImage/> */}
              {value === 0 && <MainImage title='Tasty Soup' desc='Rice noodles, soy sauce, hoisin, chili garlic sauce, honey' imgURL={image1}/>}
              {value === 1 && <MainImage title='Rice & Salad'desc='Rice, cucumber,grapes, rice,pawpaw' imgURL={image2}/>}
              {value === 2 && <MainImage title='Goat Meat Soup'desc='Goat meat, okra, carrot, vegetables, chili garlic sauce' imgURL={image3}/>}
              <MainButton value={value} setValue={setValue}/>
            
         
            
        </div>   
    </div>

  )
}
export default Main;