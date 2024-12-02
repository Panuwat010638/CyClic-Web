'use client'
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import Link from 'next/link';
import CardWorkInHome from '../Cards/CardWorkInHome';
import { IBM_Plex_Sans_Thai } from "next/font/google";

const ibm =  IBM_Plex_Sans_Thai(
  { 
    weight: ['100','200','300','400','500','600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
  });
export default function HomePageSec06({work,data,data2}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.4 // This will trigger when 40% of the element is in view
  });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.5, 
        ease: 'easeOut',
        delay: 0.2 // Add a small delay for a smoother entrance
      } 
    }
  };

  const floatVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        y: { repeat: Infinity, duration: 2, ease: 'easeInOut' }
      }
    }
  };
 

  const listItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: 'easeOut'
      } 
    }
  };

// const data1 = {
//   content:{
//     subheader:'Big idea ',
//     header:'our works',
//     title:'brought to business'
//   },
//   button:{
//     title:'Explore our works',
//     link:'/works'
//   },
//   list:[
//     {title:'Enhanced\nproductivity',detail:'with intuitive design and development tools.'},
//     {title:'Robust CMS',detail:'Harnesses the power of a robust content management system..'},
//     {title:'Exceptional speed',detail:'Experience exceptional website speed that keeps your visitors engaged.'},
//     {title:'Ease of use',detail:'The website’s user-friendly interface and visual design capabilities.'},
//     {title:'No plugins',detail:'we eliminate the need for third-party add-ons.'},
//     {title:'Unlimited scalability',detail:'Future-proof your online presence with our ensuring your website can grow alongside your business.'},
//   ]
// }
// const data2 = {
//   content:{
//     header:'website & \nbusiness Intelligence',
//   },
//   button:{
//     title:'find more our works',
//     link:'/works'
//   },

