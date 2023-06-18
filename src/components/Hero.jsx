import React from 'react'
import { Link } from 'react-scroll'

const Hero = () => {
    return (
        <section class="pt-10 bg-[#1f1f1f] sm:pt-16 lg:pt-24" id='home'>
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl" >
                <div class="max-w-2xl mx-auto text-center">
                    <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">Design, Build & <span className='text-[#E6BC43]'>Deliver</span> Your</h2>
                    <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">Next <span className='text-[#E6BC43]'>Big </span> Thing</h2>
                    <p class="mt-8 text-lg text-white">Combining Design Thinking, UI/UX Strategy & Senior Development  </p>
                    <p class=" text-lg text-white">Expertise To Help Startups Build Custom Website And Applications</p>
                    <Link to="pricing" spy={true} smooth={true} offset={50} duration={500}  className="inline-flex items-center justify-center px-6 py-4 mt-12 text-base font-semibold text-black transition-all duration-200 bg-[#E6BC43] border border-transparent rounded-md " role="button">
                        <svg class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Build Your Business
                    </Link>
                </div>
            </div>
           

            <div class="container mx-auto xl:px-60">
                <img class="w-full mt-10" src={process.env.PUBLIC_URL + '/images/home-hero-banner@2x (1).webp'} alt="" />
            </div>
            
        </section>

    )
}

export default Hero
