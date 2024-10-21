'use client'
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { IBM_Plex_Sans_Thai } from "next/font/google";
import Link from "next/link";
import client from '../../../client';
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

const ibm =  IBM_Plex_Sans_Thai(
    { 
      weight: ['100','200','300','400','500','600', '700'],
      style: ['normal'],
      subsets: ['latin'],
      display: 'swap',
    });
export default function ServicePageSec04({data}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { 
      amount: 0.2,
      once: true 
    });
  
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
        transition: { duration: 0.5, delay: 0.5 }
      }
    };
  
    const underlineVariants = {
      hidden: { scaleX: 0 },
      visible: { 
        scaleX: 1,
        transition: { duration: 0.5, ease: "easeInOut" }
      }
    };
  return (
    <section className='bg-[#fcfcfc]' ref={ref}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 xl:px-0 pb-[56px] lg:pb-[78px]'>
        <div className='flex flex-col justify-center items-center w-full h-full gap-y-[32px] sm:gap-y-[56px] lg:gap-y-[78px]'>
          {/* Header */}
          <div className='flex justify-center lg:justify-between items-end w-full lg:gap-x-6'>
            <div className="flex justify-center lg:justify-start">
              <b className="text-[40px] lg:text-[60px] text-[#161616] font-extrabold leading-[110%] sm:leading-[100%] text-center lg:text-start uppercase whitespace-pre-line lg:whitespace-normal">
                {data?.header}
              </b>
            </div>
            <p className='hidden lg:flex text-[16px] font-normal text-[#161616] leading-[125%]'>
              {data?.subheader}
            </p>
          </div>

          {/* Content */}
          <div className="relative flex flex-wrap w-full sm:w-[592px] lg:w-full items-center justify-center">
            {/* Vertical Line for sm-md */}
            <motion.svg
              className="absolute top-0 left-1/2 h-full w-[1px] hidden sm:block lg:hidden"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={lineVariants}
            >
              <motion.line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="#939393"
                strokeWidth="1"
                variants={lineVariants}
              />
            </motion.svg>

            {/* Horizontal Lines for sm-md */}
            {[1, 2].map((_, index) => (
              <motion.svg
                key={index}
                className={`absolute left-0 w-full h-[1px] hidden sm:block lg:hidden ${index === 0 ? 'top-1/3' : 'top-2/3'}`}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={lineVariants}
              >
                <motion.line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="#939393"
                  strokeWidth="1"
                  variants={lineVariants}
                />
              </motion.svg>
            ))}

            {/* Lines for lg and above */}
            <motion.svg
              className="absolute top-1/2 left-0 w-full h-[1px] hidden lg:block"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={lineVariants}
            >
              <motion.line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="#939393"
                strokeWidth="1"
                variants={lineVariants}
              />
            </motion.svg>

            {[1, 2].map((_, index) => (
              <motion.svg
                key={index}
                className={`absolute top-0 h-full w-[1px] hidden lg:block ${index === 0 ? 'left-[33.33%]' : 'left-[66.67%]'}`}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={lineVariants}
              >
                <motion.line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="100%"
                  stroke="#939393"
                  strokeWidth="1"
                  variants={lineVariants}
                />
              </motion.svg>
            ))}

            {data?.content?.slice(0,6).map((item,index) => (
              <motion.article
                key={index}
                className='relative flex flex-col items-center w-full sm:h-[490px] sm:w-[calc(50%)] lg:w-[calc(33.33%)] gap-y-[16px] sm:gap-y-[24px] lg:gap-y-[32px] px-[32px] lg:px-[40px] py-[24px] sm:py-[40px] lg:py-[40px]'
                variants={contentVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={index}
              >
      
                <div className='flex flex-col w-full gap-y-[16px] lg:gap-y-[24px] '>
                   <b className='text-[40px] lg:text-[60px] text-[#FB602F]  font-extrabold leading-[125%] uppercase'>
                       {`0${index+1}.`}
                   </b>
                  <h3 className={`${ibm.className} text-[20px] lg:text-[24px] lg:h-[62.4px] text-[#161616] font-semibold leading-[130%] uppercase`}>
                    {item?.question}
                  </h3>
                  <p className={`${ibm.className} text-[16px] text-[#161616] font-normal leading-[150%]`}>
                    {item?.answers}
                  </p>
                </div>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-[#939393] sm:hidden"
                  variants={underlineVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.2 }}
                />
              </motion.article>
            ))}
          </div>

          {/* Button */}
          <div className="group flex justify-between ss:justify-start items-center gap-x-[14px] pb-[20px] w-full ss:w-auto border-b-[1px] border-[#939393]">
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