// }
const ListSection = ({ items, className }) => (
  <motion.div 
    className={className}
    initial="hidden"
    animate={controls}
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.1
        }
      }
    }}
  >
    {items.map((item, index) => (
      <motion.div key={index} className='flex gap-x-[16px] w-full' variants={listItemVariants}>
        <svg className='min-w-[23px] min-h-[23px]' width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="23" height="23" rx="11.5" fill="#FB602F"/>
        </svg>
        <div className='flex flex-col w-[calc(100%-39px)] gap-y-[8px]'>
          <b className='text-[20px] lg:text-[24px] text-[#fcfcfc] font-light italic leading-[130%] lg:whitespace-pre-line'>
            {item?.title}
          </b>
          <p className={`${ibm.className} text-[16px] lg:text-[18px] text-[#BEBEBE] font-light leading-[130%] italic`}>
            {item?.detail}
          </p>
        </div>
      </motion.div>
    ))}
  </motion.div>
);
  return (
    <section className="bg-[#1e2332]">
      <div className='max-w-7xl mx-auto px-6 xl:px-0 pt-[40px] pb-[56px] lg:pb-[88px] lg:pt-[86px]'>
        <div className='flex flex-col justify-center items-center w-full h-full gap-y-[56px] lg:gap-y-[88px]'>
          {/* Top */}
          <div className='flex flex-col justify-center items-center w-full sm:w-[592px] lg:w-full h-full gap-y-[16px]'>
            {/* Header */}
            <div className='flex justify-center lg:justify-between items-center w-full h-full lg:gap-x-6'>
              {/* Text */}
              <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start gap-y-[16px]">
                <div className='flex flex-col lg:flex-row items-center gap-[16px]'>
                  <div className="flex justify-center items-center rounded-[4px] bg-[#FB602F] py-[4px] w-[200px]">
                    <h3 className="text-[20px] lg:text-[24px] text-[#fcfcfc] font-medium leading-[125%] uppercase text-center">
                      {data?.content?.subheader}
                    </h3>
                  </div>
                  <h3 className='text-[20px] lg:text-[24px] text-[#fcfcfc] font-semibold leading-[130%] uppercase '>
                    {data?.content?.title}
                  </h3>
                </div>

                <h2 className="text-[40px] lg:text-[60px] text-[#fcfcfc] font-extrabold leading-[125%] uppercase text-center lg:text-start whitespace-pre-line">
                  {data?.content?.header}
                </h2>
              </div>
              {/* Button */}
              <div className="group hidden lg:flex items-center gap-x-[14px] pb-[20px] border-b-[1px] border-[#939393]">
                <Link className="text-[20px] lg:text-[24px] text-[#fcfcfc] font-semibold leading-[130%] uppercase "
                  href={data?.button?.link} 
                >
                  {data?.button?.title}
                </Link>
                <svg className="min-w-[12px] min-h-[13px] transition-all duration-500 group-hover:translate-x-1" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.92 6.12019C11.8724 5.99743 11.801 5.88529 11.71 5.79019L6.71 0.790185C6.61676 0.696947 6.50607 0.622986 6.38425 0.572526C6.26243 0.522066 6.13186 0.496094 6 0.496094C5.7337 0.496094 5.4783 0.601882 5.29 0.790185C5.19676 0.883424 5.1228 0.994114 5.07234 1.11594C5.02188 1.23776 4.99591 1.36833 4.99591 1.50019C4.99591 1.76649 5.1017 2.02188 5.29 2.21019L8.59 5.50019H1C0.734784 5.50019 0.48043 5.60554 0.292893 5.79308C0.105357 5.98062 0 6.23497 0 6.50019C0 6.7654 0.105357 7.01976 0.292893 7.20729C0.48043 7.39483 0.734784 7.50019 1 7.50019H8.59L5.29 10.7902C5.19627 10.8831 5.12188 10.9937 5.07111 11.1156C5.02034 11.2375 4.9942 11.3682 4.9942 11.5002C4.9942 11.6322 5.02034 11.7629 5.07111 11.8848C5.12188 12.0066 5.19627 12.1172 5.29 12.2102C5.38296 12.3039 5.49356 12.3783 5.61542 12.4291C5.73728 12.4798 5.86799 12.506 6 12.506C6.13201 12.506 6.26272 12.4798 6.38458 12.4291C6.50644 12.3783 6.61704 12.3039 6.71 12.2102L11.71 7.21019C11.801 7.11508 11.8724 7.00294 11.92 6.88019C12.02 6.63672 12.02 6.36365 11.92 6.12019Z" fill="#fcfcfc"/>
                </svg>
              </div>
            </div>
            {/* Content */}
            <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full sm:w-[592px] lg:w-full overflow-hidden gap-[24px]'>
              {/* Left */}
              <ListSection 
              items={data?.list?.slice(0, 3)} 
              className='hidden lg:flex flex-col w-full lg:w-[calc(50%-274px)] gap-y-[32px] lg:gap-y-[44px] xl:gap-y-[56px]'
            />
              {/* 3D */}
              <div ref={ref} className="flex cursur-img items-center justify-center w-[300px] lg:w-[500px] z-0 relative h-[500px]">
                <motion.div
                  initial="hidden"
                  animate={controls}
                  className='flex justify-center items-center w-full h-full'
                  variants={containerVariants}
                >
                  <motion.div className='w-full h-full' animate="float" variants={floatVariants}>
                    <Spline scene="https://prod.spline.design/15aI9d85Nq3JB7lZ/scene.splinecode" />
                  </motion.div>
                </motion.div>
              </div>
              {/* Right */}
              <ListSection 
              items={data?.list?.slice(3, 6)} 
              className='hidden lg:flex flex-col w-full lg:w-[calc(50%-274px)] gap-y-[32px] lg:gap-y-[44px] xl:gap-y-[56px]'
            />
              {/* Mobile */}
              <ListSection 
              items={data?.list} 
              className='flex lg:hidden flex-col w-full sm:w-[80%] lg:w-[calc(50%-274px)] gap-y-[32px] lg:gap-y-[44px] xl:gap-y-[56px]'
            />
            </div>
          </div>
          {/* Bot */}
          <div className='flex flex-col justify-center items-center w-full sm:w-[592px] lg:w-full h-full gap-y-[40px] lg:gap-y-[86px]'>
            {/* Header */}
            <div className='flex justify-center items-center w-full h-full gap-x-6'>
                <svg className='min-w-[26px] min-h-[26px]' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.9259 12.8633H1" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                    <path d="M12.9961 25L12.9961 1" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                    <path d="M21.4776 21.4863L4.50781 4.51657" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                    <path d="M21.4776 4.51657L4.50781 21.4863" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                </svg>
                {/* Text */}
                <div className="flex flex-col items-center  justify-center">

                  <b className="text-[32px] lg:text-[48px] text-[#fcfcfc] font-light italic leading-[125%] uppercase text-center  whitespace-pre-line">
                    {data2?.content?.header}
                  </b>
                </div>
                <svg className='min-w-[26px] min-h-[26px]' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.9259 12.8633H1" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                    <path d="M12.9961 25L12.9961 1" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                    <path d="M21.4776 21.4863L4.50781 4.51657" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                    <path d="M21.4776 4.51657L4.50781 21.4863" stroke="#FB602F" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>

            {/* Content */}
            <div className='grid grid-cols-1 lg:grid-cols-2  gap-[32px] lg:gap-6 w-full sm:w-[592px] lg:w-full'>
                {work?.slice(0, 4)?.map((item,index)=>(
                    <CardWorkInHome key={index} item={item} index={index}/>
                ))}
              </div>

            {/* Button M */}
            <div className="group flex justify-between ss:justify-start items-center gap-x-[14px] pb-[20px] w-full ss:w-auto border-b-[1px] border-[#fcfcfc]">
                <Link className="text-[24px] text-[#fcfcfc] font-semibold leading-[130%] uppercase cursor-pointer"
                href={data2?.button?.link} >
                  {data2?.button?.title}
                </Link>
                <svg className="min-w-[12px] min-h-[13px] transition-all duration-500 group-hover:translate-x-1" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.92 6.12019C11.8724 5.99743 11.801 5.88529 11.71 5.79019L6.71 0.790185C6.61676 0.696947 6.50607 0.622986 6.38425 0.572526C6.26243 0.522066 6.13186 0.496094 6 0.496094C5.7337 0.496094 5.4783 0.601882 5.29 0.790185C5.19676 0.883424 5.1228 0.994114 5.07234 1.11594C5.02188 1.23776 4.99591 1.36833 4.99591 1.50019C4.99591 1.76649 5.1017 2.02188 5.29 2.21019L8.59 5.50019H1C0.734784 5.50019 0.48043 5.60554 0.292893 5.79308C0.105357 5.98062 0 6.23497 0 6.50019C0 6.7654 0.105357 7.01976 0.292893 7.20729C0.48043 7.39483 0.734784 7.50019 1 7.50019H8.59L5.29 10.7902C5.19627 10.8831 5.12188 10.9937 5.07111 11.1156C5.02034 11.2375 4.9942 11.3682 4.9942 11.5002C4.9942 11.6322 5.02034 11.7629 5.07111 11.8848C5.12188 12.0066 5.19627 12.1172 5.29 12.2102C5.38296 12.3039 5.49356 12.3783 5.61542 12.4291C5.73728 12.4798 5.86799 12.506 6 12.506C6.13201 12.506 6.26272 12.4798 6.38458 12.4291C6.50644 12.3783 6.61704 12.3039 6.71 12.2102L11.71 7.21019C11.801 7.11508 11.8724 7.00294 11.92 6.88019C12.02 6.63672 12.02 6.36365 11.92 6.12019Z" fill="#fcfcfc"/>
                </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}