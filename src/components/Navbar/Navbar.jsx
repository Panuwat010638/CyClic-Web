"use client"
import {Image,Link} from "@nextui-org/react";
import { usePathname } from 'next/navigation'
import { useState,useEffect } from "react"

import client from "../../../client";
import imageUrlBuilder from '@sanity/image-url'


const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function Navbar({data}) {
  const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [showSubMenuTimeout, setShowSubMenuTimeout] = useState(null);
    const [product,setProduct]= useState('')

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    useEffect(() => {
      // เพิ่ม event listener เมื่อ component ถูก mount
      window.addEventListener('scroll', handleScroll);

      // ลบ event listener เมื่อ component ถูก unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  // Function เมื่อเอาเมาส์ไปชี้ที่หัวข้อ
  const handleMouseEnter = () => {
    setShowSubMenu(true);
    clearTimeout(showSubMenuTimeout);
  };

  // Function เมื่อเอาเมาส์ออกจากทั้งหัวข้อหลักและ Submenu
  const handleMouseLeave = () => {
    setShowSubMenuTimeout(
      setTimeout(() => {
        setShowSubMenu(false);
      }, 300) // หน่วงเวลา 2 วินาทีก่อนปิด Submenu
    );
  };

  // Function เมื่อเอาเมาส์ไปชี้ที่ Submenu
  const handleSubMenuMouseEnter = () => {
    clearTimeout(showSubMenuTimeout);
  };

  // Function เมื่อเอาเมาส์ออกจาก Submenu
  const handleSubMenuMouseLeave = () => {
    handleMouseLeave(); // ใช้ function เดียวกับเมื่อเอาเมาส์ออกจากหัวข้อหลัก
  };

  return (
    <div  className={"z-[100] fixed top-0 w-screen"}>
        {/* Desktop */}
        <header className='hidden lg:block'>
            <nav className={`bg-transparent`}>
                <div className='max-w-7xl mx-auto px-6 xl:px-[40px]'>
                    <div className='flex justify-between items-center min-w-full h-[80px] lg:gap-x-[100px]'>
                
                        {/* Logo  */}
                        <Link href={`/`} className='col-span-3 flex w-[85px] justify-center items-center'>
                            <Image className=" object-contain object-center h-full z-0" 
                                classNames={{wrapper:" object-contain w-full h-full z-0"}}
                                radius="none"
                                src={urlFor(data?.logo?.image).format('webp').url()}
                                placeholder="blur"
                                alt={data?.logo?.alt}
                                width="100%" height="100%" quality={100}/>
                        </Link>
                        <div className="flex items-center h-full">
                          <button
                            type="button"
                            className="flex items-center justify-center h-full"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                          >
                            <div className='flex flex-col justify-center items-center gap-y-[12px]'>
                              
                              <svg className={`min-w-[32px] min-h-[2px] transition-all duration-500 ${mobileMenuOpen==true ? 'translate-y-[9px] rotate-45':'translate-y-0 rotate-0'}`}
                               width="32" height="2" viewBox="0 0 32 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 1H32" stroke="#FCFCFC" stroke-width="2"/>
                              </svg>
                              <svg className={`min-w-[32px] min-h-[2px] transition-all duration-500 ${mobileMenuOpen==true ? '-translate-y-[5px] -rotate-45':'translate-y-0 rotate-0'}`} width="32" height="2" viewBox="0 0 32 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 1H32" stroke="#FCFCFC" stroke-width="2"/>
                              </svg>


                             
                            </div>
                          </button>
                        </div>
                        <div className="hidden flex-col lg:w-[calc(100%-418px)] gap-y-[12px]">
                            
                            {/* Menu */}
                            <ul className="flex items-center justify-end h-full gap-x-[24px] lg:gap-x-[24px]">
                              {data?.menu?.slice(0,data?.length).map((item,index)=>(
                                <div key={index} className={`justify-center items-center cursor-pointer relative z-[100] ${item?.status== true ? "flex":"hidden"}`}>
                                
                                    <Link href={`${item?.href}`} className={` text-[14px] lg:text-[16px] cursor-pointer font-[700] leading-[125%] text-center transition-colors duration-500 px-4 py-2 ${pathname== `${item?.href}` ? "text-[#0072BB]":"text-[#545867] hover:text-[#0072BB]"}`}>
                                      {item?.title}
                                    </Link>
                                
                              </div>
                              ))}
                              
                            </ul>
                            
                        </div>
                        
                        
                    </div>
                </div>
            </nav>
        </header>
      

    </div>
  )
}
