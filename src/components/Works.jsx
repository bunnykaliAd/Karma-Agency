import React from 'react'

const Works = () => {
    return (
      
            <div className=" bg-[#1f1f1f] px-20 " id='works'>
                <div class="text-center">
                    <h2 class="text-5xl font-bold leading-tight pt-8 pb-8 sm:text-4xl lg:text-6xl -mt-12 mb-20 "> <span className='text-[#E6BC43] border-b-2'>Works !!</span></h2>
                </div>

                <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 -mt-12">


                    <div className="card  bg-base-100 shadow-xl bg-zinc-800">
                        <figure className="px-10 pt-10">
                            <img src="./images/2023-05-13 (4).png" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="text-gray-200 mt-4 font-bold text-xl">Custom Portfolio Website..</h2>
                            <div className="card-actions">
                                <a href="https://developeme.netlify.app/" target='_blank' rel="noreferrer">
                                <button className="bg-[#E6BC43] rounded-full my-5 ">Visit</button>
                                </a>
                            </div>
                        </div>
                    </div>
                 <div className="card  bg-base-100 shadow-xl bg-zinc-800">
                        <figure className="px-10 pt-10">
                            <img src="./images/2023-05-13 (5).png" alt="template" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="text-gray-200 mt-4 font-bold text-xl ">Custom Agency Website..</h2>
                            <div className="card-actions">
                                <a href="https://developeme.netlify.app/" target='_blank' rel='noreferrer' >
                                <button className="bg-[#E6BC43] rounded-full my-5 ">Visit</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>

        
    )
}

export default Works
