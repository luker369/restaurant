import { useEffect,useState } from 'react'
import Subtitle from '../components/Subtitle'
import img1 from '../assets/gallery01.png'
import img2 from '../assets/gallery02.png'
import img3 from '../assets/gallery03.png'
import img4 from '../assets/gallery04.png'
import {FaArrowLeft,FaArrowRight,FaInstagram} from 'react-icons/fa'


const Gallery = () => {

  const images = [img1,img2,img3,img4]

  const [scrollEl,setScrollEl] = useState<any>(null)

  useEffect(()=>{
    setScrollEl(document.querySelector(".scroll"))
  },[])

  console.log(scrollEl,"hello")


  function scrollToLeft():void{
    scrollEl.scrollBy({
      left: -500,
      behavior: "smooth"
    })
  }

  function scrollToRight():void{
    scrollEl.scrollBy({
      left: 500,
      behavior: "smooth"
    })
  }

  return (
    <div id='gallery' className='bk-color mt-[100px] px-[20px] sm:px-[100px] py-[70px] flex flex-col lg:flex-row gap-[30px]'>
      
      <div className="lg:w-[60%]">
        <Subtitle title='Instagram' />
        <h1 className='text-main font-base text-[80px]'>Photo Gallery</h1>
        <p className='text-gray-400 text-[20px] my-[30px]'>Lorem ispum dolor sit amet, consectetur adpiscing elit. Boutpat mattis ipsum turpis elit elit scelerisque egestas</p>
        <a href='#menu' className='button'>View More</a>
      </div>

      <div className="lg:w-[35%]">

        <div className="scroll overflow-hidden">
          <div className='w-[3000px]'>
          
          <div className={`flex gap-[30px]`}>
          {
            images.map((img,ind)=>(

              <div key={ind} className={`relative gallery-image duration-500`}>

                <img className='w-[300px] h-[500px] object-cover duration-500' src={img} />

                <div className="absolute top-0 left-0 w-full h-full text-[50px]">
                  <a href='#' className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40px] hidden duration-300'>
                    <FaInstagram />
                  </a>
                </div>

              </div>

            ))
          }
          </div>
        </div>
        </div>

        <div className="flex justify-center gap-[30px] mt-[40px]">
          <span onClick={scrollToLeft} className='arrow-icon'><FaArrowLeft className='pointer-events-none'/></span>
          <span onClick={scrollToRight} className='arrow-icon'><FaArrowRight className='pointer-events-none'/></span>
        </div>

      </div>

    </div>
  )
}

export default Gallery