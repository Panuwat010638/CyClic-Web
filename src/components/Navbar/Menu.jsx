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
        <div className="flex flex-col justify-between items-center lg;items-end max-w-7xl w-full mx-auto px-6 xl:px-0">
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
          <div className="flex flex-col lg:flex-row w-full lg:w-[796px] h-[calc(100%-80px)] lg:justify-between items-center lg:items-end gap-[54px] lg:pb-[150px] gap-y-[48px]">
            <div className="menu-links pt-[48px] sm:pb-0">
              {data?.menu.map((item,index) => {
                return (
                  <div className="group menu-link-item pb-[12px] sm:pb-0" key={item?.title+index}>
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
            <div className="menu-info">
              <div className="menu-info-col">
                <a href="#">X &#8599;</a>
                <a href="#">Instagram &#8599;</a>
                <a href="#">LinkedIn &#8599;</a>
                <a href="#">Behance &#8599;</a>
                <a href="#">Dribble &#8599;</a>
              </div>
              <div className="menu-info-col">
                <p>info@nextjsxgsap.com</p>
                <p>1234567890</p>
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
