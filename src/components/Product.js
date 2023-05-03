import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsEyeFill, BsPlus } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';


const Product = ({ product }) => {
  // console.log(product);

  const { addToCart } = useContext(CartContext)
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

        <div className=' absolute bottom-0 -right-11 group-hover:right-5 p-2 flex flex-row items-center gap-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500'>

          <button onClick={() => addToCart(product, id)} title='Add to Cart' >
            <div className='text-red-500 hover:text-white border border-red-500 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-xl text-sm px-2.5 py-1.5 text-center mr-0.5 mb-1 '>
              <BsPlus className='text-3xl ' />
            </div>
          </button>

          <Link
            to={`/product/${id}`}
            title='View'
            className='text-red-500 hover:text-white border border-red-500 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-3 py-3 text-center mb-1'
          >
            < BsEyeFill className='h-5 w-5' />
          </Link>
        </div>

      </div>

      {/* price and discretion*/}

      <div>
        <Link to={`/product/${id}`}>
          <h2 className='hover:text-red-500 transition duration-500 font-semibold mb-1'>{title}</h2>
        </Link>
        <div className='font-light'>$ {price}</div>
      </div>
    </div>
  )
};

export default Product;
