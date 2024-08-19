import './Card2.css'

function Card2(props) {
  return (
    <div className='Card2'>

        <div className='Card2-Content1'>
          <h1>{props.number}</h1>
          <div>
            <p>{props.value1}</p>
            <p>{props.value2}</p>
          </div>
        </div>

        <div className='Card2-Content2'></div>
    </div>
  )
}

export default Card2