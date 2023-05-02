import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsEyeFill, BsPlus } from 'react-icons/bs';


const Product = ({ product }) => {
  // console.log(product);

  const { id, title, description, category, image, price } = product;

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">

        {/* img */}

        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-[150px] mx-auto flex justify-center items-center'>
            <img
              className='mx-h-[160px] group-hover:scale-110 transition duration-500'
              src={image} alt="product-img" />
          </div>
        </div>

        {/* button */}

        <div className='absolute top-4 -right-11 group-hover:right-5 p-2 flex flex-col items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500'>
          <button >
            <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500 hover:scale-110 transition duration-500'>
              <BsPlus className='text-3xl ' />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl hover:scale-110 transition duration-500'
          >
            
            < BsEyeFill className='h-5 w-5' />
          </Link>
        </div>

      </div>

      {/* price and discretion*/}

      <div>
        <Link to={`/product/${id}`}>
          <h2 className='hover:text-red-500 font-semibold mb-1'>{title}</h2>
        </Link>
        <div className='font-light'>$ {price}</div>
      </div>
    </div>
  )
};

export default Product;
