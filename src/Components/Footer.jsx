import React from 'react';
import { Footer } from 'flowbite-react'; // Only import Footer from flowbite-react
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                The Write Spot
              </span>
              
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <h3 className="font-semibold">About</h3>
              <div className='flex flex-col space-y-1 mt-1'>
                <p className='text-gray-500 hover:underline cursor-pointer'>100 JS Projects</p>
                <p className='text-gray-500 hover:underline cursor-pointer'>The Write Spot</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Follow us</h3>
              <div className='flex flex-col space-y-1 mt-1'>
                <p className='text-gray-500 hover:underline cursor-pointer'>Github</p>
                <p className='text-gray-500 hover:underline cursor-pointer'>Discord</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Legal</h3>
              <div className='flex flex-col space-y-1 mt-1'>
                <p className='text-gray-500 hover:underline cursor-pointer'>Privacy Policy</p>
                <p className='text-gray-500 hover:underline cursor-pointer'>Terms &amp; Conditions</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <div className="text-gray-500">
            <p>© {new Date().getFullYear()} The Write Spot</p>
          </div>
          <div className="flex gap-6 mt-3 sm:justify-center">
            <a href='#' className="text-gray-500 hover:text-teal-500">
              <BsFacebook />
            </a>
            <a href='#' className="text-gray-500 hover:text-teal-500">
              <BsInstagram />
            </a>
            <a href='#' className="text-gray-500 hover:text-teal-500">
              <BsTwitter />
            </a>
            <a href='#' className="text-gray-500 hover:text-teal-500">
              <BsGithub />
            </a>
            <a href='#' className="text-gray-500 hover:text-teal-500">
              <BsDribbble />
            </a>
          </div>
        </div>
      </div>
    </Footer>
  );
}
