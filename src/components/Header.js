import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs'

const Header = () => {

  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (

    <header className='bg-pink-200'>
      <div>Header</div>
    
      <div onClick={() => setIsOpen(!isOpen)}>
        <BsBag className='text-2xl cursor-pointer hover:text-red-500 ' />
      </div>
    </header>
  )
};

export default Header;
