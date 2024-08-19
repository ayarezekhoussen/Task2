import './Navbar1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMap } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

function Navbar1() {
  return (
    <div className='Navbar1'>

      <div className='Navbar1-Container1'>
        <div className='Navbar1-Mail'>
          <div><FontAwesomeIcon icon={faEnvelope} style={{color: "#f35424",height:"22px", padding:"10px"}} /></div>
          <p>info@company.com</p>
        </div>
        <div className='Navbar1-Address'>
          <div><FontAwesomeIcon icon={faMap} style={{color: "#f35525",height:"22px" ,padding:"10px"}} /></div>
          <p>Sunny Isles Beach, FL 33160</p>
        </div>
      </div>

      <div className='Navbar1-Container2'>
        <FontAwesomeIcon className='Navbar1-social' icon={faFacebook} style={{width: "20px" , height: "20px" , color: "white" , background: "#ababab" , border: "7px solid #ababab" }} />
        <FontAwesomeIcon className='Navbar1-social' icon={faTwitter} style={{width: "20px" , height: "20px" , color: "white" , background: "#ababab" , border: "7px solid #ababab"}} />
        <FontAwesomeIcon className='Navbar1-social' icon={faLinkedin} style={{width: "20px" , height: "20px" , color: "white" , background: "#ababab" , border: "7px solid #ababab"}} />
        <FontAwesomeIcon className='Navbar1-social' icon={faInstagram} style={{width: "20px" , height: "20px" , color: "white" , background: "#ababab" , border: "7px solid #ababab"}} />
      </div>
    </div>
  )
}

export default Navbar1
