'use client'
import { useEffect,useState } from "react"
import { Image } from "@nextui-org/react";
import Link from "next/link";
import client from "../../../client";
import imageUrlBuilder from '@sanity/image-url'
import { IBM_Plex_Sans_Thai } from "next/font/google";
import AnimatedText02 from "../Animation/AnimatedText02";

const ibm =  IBM_Plex_Sans_Thai(
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

export default function ServicePageSec03({category,work,data}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const updateActiveIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex > work?.length-1) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    }
  return (
    <section className=' bg-[#fcfcfc]'>
        <div className='max-w-7xl mx-auto px-6 xl:px-0 pb-[40px] lg:pb-[56px]'>
            <div className='flex flex-col justify-center items-center w-full h-full gap-y-[32px] lg:gap-y-[40px]'>

                {/* Category */}
                <div className="hidden xl:flex items-center justify-between w-full gap-x-[24px]">
                    <div className="flex items-center w-full gap-x-[16px]">
                    {category?.map((item,index)=>(
                      <Link href={`/works/category/${item?.title}`} key={item?.title+` index: ${index}`} className={`flex justify-center bg-[#fcfcfc] hover:bg-[#FFB69E] 
                      items-center lg:w-auto lg:px-4 transition-all duration-500 h-[48px] border-[#161616] border-[1px] rounded-[50px] 
                      lg:text-[18px] text-[#000000] font-normal leading-[125%] uppercase`}>
                        {item?.title}
                      </Link>
                    ))}
                    </div>
                    {/* Sub */}
                    <p className='hidden lg:flex text-[16px] font-normal text-[#161616] leading-[125%]'>
                      {data?.project?.subheader}
                    </p>
            
                </div>

                {/* COntent */}
                <div className="flex flex-col xl:flex-row items-center xl:items-start w-full lg:gap-x-[70px] xl:gap-x-[150px] gap-y-[32px] pb-[0px] lg:pb-[80px] border-b-[0px] lg:border-b-[1px] border-[#939393]">
                    {/* Left */}
                    <div className="flex flex-col items-center xl:items-start w-full sm:w-[592px] lg:w-full xl:w-[400px] lg:gap-y-[72px]">
                        <b className="text-[40px] lg:text-[60px] text-[#161616]  font-extrabold leading-[125%] whitespace-pre-line lg:whitespace-normal xl:whitespace-pre-line uppercase text-center lg:text-start">
                            {data?.project?.header}
                        </b>
                        {/* Button */}
                        <div className="group hidden xl:flex items-center gap-x-[14px] pb-[20px] border-b-[1px] border-[#939393]">
                            <Link className="text-[20px] lg:text-[24px] text-[#161616] font-semibold leading-[130%] uppercase "
                            href={data?.project?.button?.link} 
                            >
                              {data?.project?.button?.title}
                            </Link>
                            <svg className="min-w-[12px] min-h-[13px] transition-all duration-500 group-hover:translate-x-1" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.92 6.12019C11.8724 5.99743 11.801 5.88529 11.71 5.79019L6.71 0.790185C6.61676 0.696947 6.50607 0.622986 6.38425 0.572526C6.26243 0.522066 6.13186 0.496094 6 0.496094C5.7337 0.496094 5.4783 0.601882 5.29 0.790185C5.19676 0.883424 5.1228 0.994114 5.07234 1.11594C5.02188 1.23776 4.99591 1.36833 4.99591 1.50019C4.99591 1.76649 5.1017 2.02188 5.29 2.21019L8.59 5.50019H1C0.734784 5.50019 0.48043 5.60554 0.292893 5.79308C0.105357 5.98062 0 6.23497 0 6.50019C0 6.7654 0.105357 7.01976 0.292893 7.20729C0.48043 7.39483 0.734784 7.50019 1 7.50019H8.59L5.29 10.7902C5.19627 10.8831 5.12188 10.9937 5.07111 11.1156C5.02034 11.2375 4.9942 11.3682 4.9942 11.5002C4.9942 11.6322 5.02034 11.7629 5.07111 11.8848C5.12188 12.0066 5.19627 12.1172 5.29 12.2102C5.38296 12.3039 5.49356 12.3783 5.61542 12.4291C5.73728 12.4798 5.86799 12.506 6 12.506C6.13201 12.506 6.26272 12.4798 6.38458 12.4291C6.50644 12.3783 6.61704 12.3039 6.71 12.2102L11.71 7.21019C11.801 7.11508 11.8724 7.00294 11.92 6.88019C12.02 6.63672 12.02 6.36365 11.92 6.12019Z" fill="#FB602F"/>
                            </svg>
                        </div>
                    </div>
                    {/* Right */}
                    <div className="flex flex-col w-full sm:w-[592px] lg:w-[800px] xl:w-[calc(100%-550px)]">
                        <div className="flex flex-col w-full gap-y-[32px]">
                            {/* Image */}
                            <div className="flex w-full h-full overflow-hidden">
                              {work?.slice(0,3).map((item,index)=>(
                                <div key={item?.title+index} style={{ transform: `translateX(-${activeIndex * 100}%)`}}
                                className="flex relative justify-center items-center w-full min-w-full h-[240px] lg:h-full rounded-[16px] transition-all duration-500">
                                  <Image quality={100} loading="lazy"
                                  className=" object-cover object-center w-full h-full rounded-[16px]" 
                                  classNames={{wrapper:"object-cover w-full h-full rounded-[16px]"}}
                                  radius="none"
                                  src={urlFor(item?.images?.mainImage?.image).format('webp').url()}
                                  placeholder="blur"
                                  alt={item?.images?.mainImage?.alt}
                                  width="100%" height="100%" />
                                  <Link aria-label="Button for opening the next page in content"  href={`/works/${decodeURIComponent(item?.slug?.slug?.current)}`} className="flex justify-center items-center w-full h-full absolute top-0 z-[10] rounded-[16px]"></Link>
                                </div>
                              ))}
                            </div>
                            <div className="flex justify-between w-full sm:w-[592px] lg:w-full gpa-y-[32px] lg:gap-x-[24px]">
                              {/* Left */}
                              <div className="flex flex-col xl:flex-row justify-center xl:justify-between items-center xl:items-start gap-y-[32px] w-full xl:w-[calc(100%-144px)] xl:gap-y-[8px]">
                                {/* Text */}
                                <div className="flex flex-col w-full gap-y-[8px]">
                                  <div className="flex flex-col w-full gap-y-[4px]">
                                    <AnimatedText02
                                      el="h3"
                                      activeIndex={activeIndex}
                                      y={30}
                                      staggertime={0.5}
                                      duration={0.5}
                                      delay={0.1}
                                      once={true}
                                      animationType="character"
                                      text={work[activeIndex]?.header?.header}
                                      className={`text-[20px] lg:text-[24px] text-[#161616] font-semibold leading-[125%] uppercase`}
                                      repeatDelay={0}
                                    />
                                    {/* bot */}

                                    <AnimatedText02
                                      el="b"
                                      activeIndex={activeIndex}
                                      y={20}
                                      staggertime={0.5}
                                      duration={0.5}
                                      delay={0.3}
                                      once={true}
                                      animationType="character"
                                      text={work[activeIndex]?.category}
                                      className={`text-[16px] text-[#161616] font-normal leading-[125%]`}
                                      repeatDelay={0}
                                    />
                                  </div>

                                  <AnimatedText02
                                    el="p"
                                    activeIndex={activeIndex}
                                    y={20}
                                    staggertime={0.5}
                                    duration={0.5}
                                    delay={0.3}
                                    once={true}
                                    animationType="character"
                                    text={work[activeIndex]?.header?.type}
                                    className={`text-[18px] text-[#939393] font-light italic leading-[125%]`}
                                    repeatDelay={0}
                                  />

                                </div>
                                <div className="flex lg:hidden justify-center lg:justify-start items-center gap-x-[24px]">
                                    {activeIndex==0 ? (
                                      <svg className="min-w-[48px] min-h-[48px] brightness-50" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M28 34L18 24L28 14" stroke="#FF5941" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      <circle cx="24" cy="24" r="23.5" stroke="#FF5941"/>
                                    </svg>
                                    )
                                    :(
                                    <svg className="min-w-[48px] min-h-[48px] cursor-pointer" onClick={()=>updateActiveIndex(activeIndex-1)} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M28 34L18 24L28 14" stroke="#FF5941" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      <circle cx="24" cy="24" r="23.5" stroke="#FF5941"/>
                                    </svg>
                                  )}

                                    <svg className="min-w-[48px] min-h-[48px] cursor-pointer" onClick={()=>updateActiveIndex(activeIndex+1)} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M20 13L30 23L20 33" stroke="#FF5941" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                      <circle cx="24" cy="24" r="23.5" stroke="#FF5941"/>
                                    </svg>
                                
                                
                                  </div>
                              
                              </div>
                              {/* Right */}
                              <div className="hidden lg:flex justify-center lg:justify-start items-center lg:w-[120px] gap-x-[24px]">
                                  {activeIndex==0 ? (
                                    <svg className="min-w-[48px] min-h-[48px] " width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28 34L18 24L28 14" stroke="#BEBEBE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <circle cx="24" cy="24" r="23.5" stroke="#BEBEBE"/>
                                  </svg>
                                  )
                                  :(
                                  <svg className="min-w-[48px] min-h-[48px] cursor-pointer" onClick={()=>updateActiveIndex(activeIndex-1)} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28 34L18 24L28 14" stroke="#FF5941" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <circle cx="24" cy="24" r="23.5" stroke="#FF5941"/>
                                  </svg>
                                )}

                                  <svg className="min-w-[48px] min-h-[48px] cursor-pointer" onClick={()=>updateActiveIndex(activeIndex+1)} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 13L30 23L20 33" stroke="#FF5941" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <circle cx="24" cy="24" r="23.5" stroke="#FF5941"/>
                                  </svg>
                            
                            
                              </div>
                              
                            </div>
                            
                        </div>
                    </div>                    
                </div>
                <div className="group flex xl:hidden justify-between sm:justify-start items-center gap-x-[14px] w-full sm:w-auto pb-[20px] border-b-[1px] border-[#939393]">
                    <Link className="text-[20px] lg:text-[24px] text-[#161616] font-semibold leading-[130%] uppercase "
                    href={data?.project?.button?.link} 
                    >
                      {data?.project?.button?.title}
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
