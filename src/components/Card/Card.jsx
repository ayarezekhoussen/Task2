
import'./Card.css'

function Card(props) {
  return (
    <div className={props.setstyle}>
        <div>
        <img src={props.img} alt="" />
        <p>{props.imgtext}</p>
        </div>
        <div>
            <h2>{props.title}</h2>
            <p>{props.value}</p>
        </div>
    </div>
  )
}

export default Card