import './../Card4/Card4.css'

function Card4(props) {
  return (
    <div className="Card4">
        <img src={props.img} alt="" className='Card4-img' />
        <div className='Card4-TypeandPrice'>
          <h4>{props.type}</h4>
          <p>${props.price}</p>
        </div>
        <div className='Card4-Properties'>
          <h3>{props.address}</h3>
        </div>
        <div className='Card4-Properties-Lines'>
        <div className='Card4-Properties-Line'>
            <p>Bedroms : <span>{props.Bedroms}</span></p>
            <p>Bathroms : <span>{props.Bathroms}</span></p>
          </div>
          <div className='Card4-Properties-Line'>
            <p>Area : <span>{props.Area}m2</span></p>
            <p>Floor : <span>{props.Floor}</span></p>
          </div>
          <div className='Card4-Properties-Line'>
            <p>Parking : <span>{props.Parking}</span> </p>
          </div>
        </div>
        <div className='Card4-button'>
        <button>Schedule a Visit</button>
        </div>
    </div>
  )
}

export default Card4