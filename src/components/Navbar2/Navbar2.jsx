import React, { useState } from 'react'
import './Navbar2.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'


export default function Navbar2() {

  const [Class1, setClass1] = useState(true)

  return (
    <div className='Navbar2'>
      <div className='logo'>
        <h1>VILLA</h1>
      </div>
      <ul className='likass'>
        <li><a href="#" className='Navbar2-li1'>Home</a></li>
        <li><a href="#" className='Navbar2-li2'>Properties</a></li>
        <li><a href="#" className='Navbar2-li2'>Properly Details</a></li>
        <li><a href="#" className='Navbar2-li2'>Contact Us</a></li>
      </ul>
      <div className='button'>
        <div><FontAwesomeIcon className='Navbar2-Icon1' icon={faCalendar} style={{width: "20px" , height: "20px" ,color: "white" , background: "#f35525" , border: "11px solid #f35525",}} /></div>
        <button>Schedule a Visit</button>
      </div>
      <div className='Mobile-view'
        onClick={() => setClass1(false)}
      >
        <FontAwesomeIcon icon={faBarsStaggered} />
      </div>
      <div className={Class1 ? 'TogleBarr-off' : 'TogleBarr'}>
        <div className='Exit'
          onClick={() => setClass1(true)}
        >X</div>
        <ul className='likass-mobile'>
          <li><a href="#" className='Navbar2-li1'>Home</a></li>
          <li><a href="#" className='Navbar2-li2'>Properties</a></li>
          <li><a href="#" className='Navbar2-li2'>Properly Details</a></li>
          <li><a href="#" className='Navbar2-li2'>Contact Us</a></li>
        </ul>
      </div>
    </div>
  )
}
