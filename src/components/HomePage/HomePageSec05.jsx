'use client'
import Link from "next/link"
import { motion, useInView } from 'framer-motion';
import { useRef,useEffect,useState } from 'react';
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

export default function HomePageSec05({data}) {
  return (
    <section className="bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto px-6 xl:px-0 pb-[44px] lg:pb-[72px]">
            <div className='flex flex-col justify-center items-center w-full h-full gap-y-[44px] lg:gap-y-[72px]'>
                {/* Content */}
                <div className="flex flex-col lg:flex-row justify-center lg:justify-between w-full sm:w-[592px] lg:w-full h-full gap-[24px] lg:gap-[100px]">
                    {/* Left */}
                    <div className="hidden lg:flex flex-col w-full lg:w-[480px] lg:gap-y-[48px]">
                        <div className="flex flex-col w-full gap-y-[8px]">
                            {/* Content 01 */}
                            <div className="flex items-center justify-end gap-x-[16px]">
                                <b 
                                className={`${data?.word[0]== true ? "text-[#161616]  font-normal":"text-[#161616] font-extralight italic"} text-[20px] sm:text-[36px] lg:text-[48px] uppercase leading-tight 
                                    transition-colors duration-500 text-center lg:text-end`}>
                                  {data?.word[0].title}
                                </b>
                            </div>
                            {/* Content 02 */}
                            <div className="flex items-center gap-x-[16px]">
                                <svg className="min-w-[26px] min-h-[26px]" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.9259 12.8633H1" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                                    <path d="M12.9961 25L12.9961 1" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                                    <path d="M21.4776 21.4863L4.50781 4.51657" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                                    <path d="M21.4776 4.51657L4.50781 21.4863" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                                </svg>

                                <b 
                                className={`${data?.word[1]== true ? "text-[#161616]  font-normal":"text-[#161616] font-extralight italic"} text-[20px] sm:text-[36px] lg:text-[48px] uppercase leading-tight 
                                    transition-colors duration-500 text-center lg:text-end`}>
                                  {data?.word[1].title}
                                </b>
                            </div>
                            {/* Content 03 */}
                            <div className="flex items-center justify-end gap-x-[16px]">
                                <b 
                                className={`${data?.word[2]== true ? "text-[#161616]  font-normal":"text-[#161616] font-extralight italic"} text-[20px] sm:text-[36px] lg:text-[48px] uppercase leading-tight 
                                    transition-colors duration-500 text-center lg:text-end`}>
                                  {data?.word[2].title}
                                </b>
                                <svg className="min-w-[26px] min-h-[26px]" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.9259 12.8633H1" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                                <path d="M12.9961 25L12.9961 1" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                                <path d="M21.4776 21.4863L4.50781 4.51657" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                                <path d="M21.4776 4.51657L4.50781 21.4863" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                                </svg>

                            </div>
                            {/* Content 04 */}
                            <div className="flex items-center gap-x-[16px]">
                                <b 
                                className={`${data?.word[3]== true ? "text-[#161616]  font-normal":"text-[#161616] font-extralight italic"} text-[20px] sm:text-[36px] lg:text-[48px] uppercase leading-tight 
                                    transition-colors duration-500 text-center lg:text-end`}>
                                  {data?.word[3].title}
                                </b>
                            </div>
                        </div>
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
                    {/* Right */}
                    <div className="flex flex-col w-full lg:w-[calc(100%-580px)] lg:gap-y-[48px]">
                        <div className='flex flex-col w-full sm:w-[592px] lg:w-full gap-y-[32px] lg:gap-y-[40px]'>
                            {data?.works?.map((item,index)=>(
                            
                            <ServiceItem key={index} item={item} index={index}/>
                            ))}
                        </div>
                    </div>
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
      className='flex flex-col w-full gap-y-[16px] sm:gap-y-[24px]'
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
        <motion.div variants={contentVariants} className='flex items-center flex-row w-full gap-[24px]'>
            <b className="text-[36px] sm:text-[40px] lg:text-[60px] text-[#FB602F] font-medium leading-[125%] uppercase whitespace-pre-line">
                {`${item?.count}+`}
            </b>
            <b className="text-[20px] sm:text-[36px] lg:text-[48px] text-[#161616] font-normal leading-[125%] italic uppercase whitespace-pre-line">
                {item?.title}
            </b>
          
         
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