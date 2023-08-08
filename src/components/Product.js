import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsEyeFill, BsPlus } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import { ToastContainer } from 'react-toastify';



const Product = ({ product }) => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2500);
  }, [])


  // console.log(product);

  const { addToCart } = useContext(CartContext)
  const { id, title, image, price } = product;


  if (loading) {
    return (
      <>
        <div >
          <div role="status" className="flex items-center justify-center h-80 max-w-sm bg-gray-300 rounded-2xl animate-pulse ">
            <svg className="w-10 h-10 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
          <br />
          <div className="h-2 bg-gray-300 rounded-full mb-2.5"></div>
          <div className="h-2 bg-gray-300 rounded-full  mb-2.5"></div>
          <div className="h-2.5 bg-gray-300 rounded-full  w-40 mb-0"></div>
        </div>
      </>

    )
  }

  return (
    <>

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
              <ToastContainer />
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
    </>
  )
};

export default Product;
