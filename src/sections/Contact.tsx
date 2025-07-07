import Subtitle from '../components/Subtitle'
import contactImg from '../assets/findus.png'

const Contact = () => {
  return (
    <div id='contact' className='mt-[100px] mx-[20px] sm:mx-[100px] flex flex-col xl:flex-row gap-[50px] items-center'>

      <div className='lg:w-1/2'>

        <Subtitle title='Contact' />

        <h1 className='font-base text-main text-[80px] mb-[40px]'>Find Us</h1>

        <p className='p-text'>Lane End Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>

        <h3 className='text-main font-base text-[25px] mt-[20px] mb-[30px]'></h3>

        <h3 className='p-text'> Mon - Fri: 10:00 am - 02:00 am</h3>

        <h3 className='p-text mt-[20px] mb-[50px]'>Sat - Sun: 10:00 am - 03:00 am</h3>

        <a href='#menu' className='button'>View More</a>
      </div>

      <div className='lg:w-1/2'>
        <img src={contactImg} alt='Contact' />
      </div>

    </div>
  )
}

export default Contact