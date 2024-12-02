'use client'
import React, { useEffect, useRef } from 'react';
import Link from "next/link";
import { IBM_Plex_Sans_Thai } from "next/font/google";

const ibm =  IBM_Plex_Sans_Thai(
  { 
    weight: ['100','200','300','400','500','600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
  });

export default function HomePageSec03({data}) {
  return (
    <section className="bg-[#fcfcfc]">
        <div className='max-w-7xl mx-auto px-6 xl:px-0 pt-[40px] pb-[56px] lg:pb-[88px] lg:pt-[86px]'>
            <div className='flex flex-col justify-center items-center w-full h-full '>
                {/* Content */}
                <div className='flex flex-col lg:flex-row justify-center lg:justify-between w-full sm:w-[592px] lg:w-full h-full gap-[24px]'>
                    {/* Left */}
                    <div className='flex flex-col w-full lg:w-[calc(50%-12px])] gap-y-[20px]'>
                        {/* Header */}
                        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start w-full">
                          <div className='flex items-center gap-x-[16px] sm:gap-x-[24px] pb-[16px] lg:pb-0'>
                            <h3 className="text-[20px] lg:text-[32px] text-[#FB602F] font-semibold leading-[130%] uppercase">
                              {data?.content?.subheader}
                            </h3>
                            <svg className='min-w-[23px] min-h-[24px]' width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect y="0.5" width="23" height="23" rx="11.5" fill="#FB602F"/>
                            </svg>
                          </div>
                          <div className='flex gap-x-[16px]'>
                            {/* Left */}
                            <div className='flex flex-col'>
                              <h2 className="text-[36px] sm:text-[40px] lg:text-[60px] text-[#161616] font-extrabold leading-[125%] text-center lg:text-start uppercase whitespace-pre-line">
                                {data?.content?.header}
                              </h2>
                              <h2 className="text-[36px] sm:text-[40px] lg:text-[60px] text-[#161616] font-medium leading-[125%] italic text-center lg:text-start uppercase whitespace-pre-line">
                                {data?.content?.header2}
                              </h2>
                            </div>
                            {/* Right */}
                            <svg className='hidden lg:flex min-w-[109px] min-h-[109px] animate-spin-slow' width="109" height="109" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g opacity="0.3">
                                <path d="M94.7825 53.4844H14.2173" stroke="#FF2F12" stroke-width="1.35404"/>
                                <path d="M54.6096 94.3555L54.6096 13.5408" stroke="#FF2F12" stroke-width="1.35404"/>
                                <path d="M70.1211 16.6458L39.0864 91.2598" stroke="#FF2F12" stroke-width="1.35404"/>
                                <path d="M83.1748 82.5234L26.033 25.3816" stroke="#FF2F12" stroke-width="1.35404"/>
                                <path d="M83.1748 25.3816L26.033 82.5234" stroke="#FF2F12" stroke-width="1.35404"/>
                                <path d="M39.1878 16.6049L70.02 91.3027" stroke="#FF2F12" stroke-width="1.35404"/>
                                <path d="M16.8708 39.5037L92.3369 68.4043" stroke="#FF2F12" stroke-width="1.35404"/>
                                <path d="M17.3485 69.5938L91.8594 38.3125" stroke="#FF2F12" stroke-width="1.35404"/>
                              </g>
                            </svg>
                          </div>
                          
           
                        </div>
                        {/* Detail */}
                        <div className='flex w-full justify-center lg:justify-start'>
                          <p className={`${ibm.className} text-[18px] text-[#161616] leading-[150%] font-normal text-center lg:text-start`}>
                            {data?.content?.detail}
                          </p>
                        </div>
                    </div>
                    {/* Right */}
                    <div className="flex flex-col items-center lg:items-end lg:justify-start w-full lg:w-[calc(50%-12px])] lg:h-full">
                        {data?.word.map((item,index)=>(

                        <Link key={index} href={`${item?.href}`} 
                        className={`${item?.status== true ? "text-[#FB602F] font-medium italic":"text-[#161616] font-light"} text-[36px] sm:text-[40px] lg:text-[60px] uppercase leading-tight 
                            transition-colors duration-500 text-center lg:text-end`}>
                          {item?.title}
                        </Link>

                        ))}  
                    </div>
                </div>
            </div>            
        </div>
    </section>
  )
}
