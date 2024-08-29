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
export default function ServicePageSec02({data}) {
  return (
    <section className='bg-[#fcfcfc]'>
      <div className='max-w-7xl mx-auto px-6 xl:px-0 pb-[40px] lg:pb-[80px]'>
        <div className='flex justify-center w-full h-full'>
            <div className='flex flex-col w-full sm:w-[592px] lg:w-full gap-y-[32px] lg:gap-y-[40px]'>
                {data?.map((item,index)=>(
                
                <ServiceItem key={index} item={item} index={index}/>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

function ServiceItem({ item,index }) {
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
        {/* Number */}
        <div className="flex justify-center w-[86px]">
          <b className="text-[32px] text-[#FB602F] leading-[125%] font-semibold">
              {`[0${index+1}]`}
          </b>
        </div>
        {/* Title */}
        <div className='flex flex-col w-full lg:w-[480px] gap-y-[24px]'>
          <b className="text-[20px] lg:text-[32px] text-[#161616] font-[800] leading-[130%] uppercase ">
            {item?.title}
          </b>
          <div className="flex items-center w-full gap-x-[16px]">
              <p className={`${IBM.className} text-[16px] text-[#161616] font-normal leading-[130%]`}>
                  {item?.detail}
              </p>
          </div>
        </div>
        {/* List */}
        <ul className="flex flex-col w-full lg:w-[calc(100%-694px)] gap-y-[4px] list-disc marker:text-[#161616] marker:text-[12px] pl-4">
          {item?.list?.map((item,index)=>(
            <li key={index} className="text-[18px] text-[#161616] font-normal leading-[150%] uppercase italic">
                {item?.text}
            </li>
          ))}
        </ul>
        {/* Image */}
        <div className="flex justify-center items-center w-[56px] h-[56px]">
          <Image
            quality={100}
            className="object-contain object-center w-full h-full"
            classNames={{wrapper:"object-contain w-full h-full"}}
            radius="none"
            src={urlFor(item?.images?.image).format('webp').url()}
            placeholder="blur"
            alt={item?.images?.alt}
            width="100%"
            height="100%"
          />
        </div>
      </motion.div>
      <motion.svg 
          className="w-full h-auto" 
          viewBox="0 0 729 2" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          variants={contentVariants}
        >
          <motion.path 
            d="M0 1L729 1.00006" 
            stroke="#939393" 
            variants={lineVariants}
          />
        </motion.svg>
    </motion.article>
  );
}