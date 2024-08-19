import React from 'react'
import'./Section1.css'
import Card from './../Card/Card.jsx' ;

function Section1() {
  return (
    <div className='Section1'>
      
      <div className='Section1-images'>
        <img src="./assets/images/featured.jpg" className='Section1-photo' alt="" />
        <img src="./assets/images/featured-icon.png" className='Section1-icon' alt="" />
      </div>
      
      <div className='Section1-Featured'>
        <h4 className='Featured-Title'>FEATURED</h4>
        <h1 className='Featured-Hero'>Best <br />Appartment & <br />Sea View </h1>
        <div className='Section1-Description'>
        <h4 className='Section1-Description-title'>Best useful links ?</h4>
        <div className='Section1-Description-Text1'>
          <p>Get <span className='Section1-Description-Text1-Span1'>the best villa </span>website template in HTML CSS and Bootstrap for your business,TemlateMo provides you the <span className='Section1-Description-Text1-Span2'>best free CSS templates </span>in the world, Please tell your freainds .</p>
          <h4>How does this work?</h4>
        </div>
        <h4 className='Section1-Description-Text2'>Why is Villa Agency the best ?</h4>
        </div>
      </div>
      
      <div className='Specifications-Container'>
      <Card img = "./assets/images/info-icon-01.png" title = "250 m2" value = "Total Flat Space" setstyle = "Specifications1" />
      <Card img = "./assets/images/info-icon-01.png" title = "Contract" value = "Contract ready" setstyle = "Specifications1" />
      <Card img = "./assets/images/info-icon-01.png" imgtext = "Process" title = "Payment" value = "Payment" setstyle = "Specifications1" />
      <Card img = "./assets/images/info-icon-01.png" imgtext = "Control" title = "Safety" value = "24/7 Under" setstyle = "Specifications2" />
      </div>
      
    </div>
  )
}

export default Section1