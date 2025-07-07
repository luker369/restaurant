import React from 'react'
import Subtitle from '../components/Subtitle'

const Newsletter = () => {
  return (
    <div id='newsletter' className='mt-[100px]'>
      <span className='block w-full h-[250px] bk-color'/>

      <div className="bk-color border border-main -mt-[160px] mx-[20px] sm:mx-[50px] md:mx-[100px] px-[20px] py-[30px] text-center">
        <Subtitle title='Newsletter' isCentered={true} />

        <h1 className='text-main font-base text-[50px] md:text-[80px]'>Subscribe to Our Newsletter</h1>

        <p className='text-[18px] mb-[40px]'>And never miss the latest Updates!</p>

        <form className='flex flex-col sm:flex-row items-center justify-center gap-[20px]'>
          <input type='email' placeholder='Email Address' className='block w-[700px] h-[60px] max-w-full border border-main bg-transparent px-[20px] text-[18] placeholder:text-gray-500' />
          <button type='submit' className='button'>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter