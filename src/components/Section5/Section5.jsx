import './Section5.css'
import Card4 from './../Card4/Card4.jsx' ;

function Section5() {
  return (
    <div>
      <div className='Section5-Title'><h4 >Properties</h4></div>
      <p className='Section5-Hero'>
        <span>We Provide The</span>
        <span>Best Property</span>
        <span>You</span>
      </p>
      <div className='Section5-Offers'>
      <Card4 img = "./assets/images/property-01.jpg" type = "Luxury Villa" price = "2.264.000" address = "18 New Street Miami,OR 97219" Bedroms = "8" Bathroms = "8" Area = "545" Floor = "3" Parking = "6 spots" />
      <Card4 img = "./assets/images/property-02.jpg" type = "Luxury Villa" price = "1.180.000" address = "54 Mid Street Florida,OR 27001" Bedroms = "6" Bathroms = "5" Area = "450" Floor = "3" Parking = "8 spots" />
      <Card4 img = "./assets/images/property-03.jpg" type = "Luxury Villa" price = "1.460.000" address = "26 Old Street Miami,OR 38540" Bedroms = "5" Bathroms = "4" Area = "225" Floor = "3" Parking = "10 spots" />
      <Card4 img = "./assets/images/property-04.jpg" type = "Apartment" price = "584.500" address = "12 New Street Miami,OR 12650" Bedroms = "4" Bathroms = "3" Area = "125" Floor = "25th" Parking = "2 cars" />
      <Card4 img = "./assets/images/property-05.jpg" type = "Penthouse" price = "925.000" address = "34 Beach Street Miami,OR 42680" Bedroms = "4" Bathroms = "4" Area = "180" Floor = "38th" Parking = "2 cars" />
      <Card4 img = "./assets/images/property-06.jpg" type = "Modern Condo" price = "450.000" address = "22 New Street Portland,OR 16540" Bedroms = "3" Bathroms = "2" Area = "165" Floor = "26th" Parking = "3 cars" />
      </div>
    </div>
  )
}

export default Section5