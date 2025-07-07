import React from 'react'
import chefImg from '../assets/chef.png'
import Title from '../components/Title'
import quoteImg from '../assets/quote.png'
import signImg from '../assets/sign.png'

const Chef = () => {
  return (
    <div id='chef' className='mt-[100px] mx-[20px] sm:mx-[100px] flex flex-col xl:flex-row justify-between gap-[50px]'>


      <div className='xl:w-[40%]'>
        <img src={chefImg} alt='Chef' />
      </div>

      
      <div className="xl:w-[50%]">
       <Title title="Chef's Word" isSmall={true} />

        <h1 className='text-[40px] sm:text-[60px] md:text-[80px] font-bold text-main font-base'>What we believe in</h1>

        <p className='text-[20px] italic text-gray-400 my-[30px]'>
          <img className='inline-block w-[30px] mr-[20px]' src={quoteImg} alt='quote' />
          Lorem ipsum dolor sit amet consectetur adipisciscing elit. Accusamus alias dolorum quod sequi labore nihil dicta delectus numquam minus aliquid! Impedit quibusdam consequuntur optio voluptatem. Labore nostrum fugiat totam mollitia!
        </p>

        <div>
          <h3 className='text-main text-[40px] font-base font-bold'>Kevin Luo</h3>
          <h4 className='text-gray-400 text-[20px] mb-[20px]'>Chef & Founder</h4>
          <img className='w-[250px]' src={signImg} alt='Signature' />
        </div>
      
      </div>

    </div>
  )
}

export default Chef