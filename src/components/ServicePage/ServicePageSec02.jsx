'use client'
import Link from "next/link"
import { motion, useInView } from 'framer-motion';
import { useRef,useState,useEffect } from 'react';
import { Image,Accordion, AccordionItem } from "@nextui-org/react";
import imageUrlBuilder from '@sanity/image-url'
import client from "../../../client";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import backup from "../../../public/assets/Images/Service/backup.png"
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
                
                <ServiceItem key={index} data={data} item={item} index={index}/>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

function ServiceItem({ item,index ,data}) {
  const ref = useRef(null);

  const [selectedKeys, setSelectedKeys] = useState(new Set([data[0]?.list[0]?.text]));
  const [active, setActive] = useState(selectedKeys);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  useEffect(() => {
    setActive(selectedKeys)
  }, [selectedKeys]);
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
              <p className={`${IBM.className} text-[16px] lg:text-[18px] text-[#161616] font-normal leading-[150%]`}>
                  {item?.detail}
              </p>
          </div>
        </div>
        {/* List */}
        <ul className="hidden flex-col w-full lg:w-[calc(100%-694px)] gap-y-[4px] list-disc marker:text-[#161616] marker:text-[12px] pl-4">
          {item?.list?.map((item,index)=>(
            <li key={index} className="text-[18px] text-[#161616] font-semibold leading-[150%] italic">
                {item?.text}
            </li>
          ))}
        </ul>
        <div className="flex flex-col w-full lg:w-[calc(100%-694px)]  ">
        <Accordion 
          className="max-w-full w-full "
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          {item?.list?.map((item,index) => (
            <AccordionItem
            hideIndicator={true}
              key={item?.text}
              aria-label={item.title}
              title={
                <div className="flex items-center gap-2">
                  <div className={`flex justify-center items-center w-[24px] h-[24px] transition-all duration-300 ${selectedKeys.has(item?.text) ? "rotate-90" : ""}`}>
                    <svg className="min-w-[24px] min-h-[24px] transition-all duration-300" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.92 11.62C17.8724 11.4973 17.801 11.3851 17.71 11.29L12.71 6.29C12.6168 6.19676 12.5061 6.1228 12.3842 6.07234C12.2624 6.02188 12.1319 5.99591 12 5.99591C11.7337 5.99591 11.4783 6.1017 11.29 6.29C11.1968 6.38324 11.1228 6.49393 11.0723 6.61575C11.0219 6.73758 10.9959 6.86814 10.9959 7C10.9959 7.2663 11.1017 7.5217 11.29 7.71L14.59 11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H14.59L11.29 16.29C11.1963 16.383 11.1219 16.4936 11.0711 16.6154C11.0203 16.7373 10.9942 16.868 10.9942 17C10.9942 17.132 11.0203 17.2627 11.0711 17.3846C11.1219 17.5064 11.1963 17.617 11.29 17.71C11.383 17.8037 11.4936 17.8781 11.6154 17.9289C11.7373 17.9797 11.868 18.0058 12 18.0058C12.132 18.0058 12.2627 17.9797 12.3846 17.9289C12.5064 17.8781 12.617 17.8037 12.71 17.71L17.71 12.71C17.801 12.6149 17.8724 12.5028 17.92 12.38C18.02 12.1365 18.02 11.8635 17.92 11.62Z" fill={selectedKeys.has(item?.text) ? "#FB602F" : "#161616"}/>
                    </svg>
                  </div>
                  <span className="text-[18px] text-[#161616] font-normal leading-[150%] italic">{item.text}</span>
                </div>
              }
              className="py-0"
              classNames={{
                title: "font-semibold",
                content: `text-[16px] lg:text-[18px] text-[#161616] font-normal leading-[150%] ${IBM.className}`,
              }}
            >
              {item.detail}
            </AccordionItem>
          ))}
        </Accordion>
        </div>
  
        {/* Image */}
        <div className="flex justify-center items-center w-[56px] h-[56px]">
          <Image
            quality={100}
            className="object-contain object-center w-full h-full"
            classNames={{wrapper:"object-contain w-full h-full"}}
            radius="none"
            src={item?.images?.image ? urlFor(item?.images?.image).format('webp').url():backup.src}
            placeholder="blur"
            alt={item?.images?.alt}
            width="100%"
            height="100%"
          />
        </div>
      </motion.div>
      <motion.svg 
          className="w-full h-auto" 
          viewBox="0 0 729 1" 
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