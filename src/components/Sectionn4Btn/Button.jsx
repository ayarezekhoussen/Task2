import React from 'react' 
import'./Button.css'

const Button = (props) => {
  return (
    <>
    <div>
        <button className={props.background}>{props.titel}</button>
        
    </div>
    </>
    
  )
}

export default Button