import React from 'react'

const Chat = () => {
  return (
    <div id='chat'>
      <section class="pb-10 bg-[#1f1f1f] sm:py-16 ">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-5xl font-bold leading-tight text-gray-300 sm:text-5xl mb-14 -mt-14"><span className='text-[#E6BC43]'>Chat</span> With Us</h2>
        </div>

        
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-4 -mb-20">
        <div class="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
            <div class="relative lg:mb-12">
                <div class="pl-12 pr-6 bg-transparent">
                    <img class="relative" src="./images/qr.svg" alt="" />
                </div>
            </div>

            <div class="2xl:pl-16">
                <h2 class="text-3xl font-bold leading-tight text-gray-300 sm:text-4xl lg:text-5xl lg:leading-tight mb-4"><span className='text-[#E6BC43]'>Scan</span> Qr And Directly <span className='text-[#E6BC43]'>Chat</span> With Us</h2>
            </div>
        </div>
    </div>

    </div>
</section>

    </div>
  )
}

export default Chat
