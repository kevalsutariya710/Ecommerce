import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import { FaTrash } from 'react-icons/fa';
import { CartContext } from '../contexts/CartContext';


const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;
  const { deleteFromCart, AmountIncr, AmountDecr } = useContext(CartContext);
  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>

        {/* img */}
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px] hover:scale-105 transition duration-500' src={image} alt="" />
        </Link>

        <div className='w-full flex flex-col'>
          
          {/* title & remove icon */}
          <div className='flex justify-between mb-2'>

            <Link className=' text-sm font-medium max-w-[240px] text-primary hover:text-red-500 transition duration-300  mb-1' to={`/product/${id}`}>{title}
            </Link>

            {/* remove icon */}
            <div onClick={() => deleteFromCart(id)} className='text-lg cursor-pointer'>
              <FaTrash className='text-gray-500 hover:text-red-500 transition duration-300 ' title="Remove" />
            </div>
          </div>

          {/* quantity */}
          <div className='flex gap-x-2 h-[36px] text-sm'>

            <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>

              <div onClick={() => AmountDecr(id)} className='flex-1  flex justify-center items-center cursor-pointer hover:text-red-600 transition duration-500'>

                <IoMdRemove title="Delete" />

              </div>
              <div className='h-full flex justify-center items-center px-2'> {amount} </div>

              <div onClick={() => AmountIncr(id)} className='flex-1 h-full flex justify-center 
              items-center cursor-pointer hover:text-red-600 transition duration-500'>

                <IoMdAdd title="Add" />
              </div>

            </div>
            <div className='flex-1 flex items-center justify-around'>$ {price}</div>
            <div className='flex-1 flex justify-end items-center text-primary font-medium'>
              {`$ ${parseFloat(amount * price).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div >
  )
};

export default CartItem;
