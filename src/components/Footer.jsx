import React from 'react'
import { Link } from "react-scroll";
import {SlArrowUpCircle} from "react-icons/sl";

const Footer = () => {
  return (
    
    <footer className="px-4 py-8 bg-[#1f1f1f] text-gray-300">
        <hr className='mb-4'/>
	<div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
		<div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
			<div className="flex items-center justify-center flex-shrink-0 w-8 mt-1 h-12 rounded-full dark:bg-violet-400">
				<img src="./images/triquetra.png" alt="" />
			</div>
			<ul className="flex flex-wrap items-center ">
				<li>
                <Link to="home" spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer' >Home</Link>
				</li>
				<li>
                <Link to="about" spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer'>About</Link>
				</li>
                <li>
                <Link to="works" spy={true} smooth={true} offset={-100} duration={500} className='cursor-pointer'>Works</Link>
				</li>
                <li>
                <Link to="pricing" spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer'>Pricing</Link>
				</li>
			</ul>
		</div>
		<ul className="flex flex-wrap pl-3">
			<li>
             <a href="https://www.freeprivacypolicy.com/live/f2d38a33-d528-4417-bdf4-30a08f8bf25a" className='cursor-pointer' target='_blank' rel="noreferrer">Terms And Conditions</a>
			</li>
			<li>
				<p>©2023 All rights reserved</p>
			</li>
      <li>
      <Link to="home" spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer'><SlArrowUpCircle className='text-3xl hover:opacity-50 duration-200 cursor-pointer'/>
                </Link>
                </li>
		</ul>
	</div>
</footer>
  )
}

export default Footer
