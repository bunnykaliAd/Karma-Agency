import React from 'react'
import { Link } from 'react-router-dom';

const Pricing = () => {
    const phoneNumber = '+919580702039'; // Replace with the desired WhatsApp phone number
    const message = 'Hello Sir Welcome'; // Replace with the desired pre-filled message

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        <section
            class="relative z-20 overflow-hidden bg-[#1f1f1f] pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]" id='pricing'
        >
            <div class="container mx-auto">
                <div class="-mx-4 flex flex-wrap">
                    <div class="w-full px-4">
                        <div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                            <h2
                                class="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px] text-gray-300"
                            >
                                Choose A <span className='text-[#E6BC43]'>Plan</span> That Suits For Your <span className='text-[#E6BC43]'>Business</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="-mx-4 flex flex-wrap justify-center ">
                    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div
                            class="border-primary shadow-pricing relative z-10 mb-10 overflow-hidden rounded-xl border border-opacity-20 bg-zinc-800 py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 text-gray-300"
                        >
                            <span class="text-primary mb-4 block text-lg font-semibold text-stone-200">
                                STARTUP
                            </span>
                            <h2 class="text-dark mb-5 text-[42px] font-bold flex">
                                ₹8,999
                                <img src="./images/rocket emoji.png" alt="" className='ml-20 mb-8' />
                            </h2>
                            <p
                                class="text-body-color mb-8 border-b border-[#F2F2F2] pb-8 text-base"
                            >
                                Best For Small Business owners
                            </p>
                            <div class="mb-7">
                                <p class="text-body-color mb-1 text-base leading-loose">Website with a basic template</p>
                                <p class="text-body-color mb-1 text-base leading-loose">
                                    Limited number of pages
                                </p>
                                <p class="text-body-color mb-1 text-base leading-loose">
                                    Basic content and copywriting
                                </p>
                                <p class="text-body-color mb-1 text-base leading-loose">
                                    Simple navigation & site structure
                                </p>
                                <p class="text-body-color mb-1 text-base leading-loose">
                                    Basic search engine optimization
                                </p>
                                <p class="text-body-color mb-1 text-base leading-loose">
                                    Basic analytics setup and reporting
                                </p>
                                <p class="text-body-color mb-1 text-base leading-loose">
                                    3 Three Months Support
                                </p>

                            </div>
                            <Link to={url} target="_blank" class="text-primary hover:bg-primary hover:border-primary block w-full rounded-md border border-[#E6BC43] bg-transparent p-4 text-center text-base font-semibold transition hover:bg-[#E6BC43] hover:duration-300 hover:text-black"
>   
Grow Your Business
                            </Link>
                            <div>
                                <span class="absolute right-0 top-7 z-[-1]">
                                    <svg
                                        width="77"
                                        height="172"
                                        viewBox="0 0 77 172"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear"
                                                x1="86"
                                                y1="0"
                                                x2="86"
                                                y2="172"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stop-color="#3056D3" stop-opacity="0.09" />
                                                <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                                <span class="absolute right-4 top-4 z-[-1]">
                                    <svg
                                        width="41"
                                        height="89"
                                        viewBox="0 0 41 89"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="38.9138"
                                            cy="87.4849"
                                            r="1.42021"
                                            transform="rotate(180 38.9138 87.4849)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.9138"
                                            cy="74.9871"
                                            r="1.42021"
                                            transform="rotate(180 38.9138 74.9871)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.9138"
                                            cy="62.4892"
                                            r="1.42021"
                                            transform="rotate(180 38.9138 62.4892)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.9138"
                                            cy="38.3457"
                                            r="1.42021"
                                            transform="rotate(180 38.9138 38.3457)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.9138"
                                            cy="13.634"
                                            r="1.42021"
                                            transform="rotate(180 38.9138 13.634)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.9138"
                                            cy="50.2754"
                                            r="1.42021"
                                            transform="rotate(180 38.9138 50.2754)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.9138"
                                            cy="26.1319"
                                            r="1.42021"
                                            transform="rotate(180 38.9138 26.1319)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.9138"
                                            cy="1.42021"
                                            r="1.42021"
                                            transform="rotate(180 38.9138 1.42021)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.4157"
                                            cy="87.4849"
                                            r="1.42021"
                                            transform="rotate(180 26.4157 87.4849)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.4157"
                                            cy="74.9871"
                                            r="1.42021"
                                            transform="rotate(180 26.4157 74.9871)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.4157"
                                            cy="62.4892"
                                            r="1.42021"
                                            transform="rotate(180 26.4157 62.4892)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.4157"
                                            cy="38.3457"
                                            r="1.42021"
                                            transform="rotate(180 26.4157 38.3457)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.4157"
                                            cy="13.634"
                                            r="1.42021"
                                            transform="rotate(180 26.4157 13.634)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.4157"
                                            cy="50.2754"
                                            r="1.42021"
                                            transform="rotate(180 26.4157 50.2754)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.4157"
                                            cy="26.1319"
                                            r="1.42021"
                                            transform="rotate(180 26.4157 26.1319)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.4157"
                                            cy="1.4202"
                                            r="1.42021"
                                            transform="rotate(180 26.4157 1.4202)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.9177"
                                            cy="87.4849"
                                            r="1.42021"
                                            transform="rotate(180 13.9177 87.4849)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.9177"
                                            cy="74.9871"
                                            r="1.42021"
                                            transform="rotate(180 13.9177 74.9871)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.9177"
                                            cy="62.4892"
                                            r="1.42021"
                                            transform="rotate(180 13.9177 62.4892)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.9177"
                                            cy="38.3457"
                                            r="1.42021"
                                            transform="rotate(180 13.9177 38.3457)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.9177"
                                            cy="13.634"
                                            r="1.42021"
                                            transform="rotate(180 13.9177 13.634)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.9177"
                                            cy="50.2754"
                                            r="1.42021"
                                            transform="rotate(180 13.9177 50.2754)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.9177"
                                            cy="26.1319"
                                            r="1.42021"
                                            transform="rotate(180 13.9177 26.1319)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.9177"
                                            cy="1.42019"
                                            r="1.42021"
                                            transform="rotate(180 13.9177 1.42019)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.41963"
                                            cy="87.4849"
                                            r="1.42021"
                                            transform="rotate(180 1.41963 87.4849)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.41963"
                                            cy="74.9871"
                                            r="1.42021"
                                            transform="rotate(180 1.41963 74.9871)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.41963"
                                            cy="62.4892"
                                            r="1.42021"
                                            transform="rotate(180 1.41963 62.4892)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.41963"
                                            cy="38.3457"
                                            r="1.42021"
                                            transform="rotate(180 1.41963 38.3457)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.41963"
                                            cy="13.634"
                                            r="1.42021"
                                            transform="rotate(180 1.41963 13.634)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.41963"
                                            cy="50.2754"
                                            r="1.42021"
                                            transform="rotate(180 1.41963 50.2754)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.41963"
                                            cy="26.1319"
                                            r="1.42021"
                                            transform="rotate(180 1.41963 26.1319)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.41963"
                                            cy="1.4202"
                                            r="1.42021"
                                            transform="rotate(180 1.41963 1.4202)"
                                            fill="#3056D3"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div className='bg-slate-300 rounded-tr-xl rounded-tl-xl text-center font-semibold'>Most Popular</div>
                        <div
                            class="border-primary shadow-pricing relative z-10 mb-10 overflow-hidden  rounded-b-xl border border-opacity-20 bg-zinc-800 py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 text-gray-300"
                        >
                            <span class="text-primary mb-4 block text-lg font-semibold text-stone-200">
                                AGENCY
                            </span>
                            <h2 class="text-dark mb-5 text-[42px] font-bold flex">
                                ₹12,499
                                <img src="./images/fire.png" alt="" className='ml-20 mb-8' />

                            </h2>
                            <p
                                class="text-body-color mb-8 border-b border-[#F2F2F2] pb-8 text-base"
                            >
                                Best For Medium Range Agencies                      </p>
                            <div class="mb-7">
                                <p class="text-body-color mb-1 text-base leading-loose">Custom  design and development</p>
                                <p class="text-body-color mb-1 text-base leading-loose">
                                    More pages and features
                                </p>
                                <p class="text-body-color mb-1 text-base leading-loose">
                                    Advanced content and copywriting
                                </p>
                                <p class="text-body-color mb-1 text-base leading-loose">
                                    Improved navigation and structure

                                </p>
                                <p class="text-body-color mb-1 text-base leading-loose">
                                    Advanced Search Engine Optimization

                                </p>
                                <p class="text-body-color mb-1 text-base leading-loose">
                                    3 Three Months Support
                                </p>
                                <p class="text-body-color mb-1 text-base leading-loose">
                                    Mobile-responsive design
                                </p>
                                <p class="text-body-color mb-1 text-base leading-loose">
                                    Advanced user experience (UX) design</p>
                            </div>
                            <Link to={url} target="_blank" class="text-primary hover:bg-primary hover:border-primary block w-full rounded-md border border-[#E6BC43] bg-transparent p-4 text-center text-base font-semibold transition hover:bg-[#E6BC43] hover:duration-300 hover:text-black"
>   
Grow Your Business
                            </Link>
                            <div>
                                <span class="absolute right-0 top-7 z-[-1]">
                                    <svg
                                        width="77"
                                        height="172"
                                        viewBox="0 0 77 172"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear"
                                                x1="86"
                                                y1="0"
                                                x2="86"
                                                y2="172"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stop-color="#3056D3" stop-opacity="0.09" />
                                                <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                                <span class="absolute right-4 top-4 z-[-1]">
                                    <svg
                                        width="41"
                                        height="89"
                                        viewBox="0 0 41 89"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="38.9138"
                                            cy="87.4849"
                                            r="1.42021"
                                            transform="rotate(180 38.9138 87.4849)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.9138"
                                            cy="74.9871"
                                            r="1.42021"
                                            transform="rotate(180 38.9138 74.9871)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.9138"
                                            cy="62.4892"
                                            r="1.42021"
                                            transform="rotate(180 38.9138 62.4892)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.9138"
                                            cy="38.3457"
                                            r="1.42021"
                                            transform="rotate(180 38.9138 38.3457)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.9138"
                                            cy="13.634"
                                            r="1.42021"
                                            transform="rotate(180 38.9138 13.634)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.9138"
                                            cy="50.2754"
                                            r="1.42021"
                                            transform="rotate(180 38.9138 50.2754)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.9138"
                                            cy="26.1319"
                                            r="1.42021"
                                            transform="rotate(180 38.9138 26.1319)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.9138"
                                            cy="1.42021"
                                            r="1.42021"
                                            transform="rotate(180 38.9138 1.42021)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.4157"
                                            cy="87.4849"
                                            r="1.42021"
                                            transform="rotate(180 26.4157 87.4849)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.4157"
                                            cy="74.9871"
                                            r="1.42021"
                                            transform="rotate(180 26.4157 74.9871)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.4157"
                                            cy="62.4892"
                                            r="1.42021"
                                            transform="rotate(180 26.4157 62.4892)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.4157"
                                            cy="38.3457"
                                            r="1.42021"
                                            transform="rotate(180 26.4157 38.3457)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.4157"
                                            cy="13.634"
                                            r="1.42021"
                                            transform="rotate(180 26.4157 13.634)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.4157"
                                            cy="50.2754"
                                            r="1.42021"
                                            transform="rotate(180 26.4157 50.2754)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.4157"
                                            cy="26.1319"
                                            r="1.42021"
                                            transform="rotate(180 26.4157 26.1319)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.4157"
                                            cy="1.4202"
                                            r="1.42021"
                                            transform="rotate(180 26.4157 1.4202)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.9177"
                                            cy="87.4849"
                                            r="1.42021"
                                            transform="rotate(180 13.9177 87.4849)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.9177"
                                            cy="74.9871"
                                            r="1.42021"
                                            transform="rotate(180 13.9177 74.9871)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.9177"
                                            cy="62.4892"
                                            r="1.42021"
                                            transform="rotate(180 13.9177 62.4892)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.9177"
                                            cy="38.3457"
                                            r="1.42021"
                                            transform="rotate(180 13.9177 38.3457)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.9177"
                                            cy="13.634"
                                            r="1.42021"
                                            transform="rotate(180 13.9177 13.634)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.9177"
                                            cy="50.2754"
                                            r="1.42021"
                                            transform="rotate(180 13.9177 50.2754)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.9177"
                                            cy="26.1319"
                                            r="1.42021"
                                            transform="rotate(180 13.9177 26.1319)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.9177"
                                            cy="1.42019"
                                            r="1.42021"
                                            transform="rotate(180 13.9177 1.42019)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.41963"
                                            cy="87.4849"
                                            r="1.42021"
                                            transform="rotate(180 1.41963 87.4849)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.41963"
                                            cy="74.9871"
                                            r="1.42021"
                                            transform="rotate(180 1.41963 74.9871)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.41963"
                                            cy="62.4892"
                                            r="1.42021"
                                            transform="rotate(180 1.41963 62.4892)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.41963"
                                            cy="38.3457"
                                            r="1.42021"
                                            transform="rotate(180 1.41963 38.3457)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.41963"
                                            cy="13.634"
                                            r="1.42021"
                                            transform="rotate(180 1.41963 13.634)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.41963"
                                            cy="50.2754"
                                            r="1.42021"
                                            transform="rotate(180 1.41963 50.2754)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.41963"
                                            cy="26.1319"
                                            r="1.42021"
                                            transform="rotate(180 1.41963 26.1319)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.41963"
                                            cy="1.4202"
                                            r="1.42021"
                                            transform="rotate(180 1.41963 1.4202)"
                                            fill="#3056D3"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div
                            class="border-primary shadow-pricing relative z-10 mb-10 overflow-hidden rounded-xl border border-opacity-20 bg-zinc-800 py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 text-gray-300"
                        >
                            <span class="text-primary mb-4 block text-lg font-semibold text-stone-200">
                                PROFESSIONAL
                            </span>
                            <h2 class="text-dark mb-5 text-[42px] font-bold flex">
                                ₹18,999
                                <img src="./images/thunder.png" alt="" className='ml-20 mb-8' />
                            </h2>
                            <p
                                class="text-body-color mb-8 border-b border-[#F2F2F2] pb-8 text-base"
                            >
                                Best For High End Businesses
                            </p>
                            <div class="mb-7">
                                <p class="text-body-color mb-1 text-base leading-loose">Custom  design and development</p>
                                <p class="text-body-color mb-1 text-base leading-loose">
                                    Unlimited pages and content
                                </p>
                                <p class="text-body-color mb-1 text-base leading-loose">
                                    Advanced content and copywriting
                                </p>
                                <p class="text-body-color mb-1 text-base leading-loose">
                                    Advanced navigation and structure                                </p>
                                <p class="text-body-color mb-1 text-base leading-loose">
                                    Advanced SEO and content marketing                                </p>
                                <p class="text-body-color mb-1 text-base leading-loose">
                                    Advanced analytics setup and reporting
                                </p>
                                <p class="text-body-color mb-1 text-base leading-loose">
                                    9 Three Months Support
                                </p>
                                <p class="text-body-color mb-1 text-base leading-loose">
                                    E-commerce integration                                </p>
                                <p class="text-body-color mb-1 text-base leading-loose">
                                    Advanced user experience (UX) design</p>
                                <p class="text-body-color mb-1 text-base leading-loose">
                                    A/B testing and optimization.</p>
                            </div>
                            <Link to={url} target="_blank" class="text-primary hover:bg-primary hover:border-primary block w-full rounded-md border border-[#E6BC43] bg-transparent p-4 text-center text-base font-semibold transition hover:bg-[#E6BC43] hover:duration-300 hover:text-black"
>   
Grow Your Business
                            </Link>
                            <div>
                                <span class="absolute right-0 top-7 z-[-1]">
                                    <svg
                                        width="77"
                                        height="172"
                                        viewBox="0 0 77 172"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear"
                                                x1="86"
                                                y1="0"
                                                x2="86"
                                                y2="172"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stop-color="#3056D3" stop-opacity="0.09" />
                                                <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                                <span class="absolute right-4 top-4 z-[-1]">
                                    <svg
                                        width="41"
                                        height="89"
                                        viewBox="0 0 41 89"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="38.9138"
                                            cy="87.4849"
                                            r="1.42021"
                                            transform="rotate(180 38.9138 87.4849)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.9138"
                                            cy="74.9871"
                                            r="1.42021"
                                            transform="rotate(180 38.9138 74.9871)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.9138"
                                            cy="62.4892"
                                            r="1.42021"
                                            transform="rotate(180 38.9138 62.4892)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.9138"
                                            cy="38.3457"
                                            r="1.42021"
                                            transform="rotate(180 38.9138 38.3457)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.9138"
                                            cy="13.634"
                                            r="1.42021"
                                            transform="rotate(180 38.9138 13.634)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.9138"
                                            cy="50.2754"
                                            r="1.42021"
                                            transform="rotate(180 38.9138 50.2754)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.9138"
                                            cy="26.1319"
                                            r="1.42021"
                                            transform="rotate(180 38.9138 26.1319)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="38.9138"
                                            cy="1.42021"
                                            r="1.42021"
                                            transform="rotate(180 38.9138 1.42021)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.4157"
                                            cy="87.4849"
                                            r="1.42021"
                                            transform="rotate(180 26.4157 87.4849)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.4157"
                                            cy="74.9871"
                                            r="1.42021"
                                            transform="rotate(180 26.4157 74.9871)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.4157"
                                            cy="62.4892"
                                            r="1.42021"
                                            transform="rotate(180 26.4157 62.4892)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.4157"
                                            cy="38.3457"
                                            r="1.42021"
                                            transform="rotate(180 26.4157 38.3457)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.4157"
                                            cy="13.634"
                                            r="1.42021"
                                            transform="rotate(180 26.4157 13.634)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.4157"
                                            cy="50.2754"
                                            r="1.42021"
                                            transform="rotate(180 26.4157 50.2754)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.4157"
                                            cy="26.1319"
                                            r="1.42021"
                                            transform="rotate(180 26.4157 26.1319)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="26.4157"
                                            cy="1.4202"
                                            r="1.42021"
                                            transform="rotate(180 26.4157 1.4202)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.9177"
                                            cy="87.4849"
                                            r="1.42021"
                                            transform="rotate(180 13.9177 87.4849)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.9177"
                                            cy="74.9871"
                                            r="1.42021"
                                            transform="rotate(180 13.9177 74.9871)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.9177"
                                            cy="62.4892"
                                            r="1.42021"
                                            transform="rotate(180 13.9177 62.4892)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.9177"
                                            cy="38.3457"
                                            r="1.42021"
                                            transform="rotate(180 13.9177 38.3457)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.9177"
                                            cy="13.634"
                                            r="1.42021"
                                            transform="rotate(180 13.9177 13.634)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.9177"
                                            cy="50.2754"
                                            r="1.42021"
                                            transform="rotate(180 13.9177 50.2754)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.9177"
                                            cy="26.1319"
                                            r="1.42021"
                                            transform="rotate(180 13.9177 26.1319)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="13.9177"
                                            cy="1.42019"
                                            r="1.42021"
                                            transform="rotate(180 13.9177 1.42019)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.41963"
                                            cy="87.4849"
                                            r="1.42021"
                                            transform="rotate(180 1.41963 87.4849)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.41963"
                                            cy="74.9871"
                                            r="1.42021"
                                            transform="rotate(180 1.41963 74.9871)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.41963"
                                            cy="62.4892"
                                            r="1.42021"
                                            transform="rotate(180 1.41963 62.4892)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.41963"
                                            cy="38.3457"
                                            r="1.42021"
                                            transform="rotate(180 1.41963 38.3457)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.41963"
                                            cy="13.634"
                                            r="1.42021"
                                            transform="rotate(180 1.41963 13.634)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.41963"
                                            cy="50.2754"
                                            r="1.42021"
                                            transform="rotate(180 1.41963 50.2754)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.41963"
                                            cy="26.1319"
                                            r="1.42021"
                                            transform="rotate(180 1.41963 26.1319)"
                                            fill="#3056D3"
                                        />
                                        <circle
                                            cx="1.41963"
                                            cy="1.4202"
                                            r="1.42021"
                                            transform="rotate(180 1.41963 1.4202)"
                                            fill="#3056D3"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing
