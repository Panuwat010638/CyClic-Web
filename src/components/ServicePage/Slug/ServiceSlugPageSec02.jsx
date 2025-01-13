'use client'
import Link from "next/link"
import { Image } from "@nextui-org/react";
import client from "../../../../client";
import imageUrlBuilder from '@sanity/image-url'
import { IBM_Plex_Sans_Thai } from "next/font/google";
const builder = imageUrlBuilder(client)
    function urlFor(source) {
      return builder.image(source)
    } 
const ibm = IBM_Plex_Sans_Thai({ 
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export default function ServiceSlugPageSec02({data}) {
  return (
    <section className=' bg-[#fcfcfc]'>
    <div className='max-w-7xl mx-auto px-6 xl:px-0 pb-[40px] lg:pb-[56px]'>
      <div className='flex flex-col justify-center items-center w-full h-full gap-y-[32px] lg:gap-y-[48px]'>
   

        {/* Banner */}
        <div 
        className="flex relative justify-center items-center w-full min-w-full h-[150px] sm:h-[240px] lg:h-[310px] rounded-[16px]">
          <Image quality={100} loading="lazy"
          className=" object-cover object-center w-full h-full rounded-[16px]" 
          classNames={{wrapper:"object-cover w-full h-full rounded-[16px]"}}
          radius="none"
          src={urlFor(data?.mainImage?.image).format('png').url()}
          placeholder="blur"
          alt={data?.mainImage?.alt}
          width="100%" height="100%" />
        </div>
        {/* Header */}
        <div className='flex flex-col justify-center items-center w-full h-full gap-6 lg:gap-[32px]'>
          {/* Text */}
          <b className="text-[40px] lg:text-[60px] text-[#161616] font-extrabold leading-[125%] uppercase text-center lg:text-start whitespace-pre-line">
            services & capabilities
          </b>
  
          <h1 className="text-[24px] lg:text-[36px] text-[#FB602F] font-bold italic leading-[150%] uppercase">
              {data?.title}
          </h1>
          <h4 className={`${ibm.className} text-[18px] lg:text-[20px] text-[#161616] font-normal leading-[150%] whitespace-pre-line text-center`}>
            {data?.detail}
          </h4>
        </div>
        <svg width="301" height="2" viewBox="0 0 301 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.25 1H300.75" stroke="#939393"/>
        </svg>


      </div>
    </div>
  </section>
  )
}
