import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import { FiTrash2, TfiTrash } from 'react-icons/fi';
import CartItem from './CartItem'
import { SidebarContext } from '../contexts/SidebarContext'
import { CartContext } from '../contexts/CartContext';



const Sidebar = () => {

  const { isOpen, handleClose } = useContext(SidebarContext)
  const { cart,emptyCart } = useContext(CartContext);
  return (
    <div
      className={`
    ${isOpen ? 'left-0' : '-left-full'} 
    w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-700 z-20 px-4 lg:px-[35px]`}>
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>
          Shopping bag (0)</div>
        <div className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowBack className='text-2xl ' onClick={handleClose} /></div>
      </div>
      <div>
        {
          cart.map(item => <CartItem item={item} key={item.id} />)
        }
      </div>
      <div className='flex flex-col gap-y-2 py-4 mt-4 '>
        <div className='flex w-full justify-between items-center'>
          <div className='font-semibold'>
            <span className='mt-2'>Total:</span> $ 1000
          </div>
          <div onClick={() => emptyCart()} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
            <FiTrash2 />
          </div>
        </div>
      </div>
    </div>

  )
};

export default Sidebar;
