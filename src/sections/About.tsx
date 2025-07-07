import Title from '../components/Title'
import knife from '../assets/knife.png'



const Element = ({name,text,isRight}: {name: string, text: string, isRight?: boolean,})=>(
  <div className={`${isRight ? 'text-right' : ''}`}>
    <Title title={name} isRight={isRight} isSmall={false}/>
    <p className='text-[19px] sm:text-[22px] leading-[1.7] text-gray-400 my-[50px]'>{text}</p>
    <a href='#menu' className='button ml-auto'>Know More</a>
  </div>   
)

const About = () => {
  return (
    <div id='about' className='flex flex-col lg:flex-row items-center gap-[50px] mt-[100px] mx-[20px] sm:mx-[100px]'>
      <Element isRight={true} name='about us' text='Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.' />
      <div className='relative'>
        <img className="w-[50px] md:w-[100px] lg:w-[220px]" src={knife} alt="Knife" />
        <span className='absolute opacity-30 font-base -z-[1] top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400 text-[500px] sm:text-[800px]'>G</span>
      </div>
      <Element name='Our History' text='Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed Odio Nec Aliquet.' />
    </div>
  )
}

export default About