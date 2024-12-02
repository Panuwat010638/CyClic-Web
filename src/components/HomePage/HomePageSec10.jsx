'use client'
import React, { useEffect, useRef,useState } from 'react';
import Link from "next/link";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import client from "../../../client";
import { Image } from "@nextui-org/react";
import imageUrlBuilder from '@sanity/image-url'

const ibm =  IBM_Plex_Sans_Thai(
  { 
    weight: ['100','200','300','400','500','600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
  });
  const builder = imageUrlBuilder(client)
  function urlFor(source) {
    return builder.image(source)
  }
  
export default function HomePageSec10({data}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeIndex2, setActiveIndex2] = useState(0);
  const updateActiveIndex = (newIndex) => {
      if (newIndex < 0) {
          newIndex = React.Children.count(children) - 1;
      } else if (newIndex > data?.list?.length-3) {
          newIndex = 0;
      }
      setActiveIndex(newIndex);
  }
  const updateActiveIndex2 = (newIndex) => {
    if (newIndex < 0) {
        newIndex = React.Children.count(children) - 1;
    } else if (newIndex > data?.list?.length-1) {
        newIndex = 0;
    }
    setActiveIndex2(newIndex);
}
  useEffect(() => {
    const interval = setInterval(() => {
      // เรียกใช้ฟังก์ชันเพื่อเปลี่ยนตำแหน่งทุก 5 วินาที
      updateActiveIndex2(activeIndex2 + 1);
    }, 5000);

    return () => {
      // เมื่อ component ถูก unmount ให้ล้าง interval                                          
      clearInterval(interval);
    };
  });
  return (
    <section className="bg-[#fcfcfc]">
        <div className='max-w-7xl mx-auto px-6 xl:px-0 pt-[40px] pb-[56px] lg:pb-[80px] lg:pt-[80px]'>
            <div className='flex flex-col justify-center items-center w-full h-full'>

                {/* Content */}
                <div className='flex flex-col justify-center lg:justify-between w-full sm:w-[592px] lg:w-full h-full gap-[24px] lg:gap-[72px]'>
                    {/* top */}
                    <div className='flex flex-col w-full  gap-y-[20px]'>
                        {/* Header */}
                        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start w-full">
                          <div className='flex items-center gap-x-[16px] sm:gap-x-[24px] pb-[16px] lg:pb-0'>
                            <div className="flex justify-center items-center rounded-[4px] bg-[#FB602F] py-[4px] w-[300px]">
                              <h3 className="text-[20px] lg:text-[24px] text-[#fcfcfc] font-medium leading-[125%] uppercase text-center">
                                {data?.content?.subheader}
                              </h3>
                            </div>

                          </div>
                          <div className='flex w-full justify-center lg:justify-between gap-x-[16px]'>
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
                            <div className="hidden lg:flex justify-center lg:justify-start items-center gap-x-[24px]">
                              {activeIndex==0 ? (
                                <svg className="min-w-[48px] min-h-[48px] " width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28 34L18 24L28 14" stroke="#BEBEBE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <circle cx="24" cy="24" r="23.5" stroke="#BEBEBE"/>
                              </svg>
                              )
                              :(
                              <svg className="min-w-[48px] min-h-[48px] cursor-pointer" onClick={()=>updateActiveIndex(activeIndex-1)} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28 34L18 24L28 14" stroke="#FF5941" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <circle cx="24" cy="24" r="23.5" stroke="#FF5941"/>
                              </svg>
                            )}

                              <svg className="min-w-[48px] min-h-[48px] cursor-pointer" onClick={()=>updateActiveIndex(activeIndex+1)} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 13L30 23L20 33" stroke="#FF5941" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <circle cx="24" cy="24" r="23.5" stroke="#FF5941"/>
                              </svg>
                        
                        
                            </div>
                            
                          </div>
                          
           
                        </div>
                     
                    </div>
                    {/* bot D*/}
                    <div className="hidden lg:flex w-full overflow-hidden relative gap-x-[24px]">
                        {data?.list.map((item,index)=>(
                        <div key={index} style={{ transform: `translateX(-${activeIndex * 120}%)` }}
                            className="flex flex-col justify-between min-w-[400px] lg:min-w-[500px] px-[24px] py-[32px] gap-y-[24px] transition-all  ease-in-out duration-500">
                            <p className={`${ibm.className} text-[16px] text-[#000000] font-[400] leading-[150%]`}>
                                {item?.text}
                            </p>
                            <div className="flex items-center gap-x-[18px]">
                                <div className="flex justify-center items-center w-[76px] h-[76px] rounded-full">
                                    <Image quality={100} className=" object-cover object-center w-full h-full rounded-full" 
                                    classNames={{wrapper:"object-cover w-full h-full rounded-[16px]"}}
                                    radius="none"
                                    src={urlFor(item?.images?.image).format('webp').url()}
                                    placeholder="blur"
                                    alt={item?.images?.alt}
                                    blurDataURL={urlFor(item?.images?.image).width(10).quality(20).blur(10).url()}
                                    width="100%" height="100%" />
                                </div>
                                <div className="flex flex-col gap-y-[2px] w-[calc(100%-94px)] justify-center">
                                    <label className={`${ibm.className} text-[16px] text-[#161616] font-semibold leading-[150%]`}>{item?.name}</label>
                                    <label className="text-[16px] text-[#939393] font-normal leading-[150%]">{item?.role}</label>
                                </div>
                            </div>
                    </div>
                        ))}  
                        {/* Section 02 fade */}
                        <div className='flex w-full h-[400px] bg-gradient-to-r from-transparent via-transparent to-[#fcfcfc] z-[30] absolute top-0 right-0'>

                        </div>
                    </div>
                    {/* Bot M */}
                    <div className="flex lg:hidden w-full overflow-hidden relative">
                        {data?.list.map((item,index)=>(
                        <div key={index} style={{ transform: `translateX(-${activeIndex2 * 100}%)` }}
                            className="flex flex-col justify-between min-w-full px-[24px] py-[32px] gap-y-[24px] transition-all  ease-in-out duration-500">
                            <p className={`${ibm.className} text-[16px] text-[#000000] font-[400] leading-[150%]`}>
                                {item?.text}
                            </p>
                            <div className="flex justify-center items-center gap-x-[18px]">
                                <div className="flex justify-center items-center w-[76px] h-[76px] rounded-full">
                                    <Image quality={100} className=" object-cover object-center w-full h-full rounded-full" 
                                    classNames={{wrapper:"object-cover w-full h-full rounded-[16px]"}}
                                    radius="none"
                                    src={urlFor(item?.images?.image).format('webp').url()}
                                    placeholder="blur"
                                    alt={item?.images?.alt}
                                    blurDataURL={urlFor(item?.images?.image).width(10).quality(20).blur(10).url()}
                                    width="100%" height="100%" />
                                </div>
                                <div className="flex flex-col gap-y-[2px] justify-center">
                                    <label className="text-[16px] text-[#161616] font-semibold leading-[150%]">{item?.name}</label>
                                    <label className="text-[16px] text-[#939393] font-normal leading-[150%]">{item?.role}</label>
                                </div>
                            </div>
                    </div>
                        ))}  
    
                    </div>
                    {/* Dot */}
                    <div className="flex lg:hidden justify-center lg:justify-start items-center w-full gap-x-[12px]">
                        {data?.list?.slice(0,data?.list?.length)?.map((item,index)=>(
                          <div key={index} onClick={()=>updateActiveIndex2(index)}
                          className={`flex justify-center items-center w-[12px] h-[12px] rounded-full 
                            transition-all duration-500 ${activeIndex2 == index ? "bg-[#FB602F]":"bg-[#BEBEBE]"}`}/>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}
