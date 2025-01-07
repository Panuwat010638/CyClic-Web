'use client'
import Link from "next/link"
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import client from "../../../../client";
import imageUrlBuilder from '@sanity/image-url'
import { IBM_Plex_Sans_Thai } from "next/font/google";
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

export default function ServiceSlugPageSec03({ data }) {
  return (
    <section className=' bg-[#fcfcfc]'>
      <div className='max-w-7xl mx-auto px-6 xl:px-0 pb-[64px] lg:pb-[100px]'>
        <div className='flex flex-col justify-center items-center w-full h-full gap-y-[32px] lg:gap-y-[48px]'>

          <ul className="grid grid-cols-1 lg:grid-cols-2 w-full gap-[32px] lg:gap-[48px]">
            {data?.list?.map((item, index) => (

              <ServiceItem key={index} item={item} index={index} on={index == data?.list?.length - 1 ? false : true} />

            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function ServiceItem({ item, index, on }) {
  const [svgString, setSvgString] = useState('');


  useEffect(() => {
    if (item?.svg) {
      // แปลง SVG ให้เป็น animated version
      const modifiedSvg = item.svg
        .replace('<svg', '<svg class="animate-svg"')
        // จัดการกับ path ทั้งหมด
        .replace(/<path([^>]*?)fill="([^"]*)"([^>]*?)>/g, (match, before, fill, after) => {
          if (fill === 'none' || fill === 'white') {
            return match;
          }
          return `<path${before}fill="none" stroke="${fill}" stroke-width="1.5" stroke-linecap="round" class="animated-path"${after}>`;
        })
        // เพิ่ม class ให้กับ g element
        .replace(/<g/g, '<g class="svg-group"');
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
      <motion.div variants={contentVariants} className='flex flex-col w-full gap-[16px]'>
        <div className="flex justify-center lg:w-[64px]">
          <motion.div
            dangerouslySetInnerHTML={{ __html: svgString }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="svg-container"
          />
        </div>
        <div className='flex flex-col items-start w-full gap-y-[12px]'>
          <b className="text-[20px] sm:text-[24px] text-[#161616] font-bold leading-[125%] whitespace-pre-line">
            {item?.text}
          </b>
          <p className={`${ibm.className} text-[18px] text-[#161616] leading-[150%] font-normal text-start`}>
            {item?.detail}
          </p>
        </div>



      </motion.div>

    </motion.article>
  );
}
