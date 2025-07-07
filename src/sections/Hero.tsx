import welcomeImg from '../assets/welcome.png'
import Subtitle from '../components/Subtitle'

const Hero = () => {
  return (
    <div className='px-[20px] md:px-[100px] mt-[70px] flex flex-col xl:flex-row items-center gap-[30px]'>

      <div className="text xl:basis-1/2">
        <Subtitle title='Chase the new Flavour'/>
        <h1 className='text-main font-base text-[90px]'>The key to Fine dining</h1>
        <p className='text-[20px]'>Sit tellus lobortis sed senectus vivamus mosestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
        <a href='#menu' className='button mt-[20px]'>Explore Now</a>
      </div>

      <div className="image xl:basis-1/2">
        <img className='w-full' src={welcomeImg} alt='Welcome' />
      </div>
      
    </div>
  )
}

export default Hero