"use client"
import {Image,Link,Input,DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import { usePathname } from 'next/navigation'
import { useState,useEffect } from "react"
import logo from "../../../public/Images/Navbar/logo.png"
import logoM from "../../../public/Images/Navbar/logoM.png"
import img03 from "../../../public/Images/HomePage/Review/img03.png"

import client from "../../../client";
import imageUrlBuilder from '@sanity/image-url'


const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

export default function NavbarBackUp() {
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
  const data ={
    menu:[
       
        {
            title:'Service',
            status:true,
            href:'#',
         
        },
        {
            title:'Products',
            status:true,
            href:'#',
        
        },
        {
          title:'Project',
          status:true,
          href:'#',
      
      },
      {
        title:'About us',
        status:true,
        href:'#',
    
    },
    {
      title:'Contact',
      status:true,
      href:'#',
  
  },
    ]
}
  return (
    <div  className={"z-[100] fixed top-0 w-screen"}>
        {/* Desktop */}
        <header className='hidden lg:block'>
            <nav className={`bg-[#f6f6f6] transition-colors duration-500 drop-shadow-md`}>
                <div className='max-w-7xl mx-auto px-6 xl:px-0'>
                    <div className='flex justify-between items-center min-w-full h-[152px] lg:gap-x-[100px]'>
                
                        {/* Logo  */}
                        <Link href={`/`} className='col-span-3 flex w-[160px] ss:w-[318px] justify-center items-center'>
                            <Image className=" object-contain object-center h-full z-0" 
                                classNames={{img:" object-contain w-full h-full z-0",wrapper:" object-contain w-full h-full z-0"}}
                                radius="none"
                                src={logo?.src}
                                placeholder="blur"
                                alt={"Estelle Solar"}
                                width="100%" height="100%" quality={100}/>
                        </Link>
                        <div className="flex flex-col lg:w-[calc(100%-418px)] gap-y-[12px]">
                            {/* Search */}
                            <div className="flex items-center justify-between">
                                <form className="flex justify-center items-center w-[calc(100%-126px)]">
                                  <Input classNames={{inputWrapper:' h-[52px]',input:"group-data-[has-value=true]:text-[#545867]",placeholder:"text-[16px] text-[#545867] font-[300]"}} 
                                  radius="full" size="md" type="text" variant={'bordered'} placeholder="เช่น แผงโซลาร์เซลล์, สายไฟ ฯลฯ" 
                                  value={product} 
                                  onChange={(e)=>{setProduct(e.target.value)}} 
                                  endContent={
                                    <button type="submit" className="flex justify-center items-center w-[41px] h-[40px] cursor-pointer">
                                        <svg className="min-w-[41px] min-h-[40px]" width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M28.4182 28.1L34 33.5M32.2 19.1C32.2 26.0588 26.5588 31.7 19.6 31.7C12.6412 31.7 7 26.0588 7 19.1C7 12.1412 12.6412 6.5 19.6 6.5C26.5588 6.5 32.2 12.1412 32.2 19.1Z" stroke="#ABB1C1" stroke-width="2" stroke-linecap="round"/>
                                      </svg>
                                    </button>
                                    

                                  }/>
                                </form>
                                {/* Cart & user */}
                                <div className="flex items-center gap-x-[12px]">
                                  <svg className={`min-w-[61px] min-h-[60px]`} width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.5 49C24.1569 49 25.5 47.6569 25.5 46C25.5 44.3431 24.1569 43 22.5 43C20.8431 43 19.5 44.3431 19.5 46C19.5 47.6569 20.8431 49 22.5 49Z" fill="#545867"/>
                                    <path d="M44.5 49C46.1569 49 47.5 47.6569 47.5 46C47.5 44.3431 46.1569 43 44.5 43C42.8431 43 41.5 44.3431 41.5 46C41.5 47.6569 42.8431 49 44.5 49Z" fill="#545867"/>
                                    <path d="M49.9668 16.6033C49.7474 16.332 49.471 16.1134 49.1576 15.9636C48.8442 15.8137 48.5018 15.7362 48.1551 15.7368H18.446L17.8476 12.3046C17.7838 11.939 17.5946 11.6078 17.3133 11.3692C17.0319 11.1307 16.6764 10.9999 16.3092 11H10.0618C9.64761 11 9.25035 11.1664 8.95745 11.4625C8.66455 11.7586 8.5 12.1602 8.5 12.5789C8.5 12.9977 8.66455 13.3993 8.95745 13.6954C9.25035 13.9915 9.64761 14.1579 10.0618 14.1579H14.9992L19.4563 39.6954C19.5201 40.061 19.7093 40.3922 19.9906 40.6308C20.272 40.8693 20.6275 41.0001 20.9947 41H45.9841C46.3984 41 46.7956 40.8336 47.0885 40.5375C47.3814 40.2414 47.546 39.8398 47.546 39.4211C47.546 39.0023 47.3814 38.6007 47.0885 38.3046C46.7956 38.0085 46.3984 37.8421 45.9841 37.8421H22.3047L21.7542 34.6842H45.3438C45.8854 34.6835 46.4102 34.4937 46.8293 34.1468C47.2484 33.7999 47.536 33.3173 47.6436 32.7806L50.4549 18.5701C50.5226 18.2262 50.514 17.8713 50.4296 17.5312C50.3452 17.1911 50.1871 16.8741 49.9668 16.6033Z" fill="#545867"/>
                                  </svg>
                                  <Dropdown placement="bottom-end">
                                    <DropdownTrigger>
                                      <Avatar
                                        isBordered
                                        as="button"
                                        className="transition-transform"
                                        color="secondary"
                                        name="Jason Hughes"
                                        size="md"
                                        src={img03.src}
                                      />
                                    </DropdownTrigger>
                                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                                      <DropdownItem key="profile" className="h-14 gap-2">
                                        <p className="font-semibold">Signed in as</p>
                                        <p className="font-semibold">zoey@example.com</p>
                                      </DropdownItem>
                                      <DropdownItem key="settings">My Settings</DropdownItem>
                                      <DropdownItem key="team_settings">Team Settings</DropdownItem>
                                      <DropdownItem key="analytics">Analytics</DropdownItem>
                                      <DropdownItem key="system">System</DropdownItem>
                                      <DropdownItem key="configurations">Configurations</DropdownItem>
                                      <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                                      <DropdownItem key="logout" color="danger">
                                        Log Out
                                      </DropdownItem>
                                    </DropdownMenu>
                                  </Dropdown>

                                </div>
                            </div>
                            {/* Menu */}
                            <ul className="flex items-center h-full gap-x-[24px] lg:gap-x-[24px]">
                              {data?.menu?.slice(0,data?.length).map((item,index)=>(
                                <div key={index} className={`justify-center items-center cursor-pointer relative z-[100] ${item?.status== true ? "flex":"hidden"}`}>
                                
                                    <Link href={`${item?.href}`} className={` text-[14px] lg:text-[16px] xl:text-[18px] cursor-pointer font-[700] leading-[125%] text-center transition-colors duration-500 uppercase px-4 py-2 ${pathname== `${item?.href}` ? "text-[#0072BB]":"text-[#545867] hover:text-[#0072BB]"}`}>
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
        {/* Mobile */}
        <header className='block lg:hidden'>
            <nav className={`bg-[#f6f6f6]`}>
                <div className="max-w-full">
                    <div className="flex flex-col justify-between items-center min-w-full h-full shadow-md">
                      {/* Nav Menu */}
                      <div className="flex justify-between items-center w-full h-[80px] px-6">
                        {/* Menu Button Mobile */}
                        <div className="flex items-center h-full">
                          <button
                            type="button"
                            className="flex items-center justify-center h-full"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                          >
                            <div className='flex flex-col justify-center items-center gap-y-[4px]'>
                              <div className={`flex w-[24px] h-[2px] bg-[#545867] rounded-[0.25px] transition-all duration-500 ${mobileMenuOpen==true ? 'translate-y-[7px] rotate-45':'translate-y-0 rotate-0'}`}></div>
                              <div className='flex justify-center items-center h-[2px] overflow-hidden'>
                                  <div className={`flex w-[12px] h-full rounded-l-[0.25px] bg-[#545867] transition-all duration-500 ${mobileMenuOpen==true ? '-translate-x-full opacity-0':'translate-x-0 opacity-100'}`}></div>
                                  <div className={`flex w-[12px] h-full rounded-r-[0.25px] bg-[#545867] transition-all duration-500 ${mobileMenuOpen==true ? 'translate-x-[110%] opacity-0':'translate-x-0 opacity-100'}`}></div>
                              </div>
                              <div className={`flex w-[24px] h-[2px] bg-[#545867] rounded-[0.25px] transition-all duration-500 ${mobileMenuOpen==true ? '-translate-y-[5px] -rotate-45':'translate-y-0 rotate-0'}`}></div>
                            </div>
                          </button>
                        </div>
                        {/* Logo  */}
                        <Link href={`/`} className='col-span-3 flex w-[130px] justify-center items-center'>
                            <Image className=" object-contain object-center h-full z-0" 
                                classNames={{img:" object-contain w-full h-full z-0",wrapper:" object-contain w-full h-full z-0"}}
                                radius="none"
                                src={logo?.src}
                                placeholder="blur"
                                alt={"Estelle Solar"}
                                width="100%" height="100%" quality={100}/>
                        </Link>
                        <svg className="min-w-[38px] min-h-[38px]" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.8359 28.5859C13.8024 28.5859 14.5859 27.8024 14.5859 26.8359C14.5859 25.8694 13.8024 25.0859 12.8359 25.0859C11.8694 25.0859 11.0859 25.8694 11.0859 26.8359C11.0859 27.8024 11.8694 28.5859 12.8359 28.5859Z" fill="#545867"/>
                        <path d="M25.6641 28.5859C26.6306 28.5859 27.4141 27.8024 27.4141 26.8359C27.4141 25.8694 26.6306 25.0859 25.6641 25.0859C24.6976 25.0859 23.9141 25.8694 23.9141 26.8359C23.9141 27.8024 24.6976 28.5859 25.6641 28.5859Z" fill="#545867"/>
                        <path d="M28.853 9.68265C28.725 9.52437 28.5638 9.39689 28.381 9.30947C28.1982 9.22204 27.9984 9.17687 27.7962 9.17722H10.4659L10.1168 7.17508C10.0796 6.96182 9.96925 6.76863 9.80513 6.62946C9.64102 6.49028 9.43364 6.41402 9.21943 6.41406H5.57514C5.3335 6.41406 5.10177 6.5111 4.93091 6.68383C4.76005 6.85656 4.66406 7.09084 4.66406 7.33512C4.66406 7.57939 4.76005 7.81367 4.93091 7.9864C5.10177 8.15913 5.3335 8.25617 5.57514 8.25617H8.45526L11.0552 23.153C11.0925 23.3663 11.2028 23.5595 11.3669 23.6987C11.5311 23.8378 11.7384 23.9141 11.9526 23.9141H26.5298C26.7714 23.9141 27.0032 23.817 27.174 23.6443C27.3449 23.4716 27.4409 23.2373 27.4409 22.993C27.4409 22.7487 27.3449 22.5145 27.174 22.3417C27.0032 22.169 26.7714 22.072 26.5298 22.072H12.7168L12.3957 20.2299H26.1563C26.4722 20.2294 26.7783 20.1187 27.0228 19.9163C27.2673 19.714 27.4351 19.4325 27.4978 19.1194L29.1377 10.8299C29.1773 10.6293 29.1722 10.4223 29.123 10.2239C29.0737 10.0255 28.9815 9.84065 28.853 9.68265Z" fill="#545867"/>
                        </svg>

                      </div>

                      {/* Menu */}
                      <div className={`flex flex-col w-full shadow-md h-dvh bg-[#ffffff] pb-[42px] fixed top-[78px] z-[101] transition-all duration-500 transform ${mobileMenuOpen==true ? 'translate-x-0':'-translate-x-full'}`}>
                      <form className="flex justify-center items-center w-full">
                        <Input classNames={{inputWrapper:' h-[52px] px-6 focus:ring-0 group-data-[focus=true]:border-[#545867]',input:"group-data-[has-value=true]:text-[#545867]",placeholder:"text-[16px] text-[#545867] font-[300]"}} 
                        radius="none" size="md" type="text" variant={'bordered'} placeholder="เช่น แผงโซลาร์เซลล์, สายไฟ ฯลฯ" 
                        value={product} 
                        onChange={(e)=>{setProduct(e.target.value)}} 
                        endContent={
                          <button type="submit" className="flex justify-center items-center w-[41px] h-[40px] cursor-pointer ring-0">
                              <svg className="min-w-[41px] min-h-[40px]" width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M28.4182 28.1L34 33.5M32.2 19.1C32.2 26.0588 26.5588 31.7 19.6 31.7C12.6412 31.7 7 26.0588 7 19.1C7 12.1412 12.6412 6.5 19.6 6.5C26.5588 6.5 32.2 12.1412 32.2 19.1Z" stroke="#ABB1C1" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                          </button>
                          
                        }/>
                      </form>
                      <ul className="flex flex-col items-center gap-y-[24px] pt-[36px] px-6">
                              {data?.menu?.slice(0,data?.length).map((item,index)=>(
                                <div key={index} className={`items-center cursor-pointer relative z-[100] ${item?.status== true ? "flex":"hidden"}`}>
                                
                                    <Link href={`${item?.href}`} className={` text-[14px] lg:text-[16px] xl:text-[18px] cursor-pointer font-[700] leading-[125%] text-center transition-colors duration-500 uppercase px-4 py-2 ${pathname== `${item?.href}` ? "text-[#0072BB]":"text-[#545867] hover:text-[#0072BB]"}`}>
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
