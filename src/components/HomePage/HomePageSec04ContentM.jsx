'use client'
import Link from "next/link"
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Image } from "@nextui-org/react";
import imageUrlBuilder from '@sanity/image-url'
import client from "../../../client";
import { IBM_Plex_Sans_Thai } from "next/font/google";

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}
const IBM =  IBM_Plex_Sans_Thai(
  { 
    weight: ['100','200','300','400','500','600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
  });

export default function HomePageSec04ContentM({data}) {
  return (
    <section className="bg-[#fcfcfc] overflow-hidden block lg:hidden">
      <div className="max-w-7xl mx-auto px-6 xl:px-0 py-[44px] lg:py-[72px]">
            <div className='flex flex-col justify-center items-center w-full h-full gap-y-[44px] lg:gap-y-[72px]'>
                <div className='flex flex-col w-full sm:w-[592px] lg:w-full gap-y-[32px] lg:gap-y-[40px]'>
                {data?.list?.map((item,index)=>(
                
                <ServiceItem key={index} item={item} index={index} on={index== data?.list?.length-1 ? false:true}/>
                ))}
                </div>
            </div>
        </div>
    </section>
  )
}

function ServiceItem({ item,index,on }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const lineVariants = {
      hidden: { pathLength: 0 },
      visible: { 
        pathLength: 1,
        transition: { duration: 1, ease: "easeInOut" }
      }
    };
  
    const contentVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
      }
    };
  
    const containerVariants = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.2
        }
      }
    };
    return (
      <motion.article 
     
      ref={ref}
      className='flex flex-col w-full gap-y-[40px]'
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
        <motion.div variants={contentVariants} className='flex flex-col lg:flex-row justify-center lg:justify-between w-full gap-[24px]'>
            {/* Image */}
            <div 
              className="flex flex-col justify-center items-center flex-shrink-0 w-full h-[230px] sm:h-[320px] lg:h-[420px] relative"
            >
              <div className=" w-full h-full overflow-hidden rounded-lg">
                <Image quality={100} className="object-cover  object-center w-full h-full rounded-[16px]" 
                  classNames={{wrapper:"object-cover w-full h-full rounded-[16px]"}}
                  radius="none"
                  src={urlFor(item?.images?.image).format('webp').url()}
                  placeholder="blur"
                  alt={item?.images?.alt}
                  width="100%" height="100%" />
              </div>
              <div className='flex justify-center items-end w-full h-full absolute top-0 z-[10] rounded-[16px] p-[16px] lg:p-[32px]'>
                <h3 className="text-[20px] font-semibold text-[#fcfcfc] leading-[125%] whitespace-pre-line text-center uppercase">
                  {item.title}
                </h3>
              </div>
            </div>
            <div 
                  className="flex flex-col items-center flex-shrink-0 w-full gap-y-[12px]"
                >
                  <h3 className="text-[18px] lg:text-[20px] font-semibold text-[#161616] leading-[125%] uppercase">
                    {item.title}
                  </h3>
                  <p className={`${IBM.className} text-[16px] lg:text-[18px] text-[#161616] leading-[150%] font-normal text-center`}>
                    {item.detail}
                  </p>
                </div>
        </motion.div>
        
      </motion.article>
    );
  }