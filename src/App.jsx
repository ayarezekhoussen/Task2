import React from 'react'
import'./App.css'
import Navbar1 from './components/Navbar1/Navbar1'
import Navbar2 from './components/Navbar2/Navbar2'
import Slides from './components/Slides/Slides'
import Section1 from './components/Section1/Section1'
import Card from './components/Card/Card'
import Section2 from './components/Section2/Section2'
import Section3 from './components/Section3/Section3'
import Section4 from './components/Section4/Section4'
import Section5 from './components/Section5/Section5'
import Section6 from './components/Section6/Section6'
import Footer   from './components/Footer/Footer'





const App = () => {
  return (

    <>
    <div className='Villa-Size'>
     <Navbar1/> 
    <Navbar2/>
    <Slides/> 
    <Section1/>
     <Card/>
    <Section2/>
     <Section3/>

   <Section4/> 
   <Section5/>
   <Section6/>
    <Footer/> 
  
   </div>
    </>
  )
}

export default App 