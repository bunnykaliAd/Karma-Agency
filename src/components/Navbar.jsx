
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='w-full h-[70px] bg-[#1f1f1f] sticky'>
      <div className=' max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
        <div>
          <a href="/">
            <img src={process.env.PUBLIC_URL + '/images/karma logo.png'} alt="Logo" className='h-10' />
          </a>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex text-white items-center '>
            <li>
            <Link to="about" spy={true} smooth={true} offset={50} duration={500} className='hover:text-[#E6BC43] active:text-[#E6BC43] cursor-pointer '>About Us</Link>
            </li>
            <li>
            <Link to="works" spy={true} smooth={true} offset={0} duration={500} className='hover:text-[#E6BC43] active:text-[#E6BC43] cursor-pointer'>Works</Link>
            </li>
            <li>
            <Link to="pricing" spy={true} smooth={true} offset={175} duration={500} className='hover:text-[#E6BC43] active:text-[#E6BC43] cursor-pointer'>Pricing</Link>
            </li>
            <li>
            <Link to="chat" spy={true} smooth={true} offset={175} duration={500} className='hover:text-[#E6BC43] active:text-[#E6BC43] cursor-pointer'>Chat With Us</Link>
            </li>
            <a href="https://rudrabunny.wufoo.com/forms/q14kttj016l9d88/" target="_blank" rel="noreferrer" class=" rounded-full text-black bg-[#E6BC43] px-4 py-2 ml-6 text-center  font-semibold " role="button">
                      Want A Custom Plan ?
                    </a>
          </ul>
        </div>

        {/* Hamburger menu */}

        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />}



        </div>

        {/* Mobile menu */}
        <div className={nav ? ' w-full bg-[#1f1f1f]  border-white border-b-4 rounded-b-3xl text-white absolute top-[90px] left-0 flex justify-center text-center' : 'absolute left-[-100%]'}>



        <ul>
            <li>
            <Link to="about" spy={true} smooth={true} offset={50} duration={500} className='hover:text-[#E6BC43] active:text-[#E6BC43] cursor-pointer '>About Us</Link>
            </li>
            <li>
            <Link to="works" spy={true} smooth={true} offset={50} duration={500} className='hover:text-[#E6BC43] active:text-[#E6BC43] cursor-pointer'>Works</Link>
            </li>
            <li>
            <Link to="pricing" spy={true} smooth={true} offset={50} duration={500} className='hover:text-[#E6BC43] active:text-[#E6BC43] cursor-pointer'>Pricing</Link>
            </li>
            <li>
            <Link to="chat" spy={true} smooth={true} offset={50} duration={500} className='hover:text-[#E6BC43] active:text-[#E6BC43] cursor-pointer'>Chat With Us</Link>
            </li>
            <a href="https://rudrabunny.wufoo.com/forms/q14kttj016l9d88/" target='_blank' rel="noreferrer" class="inline-flex items-center justify-center px-4 py-3 mb-6 text-base font-semibold text-black transition-all duration-200 bg-[#E6BC43] border border-transparent rounded-full " role="button">
            Want A Custom Plan ?
                    </a>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Navbar