"use client";
import Link from "next/link";
import { Image } from "@nextui-org/react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import client from "../../../../client";
import imageUrlBuilder from "@sanity/image-url";
import { IBM_Plex_Sans_Thai } from "next/font/google";
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}
const ibm = IBM_Plex_Sans_Thai({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function ServiceSlugPageSec03({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateActiveIndex = (newIndex) => {
      if (newIndex < 0) {
          newIndex = React.Children.count(children) - 1;
      } else if (newIndex > 2) {
          newIndex = 0;
      }
      setActiveIndex(newIndex);
  }
  useEffect(() => {
    const interval = setInterval(() => {

      updateActiveIndex(activeIndex + 1);
    }, 5000);

    return () => {
      // เมื่อ component ถูก unmount ให้ล้าง interval
      clearInterval(interval);
    };
  });
  return (
    <section className=" bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto px-6 xl:px-0 pb-[64px] lg:pb-[100px] pt-[64px]">
        <div className="flex flex-col justify-center items-center w-full h-full gap-y-[32px] lg:gap-y-[64px]">
          {/* Header */}
          <div className="flex justify-center lg:justify-between items-center w-full sm:w-[592px] lg:w-full h-full lg:gap-x-6">
            {/* Text */}
            <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start gap-y-[16px]">
              <div className="flex ">
                <div className="flex justify-center items-center rounded-[4px] bg-[#FB602F] py-[4px] px-4">
                  <h3 className="text-[20px] lg:text-[24px] text-[#fcfcfc] font-medium leading-[125%] uppercase text-center">
                    what we Provide
                  </h3>
                </div>
              </div>

              <h2 className="text-[40px] lg:text-[60px] text-[#161616] font-extrabold leading-[125%] uppercase text-center lg:text-start whitespace-pre-line">
                our services
              </h2>
            </div>
            {/* Button */}
            <div className="group hidden lg:flex items-center gap-x-[14px] pb-[20px] border-b-[1px] border-[#939393]">
              <Link
                className="text-[20px] lg:text-[24px] text-[#161616] font-semibold leading-[130%] uppercase "
                href={`/service`}
              >
                Explore our services
              </Link>
              <svg
                className="min-w-[12px] min-h-[13px] transition-all duration-500 group-hover:translate-x-1"
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.92 6.12019C11.8724 5.99743 11.801 5.88529 11.71 5.79019L6.71 0.790185C6.61676 0.696947 6.50607 0.622986 6.38425 0.572526C6.26243 0.522066 6.13186 0.496094 6 0.496094C5.7337 0.496094 5.4783 0.601882 5.29 0.790185C5.19676 0.883424 5.1228 0.994114 5.07234 1.11594C5.02188 1.23776 4.99591 1.36833 4.99591 1.50019C4.99591 1.76649 5.1017 2.02188 5.29 2.21019L8.59 5.50019H1C0.734784 5.50019 0.48043 5.60554 0.292893 5.79308C0.105357 5.98062 0 6.23497 0 6.50019C0 6.7654 0.105357 7.01976 0.292893 7.20729C0.48043 7.39483 0.734784 7.50019 1 7.50019H8.59L5.29 10.7902C5.19627 10.8831 5.12188 10.9937 5.07111 11.1156C5.02034 11.2375 4.9942 11.3682 4.9942 11.5002C4.9942 11.6322 5.02034 11.7629 5.07111 11.8848C5.12188 12.0066 5.19627 12.1172 5.29 12.2102C5.38296 12.3039 5.49356 12.3783 5.61542 12.4291C5.73728 12.4798 5.86799 12.506 6 12.506C6.13201 12.506 6.26272 12.4798 6.38458 12.4291C6.50644 12.3783 6.61704 12.3039 6.71 12.2102L11.71 7.21019C11.801 7.11508 11.8724 7.00294 11.92 6.88019C12.02 6.63672 12.02 6.36365 11.92 6.12019Z"
                  fill="#FB602F"
                />
              </svg>
            </div>
          </div>
          <div className="hidden lg:grid lg:grid-cols-3 w-full gap-6">
            {data?.listimage?.slice(0,3).map((item, index) => (
              <div
                className="flex h-[200px] sm:h-[230px] min-w-full lg:min-w-fit w-full rounded-[16px]"
                key={index}
              >
                <Image
                  quality={100}
                  loading="lazy"
                  className=" object-cover object-center w-full h-full rounded-[16px]"
                  classNames={{
                    wrapper: "object-cover w-full h-full rounded-[16px]",
                  }}
                  radius="none"
                  src={urlFor(item?.image).format("webp").url()}
                  placeholder="blur"
                  alt={item?.alt}
                  width="100%"
                  height="100%"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center lg:hidden w-full sm:w-[592px] overflow-hidden" >
            {data?.listimage?.slice(0,3).map((item, index) => (
              <div style={{ transform: `translateX(-${activeIndex * 100}%)`}}
                className="flex justify-center items-center h-[200px] sm:h-[230px] min-w-full rounded-[16px] transition-all duration-500"
                key={index}
              >
                <Image
                  quality={100}
                  loading="lazy"
                  className=" object-cover object-center w-full h-full min-w-full rounded-[16px]"
                  classNames={{
                    wrapper: "object-cover w-full h-full rounded-[16px]",
                  }}
                  radius="none"
                  src={urlFor(item?.image).format("webp").url()}
                  placeholder="blur"
                  alt={item?.alt}
                  width="100%"
                  height="100%"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center lg:hidden w-full sm:w-[592px] gap-3 mb-6" >
            {data?.listimage?.slice(0,3).map((item, index) => (
              <div onClick={()=>updateActiveIndex(index)}
                className={`flex h-[8px] w-[8px] rounded-full ${activeIndex==index ? "bg-[#FB602F]":"bg-[#939393]"}`}
                key={index}
              >
               
              </div>
            ))}
          </div>
          <ul className="grid grid-cols-1 lg:grid-cols-2 w-full sm:w-[592px] lg:w-full gap-[32px] lg:gap-[48px]">
            {data?.list?.map((item, index) => (
              <ServiceItem
                key={index}
                item={item}
                index={index}
                on={index == data?.list?.length - 1 ? false : true}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ServiceItem({ item, index, on }) {
  const [svgString, setSvgString] = useState("");

  useEffect(() => {
    if (item?.svg) {
      const modifiedSvg = item.svg
        .replace("<svg", '<svg class="animate-svg"')
        .replace(/<path/g, '<path class="path-element"')
        .replace(
          /<path([^>]*?)fill="([^"]*)"([^>]*?)>/g,
          (match, before, fill, after) => {
            if (fill === "none" || fill === "white") {
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
          }
        )
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
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <motion.article
      ref={ref}
      className="flex flex-col w-full gap-y-[16px] sm:gap-y-[24px]"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div
        variants={contentVariants}
        className="flex flex-col w-full gap-[16px]"
      >
        <div className="flex justify-center lg:w-[64px]">
          <motion.div
            dangerouslySetInnerHTML={{ __html: svgString }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="svg-container"
          />
        </div>
        <div className="flex flex-col items-start w-full gap-y-[12px]">
          <h2 className="text-[20px] sm:text-[24px] text-[#161616] font-bold leading-[125%] whitespace-pre-line">
            {item?.text}
          </h2>
          <p
            className={`${ibm.className} text-[18px] text-[#161616] leading-[150%] font-normal text-start`}
          >
            {item?.detail}
          </p>
        </div>
      </motion.div>
    </motion.article>
  );
}
