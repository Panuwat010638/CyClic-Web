'use client'
import Link from "next/link"
import { motion, useInView } from 'framer-motion';
import { useRef,useEffect,useState } from 'react';
import { Image } from "@nextui-org/react";
import imageUrlBuilder from '@sanity/image-url'
import client from "../../../client";
import { gsap } from 'gsap';
import { IBM_Plex_Sans_Thai } from "next/font/google";

const ibm =  IBM_Plex_Sans_Thai(
  { 
    weight: ['100','200','300','400','500','600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
  });

export default function HomePageSec08({data}) {
  
  return (
    <section className="bg-[#fcfcfc]">
        <div className='max-w-7xl mx-auto px-6 xl:px-0 pt-[40px] pb-[56px] lg:pb-[88px] lg:pt-[86px]'>
            <div className='flex flex-col justify-center items-center w-full h-full '>
                {/* Content */}
                <div className='flex flex-col lg:flex-row justify-center lg:justify-between w-full sm:w-[592px] lg:w-full h-full gap-[60px] lg:gap-[24px]'>
                    {/* Left */}
                    <div className='flex flex-col w-full lg:w-[calc(50%-12px])] gap-y-[20px]'>
                        {/* Header */}
                        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start w-full">
                            <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start gap-y-[16px]">
                              <div className="flex justify-center items-center rounded-[4px] bg-[#FB602F] py-[4px] w-[200px]">
                                <h3 className="text-[20px] lg:text-[24px] text-[#fcfcfc] font-medium leading-[125%] uppercase text-center">
                                  {data?.content?.subheader}
                                </h3>
                              </div>
                              <h2 className="text-[40px] lg:text-[60px] text-[#161616] font-extrabold leading-[125%] uppercase text-center lg:text-start whitespace-pre-line">
                                {data?.content?.header}
                              </h2>
                            </div>
                            <div className='hidden lg:flex gap-x-[16px] pt-[24px]'>
                                <p className="text-[20px] sm:text-[36px] lg:text-[48px] text-[#161616] font-light italic leading-[125%] text-center lg:text-start uppercase whitespace-pre-line">
                                  {data.content?.detail}
                                </p>

                            </div>
                          
           
                        </div>
                        <div className="hidden lg:flex items-center gap-x-[100px]">
                            <div className="group flex items-center gap-x-[14px] pb-[20px] border-b-[1px] border-[#939393]">
                              <Link className="text-[20px] lg:text-[24px] text-[#161616] font-semibold leading-[130%] uppercase "
                                href={data?.button?.link} 
                              >
                                {data?.button?.title}
                              </Link>
                              <svg className="min-w-[12px] min-h-[13px] transition-all duration-500 group-hover:translate-x-1" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.92 6.12019C11.8724 5.99743 11.801 5.88529 11.71 5.79019L6.71 0.790185C6.61676 0.696947 6.50607 0.622986 6.38425 0.572526C6.26243 0.522066 6.13186 0.496094 6 0.496094C5.7337 0.496094 5.4783 0.601882 5.29 0.790185C5.19676 0.883424 5.1228 0.994114 5.07234 1.11594C5.02188 1.23776 4.99591 1.36833 4.99591 1.50019C4.99591 1.76649 5.1017 2.02188 5.29 2.21019L8.59 5.50019H1C0.734784 5.50019 0.48043 5.60554 0.292893 5.79308C0.105357 5.98062 0 6.23497 0 6.50019C0 6.7654 0.105357 7.01976 0.292893 7.20729C0.48043 7.39483 0.734784 7.50019 1 7.50019H8.59L5.29 10.7902C5.19627 10.8831 5.12188 10.9937 5.07111 11.1156C5.02034 11.2375 4.9942 11.3682 4.9942 11.5002C4.9942 11.6322 5.02034 11.7629 5.07111 11.8848C5.12188 12.0066 5.19627 12.1172 5.29 12.2102C5.38296 12.3039 5.49356 12.3783 5.61542 12.4291C5.73728 12.4798 5.86799 12.506 6 12.506C6.13201 12.506 6.26272 12.4798 6.38458 12.4291C6.50644 12.3783 6.61704 12.3039 6.71 12.2102L11.71 7.21019C11.801 7.11508 11.8724 7.00294 11.92 6.88019C12.02 6.63672 12.02 6.36365 11.92 6.12019Z" fill="#FB602F"/>
                              </svg>
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
                    </div>
                    {/* Right */}
                    <div className="flex flex-col items-center lg:items-end lg:justify-start w-full lg:w-[calc(50%-12px])] lg:h-full">
                        <div className='flex flex-col w-full sm:w-[592px] lg:w-full gap-y-[32px] lg:gap-y-[40px]'>
                            {data?.list?.map((item,index)=>(
                            
                            <ServiceItem key={index} item={item} index={index} on={index== data?.list?.length-1 ? false:true}/>
                            ))}
                        </div>
                    </div>
                   
                </div>
                <div className="group flex lg:hidden justify-between ss:justify-start items-center gap-x-[14px] pb-[20px] pt-[60px] w-full ss:w-auto border-b-[1px] border-[#939393]">
                        <Link className="text-[24px] text-[#161616] font-semibold leading-[130%] uppercase cursor-pointer"
                        href={data?.button?.link} >
                          {data?.button?.title}
                        </Link>
                        <svg className="min-w-[12px] min-h-[13px] transition-all duration-500 group-hover:translate-x-1" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.92 6.12019C11.8724 5.99743 11.801 5.88529 11.71 5.79019L6.71 0.790185C6.61676 0.696947 6.50607 0.622986 6.38425 0.572526C6.26243 0.522066 6.13186 0.496094 6 0.496094C5.7337 0.496094 5.4783 0.601882 5.29 0.790185C5.19676 0.883424 5.1228 0.994114 5.07234 1.11594C5.02188 1.23776 4.99591 1.36833 4.99591 1.50019C4.99591 1.76649 5.1017 2.02188 5.29 2.21019L8.59 5.50019H1C0.734784 5.50019 0.48043 5.60554 0.292893 5.79308C0.105357 5.98062 0 6.23497 0 6.50019C0 6.7654 0.105357 7.01976 0.292893 7.20729C0.48043 7.39483 0.734784 7.50019 1 7.50019H8.59L5.29 10.7902C5.19627 10.8831 5.12188 10.9937 5.07111 11.1156C5.02034 11.2375 4.9942 11.3682 4.9942 11.5002C4.9942 11.6322 5.02034 11.7629 5.07111 11.8848C5.12188 12.0066 5.19627 12.1172 5.29 12.2102C5.38296 12.3039 5.49356 12.3783 5.61542 12.4291C5.73728 12.4798 5.86799 12.506 6 12.506C6.13201 12.506 6.26272 12.4798 6.38458 12.4291C6.50644 12.3783 6.61704 12.3039 6.71 12.2102L11.71 7.21019C11.801 7.11508 11.8724 7.00294 11.92 6.88019C12.02 6.63672 12.02 6.36365 11.92 6.12019Z" fill="#FB602F"/>
                        </svg>
                    </div>
            </div>            
        </div>
    </section>
  )
}

function ServiceItem({ item,index,on }) {
    const [svgString, setSvgString] = useState('');
    

  useEffect(() => {
    if (item?.svg) {
      // เพิ่ม class หรือ id ให้กับส่วนประกอบของ SVG
      const modifiedSvg = item.svg.replace('<svg', '<svg class="animate-svg"');
      setSvgString(modifiedSvg);
    }
  }, [item?.svg]);
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
        <motion.div variants={contentVariants} className='flex items-center flex-col lg:flex-row w-full gap-[24px] lg:gap-[32px]'>
            <div className="flex justify-center lg:w-[160px]">
                <motion.div dangerouslySetInnerHTML={{ __html: svgString }} 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }} />
            </div>
            <div className='flex flex-col items-center lg:items-start lg:w-[calc(100%-192px)] gap-y-[8px]'>
                <b className="text-[20px] sm:text-[36px] text-[#161616] font-normal leading-[125%] uppercase whitespace-pre-line">
                    {item?.title}
                </b>
                <p className={`${ibm.className} text-[18px] text-[#161616] leading-[150%] font-normal text-center lg:text-start`}>
                  {item?.detail}
                </p>
            </div>
   
          
         
        </motion.div>
        <motion.svg 
            className={`w-full h-auto ${on == true ? "block":"hidden lg:block"}`} 
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