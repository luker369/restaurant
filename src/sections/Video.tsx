import mealVid from '../assets/meal.mp4'
import { useState,useRef } from 'react';
import { FaPlay,FaPause } from 'react-icons/fa';

const Video = () => {

  const [toggle,setToggle] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  function playVideo(): void{

    setToggle(true);
    videoRef?.current?.play();
  }

  function pauseVideo(): void{

    setToggle(false);
    videoRef.current?.pause();
  }

  return (
    <div className='mt-[100px] h-[600px] w-full relative'>
      <div className='absolute w-full h-full bg-[#00000099]'>

        <div className='absolute z-[3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[120px] h-[120px] rounded-full border border-main grid place-items-center text-[30px]'>

          {
            toggle ? <FaPause onClick={pauseVideo} className='cursor-pointer' />
            : <FaPlay onClick={playVideo} className='cursor-pointer' />
          }
        </div>
      </div>



      <video
      ref={videoRef}
      src={mealVid}
      className='w-full h-full object-cover'
      muted
      />
    </div>
  )
}

export default Video