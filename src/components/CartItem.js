import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';


const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;
  return (
    <div className='flex'>
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
            <div className='text-xl cursor-pointer'>
              <IoMdClose className='text-gray-500 hover:text-red-500 transition duration-300 ' />
            </div>
          </div>

          {/* quantity */}
          <div className=''>
            Quantity
          </div>
          <div>Price</div>
        </div>
      </div>
    </div>
  )
};

export default CartItem;
