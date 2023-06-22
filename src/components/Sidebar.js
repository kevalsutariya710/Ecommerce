import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from './CartItem'
import { SidebarContext } from '../contexts/SidebarContext'
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';



const Sidebar = () => {

  const { isOpen, handleClose } = useContext(SidebarContext)
  const { cart, emptyCart, total, itemAmount } = useContext(CartContext);
  return (
    <div
      className={`
    ${isOpen ? 'left-0' : '-left-full'} 
    w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-700 z-20 px-4 lg:px-[35px]`}>
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>
          Shopping bag ({itemAmount})</div>
        <div className='cursor-pointer w-8 h-8 flex justify-center text-black items-center  animate-pulse'>
          <IoMdArrowBack className='text-2xl ' onClick={handleClose} />
        </div>

      </div>
      <div className='flex flex-col gap-y-2 h-[395px]  lg:h-[480px] overflow-y-auto overflow-x-hidden'>
        {
          cart.map(item => <CartItem item={item} key={item.id} />)
        }
      </div>
      <div className='flex flex-col gap-y-2 py-4 mt-4 '>
        <div className='flex w-full justify-between items-center'>
          <div className='font-semibold'>
            <span className='mt-2'>Total:</span> $ {parseFloat(total).toFixed(2)}
          </div>
          <div onClick={() => emptyCart()} className='text-red-600 hover:text-white border border-red-500 hover:bg-red-500 focus:ring-4  focus:ring-red-300 font-medium rounded-full text-base px-5 py-2.5 justify-center text-center mr-2 mb-2' title='Clear Cart'>
            <FiTrash2 />
          </div>
        </div>
          <ToastContainer />
        <Link
          className='bg-gray-200 flex p-3 justify-center items-center text-primary w-full font-medium justify-items-end'
          to={'/'}>
          View Cart
        </Link>
        <Link
          className='bg-red-500 flex p-3 justify-center items-center text-white w-full font-medium'
          to={'/'}
        >Check Out</Link>
      </div>
    </div>



  )
};

export default Sidebar;
