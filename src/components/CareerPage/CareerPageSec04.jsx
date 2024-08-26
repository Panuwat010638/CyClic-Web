'use client'
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Image} from "@nextui-org/react"
import Link from "next/link";
import client from "../../../client"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}
export default function CareerPageSec04({data}) {
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
      <div className='max-w-7xl mx-auto px-4 sm:px-6 xl:px-0 pb-[40px] sm:pb-[56px] lg:pb-[78px]'>
        <div className='flex flex-col justify-center items-center w-full h-full gap-y-[32px] sm:gap-y-[56px] lg:gap-y-[78px]'>
          {/* Header */}
          <div className='flex justify-center lg:justify-between items-end w-full lg:gap-x-6'>
            <div className="flex justify-center lg:justify-start">
              <b className="text-[28px] sm:text-[36px] lg:text-[60px] text-[#161616] font-extrabold leading-[110%] sm:leading-[100%] text-center lg:text-start uppercase whitespace-pre-line lg:whitespace-normal">
                {data?.maincontent?.header}
              </b>
            </div>
            <p className='hidden lg:flex text-[16px] font-normal text-[#161616] leading-[125%]'>
              {data?.maincontent?.subheader}
            </p>
          </div>

          {/* Content */}
          <div className="relative flex flex-wrap w-full items-center justify-center">
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
                stroke="black"
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
                  stroke="black"
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
                stroke="black"
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
                  stroke="black"
                  strokeWidth="1"
                  variants={lineVariants}
                />
              </motion.svg>
            ))}

            {data?.benefit?.slice(0,6).map((item,index) => (
              <motion.article
                key={index}
                className='relative flex flex-col justify-center items-center w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.33%-16px)] gap-y-[16px] sm:gap-y-[24px] lg:gap-y-[32px] px-4 py-[24px] sm:py-[32px] lg:py-[40px]'
                variants={contentVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={index}
              >
                <div className="flex justify-center items-center w-full h-[56px]">
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
                <div className='flex flex-col items-center w-full gap-y-[8px] sm:gap-y-[12px] lg:gap-y-[16px]'>
                  <h3 className='text-[18px] sm:text-[20px] lg:text-[24px] text-[#161616] font-semibold leading-[130%] uppercase text-center'>
                    {item?.title}
                  </h3>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#161616] font-normal leading-[130%] text-center">
                    {item?.detail}
                  </p>
                </div>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-black sm:hidden"
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
