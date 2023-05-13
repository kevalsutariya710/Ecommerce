import React from 'react';
import { FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';
import { SlSocialTwitter } from 'react-icons/sl'


const Footer = () => {



  return (
    <footer className='bg-black py-7'>

      <div className=' flex space-x-4 justify-center mb-4 text-white text-xl ' >
        <a
          className='hover:text-red-400 text-center'
          href="https://www.instagram.com/_keval_710/?igshid=ZDdkNTZiNTM%3D" target="_blank" rel="noreferrer"

        >

          <FiInstagram />
        </a>
        <a
          className='hover:text-blue-500'
          href="https://www.linkedin.com/in/keval-patel-1284b7228/" target="_blank" rel="noreferrer">

          <FiLinkedin />
        </a>
        <a className='hover:text-gray-400' href="https://github.com/kevalsutariya710" target="_blank" rel="noreferrer">
          <FiGithub />
        </a>
        <a className='hover:text-blue-600' href="https://twitter.com/KevalSutariya71" target="_blank" rel="noreferrer">
          <SlSocialTwitter />
        </a>

      </div>
      <div className='container mx-auto'>
        <p className='text-white text-center'>
          Copyright &copy; Ecommerce Shop 2023. All Rights Reserved <br />
          Design & Developed By   <a className='underline cursor-pointer animate-pulse  hover:text-blue-500 duration-500' href="https://fabulous-tanuki-09bb4a.netlify.app/" target="_blank" rel="noreferrer"> Keval Sutariya </a>

        </p>
      </div>

    </footer >
  )
};

export default Footer;
