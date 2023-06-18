import React from 'react'

const Cards = () => {
  return (
    <section class="py-10 bg-[#1f1f1f] sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
        <div class="overflow-hidden bg-[#1F1F1F] rounded-md drop-shadow-lg h-80 ">
                <div class="px-8 py-6">
                    <div class="relative w-24 h-24 mx-auto">
                        <img class="relative object-cover w-24 h-24  mx-auto rounded-full" src={process.env.PUBLIC_URL + '/images/Group 8.svg'} alt="" />
                    </div>
                    <div className='mt-3'>
                        <h1 className='text-[#CAC8C8] text-3xl font-semibold'>Figma</h1>
                        <p class="text-md  text-[#CAC8C8] mt-4">"Figma is the ultimate design tool for creating beautiful, functional websites - with intuitive features that streamline the entire design process."</p>
                        </div>
                  
                </div>
            </div>

            <div class="overflow-hidden bg-[#1F1F1F] rounded-md drop-shadow-lg h-80 ">
                <div class="px-8 py-6">
                    <div class="relative w-24 h-24 mx-auto">
                        <img class="relative object-cover w-24 h-24  mx-auto rounded-full" src={process.env.PUBLIC_URL + '/images/logo wordpress.png'} alt="" />
                    </div>
                    <div className='mt-3'>
                        <h1 className='text-[#CAC8C8] text-3xl font-semibold'>Wordpress</h1>
                        <p class="text-md  text-[#CAC8C8] mt-4">"Get a stunning, high-performance website that's easy to manage with our expert WordPress web development services - tailored to your unique needs."</p>
                        </div>
                  
                </div>
            </div>

            <div class="overflow-hidden bg-[#1F1F1F] rounded-md drop-shadow-lg h-80 ">
                <div class="px-8 py-6">
                    <div class="relative w-24 h-24 mx-auto">
                        <img class="relative object-cover w-24 h-24  mx-auto rounded-full" src={process.env.PUBLIC_URL + '/images/webflow2.png'} alt="" />
                    </div>
                    <div className='mt-3'>
                        <h2 className='text-[#CAC8C8] text-3xl font-semibold'>Webflow</h2>
                        <p class="text-md  text-[#CAC8C8] mt-4">
"Elevate your web design with our Webflow services - bringing your vision to life with custom, responsive websites that engage and impress."</p>
                        </div>
                  
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Cards
