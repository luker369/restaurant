import { laurels } from '../data/laurels'
import Subtitle from '../components/Subtitle'
import laurelImg from '../assets/laurels.png'


const Laurels = () => {
  return (
    <div id='awards' className='mt-[100px] mx-[20px] sm:mx-[100px] flex flex-col xl:flex-row items-center justify-between gap-[50px]'>

      <div className='xl:w-[50%]'>
        <Subtitle title='Awards & recognition' />
        <h1 className='text-main font-base text-[80px] mb-[40px]'>Our Laurels</h1>

        <div className='grid md:grid-cols-2 gap-[30px]'>
          {
            laurels.map((lr,ind)=>(
              <div key={ind} className='flex items-center gap-[30px]'>
                <img className='w-[50px]' src={lr.image} alt='Image' />
                <div>
                  <h3 className='text-main font-base text-[30px]'>{lr.title}</h3>
                  <p className='text-gray-400 text-[20px]'>{lr.text}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>


      <div className='xl:w-[40%]'>
        <img className='w-full' src={laurelImg} alt='Laurels' />
      </div>
      
    </div>
  )
}

export default Laurels