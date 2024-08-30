'use client'
import { useEffect,useState } from "react"
import { Image } from "@nextui-org/react";
import Link from "next/link";
import client from "../../../client";
import imageUrlBuilder from '@sanity/image-url'
import { IBM_Plex_Sans_Thai } from "next/font/google";
import AnimatedText02 from "../Animation/AnimatedText02";
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

export default function BlogPageSec03({highlight}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateActiveIndex = (newIndex) => {
      if (newIndex < 0) {
          newIndex = React.Children.count(children) - 1;
      } else if (newIndex > 2) {
          newIndex = 0;
      }
      setActiveIndex(newIndex);
  }
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // เรียกใช้ฟังก์ชันเพื่อเปลี่ยนตำแหน่งทุก 5 วินาที
  //     updateActiveIndex(activeIndex + 1);
  //   }, 10000);

  //   return () => {
  //     // เมื่อ component ถูก unmount ให้ล้าง interval
  //     clearInterval(interval);
  //   };
  // });
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };
  return (
    <section className='bg-[#fcfcfc]'>
      <div className='max-w-7xl mx-auto px-6 xl:px-0 pb-[36px] sm:pb-[48px] lg:pb-[54px]'>
        <div className='flex flex-col justify-center items-center w-full h-full gap-y-[16px] lg:gap-y-[48px]'>
          {/* Highlight */}
          <div className='flex flex-col lg:flex-row justify-between items-center w-full sm:w-[592px] lg:w-full lg:h-[360px] gap-y-[16px]'>
              {/* Image */}
              <div className="flex w-full lg:w-[50%] h-full overflow-hidden">
                {highlight?.slice(0,3).map((item,index)=>(
                  <div key={item?.title+index} style={{ transform: `translateX(-${activeIndex * 100}%)`}}
                  className="flex relative justify-center items-center w-full min-w-full h-[240px] lg:h-full rounded-[16px] transition-all duration-500">
                    <Image quality={100} loading="lazy"
                    className=" object-cover object-center w-full h-full rounded-[16px]" 
                    classNames={{wrapper:"object-cover w-full h-full rounded-[16px]"}}
                    radius="none"
                    src={urlFor(item?.mainImage?.image).format('webp').url()}
                    placeholder="blur"
                    alt={item?.mainImage?.alt}
                    width="100%" height="100%" />
                    <Link aria-label="Button for opening the next page in content"  href={`/blog/${decodeURIComponent(item?.slug?.slug?.current)}`} className="flex justify-center items-center w-full h-full absolute top-0 z-[10] rounded-[16px]"></Link>
                  </div>
                ))}
              </div>
              {/* Content */}
              <div className="flex flex-col w-full lg:w-[50%] h-full gap-y-[16px] lg:gap-y-[64px] lg:pl-[32px]">
                {/* Title && Detail */}
                <div className="flex flex-col w-full gap-y-[16px] lg:gap-y-[24px] relative">
                  <AnimatedText02
                    el="h3"
                    activeIndex={activeIndex}
                    y={30}
                    staggertime={0.5}
                    duration={0.5}
                    delay={0.1}
                    once={true}
                    animationType="character"
                    text={highlight[activeIndex]?.title}
                    className={`lg:text-[24px] text-[#161616] font-semibold leading-[125%] ${IBM.className}`}
                    repeatDelay={0}
                  />
                  <AnimatedText02
                    el="p"
                    activeIndex={activeIndex}
                    y={30}
                    staggertime={0.5}
                    delay={0.2}
                    once={true}
                    text={highlight[activeIndex]?.detail}
                    className={`lg:text-[16px] text-[#161616] font-normal leading-[125%] ${IBM.className}`}
                    repeatDelay={0}
                    duration={0.5}
                    animationType="sentence"
                  />
                  <Link aria-label="Button for opening the next page in content"  href={`/blog/${decodeURIComponent(highlight[activeIndex]?.slug?.slug?.current)}`} className="flex justify-center items-center w-full h-full absolute top-0 z-[10] rounded-[16px]"></Link>
                </div>
                {/* Date,Category,Button */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full gap-6">
                  {/* Left */}
                  <div className="flex items-center gap-x-[24px]">
    
                    <AnimatedText02
                      el="time"
                      activeIndex={activeIndex}
                      y={20}
                      staggertime={0.5}
                      duration={0.5}
                      delay={0.3}
                      once={true}
                      animationType="character"
                      text={formatDate(highlight[activeIndex]?.date)}
                      className={`text-[16px] text-[#161616] font-normal leading-[125%]`}
                      repeatDelay={0}
                    />
                   
                    <svg className="min-w-[2px] min-h-[27px]" width="2" height="27" viewBox="0 0 2 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 0.5V26.5" stroke="#FF5941"/>
                    </svg>
                    <AnimatedText02
                      el="p"
                      activeIndex={activeIndex}
                      y={20}
                      staggertime={0.5}
                      duration={0.5}
                      delay={0.3}
                      once={true}
                      animationType="character"
                      text={highlight[activeIndex]?.category}
                      className={`text-[16px] text-[#161616] font-normal leading-[150%] uppercase`}
                      repeatDelay={0}
                    />
                  </div>
                  {/* Right */}
                  <div className="flex justify-center lg:justify-start items-center gap-x-[24px]">
                    {activeIndex==0 ? (
                      <svg className="min-w-[48px] min-h-[48px]" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          {/* Line */}
          <svg className='w-full min-h-[2px]' width="1280" height="2" viewBox="0 0 1280 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1H1280" stroke="#939393"/>
          </svg>

        </div>
      </div>
    </section>
  )
}
