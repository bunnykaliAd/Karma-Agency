import React from 'react'

const About = () => {
  return (
    <section class="py-10 bg-[#1f1f1f] sm:py-16 lg:py-24 -mt-12" id='about'>
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
            <div class="relative ">
                <div class="pl-12 pr-6">
                    <img class="" src={process.env.PUBLIC_URL + '/images/Team working on startup ideas - 1600x1067.png'} alt="" />
                </div>
            </div>

            <div class="2xl:pl-16 mt-12">
            <div class="text-center ">
            <h2 class="text-5xl font-bold leading-tight text-[#CAC8C8] sm:text-4xl lg:text-6xl -mt-16 mb-10 lg:-ml-20">Who <span className='text-[#E6BC43]'>We </span>Are ?</h2>
        </div>
                <p class="text-md leading-relaxed text-[#CAC8C8] mt-9">At Karma, we are passionate about creating innovative and effective solutions to help businesses succeed. With number of years of experience in industry, we have honed our skills in Perfect Web Solutions. Our team of professionals is dedicated to providing exceptional service and delivering results that exceed our clients' expectations. We believe in company mission, and we strive to build long-term relationships with our clients based on trust, collaboration, and mutual success. Discover how we can help your business achieve its goals by contacting us today.</p>
            </div>
        </div>
    </div>
</section>

  )
}

export default About
