import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsEyeFill, BsPlus } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import { ToastContainer } from 'react-toastify';



const Product = ({ product }) => {
  
  // console.log(product);

  const { addToCart } = useContext(CartContext)
  const { id, title, image, price } = product;


  if (!product) {
    return (
      <section className='h-screen flex justify-center items-center'>
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
      </section>
    )
  }

  return (
    <div>
      <div className="border  border-[#aaa8a8] h-[300px] mb-4 relative overflow-hidden group transition border-dotted rounded-2xl shadow-lg  ">

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
            <ToastContainer/>
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
        <div className='font-light text-red-600'>$ {price}</div>
      </div>
    </div>
  )
};

export default Product;
