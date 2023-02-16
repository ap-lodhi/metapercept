import React from 'react'
import { Fram } from './Card'
// import { Card } from './Fram'
import "./nav.css"
export const Nav = () => {
  return (
    <>
   <div className='heading'>
    <div>
     <p style={{marginLeft:"30px"}}>Title</p>
    </div>
    <div>
    <ul className='ul-list'>
        <li>Home</li>
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
        <button>Button </button>
    </ul>
    </div>
   </div>

   <div className='sub-heading'>
    <div>

          <h3>Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, veniam recusandae. Quis dolorem cumque harum magnam voluptates incidunt libero ad perspiciatis reiciendis consequuntur? Sed, blanditiis. Veniam illo ullam officia aperiam!</p>
           <button>Read More</button>
    </div>
   </div>
   <Fram/>
    </>
  )
}
