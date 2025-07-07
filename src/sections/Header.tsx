import { useState } from 'react';
import logo from '../assets/gericht.png';
import { HiBars3 } from "react-icons/hi2";
import { MdRestaurantMenu } from "react-icons/md";


const Button = ()=>(
    <div className='buttons flex flex-col md:flex-row items-center gap-[10px] text-[30px] md:text-[18px]'>

        <div className="flex items-center gap-[5px]">
          <a href='#'>Login</a> / <a href='#'>Registration</a>
        </div>

        <span className='hidden md:block w-[1px] h-[30px] bg-white'></span>
          <a href='#' className='whitespace-nowrap'>Book Table</a>
          
    </div>
)

const Header = () => {

  
const [toggle,setToggle] = useState<boolean>(false);

  return (
    <header className='border-b border-[#eeeeee54] sm:border-none'>

    <div className='px-[25px] py-[25px] flex justify-between items-center gap-[20px]'>
      <a href='#'>
        <img className='w-[200px] lg:w-[300px]' src={logo} alt='Logo' />
      </a>

      <ul className={`fixed xl:relative w-full h-full ${toggle ? 'top-0' : '-top-full'} xl:top-0 duration-500 left-0 bg-black xl:bg-transparent
        flex items-center gap-[30px] flex-col xl:flex-row justify-center xl:justify-center
        text-main xl:text-white font-base xl:font-main text-[30px] xl:text-[20px]
        `}>

        <li><a href="#" className='nav-item'>Home</a></li>
        <li><a href="#about" className='nav-item'>About</a></li>
        <li><a href="#menu" className='nav-item'>Menu</a></li>
        <li><a href="#awards" className='nav-item'>Awards</a></li>
        <li><a href="#contact" className='nav-item'>Contact</a></li>

        <div className='md:hidden'>
          <Button />
        </div>
        
      </ul>

      <div className='hidden md:block'>
        <Button />
      </div>

      <div className='relative z-[10] xl:hidden'>

        {toggle ?

        <MdRestaurantMenu className='text-[30px] cursor-pointer' onClick={()=>setToggle(false)} />

        : <HiBars3 className='xl:hidden text-[30px] cursor-pointer' onClick={()=>setToggle(true)} />}
        
      </div>

    </div>

  </header>
  )
}

export default Header