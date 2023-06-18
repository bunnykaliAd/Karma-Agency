import React from 'react'

const Feature = () => {
  return (
    <>
    <section class="py-10 bg-[#1f1f1f] sm:py-16 lg:py-24">
         <div class="text-center">
            <h2 class="text-5xl font-bold leading-tight text-[#CAC8C8] sm:text-4xl lg:text-6xl -mt-12 mb-20">How We <span className='text-[#E6BC43]'>Work</span> ?</h2>
        </div>
    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
        <div class="relative ">
                <div class="pl-12 pr-6">
                    <img class="" src={process.env.PUBLIC_URL + '/images/Human resources manager conducting job interview - 2000x1333.png'} alt="" />
                </div>
            </div>

            <div>
                <h2 class="text-2xl font-bold leading-tight text-[#CAC8C8]  sm:text-4xl lg:text-4xl ">We Listen Our Clients And <span className='text-[#E6BC43]'>Identify </span> Their Need</h2>
            </div>
        </div>
    </div>

    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8 py-8">
        <div class="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
        <div class="relative ">
                <div class="pl-12 pr-6">
                    <img class="" src={process.env.PUBLIC_URL + '/images/Logo Design - 2250x2250.png'} alt="" />
                </div>
            </div>

            <div>
                <h2 class="text-2xl font-bold leading-tight text-[#CAC8C8]  sm:text-4xl lg:text-4xl">We create visually <span className='text-[#E6BC43]'>Stunning </span> websites According Our Clients</h2>
            </div>
        </div>
    </div>

    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8 py-8">
        <div class="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
        <div class="relative ">
                <div class="pl-12 pr-6">
                    <img class="" src={process.env.PUBLIC_URL + '/images/Full stack web developers - 1450x1450.png'} alt="" />
                </div>
            </div>

            <div>
                <h2 class="text-2xl font-bold leading-tight text-[#CAC8C8]  sm:text-4xl lg:text-4xl">We use the latest web <span className='text-[#E6BC43]'>Development </span> technologies and frameworks</h2>
            </div>
        </div>
    </div>

    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8 py-8">
        <div class="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
        <div class="relative ">
                <div class="pl-12 pr-6">
                    <img class="" src={process.env.PUBLIC_URL + '/images/3d-illustration-trend-1280x720-removebg-preview.png'} alt="" />
                </div>
            </div>

            <div>
                <h2 class="text-2xl font-bold leading-tight text-[#CAC8C8]  sm:text-4xl lg:text-4xl">We work with our clients to create <span className='text-[#E6BC43]'>High Quality </span> content for their website</h2>
            </div>
        </div>
    </div>

    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8 py-8">
        <div class="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
        <div class="relative ">
                <div class="pl-12 pr-6">
                    <img class="" src={process.env.PUBLIC_URL + '/images/System Automation - 2000x1500.png'} alt="" />
                </div>
            </div>

            <div>
                <h2 class="text-2xl font-bold leading-tight text-[#CAC8C8]  sm:text-4xl lg:text-4xl">we conduct extensive <span className='text-[#E6BC43]'>Testing</span> to ensure that it is free of bugs, errors, and other issues</h2>
            </div>
        </div>
    </div>

    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8 py-8">
        <div class="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
        <div class="relative ">
                <div class="pl-12 pr-6">
                    <img class="" src={process.env.PUBLIC_URL + '/images/website-launch-7865768-6308106.webp'} alt="" />
                </div>
            </div>

            <div>
                <h2 class="text-2xl font-bold leading-tight text-[#CAC8C8]  sm:text-4xl lg:text-4xl">After Every Process Done With <span className='text-[#E6BC43]'>Perfection</span> we launch it For The public </h2>
            </div>
        </div>
    </div>
</section>


</>
  )
}

export default Feature
