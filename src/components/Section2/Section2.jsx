import React from 'react'
import'./Section2.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{ faPlay} from'@fortawesome/free-solid-svg-icons'
const Section2 = () => {
  return ( 
   < >
    <div className='Section2-div'>
     <img src="/assets/images/img.jpg" alt="" />
     <div className='Section2-titel'>
       <h5>VIDEO VIEW</h5>
       <h1>Get Closer View & Different Feeling</h1>
       <img src="/assets/images/video-frame.jpg" alt="" />
       <div className='Section2-awesome1'>
         <FontAwesomeIcon icon={faPlay} style={{color: "#f04014",fontSize:28, position:'absolute', top:10 , left: 15,}} />
       </div>
     </div>
    </div>
   </>
    
  )
}

export default Section2