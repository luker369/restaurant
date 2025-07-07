import Subtitle from '../components/Subtitle'
import {menu} from '../data/menu'
import type { MenuProps } from '../types/MenuProps'
import menuImg from '../assets/menu.png'


const Element = (props: {elements: MenuProps[], title: string})=>(

  <div id='menu' className='flex-1'>
    <h3 className='font-base text-[60px] text-center mb-[30px]'>{props.title}</h3>

    <div>
      {
        props.elements.map((el,ind)=>(
          <div key={ind} className={`${ind !== (props.elements.length - 1) ? 'mb-[30px]' : ''}`}>


            <div className='flex gap-[20px] justify-between'>
              <h3 className='text-main font-base text-[27px]'>{el.name}</h3>

              <div className="flex items-center gap-[20px]">
                <span className='w-[100px] sm:w-[200px] h-[2px] bg-white'/>
                <h4 className='text-[20px]'>{el.price}</h4>
              </div>             
            </div>

            <div className="flex gap-[5px] text-gray-500 text-[18px]">
                  {
                    el.ingredients.map((ing,ind)=>(
                      <>
                        <span key={ing}>{ing}</span>
                        {ind !== (el.ingredients.length - 1) && <span className=''>|</span>}
                      </>
                    ))
                  }
            </div>

          </div>
        ))
      }
    </div>

  </div>
)


const Menu = () => {

  return (
    <div className='bk-color px-[20px] md:px-[100px] py-[70px] mt-[100px]'>
      

      <div className='text-center'>
        <Subtitle title="Menu that fits your palatte" isCentered={true} />
        <h1 className='text-main text-[70px] font-base mt-[30px] mb-[40px]'>Today's Special</h1>
      </div>

      <div className="flex flex-col xl:flex-row  items-center xl:justify-normal xl:items-normal gap-[50px]">
        <Element elements={menu[0]} title='Soda' />
        <div className="max-w-[500px]">
          <img className='w-full' src={menuImg} alt='Menu' />
          <a href='#' className='button mx-auto mt-[30px]'>View More</a>
        </div>
        <Element elements={menu[1]} title="Cocktails" />
      </div>

    </div>
  )
}

export default Menu