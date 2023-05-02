import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { BsBag } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';

const Header = () => {

  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext)

  return (

    <header className='bg-pink-200'>
      <div className='container mx-auto flex items-center justify-between h-full '>
        <Link to={'/'}>
          <div>
            <img className='w-[40px]' src={logo} alt="logo" />
          </div>
        </Link>


        <div
          className='cursor-pointer flex relative max-w-[50px]'
          onClick={() => setIsOpen(!isOpen)}>
          <BsBag className='text-2xl cursor-pointer hover:text-red-500 ' />
          <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
        </div>
      </div>
    </header>
  )
};

export default Header;
