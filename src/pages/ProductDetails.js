import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext'
import { ProductContext } from '../contexts/ProductContext'


const ProductDetails = () => {

  const { id } = useParams()

  const { products } = useContext(ProductContext)
  const { addToCart } = useContext(CartContext)

  const product = products.find(item => item.id === parseInt(id));

  if (!product) {
    return (
      <section className='h-screen flex justify-center items-center'>
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
      </section>
    )
  }

  const { title, description, image, price } = product

  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center'>

          {/* image */}
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0  '>
            <img
              className='max-w-[170px] lg:max-w-xs'
              src={image} alt="img" />
          </div>
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{title}</h1>
            <div className='text text-red-500 font-medium mb-6'>$ {price}</div>
            <p className='mb-8 '>{description}</p>
            <div className='mb-14 '>
              <button
                onClick={() => addToCart(product, product.id)}
                className='text-red-600 hover:text-white border border-red-500 hover:bg-red-500 focus:ring-4  focus:ring-red-300 font-medium rounded-full text-base px-5 py-2.5 justify-center text-center mr-2 mb-2 animate-bounce'>Add To Cart</button>
            </div>

          </div>
        </div>
      </div>
    </section>

  );
};

export default ProductDetails;
