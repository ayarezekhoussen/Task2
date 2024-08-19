import React from 'react'
import'./Section4.css'
import Button from '../Sectionn4Btn/Button'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendar } from'@fortawesome/free-solid-svg-icons'



const Section4 = () => {
  return (
    <>
    <div className='Big-Section4'>
       <div className='Section4-div1'>
         <div className='Section4-div2'>
           <h4> BEST DEAL</h4>
           <h1>Find Your Best Deal Right Now!</h1>
         </div>
         <div className='Section4-div3'>
            <Button titel="Appartment " background ="red"/>
            <Button titel="Villa House" background="black"/>
            <Button titel="Penthouse " background="black"/> 
         </div>
       </div>
       <div className='Section4-div4'>
        <div className='Section4-div4-p'>
        <p>Total Flat Space <span id='space'>185 m2</span></p>
        <p>Floor number <span>26th</span></p>
        <p>Number of rooms  <span>4</span></p>
        <p> Parking  Available<span>Yes</span></p>
        <p> Payment process <span>Bank</span></p>
        </div>
         <img src="./assets/images/property-05.jpg" alt="" />
         <div className='paragraf'>
           <h2>Erxtra Info About Prperty</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritati incidunt eius qe corporis libero? beatae quibusda doloremque perferendis?</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ad, eveniet sequi non obcaecati nobis repellendus! Amet provident reprehenderit velit deleniti.</p>



           <div className='social-media2'>
       <div className='socialmedia2-div'><FontAwesomeIcon icon={faCalendar} style={{color: "#ffffff", fontSize:13}} /></div>
       <button>Schedule a visit</button>
      </div>
         </div>
       </div>


      </div>
    </>
    
  )
}

export default Section4