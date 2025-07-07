import spoon from '../assets/spoon.png';
import type { SubtitleT } from '../types/subtitle';

const Subtitle = ({title,isCentered}: SubtitleT) => {
  return (
    <div>
      <h1 className='text-[25px] font-base'>{title}</h1>
      <img className={`w-[45px] ${isCentered ? 'mx-auto text-center' : ''}`} src={spoon} alt='Spoon' />
    </div>
  )
}

export default Subtitle