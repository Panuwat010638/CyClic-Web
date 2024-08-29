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

const IBM =  IBM_Plex_Sans_Thai(
    { 
      weight: ['100','200','300','400','500','600', '700'],
      style: ['normal'],
      subsets: ['latin'],
      display: 'swap',
    });

export default function HomePageSec13({data}) {
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
                className='relative flex flex-col items-center w-full sm:h-[490px] sm:w-[calc(50%)] lg:w-[calc(33.33%)] gap-y-[16px] sm:gap-y-[24px] lg:gap-y-[32px] px-4 py-[24px] sm:py-[40px] lg:py-[40px]'
                variants={contentVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={index}
              >
      
                <div className='flex flex-col w-full gap-y-[16px] lg:gap-y-[24px] '>
                   <b className='text-[40px] lg:text-[60px] text-[#FB602F]  font-extrabold leading-[125%] uppercase'>
                       {`0${index+1}.`}
                   </b>
                  <h3 className={`${IBM.className} text-[20px] lg:text-[24px] lg:h-[62.4px] text-[#161616] font-semibold leading-[130%] uppercase`}>
                    {item?.question}
                  </h3>
                  <p className={`${IBM.className} text-[16px] text-[#161616] font-normal leading-[130%]`}>
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



        </div>
      </div>
    </section>
  )
}
