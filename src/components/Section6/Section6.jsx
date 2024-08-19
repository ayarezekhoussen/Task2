import './Section6.css' ;

function Section6() {
  return (
    <div className='Section6'>

      <img src="/assets/images/contact-bg.jpg" alt="" />

      <div className='Section6-Titel'>
        <h4>Contact US</h4>
        <p>
          <span>Get In Touch</span>
          <span>With Our Agents </span>
        </p>
      </div>

      <div className='Section6-Container1'>
        <iframe className='Section6-Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27615.057376317316!2d-80.14211080548317!3d25.956831979664738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad17d7287f13%3A0xa268b8890d1e0035!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2snl!4v1723988356381!5m2!1sen!2snl" width="700" height="550" ></iframe>
        <div className='Section6-Cards'>
          <div className='Section6-Card'>
            <img src="/assets/images/phone-icon.png" alt="" />
            <div>
              <h2>010-020-0340</h2>
              <p>Phone Number</p>
            </div>
          </div>
          <div className='Section6-Card'>
            <img src="/assets/images/email-icon.png" alt="" />
            <div>
              <h2>info@villa.co</h2>
              <p>Business Email</p>
            </div>
          </div>
        </div>
      </div>

      <div className='Section6-Container2'>
        <label htmlFor=""> Full Name </label>
        <input type="text" placeholder="Your Name..." />
        <label htmlFor="" > Email Address </label>
        <input type="email" placeholder="Your E-mail..." />
        <label htmlFor=""> Subject </label>
        <input type="text" placeholder="Subject..." />
        <label htmlFor=""> Message </label>
        <textarea name="" id="" placeholder="Your Message"></textarea>
        <button>Send Message</button>
      </div>

    </div>
  )
}

export default Section6