import { useState } from 'react'
import './Slides.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'


export default function Slides() {

  const [ slideNum , setslideNum ] = useState(1)

  return (
    <div className='HeroPage'>
      <div className={`The-transformer${slideNum}`}>
        <div className='slider1'>
          <img src="./assets/images/banner-01.jpg" alt="" />
        </div>
        <div className='slider2'>
        <img src="./assets/images/banner-02.jpg" alt="" />
        </div>
        <div className='slider3'>
        <img src="./assets/images/banner-03.jpg" alt="" />
        
        </div>
      </div>
      <div className='position-bu'>
        <button onClick={ () => setslideNum(1)}></button>
        <button onClick={ () => setslideNum(2)}></button>
        <button onClick={ () => setslideNum(3)}></button>
      </div>
      <div>
        <div className='Slides-Text'>
        <div className='Slides-Address'>
            <h4>Toronto ,</h4>
            <h4 className='Slides-Canada'>Canada</h4>
        </div>
        <p>
          <span>Hurry</span>
          <span>Get The</span>
          <span>Best VILLA</span>
          <span>For You</span>
        </p>
      </div>
      <div className='Slides-Arrows'>
        <div><FontAwesomeIcon className='Slides-Arrows1' icon={faChevronRight} style={{color: "#ffffff",background: "rgba(197, 194, 194, 0.4)",width: "30px" , height: "30px"}} /></div>
        <div><FontAwesomeIcon className='Slides-Arrows2' icon={faChevronLeft} style={{color: "#ffffff",background: "rgba(197, 194, 194, 0.4)",width: "30px" , height: "30px"}} /></div>
      </div>
      </div>
    </div>
  )
}
