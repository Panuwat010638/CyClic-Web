"use client";
import {Image,Link} from "@nextui-org/react";
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from "react";
import "./menu.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import client from "../../../client";
import imageUrlBuilder from '@sanity/image-url'


const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}


export default function Menu({data}) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname =usePathname();
  
  useEffect(() => {
    // เพิ่ม event listener เมื่อ component ถูก mount
    window.addEventListener('scroll', handleScroll);

    // ลบ event listener เมื่อ component ถูก unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  /*GSAP*/
  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <nav className={`${scrollPosition > 40 ? "bg-[#252A39]":pathname == '/'? "bg-transparent":"bg-[#252A39]"} w-screen fixed top-0 z-[50]`} ref={container}>
      <div className='max-w-7xl mx-auto px-6 xl:px-0'>
      <div className='flex justify-between bg-transparent  items-center min-w-full w-full h-[80px] lg:gap-x-[100px]'>
          <Link href={`/`} className='col-span-3 flex w-[81px] justify-center items-center relative '>
            <Image className=" object-contain object-center h-full z-0" 
                classNames={{wrapper:" object-contain w-full h-full z-0"}}
                radius="none"
                src={urlFor(data?.logo?.image).format('webp').url()}
                placeholder="blur"
                alt={data?.logo?.alt}
                width="100%" height="100%" quality={100}/>
          </Link>
        <div className="flex items-center gap-x-[24px] lg:gap-x-[40px]">
          <Link href={data?.button?.link} className="hidden sm:flex justify-center items-center px-[24px] lg:px-[32px] py-[8px] lg:py-[13px] border-[2px] border-[#fcfcfc] hover:bg-[#FB602F]
           transition-all duration-500 rounded-[50px]
          lg:text-[18px] text-[#fcfcfc] font-semibold leading-[125%] uppercase">
            {data?.button?.title}
          </Link>
          <button
          type="button"
          className="flex items-center justify-center h-full relative"
          onClick={toggleMenu}
            >
              <div className='flex flex-col justify-center items-center gap-y-[12px]'>

                <svg className={`min-w-[32px] min-h-[2px] transition-all duration-500 ${isMenuOpen==true ? 'translate-y-[9px] rotate-45':'translate-y-0 rotate-0'}`}
                 width="32" height="2" viewBox="0 0 32 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1H32" stroke="#FCFCFC" stroke-width="2"/>
                </svg>
                <svg className={`min-w-[32px] min-h-[2px] transition-all duration-500 ${isMenuOpen==true ? '-translate-y-[5px] -rotate-45':'translate-y-0 rotate-0'}`} width="32" height="2" viewBox="0 0 32 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1H32" stroke="#FCFCFC" stroke-width="2"/>
                </svg>



              </div>
            </button>
        </div>
        


        <div className="menu-overlay flex w-full fixed top-0">
          <div className="flex flex-col justify-between items-center  max-w-7xl w-full mx-auto px-6 xl:px-0">
            <div className="flex h-[80px] w-full justify-between">
              <Link href={`/`} className='flex w-[81px] justify-center items-center relative'>
                <Image className=" object-contain object-center h-full z-0" 
                    classNames={{wrapper:" object-contain w-full h-full z-0"}}
                    radius="none"
                    src={urlFor(data?.logo?.image).format('webp').url()}
                    placeholder="blur"
                    alt={data?.logo?.alt}
                    width="100%" height="100%" quality={100}/>
              </Link>

              <div className="flex items-center gap-x-[24px] lg:gap-x-[40px]">
              <Link href={data?.button?.link} className="hidden sm:flex justify-center items-center px-[24px] lg:px-[32px] py-[8px] lg:py-[13px] border-[2px] border-[#fcfcfc] hover:bg-[#FB602F]
               transition-all duration-500 rounded-[50px] uppercase
              lg:text-[18px] text-[#fcfcfc] font-semibold leading-[125%]">
                {data?.button?.title}
              </Link>
              <button
              type="button"
              className="flex items-center justify-center h-full relative"
              onClick={toggleMenu}
                >
                  <div className='flex flex-col justify-center items-center gap-y-[12px]'>

                    <svg className={`min-w-[32px] min-h-[2px] transition-all duration-500 ${isMenuOpen==true ? 'translate-y-[9px] rotate-45':'translate-y-0 rotate-0'}`}
                     width="32" height="2" viewBox="0 0 32 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 1H32" stroke="#FCFCFC" stroke-width="2"/>
                    </svg>
                    <svg className={`min-w-[32px] min-h-[2px] transition-all duration-500 ${isMenuOpen==true ? '-translate-y-[5px] -rotate-45':'translate-y-0 rotate-0'}`} width="32" height="2" viewBox="0 0 32 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 1H32" stroke="#FCFCFC" stroke-width="2"/>
                    </svg>



                  </div>
                </button>
                </div>
          </div>
          <div className="flex flex-col lg:flex-row w-full lg:w-[796px] h-full justify-between items-center lg:items-end gap-[54px] pb-[56px] lg:pb-[150px] gap-y-[48px]">
            <div className="menu-links pt-[48px] sm:pb-0">
              {data?.menu.map((item,index) => {
                return (
                  <div className="group menu-link-item pb-[12px] lg:pb-[18px] sm:pb-0" key={item?.title+index}>
                    <div className="menu-link-item-holder flex gap-x-6 items-center uppercase" onClick={toggleMenu}>
                      <div className={`${pathname == item?.href ? "bg-[#FB602F]":"bg-[#252A39] group-hover:bg-[#FB602F]"} transition-all duration-500 min-w-[23px] min-h-[23px] rounded-full`}/>
                      <Link href={item?.href} className={`${pathname == item?.href ? "text-[#ffffff] font-semibold italic uppercase":"text-[#BEBEBE] group-hover:text-[#ffffff] font-light uppercase"} transform transition-all duration-500 text-[24px] sm:text-[48px] leading-[125%]`}>
                        {item?.title}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col justify-end gap-y-[36px] lg:gap-y-[80px]">
              <div className="flex flex-col justify-end gap-y-[16px]">
                <a href={data?.social?.company} target="_blank" className="text-[20px] text-[#FCFCFC] font-medium leading-[125%] uppercase">
                  COmpany Profile
                </a>
                <a href={data?.social?.catalog} target="_blank" className="text-[20px] text-[#FCFCFC] font-medium leading-[125%] uppercase">
                  catalog
                </a>
              </div>
              <div className="flex flex-col justify-end gap-y-[16px]">
                {/* Facebook */}
                <div className="group flex  justify-between ss:justify-start items-center gap-x-[14px] w-full ss:w-auto ">
                    <Link className="text-[20px] text-[#fcfcfc] font-extralight leading-[130%] uppercase cursor-pointer"
                    href={data?.social?.facebook} >
                      Facebook
                    </Link>
                    <svg className="min-w-[12px] min-h-[13px] transition-all duration-500 group-hover:translate-x-1" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.92 6.12019C11.8724 5.99743 11.801 5.88529 11.71 5.79019L6.71 0.790185C6.61676 0.696947 6.50607 0.622986 6.38425 0.572526C6.26243 0.522066 6.13186 0.496094 6 0.496094C5.7337 0.496094 5.4783 0.601882 5.29 0.790185C5.19676 0.883424 5.1228 0.994114 5.07234 1.11594C5.02188 1.23776 4.99591 1.36833 4.99591 1.50019C4.99591 1.76649 5.1017 2.02188 5.29 2.21019L8.59 5.50019H1C0.734784 5.50019 0.48043 5.60554 0.292893 5.79308C0.105357 5.98062 0 6.23497 0 6.50019C0 6.7654 0.105357 7.01976 0.292893 7.20729C0.48043 7.39483 0.734784 7.50019 1 7.50019H8.59L5.29 10.7902C5.19627 10.8831 5.12188 10.9937 5.07111 11.1156C5.02034 11.2375 4.9942 11.3682 4.9942 11.5002C4.9942 11.6322 5.02034 11.7629 5.07111 11.8848C5.12188 12.0066 5.19627 12.1172 5.29 12.2102C5.38296 12.3039 5.49356 12.3783 5.61542 12.4291C5.73728 12.4798 5.86799 12.506 6 12.506C6.13201 12.506 6.26272 12.4798 6.38458 12.4291C6.50644 12.3783 6.61704 12.3039 6.71 12.2102L11.71 7.21019C11.801 7.11508 11.8724 7.00294 11.92 6.88019C12.02 6.63672 12.02 6.36365 11.92 6.12019Z" fill="#FB602F"/>
                    </svg>
                </div>
                {/* Facebook */}
                <div className="group flex justify-between ss:justify-start items-center gap-x-[14px] w-full ss:w-auto ">
                    <Link className="text-[20px] text-[#fcfcfc] font-extralight leading-[130%] uppercase cursor-pointer"
                    href={data?.social?.line} >
                      Line
                    </Link>
                    <svg className="min-w-[12px] min-h-[13px] transition-all duration-500 group-hover:translate-x-1" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.92 6.12019C11.8724 5.99743 11.801 5.88529 11.71 5.79019L6.71 0.790185C6.61676 0.696947 6.50607 0.622986 6.38425 0.572526C6.26243 0.522066 6.13186 0.496094 6 0.496094C5.7337 0.496094 5.4783 0.601882 5.29 0.790185C5.19676 0.883424 5.1228 0.994114 5.07234 1.11594C5.02188 1.23776 4.99591 1.36833 4.99591 1.50019C4.99591 1.76649 5.1017 2.02188 5.29 2.21019L8.59 5.50019H1C0.734784 5.50019 0.48043 5.60554 0.292893 5.79308C0.105357 5.98062 0 6.23497 0 6.50019C0 6.7654 0.105357 7.01976 0.292893 7.20729C0.48043 7.39483 0.734784 7.50019 1 7.50019H8.59L5.29 10.7902C5.19627 10.8831 5.12188 10.9937 5.07111 11.1156C5.02034 11.2375 4.9942 11.3682 4.9942 11.5002C4.9942 11.6322 5.02034 11.7629 5.07111 11.8848C5.12188 12.0066 5.19627 12.1172 5.29 12.2102C5.38296 12.3039 5.49356 12.3783 5.61542 12.4291C5.73728 12.4798 5.86799 12.506 6 12.506C6.13201 12.506 6.26272 12.4798 6.38458 12.4291C6.50644 12.3783 6.61704 12.3039 6.71 12.2102L11.71 7.21019C11.801 7.11508 11.8724 7.00294 11.92 6.88019C12.02 6.63672 12.02 6.36365 11.92 6.12019Z" fill="#FB602F"/>
                    </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        


        </div>
        </div>
      </div>
    </nav>
  )
}
