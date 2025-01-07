'use client'
import Link from "next/link"
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Image, Accordion, AccordionItem } from "@nextui-org/react";
import imageUrlBuilder from '@sanity/image-url'
import client from "../../../client";
import { IBM_Plex_Sans_Thai } from "next/font/google";

import backup from "../../../public/assets/Images/Service/backup.png"

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

const ibm = IBM_Plex_Sans_Thai({ 
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export default function ServicePageSec02({data,data2,service}) {
  return (
    <section className='bg-[#fcfcfc]'>
      <div className='max-w-7xl mx-auto px-6 xl:px-0 pb-[40px] lg:pb-[80px]'>
        <div className='flex flex-col items-center justify-center w-full h-full gap-y-[40px] lg:gap-y-[56px]'>
          {/* List */}
          <div className='flex flex-col w-full sm:w-[592px] lg:w-full gap-y-[32px] lg:gap-y-[40px]'>
            {service?.map((item, index) => (
              <ServiceItem key={index} data={data} item={item} index={index} ibmFont={ibm.className} />
            ))}
          </div>
          {/* Get */}
          <div className="group flex items-center gap-x-[14px] justify-between ss:justify-start w-full ss:w-auto pb-[20px] border-b-[1px] border-[#939393]">
              <Link className="text-[24px] text-[#161616] font-semibold leading-[130%] uppercase "
              href={data2?.header?.button?.link} 
              >
                {data2?.header?.button?.title}
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

function ServiceItem({ item, index, data, ibmFont }) {
  const ref = useRef(null);
  // แก้ไขการกำหนดค่าเริ่มต้นของ selectedKeys
  const [selectedKeys, setSelectedKeys] = useState(new Set([item?.list[0]?.text]));
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
        <div className="flex justify-center w-[86px]">
          <b className="text-[32px] text-[#FB602F] leading-[125%] font-semibold">
            {`[0${index+1}]`}
          </b>
        </div>
        <div className='flex flex-col w-full lg:w-[480px] gap-y-[24px]'>
          <Link href={`/service/${decodeURIComponent(item?.slug?.slug?.current)}`} className="text-[20px] lg:text-[32px] text-[#161616] font-[800] leading-[130%] uppercase">
            {item?.title}
          </Link>
          <div className="flex items-center w-full gap-x-[16px]">
            <p className={`${ibmFont} text-[16px] lg:text-[18px] text-[#161616] font-normal leading-[150%]`}>
              {item?.detail}
            </p>
          </div>
          <Link href={`/service/${decodeURIComponent(item?.slug?.slug?.current)}`} className="hidden lg:flex justify-center items-center w-[210px] h-[48px] border-[2px] border-[#161616] hover:bg-[#FB602F]
               transition-all duration-500 rounded-[50px] cursor-pointer
              lg:text-[18px] text-[#161616] font-semibold leading-[125%]">
                <svg className="min-w-[24px] min-h-[24px] mr-[8px] rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.9999 11.0002H9.4099L12.7099 7.71019C12.8982 7.52188 13.004 7.26649 13.004 7.00019C13.004 6.73388 12.8982 6.47849 12.7099 6.29019C12.5216 6.10188 12.2662 5.99609 11.9999 5.99609C11.7336 5.99609 11.4782 6.10188 11.2899 6.29019L6.2899 11.2902C6.19886 11.3853 6.12749 11.4974 6.0799 11.6202C5.97988 11.8636 5.97988 12.1367 6.0799 12.3802C6.12749 12.5029 6.19886 12.6151 6.2899 12.7102L11.2899 17.7102C11.3829 17.8039 11.4935 17.8783 11.6153 17.9291C11.7372 17.9798 11.8679 18.006 11.9999 18.006C12.1319 18.006 12.2626 17.9798 12.3845 17.9291C12.5063 17.8783 12.6169 17.8039 12.7099 17.7102C12.8036 17.6172 12.878 17.5066 12.9288 17.3848C12.9796 17.2629 13.0057 17.1322 13.0057 17.0002C13.0057 16.8682 12.9796 16.7375 12.9288 16.6156C12.878 16.4937 12.8036 16.3831 12.7099 16.2902L9.4099 13.0002H16.9999C17.2651 13.0002 17.5195 12.8948 17.707 12.7073C17.8945 12.5198 17.9999 12.2654 17.9999 12.0002C17.9999 11.735 17.8945 11.4806 17.707 11.2931C17.5195 11.1055 17.2651 11.0002 16.9999 11.0002Z" fill="#161616"/>
                </svg>

                  Explore
           </Link>
        </div>
        <div className="flex flex-col w-full lg:w-[calc(100%-694px)] gap-4">
          <Accordion 
            className="max-w-full w-full"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
            // ลบ defaultExpandedKeys ออกเพราะเราใช้ selectedKeys แทน
          >
            {item?.list?.map((item, index) => (
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
                    <p className={`${ibmFont} text-[18px]  ${selectedKeys.has(item?.text) ? "text-[#FB602F]" : "text-[#161616]"} font-normal leading-[150%]`}>
                      {item.text}
                    </p>
                  </div>
                }
                className="py-0"
                classNames={{
                  title: "font-semibold",
                  content: `${ibmFont} text-[16px] lg:text-[18px] text-[#161616] font-normal leading-[150%]`,
                }}
              >
                {item.detail}
              </AccordionItem>
            ))}
          </Accordion>
          <Link href={`/service/${decodeURIComponent(item?.slug?.slug?.current)}`} className="flex lg:hidden justify-center items-center w-[210px] h-[48px] border-[2px] border-[#161616] hover:bg-[#FB602F]
               transition-all duration-500 rounded-[50px] cursor-pointer
              lg:text-[18px] text-[#161616] font-semibold leading-[125%]">
                <svg className="min-w-[24px] min-h-[24px] mr-[8px] rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.9999 11.0002H9.4099L12.7099 7.71019C12.8982 7.52188 13.004 7.26649 13.004 7.00019C13.004 6.73388 12.8982 6.47849 12.7099 6.29019C12.5216 6.10188 12.2662 5.99609 11.9999 5.99609C11.7336 5.99609 11.4782 6.10188 11.2899 6.29019L6.2899 11.2902C6.19886 11.3853 6.12749 11.4974 6.0799 11.6202C5.97988 11.8636 5.97988 12.1367 6.0799 12.3802C6.12749 12.5029 6.19886 12.6151 6.2899 12.7102L11.2899 17.7102C11.3829 17.8039 11.4935 17.8783 11.6153 17.9291C11.7372 17.9798 11.8679 18.006 11.9999 18.006C12.1319 18.006 12.2626 17.9798 12.3845 17.9291C12.5063 17.8783 12.6169 17.8039 12.7099 17.7102C12.8036 17.6172 12.878 17.5066 12.9288 17.3848C12.9796 17.2629 13.0057 17.1322 13.0057 17.0002C13.0057 16.8682 12.9796 16.7375 12.9288 16.6156C12.878 16.4937 12.8036 16.3831 12.7099 16.2902L9.4099 13.0002H16.9999C17.2651 13.0002 17.5195 12.8948 17.707 12.7073C17.8945 12.5198 17.9999 12.2654 17.9999 12.0002C17.9999 11.735 17.8945 11.4806 17.707 11.2931C17.5195 11.1055 17.2651 11.0002 16.9999 11.0002Z" fill="#161616"/>
                </svg>

                  Explore
           </Link>
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
