import spoon from '../assets/spoon.png'
import {FaInstagram,FaFacebook,FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='mt-[100px] mx-[20px] sm:mx-[100px]'>
      <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-[30px]'>
      <div className="text-center">
        <h3 className='font-base text-main text-[30px]'>Contact Us</h3>
        <p className='footer-text my-[20px]'>9 W 53rd St, New York, NY 10019, USA</p>

        <p className='footer-text'>
          +1 212-344-1230
          +1 212-555-1230
        </p>
      </div>
      <div className="text-center">
        <h2 className='font-base text-main text-[70px] uppercase'>Gericht</h2>
        <p className='footer-text'>"The best way to find yourself is to lose yourself in the service of others"</p>
        <img className='mx-auto w-[60px] mt-[15px] mb-[20px]' src={spoon} alt='Spoon' />
        <div className='flex justify-center items-center gap-[40px] text-[30px]'>
          <a href='#'><FaFacebook /></a>
          <a href='#'><FaInstagram /></a>
          <a href='#'><FaTwitter /></a>
        </div>
      </div>
      <div className="text-center">
        <h3 className='font-base text-main text-[30px] mb-[20px]'>Working Hours</h3>

        <p className='footer-text mb-[10px]'>
          Monday-Friday:<br />
          8:00am -12:00am
        </p>

        <p className='footer-text'>
          Saturday-Sunday:<br />         
          07:00am -11:00pm
        </p>
      </div>
    </div>

    <p className='text-center text-[19px] my-[60px]'>{new Date().getFullYear()} Gericht. All Rights reserved.</p>

    </footer>
  )
}

export default Footer