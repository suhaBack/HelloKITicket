import './category.css'
import jpg8 from './../images/8.jpg'
import jpg9 from './../images/9.jpg'
import jpg10 from './../images/10.jpg'
import jpg11 from './../images/11.jpg'
import { useState } from 'react'

function Category(){
  let [jpg, setjpg] = useState([jpg8, jpg9, jpg10, jpg11])
  return (
    <>
    <div className='categoryTitle'>카테고리</div>
    <div className='categoryGridBox'>
      <div className='categoryImgBox'>
        <img src={jpg[0]}></img>
      </div>
      <div className='categoryImgBox'>
        <img src={jpg[1]}></img>
      </div>
      <div className='categoryImgBox'>
        <img src={jpg[2]}></img>
      </div>
      <div className='categoryImgBox'>
        <img src={jpg[3]}></img>
      </div>
    </div>
    </>
    
  )
}

export default Category;