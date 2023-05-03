import React, { useContext, useState, useEffect } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { BsBagCheck } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

const Header = () => {

  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext)
  const [isActive, setIsActive] = useState(false)

  // Event listener 
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });


  return (

    <header className={`${isActive ? 'bg-slate-100 py-1 shadow-md' : 'bg-transparent'} fixed w-full z-10 transition-all`}>
      <div className='container mx-auto flex items-center justify-between h-full  '>
        <Link to={'/'}>
          <div>
            <img className='w-[140px] -mb-4 -mt-2.5 -mx-4' src={logo} alt="logo" />
          </div>
        </Link>


        <div
          className='cursor-pointer flex relative max-w-[50px]'
          onClick={() => setIsOpen(!isOpen)}>
          <BsBagCheck className='text-3xl cursor-pointer hover:text-red-500 ' />
          <div className='bg-red-500 absolute -right-2.5 bottom-2 text-[13px] w-[20px] h-[20px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
        </div>
      </div>
    </header>
  )
};

export default Header;
