import React from 'react';
import { Link } from 'react-router-dom';
import WomanImg from '../img/girl.png'


const Hero = () => {
  return (
    <section className='h-[580px] bg-hero bg-no-repeat bg-cover bg-center py-20 shadow-md '>
      <div className='container mx-auto flex justify-around h-full'>
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-3'>
            </div>
            New Trend
          </div>
          <h1 className='text-[50px] lg:text-[60px] leading-[1] font-light mb-3'>SALE STYLISH
            <br />
            <span className='font-semibold'> Men's & Women's<br/> <span className='font-normal'>Wear</span>  </span>
          </h1>
        </div>
        <div className='hidden lg:block '>
          <Link className='cursor-text' to={'/'}>
            <img className='h-[600px] -mt-14 ' src={WomanImg} alt="img" />
          </Link>
        </div>
      </div>
    </section>
  )
};

export default Hero;
