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
          <Link href={`/service`} className="flex justify-center items-center px-6 h-[48px] border-[2px] border-[#161616] hover:bg-[#FB602F]
               transition-all duration-500 rounded-[50px] cursor-pointer
              lg:text-[18px] text-[#161616] font-semibold leading-[125%]">
            <svg className="min-w-[24px] min-h-[24px] mr-[8px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.9999 11.0002H9.4099L12.7099 7.71019C12.8982 7.52188 13.004 7.26649 13.004 7.00019C13.004 6.73388 12.8982 6.47849 12.7099 6.29019C12.5216 6.10188 12.2662 5.99609 11.9999 5.99609C11.7336 5.99609 11.4782 6.10188 11.2899 6.29019L6.2899 11.2902C6.19886 11.3853 6.12749 11.4974 6.0799 11.6202C5.97988 11.8636 5.97988 12.1367 6.0799 12.3802C6.12749 12.5029 6.19886 12.6151 6.2899 12.7102L11.2899 17.7102C11.3829 17.8039 11.4935 17.8783 11.6153 17.9291C11.7372 17.9798 11.8679 18.006 11.9999 18.006C12.1319 18.006 12.2626 17.9798 12.3845 17.9291C12.5063 17.8783 12.6169 17.8039 12.7099 17.7102C12.8036 17.6172 12.878 17.5066 12.9288 17.3848C12.9796 17.2629 13.0057 17.1322 13.0057 17.0002C13.0057 16.8682 12.9796 16.7375 12.9288 16.6156C12.878 16.4937 12.8036 16.3831 12.7099 16.2902L9.4099 13.0002H16.9999C17.2651 13.0002 17.5195 12.8948 17.707 12.7073C17.8945 12.5198 17.9999 12.2654 17.9999 12.0002C17.9999 11.735 17.8945 11.4806 17.707 11.2931C17.5195 11.1055 17.2651 11.0002 16.9999 11.0002Z" fill="#161616" />
            </svg>

            Back to Our Service
          </Link>
          <svg className="min-w-full" width="1280" height="2" viewBox="0 0 1280 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1H1280" stroke="#939393" />
          </svg>

        </div>
      </div>
    </section>
  )
}

function ServiceItem({ item, index, on }) {
  const [svgString, setSvgString] = useState('');

  useEffect(() => {
    if (item?.svg) {
      const modifiedSvg = item.svg
        .replace('<svg', '<svg class="animate-svg"')
        .replace(/<path/g, '<path class="path-element"')
        .replace(/<path([^>]*?)fill="([^"]*)"([^>]*?)>/g, (match, before, fill, after) => {
          if (fill === 'none' || fill === 'white') {
            return `<path${before}
              fill="${fill}"
              stroke="${fill}"
              stroke-width="1.5"
              stroke-linecap="round"
              class="path-element stroke-path"${after}>`;
          }
          return `<path${before}
            fill="${fill}"
            class="path-element fill-path"${after}>`;
        })
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
          <h2 className="text-[20px] sm:text-[24px] text-[#161616] font-bold leading-[125%] whitespace-pre-line">
            {item?.text}
          </h2>
          <p className={`${ibm.className} text-[18px] text-[#161616] leading-[150%] font-normal text-start`}>
            {item?.detail}
          </p>
        </div>



      </motion.div>

    </motion.article>
  );
}
