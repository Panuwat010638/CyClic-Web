'use client'
import { Image } from "@nextui-org/react";
import client from "../../../../client";
import imageUrlBuilder from '@sanity/image-url'
import { IBM_Plex_Sans_Thai } from "next/font/google";

const IBM =  IBM_Plex_Sans_Thai(
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

export default function BlogSlugSec01({data}) {
  return (
    <section className={`bg-[#fcfcfc] ${IBM.className}`}>
      <div className='max-w-7xl mx-auto px-6 xl:px-0 pt-[40px] lg:pt-[56px] pb-[24px] sm:pb-[36px] lg:pb-[48px]'>
        <div className='flex flex-col justify-center items-end w-full h-full gap-y-[24px] sm:gap-y-[36px] lg:gap-y-[48px]'>
          {/* Header */}
          <div className='flex justify-between items-end w-full h-full lg:gap-x-6'>
            {/* Text */}
            <div className="flex">
                <b className="text-[20px] sm:text-[32px] lg:text-[48px] text-[#161616] font-extrabold leading-[125%] uppercase">
                    {data?.title}
                </b>
            </div>
          </div>

          <div 
            className="flex relative justify-center items-center w-full min-w-full h-[240px] lg:h-[456px] rounded-[16px]">
              <Image quality={100} loading="lazy"
              className=" object-cover object-center w-full h-full rounded-[16px]" 
              classNames={{wrapper:"object-cover w-full h-full rounded-[16px]"}}
              radius="none"
              src={urlFor(data?.mainImage?.image).format('png').url()}
              placeholder="blur"
              alt={data?.mainImage?.alt}
              width="100%" height="100%" />
            </div>

        </div>
      </div>
    </section>
  )
}
